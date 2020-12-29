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
    <index-section-2></index-section-2>
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
import IndexSection2 from './__components/index-section-2.vue';

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
  },

  data: () => ({ }),

  mounted() {
  },

  methods: {
  },

  head: {
    title: 'Car Servicing, Repair & MOT Centre',

    meta: [
      {
        name: 'description', 
        content: 'Professional vehicle service providers. Free collection and delivery with massive savings along with 12 months or 12,000 miles warranty (whichever comes first). We offers an extensive range of automotive services'
      },
      {
        name: 'keywords', 
        content: 'Car Repair Services in UK, automotive services UK, Garage in UK, Mot Test Center in UK, Vehicle full service in UK, Brake Repair, Clutch Services'
      },
      {
        property: "og:title", 
        content: "Car Servicing, Repair & MOT Centre | ManyAutos LTD"
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
        content: "Professional vehicle service providers. Free collection and delivery with massive savings along with 12 months or 12,000 miles warranty (whichever comes first). We offers an extensive range of automotive services"
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Car Servicing, Repair & MOT Centre | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Professional vehicle service providers. Free collection and delivery with massive savings along with 12 months or 12,000 miles warranty (whichever comes first). We offers an extensive range of automotive services"
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
