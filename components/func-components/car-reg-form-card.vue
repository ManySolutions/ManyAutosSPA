<template>
  <v-card class="reg-card">
    <v-card-title class="text-center d-block">
      <strong>Book with us now</strong>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleSubmit()">
        <v-text-field
          label="Your Car Registration No."
          outlined
          hide-details
          class="mb-2"
          v-model="reg"
        ></v-text-field>
        <small v-if="error" class="red--text">
          {{ errorMessage }}
          please try using
          <NuxtLink to="/">Manual Search</NuxtLink>
        </small>
        <v-btn color="secondary" block large type="submit" :loading="isLoading"
          :x-large='!isMinDevice'
        >
          Get instant quote
        </v-btn>
        <client-only>
          <index-active-car> </index-active-car>
        </client-only>
      </v-form>
    </v-card-text>
    <v-card-actions class="px-4 d-block">
      <span class="d-block call-us-txt text-center">
        or call us to book
        <v-btn
          text
          color="primary"
          class="py-0 px-0"
          style="height: auto"
          href="tel:01189876300"
        >
          <v-icon dark class="mr-1"> mdi-cellphone-basic </v-icon>
          <span class="text-large"> 01189 876300 </span>
        </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { fbqLead } from '~/api/fbq';
import { getVehicleDetails } from '~/api/vehicle';
import IndexActiveCar from '~/pages/__components/index-active-car.vue';

export default {
  components: {
    IndexActiveCar,
  }, 
  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),

  methods: {
    handleSubmit() {
      this.error = false;
      this.isLoading = true;

      getVehicleDetails(this.reg)
        .then(res => {
          if (res.status && res.status == false) {
            this.error = true;
            this.errorMessage = res.message;
          } else {
            fbqLead(
              this.$fb, 
              this.reg, 
              res.vehicle.Mfr +' '+ res.vehicle.Range
            );

            this.$store.commit('booking/REGISTER_VEHICLE', {
              vehicle: res.vehicle,
              modelId: res.vehicle.Model_ID
            });

            this.$router.push('/booking/create/services');
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