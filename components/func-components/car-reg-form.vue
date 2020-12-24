<template>
  <div 
    class="reg-form-sec w-100 overlay--darker"
    :class='bgCls'
    :style='getBgImage'
  >
    <v-form @submit.prevent="handleSubmit()">
      <v-container
        class='z-index-1'
      >
        <v-row>
          <v-col cols=7>
            <v-text-field
              label="Your car reg"
              outlined
              hide-details
              v-model='reg'
              height='44px'
              dense
              background-color="white"
              class='font-weight-600'
            ></v-text-field>
            <small v-if='error' class='red--text'>
              {{ errorMessage }}
              please try using 
              <NuxtLink to="/">Manual Search</NuxtLink>
            </small>
          </v-col>
          <v-col cols=5>
            <v-btn
              :color='hasBgImage ? "primary" : "secondary"'
              block
              large
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
import { getVehicleDetails } from '~/api/vehicle';
import indexActiveCar from "~/pages/__components/index-active-car.vue";

export default {
  components: { indexActiveCar }, 

  props: {
    hasActiveCar: Boolean,
    hasBgImage: Boolean,
  },

  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),

  computed: {
    getBgImage() {
      return this.hasBgImage
        ? `background-image: url(${this.assets("customer-v2/home-cover-bg.png")})`
        : ''
    },
    bgCls() {
      return this.hasBgImage
        ? `reg-bg-image`
        : `reg-bg-simple`
    }
  },

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
      background: rgba(15,116,136,.64);
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
</style>