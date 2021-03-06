<template>
  <v-card 
    class="reg-card" 
    :id='id'
    :dark='dark'
    :color="dark ? `primary` : `white`"
  >
    <v-card-title class="text-center d-block">
      <strong>
        {{ title }}
      </strong>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit()" ref='form'>
        <v-text-field
          label="Your Car Registration No."
          outlined
          hide-details
          class="mb-2"
          v-model="reg"
          :rules='[
            v => v.length >= 1 || `Enter your car reg no`
          ]'
          :dark='dark'
        ></v-text-field>
        <small v-if="error" class="red--text">
          {{ errorMessage }}
          please try using
          <NuxtLink to="/">Manual Search</NuxtLink>
        </small>
        <v-btn 
          :color="dark ? `white` : `secondary`" 
          :class='dark ? `primary--text` : ``'
          block 
          large 
          type="submit" 
          :loading="isLoading"
          :x-large='!isMinDevice'
        >
          {{btnText}}
        </v-btn>
        <client-only>
          <index-active-car> </index-active-car>
        </client-only>
      </v-form>
    </v-card-text>
    <template v-if='hasCallBtn'>
      <v-card-actions class="px-4 d-block">
        <span class="d-block call-us-txt text-center">
          or call us to book
          <v-btn
            text
            :color="dark ? `white` : `primary`"
            class="py-0 px-0"
            style="height: auto"
            href="tel:01189876300"
          >
            <v-icon dark class="mr-1"> mdi-cellphone-basic </v-icon>
            <span class="text-large"> 01189 876300 </span>
          </v-btn>
        </span>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
import { fbqLead } from '~/api/fbq';
import { getVehicleDetails } from '~/api/vehicle';
import IndexActiveCar from '~/pages/__components/index-active-car.vue';
import { mapState } from 'vuex';

export default {
  components: {
    IndexActiveCar,
  },
  props: {
    id: String,
    title: {
      default: 'Book with us now',
      type: String
    },
    dark: Boolean,
    btnText: {
      default: 'Get Instant Quote',
      type: String,
    },
    hasCallBtn: {
      default: true,
      type: Boolean,
    },
  },
  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),
  computed: {
    ...mapState('settings', ['redirect']),
  },
  methods: {
    handleSubmit() {
      if (!this.$refs.form.validate()) return;
      
      this.error = false;
      this.isLoading = true;
      const { redirect } = this;

      getVehicleDetails(this.reg)
        .then(res => {
          if (res.no_reg_found) {
            this.$router.push('/search/vehicle?no_reg_found=true&reg_no='+this.reg)
          }

          if (res.status && res.status == false) {
            this.error = true;
            this.errorMessage = res.message;
          } else {
            fbqLead(
              this.$fb, 
              this.reg, 
              res.vehicle.Mfr +' '+ res.vehicle.Range + `(${this.reg})`
            );

            this.$store.commit('booking/REGISTER_VEHICLE', {
              vehicle: res.vehicle,
              modelId: res.vehicle.Model_ID
            });

            if (redirect.referrer == 'car-reg') {
              this.$router.push(redirect.to);
              this.$store.commit('settings/RESET_REDIRECT');
            } else {
              this.$router.push('/booking/create/services');
            }
          }
        }).finally(() => this.isLoading = false);
    }
  }
}
</script>

<style lang="scss" scoped>
.reg-card {
  width: 90%;
  margin: auto;
  max-width: 480px;
  @media (min-width: 768px) {
    padding: 20px 30px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>