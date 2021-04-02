<template>
  <v-container fluid class="pt-0">
    <v-row>
        <section class="main-section text-white" style="background-image: url(https://static.manyautosltd.com/uploads/masked-mechanic-checks-car-service-station.jpg)">
            <div class="mainsection" style="padding-top:150px; padding-bottom:150px;">
                <v-container class="container pt-5 pb-5">
                    <v-row class="row">
                        <v-col cols="12" md="6" class="my-auto">
                            <div>
                                <h1 class="main-heading pb-3">
                                    THE BEST CAR REPAIR COMPANY IN READING
                                </h1>
                                <p>Mntrinsicly redefine mission-critical quality vectors rather than cross functional
                                  technologies cultivate an expanded array.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                          <car-reg-form-card id='home-reg-form'></car-reg-form-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </section>
    </v-row>
    <!-- /first section for registration -->
    <v-row>
      <!-- <index-how-it-works></index-how-it-works> -->
      <index-welcome-garage></index-welcome-garage>
    </v-row>
    <!-- <index-section-2></index-section-2> -->
    <v-row>
      <index-what-we-do></index-what-we-do>
    </v-row>
    <v-row>
     <!--  <index-our-services></index-our-services> -->
      <car-reg-form has-bg-image></car-reg-form>
      <!-- <index-car-parts></index-car-parts> -->
    </v-row>
    <v-row>
      <index-how-we-work></index-how-we-work>
    </v-row>
    <v-row>
      <index-our-best-work></index-our-best-work>
    </v-row>
    <v-row>
      <car-reg-form has-bg-image></car-reg-form>
    </v-row>
    <v-row>
      <index-why-we-are-best></index-why-we-are-best>
    </v-row>
    <!-- <v-row class='my-12 my-lg-0'>
      <index-online-booking></index-online-booking>
      <index-pickup-and-delivery></index-pickup-and-delivery>
    </v-row>
    <v-row>
      <car-reg-form has-bg-image></car-reg-form>
      <index-reviews></index-reviews>
      <index-faq></index-faq>
    </v-row>  -->
    <!-- <index-services></index-services> -->
  </v-container>
</template>

<script>
import $ from 'jquery';
import BaseTextSlider from "~/components/base-components/base-text-slider.vue";
import IndexHowItWorks from "~/pages/__components/index-how-it-works.vue";
import IndexHowWeWork from "~/pages/__components/index-how-we-work.vue";
import IndexWelcomeGarage from "~/pages/__components/index-welcome-garage.vue";
import IndexWhatWeDo from "~/pages/__components/index-what-we-do.vue";
import IndexOurBestWork from "~/pages/__components/index-our-best-work.vue";
import IndexWhyWeAreBest from "~/pages/__components/index-why-we-are-best.vue";
import IndexOurServices from "~/pages/__components/index-our-services.vue";
import IndexCarParts from "~/pages/__components/index-car-parts.vue";
import IndexReviews from "~/pages/__components/index-reviews.vue";
import IndexFaq from "~/pages/__components/index-faq.vue";
import CarRegForm from "~/components/func-components/car-reg-form.vue";
import CarRegFormCard from "~/components/func-components/car-reg-form-card.vue";
import IndexSection2 from "./__components/index-section-2.vue";
import IndexOnlineBooking from "~/pages/__components/index-online-booking.vue";
import IndexPickupAndDelivery from "~/pages/__components/index-pickup-and-delivery.vue";
import IndexServices from "~/pages/__components/index-services.vue";

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
    IndexServices,
    IndexWelcomeGarage,
    IndexWhatWeDo,
    IndexHowWeWork,
    IndexOurBestWork,
    IndexWhyWeAreBest,
  },

  data: () => ({
    slides: [
      'masked-mechanic-checks-car-service-station.jpg',
      'mechanic-man-woman-customer-wearing-medical-face-mask-protection-coronavirus-check-car-condition-before-delivery.jpg',
      'auto-mechanic-checking-car.jpg'
    ],
    slideCount: 0,
    interval: null,
  }),

  watch: {
    slideCount(slideCount) {
      $('.img-container > div').fadeOut(500);
      $('.img-container > .imgs-inner-' + slideCount).fadeIn(500);
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  mounted() {
    this.slidesBg();
  },

  methods: {
    slidesBg() {
      this.interval = setInterval(() => {
        if (this.slideCount >= 2)
          this.slideCount = 0
        else
          this.slideCount++
      }, 20000)
    }
  },

  head: {
    title: " Car Servicing, MOT Centre, car mechanic",

    meta: [
      {
        hid: 'description', name: 'description',
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "keywords",
        content:
          "Car servicing, car mechanic, vehicle repair, car repair, car mechanic, car garage in UK, online repair centre, MOT centre",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content:
          " Car Servicing, MOT Centre, car mechanic",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content: URL,
      },
      {
        hid: 'og:image',
        property: "og:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: 'og:description',  property: 'og:description',
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content:
          " Car Servicing, MOT Centre, car mechanic",
      },
      {
        name: "twitter:description",
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "twitter:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        itemprop: "image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "business.business",
      },
    ],
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.manyautosreading.co.uk/#organization",
          name: "ManyAutos",
          url: "https://www.manyautosreading.co.uk/",
          sameAs: [
            "https://www.facebook.com/manyautos.co.uk",
            "https://twitter.com/manyautos",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Reading",
          },
          // "aggregateRating": {
          //   "@type": "AggregateRating",
          //   "ratingValue": "4.5",
          //   "reviewCount": "1521"
          // },
          description:
            "The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!",
          telephone: "+44 118 987 6300",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+44 118 987 6300",
            contactType: "Customer Support",
            areaServed: "UK",
            availableLanguage: "English",
          },
          publisher: {
            "@type": "Organization",
            name: "ManyAutos",
            "@id": "https://www.manyautosreading.co.uk/",
            logo:
              "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
            url: "https://www.manyautosreading.co.uk/",
            description:
              "Do you need  Car servicing, MOT or Repair Work? Compare our prices with other garages.",
            sameAs: [
              "https://www.facebook.com/manyautos.co.uk",
              "https://twitter.com/manyautos",
            ],
          },
          logo: {
            "@type": "ImageObject",
            "@id": "https://www.manyautosreading.co.uk/#logo",
            url:
              "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
            caption: "ManyAutos",
          },
          image: {
            "@id": "https://www.manyautosreading.co.uk/#logo",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.manyautosreading.co.uk/#website",
          publisher: {
            "@id": "https://www.manyautosreading.co.uk/#organization",
          },
          name: "ManyAutos",
          url: "https://www.manyautosreading.co.uk/",
          description:
            "The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!",
          inLanguage: "en-US",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.manyautosreading.co.uk//#webpage",
          url: "https://www.manyautosreading.co.uk/",
          inLanguage: "en-US",
          name:
            "Best Car Servicing | MOT & Repair Centre | Vehicle Maintenance",
          isPartOf: {
            "@id": "https://www.manyautosreading.co.uk/#website",
          },
          about: {
            "@id": "https://www.manyautosreading.co.uk/#organization",
          },
          breadcrumb: {
            "@id": "https://www.manyautosreading.co.uk//#breadcrumb",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-lg {
  font-size: 34px;
  letter-spacing: 1px;
  color: white;
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
  color: white;
  @media (min-width: 960px) {
    margin-top: 10px;
    font-size: 22px;
  }
}

.home-top {
  padding-bottom: 20px;
  // background-image: url("https://static.manyautosltd.com/uploads/black---mechanic-man-woman-customer-wearing-medical-face-mask-protection-coronavirus-check-car-condition-before-delivery.jpg") top center;
  // background-size: cover;
  position: relative;
  @media (min-width: 960px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
.home-sec-1 {
  padding-bottom: 30px;
  position: relative;
  z-index: 1;
}

.top-h-icons {
  padding-top: 30px;
  max-width: 500px;
  margin: 0px auto;
  color: white;
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
      color: white;
    }
  }
}
.main-section {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

.mainsection {
    width: 100%;
    height: 100%;
    // background-color: #7398f1f5;
    // background: linear-gradient(94deg, rgba(13, 168, 199, 0.77), #0da8c7);
    background-image: linear-gradient(to right, rgb(255, 255, 255) 38%, rgba(255, 255, 255, 0.9) 47%, rgba(255, 255,
    255, 0.2) 66%, rgba(255, 255, 255, 0) 70%);
}
.main-section .mainsection h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    color: #01133c;
}
.main-section .mainsection span {
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    color: #ef0f3a;
}
.main-section .mainsection p {
    font-size: 18px;
    font-weight: 500;
    color: #777;
}
@media (max-width: 960px){

.main-section .mainsection h1 {
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}
.main-section .mainsection p {
    text-align: center;
    color: #1e1313;
}
.mainsection {
   
    // background-image: linear-gradient(to right, rgb(255, 255, 255) 100%, rgba(255, 255, 255, 0.9) 100%, rgba(255, 255,
    // 255, 0.2) 100%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(94deg, rgb(230 230 230 / 77%), #0da8c7);
}
}

</style>
