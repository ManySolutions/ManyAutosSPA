<template>
  <v-container fluid class='pt-0'>
    <v-row class='home-top'>
      <v-col>
        <div class="home-sec-1">
          <h1 class='text-center py-5'>
            <span class='text-lg'>We offer</span>
            <client-only>
              <base-text-slider
                :options='[
                  "MOT", 
                  "Repairs", 
                  "Interim Service", 
                  "Full Service", 
                  "Diagnostic"
                ]'
              ></base-text-slider>
              <template slot="placeholder">
                <span class='text-primary'>
                  MOT, Car Repairs, Interim Service, Full Service and Car Diagnostics
                </span>
              </template>
            </client-only>
            <small class='text-sm'>
              for your car maintenance
            </small>
          </h1>

          <car-reg-form-card></car-reg-form-card>

          <v-row class="top-h-icons">
            <v-col cols='4' class="top-hi">
              <span class='d-block'>
                <v-icon>mdi-car-connected</v-icon>
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
    <index-section-2></index-section-2>
    <v-row>
      <index-how-it-works></index-how-it-works>
      <index-online-booking></index-online-booking>
      <index-pickup-and-delivery></index-pickup-and-delivery>
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
import IndexSection2 from './__components/index-section-2.vue';
import IndexOnlineBooking from '~/pages/__components/index-online-booking.vue';
import IndexPickupAndDelivery from '~/pages/__components/index-pickup-and-delivery.vue';

const URL = process.env.APP_URL;

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
    IndexSection2,
    IndexOnlineBooking,
    IndexPickupAndDelivery,
  },

  data: () => ({ }),

  mounted() {
  },

  methods: {
  },

  head: {
    title: 'Best Car Servicing | MOT & Repair Centre | Vehicle Maintenance',

    meta: [
      {
        name: 'description', 
        content: 'The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!'
      },
      {
        name: 'keywords', 
        content: 'car services, car maintenance, vehicle repair, car repair, car mechanic, car garage in uk, online repair center, Mot and repair center'
      },
      {
        property: "og:title", 
        content: 'Best Car Servicing | MOT & Repair Centre | Vehicle Maintenance'
      },
      {
        property: "og:type", 
        content: "website"
      },
      {
        property: "og:url", 
        content: URL
      },
      {
        property: "og:image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/logo-default.png"
      },
      {
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        property: "og:description", 
        content: 'The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!'
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content:'Best Car Servicing | MOT & Repair Centre | Vehicle Maintenance'

      },
      {
        name: "twitter:description", 
        content: 'The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!'
      },
      {
        name: "twitter:image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/logo-default.png"
      },
      {
        itemprop: "image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/logo-default.png"
      },
      {
        property: "og:type", 
        content: "business.business"
      },
    ]
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
