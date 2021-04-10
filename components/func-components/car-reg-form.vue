<template>
  <div 
    class="reg-form-sec w-100 overlay--darker"
    :class='clsx'
    :style='getBgImage'
  >
    <v-form @submit.prevent="handleSubmit()" ref='form'>
      <v-container
        class='z-index-1'
      >
        <v-row>
          <v-col cols=12 v-if='title'>
            <h4 
              class='heading__title text-h4 reg-heading' 
              v-html='title'
              :class='hasBgImage ? "text-white" : ""'
            ></h4>
          </v-col>
          <v-col :cols='fullwidth ? 12 : 7'>
            <v-text-field
              :label="large?null:`Your Car Reg`"
              :placeholder="large?`YOUR CAR REG HERE`:null"
              outlined
              hide-details
              v-model='reg'
              dense
              background-color="white"
              class='font-weight-600'
              :class='large?`input-is-large`:``'
              :height='large?`54px`:`44px`'
              :rules='[
                v => v.length >= 1 || `Enter your car reg no`
              ]'
            ></v-text-field>
            <small v-if='error' class='red--text'>
              {{ errorMessage }}
              please try using 
              <NuxtLink to="/">Manual Search</NuxtLink>
            </small>
          </v-col>
          <v-col :cols='fullwidth ? 12 : 5'>
            <v-btn
              :color='hasBgImage ? "secondary" : "secondary"'
              block
              large
              :x-large='large'
              type='submit'
              :loading='isLoading'
            >
              {{ isMinDevice ? 'Fix' : 'Get instant quote' }}
            </v-btn>
          </v-col>
          <v-col
            v-if='hasActiveCar' 
            cols=7
            class='text-center py-0'
          >
            <client-only>
              <index-active-car
                :text-btn='false'
                :dense='false'
                :block='false'
                small
              >
              </index-active-car>
            </client-only>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { fbqLead } from '~/api/fbq';
import { getVehicleDetails } from '~/api/vehicle';
import indexActiveCar from "~/pages/__components/index-active-car.vue";
import { mapState } from 'vuex';

export default {
  components: { indexActiveCar }, 

  props: {
    hasActiveCar: Boolean,
    hasBgImage: Boolean,
    hasNoBg: Boolean,
    large: Boolean,
    fullwidth: Boolean,
    title: String,
    hasNoRedirect: Boolean,
  },

  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),

  computed: {
    ...mapState('settings', ['redirect']),
    // getBgImage() {
    //   return this.hasBgImage
    //     ? `background-image: url(${this.assets("customer-v2/home-cover-bg.png")})`
    //     : ''
    // },
    bgCls() {
      if (this.hasNoBg) return '';

      return this.hasBgImage
        ? `reg-bg-image`
        : `reg-bg-simple`
    },
    clsx() {
      let clsx = this.bgCls;

      if (this.large) clsx += ' is-large-form'


      return clsx;
    }
  },

  methods: {
    handleSubmit() {
      if (!this.$refs.form.validate()) return;
      
      this.error = false;
      this.isLoading = true;
      const { redirect, hasNoRedirect } = this;

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
              res.vehicle.Mfr +' '+ res.vehicle.Range
            );

            this.$store.commit('booking/REGISTER_VEHICLE', {
              vehicle: res.vehicle,
              modelId: res.vehicle.Model_ID
            });

            this.$emit('success', res);

            if (!hasNoRedirect) {
              if (redirect.referrer == 'car-reg') {
                this.$router.push(redirect.to);
              } else {
                this.$router.push('/booking/create/services');
              }
            }
          }
        }).finally(() => this.isLoading = false);
    }
  }
  
}
</script>

<style lang="scss" scoped>
.reg-form-sec {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  
  @media (min-width: 600px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  form {
    max-width: 500px;
    margin: 0px auto;
  }
  &.is-large-form form {
    max-width: 670px;
  }

  &.reg-bg-image {
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2a2b2d;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(51,51,51,.63);
    }
  }
  &.reg-bg-simple {
    background: #f5f5f5;
  }

  .z-index-1 {
    z-index: 1;
    position: relative;
  }
}
.input-is-large ::v-deep input {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
}
h4.heading__title.reg-heading {
    text-align: center;
    font-family: 'Open Sans', sans-serif !important;
}
</style>