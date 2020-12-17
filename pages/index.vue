<template>
  <v-container fluid>
    <v-row class='home-top'>
      <v-col>
        <div class="home-sec-1">
          <h1 class='text-center py-5'>
            <span class='text-lg'>We offer</span>
            <base-text-slider
              :options='[
                "MOT", 
                "Repairs", 
                "Interim Service", 
                "Full Service", 
                "Diagnostic"
              ]'
            ></base-text-slider>
            <small class='text-sm'>
              for your car maintenance
            </small>
          </h1>

          <v-card
            class='reg-card'
          >
            <v-card-title
              class='text-center'
            >
              <strong>Book with us now</strong>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="handleSubmit()">
                <v-text-field
                  label="Your car reg i.e LB51TVW"
                  outlined
                  hide-details
                  class='mb-2'
                  v-model='reg'
                ></v-text-field>
                <small v-if='error' class='red--text'>
                  {{ errorMessage }}
                  please try using 
                  <NuxtLink to="/">Manual Search</NuxtLink>
                </small>
                <v-btn
                  color='primary'
                  block
                  large
                  type='submit'
                  :loading='isLoading'
                >
                  Get instant quote
                </v-btn>
              </v-form>
            </v-card-text>
            <v-card-actions
              class='pr-4'
            >
              <v-spacer></v-spacer>
              <span>
                or call us to book
                <v-btn
                  text
                  color='primary'
                  class='py-0 px-0'
                  style='height: auto'
                >
                  <v-icon 
                    dark 
                    class='mr-1'
                  >
                    mdi-cellphone-basic
                  </v-icon>
                  <span class="text-large">
                    01189 876300
                  </span>
                </v-btn>
              </span>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <!-- /first section for registration -->
    <v-row
      :style='`background-image: url(${assets("customer-v2/alex-suprun.jpg")})`'
      class='has-bg-overlay home-sec-gaps home-sec-2'
    >
      <v-col>
        <div class='sec-2 home-sec-between-gaps'>
          <h1 class='text-white heading__title mb-5 font-weight-300'>
            ATTENTION! Our pricing is <span class='text-primary font-weight-500'>fixed & fair</span>
          </h1>
          <p class='font-weight-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, saepe dolores! Officia ullam deserunt iste velit, minima cum et ad exercitationem quaerat praesentium beatae facere eum aliquid? Dolorem, incidunt quibusdam.
          </p>
        </div>
      </v-col>
     </v-row>
     <index-how-it-works></index-how-it-works>
     <index-our-services></index-our-services>
     <index-car-parts></index-car-parts>
     <index-reviews></index-reviews>
     <index-faq></index-faq>
     <index-footer></index-footer>
  </v-container>
</template>

<script>
// import $ from 'jquery';
import BaseTextSlider from '~/components/base-components/base-text-slider.vue';
import IndexHowItWorks from '~/pages/__components/index-how-it-works.vue';
import IndexOurServices from '~/pages/__components/index-our-services.vue';
import IndexCarParts from '~/pages/__components/index-car-parts.vue';
import { getVehicleDetails } from '~/api/vehicle';
import IndexReviews from '~/pages/__components/index-reviews.vue';
import IndexFaq from '~/pages/__components/index-faq.vue';
import IndexFooter from '~/pages/__components/index-footer.vue';

export default {
  components: {
    BaseTextSlider,
    IndexHowItWorks,
    IndexOurServices,
    IndexCarParts,
    IndexReviews,
    IndexFaq,
    IndexFooter,
  },

  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),

  mounted() {
  },

  methods: {
    handleSubmit() {
      this.error = false;
      this.isLoading = true;

      getVehicleDetails(this.reg)
        .then(res => {
          if (!res.status) {
            this.error = true;
            this.errorMessage = res.message;
          }
        }).finally(() => this.isLoading = false);
    }
  }
}
</script>

<style lang="scss" scoped>
.text-lg {
  font-size: 34px;
  // text-transform: uppercase;
  letter-spacing: 1px;
}
.text-sm {
  font-weight: 400;
  font-size: 18px;
  // text-transform: uppercase;
  max-width: 90%;
  display: block;
  margin: auto;
  text-align: center;
}
.reg-card {
  width: 90%;
  margin: auto;
}
.has-bg-overlay {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0da8c757;
  }
  &:after {
    background: rgba(51,51,51,.63);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.sec-2 {
  position: relative;
  z-index: 1;
  color: white;
}
.home-top {
  height: calc(100vh - 160px);
}
.home-sec-2 {
  background-size: cover;
  background-position: center;
}
</style>
