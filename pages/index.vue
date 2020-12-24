<template>
  <v-container fluid class='pt-0'>
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

          <car-reg-form-card></car-reg-form-card>

          <v-row class="top-h-icons">
            <v-col cols='4' class="top-hi">
              <span class='d-block'>
                <v-icon>mdi-tow-truck</v-icon>
                <span>
                  FREE COLLECTION AND DELIVERY
                </span>
              </span>
            </v-col>
            <v-col cols='4' class="top-hi">
              <span class='d-block'>
                <v-icon>mdi-quality-high</v-icon>
                <span>
                  TRUSTED HIGH QUALITY GARAGES
                </span>
              </span>
            </v-col>
            <v-col cols='4' class="top-hi">
              <span class='d-block'>
                <v-icon>mdi-security</v-icon>
                <span>
                  12 MONTH WARRANTY AND GUARANTEE
                </span>
              </span>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!-- /first section for registration -->
    <v-row
      :style='`background-image: url(${assets("customer-v2/alex-suprun.jpg")})`'
      class='has-bg-overlay home-sec-2'
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
    <v-row>
      <index-how-it-works></index-how-it-works>
      <car-reg-form has-bg-image></car-reg-form>
      <index-our-services></index-our-services>
      <index-car-parts></index-car-parts>
      <car-reg-form></car-reg-form>
      <index-reviews></index-reviews>
      <index-faq></index-faq>
    </v-row>
  </v-container>
</template>

<script>
// import $ from 'jquery';
import BaseTextSlider from '~/components/base-components/base-text-slider.vue';
import IndexHowItWorks from '~/pages/__components/index-how-it-works.vue';
import IndexOurServices from '~/pages/__components/index-our-services.vue';
import IndexCarParts from '~/pages/__components/index-car-parts.vue';
import IndexReviews from '~/pages/__components/index-reviews.vue';
import IndexFaq from '~/pages/__components/index-faq.vue';
import CarRegForm from '~/components/func-components/car-reg-form.vue';
import CarRegFormCard from '~/components/func-components/car-reg-form-card.vue';

export default {
  components: {
    BaseTextSlider,
    IndexHowItWorks,
    IndexOurServices,
    IndexCarParts,
    IndexReviews,
    IndexFaq,
    CarRegForm,
    CarRegFormCard,
  },

  data: () => ({ }),

  mounted() {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.text-lg {
  font-size: 34px;
  letter-spacing: 1px;
  @media (min-width: 960px) {
    font-size: 44px;
  }
}
.text-sm {
  font-weight: 400;
  font-size: 18px;
  max-width: 90%;
  display: block;
  margin: auto;
  text-align: center;
  @media (min-width: 960px) {
    margin-top: 10px;
    font-size: 22px;
  }
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
  padding-bottom: 20px;
  background: url('~static/imgs/88246.png')  top center;
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(255 255 255 / 59%);
    top: 0;
  }
  & > * {
    z-index: 1;
  }
  @media (min-width: 960px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.home-sec-1 {
  padding-bottom: 30px;
}
.home-sec-2 {
  background-size: cover;
  background-position: center;
}

.top-h-icons {
  padding-top: 30px;
  max-width: 500px;
  margin: 0px auto;
  .top-hi {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    position: relative;
    &:not(:last-child):after {
      content: "";
      position: absolute;
      right: 0;
      height: 70%;
      width: 1px;
      background: #3636361a;
      top: 50%;
      transform: translateY(-50%);
    }
    span {
      font-size: 12px;
      display: block;
      max-width: 280px;
      margin: 0px auto;
    }
    span i {
      margin-bottom: 20px;
      font-size: 31px;
    }
  }
}


</style>
