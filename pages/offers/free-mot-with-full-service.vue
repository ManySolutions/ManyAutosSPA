<template>
  <div style='overflow-x: hidden;'>
    <index-landing-new type='mot'></index-landing-new>

    <v-sheet fluid color='#f5f5f5' class='py-3'>
      <base-info-icons dark></base-info-icons>
    </v-sheet>

    <div class="container py-15">
      <h2 class='index-heading text-center'>
        What's Included in this 
        <strong class='font-weight-600'>
          great deal 
          <!-- from 
          <span class="primary--text">ManyAutos</span> -->
        </strong>
      </h2>
      <div class='pt-10'>
        <v-row v-for='(i, ki) in checkList' :key='ki' justify="center">
          <v-col v-for='j in i' :key='j'
            cols=12 md=6 lg=4 xl=3
          >
            <div class='checklist-item d-table'>
              <span class='d-table-cell'>
                <img :src="assets('frontend/check-icon.png')" alt="Check icon">
              </span>
              <span v-html='j' class='d-table-cell'></span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class='text-center'>
            <v-dialog
              width="360"
              scrollable
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  text
                  v-bind="attrs"
                  v-on="on"
                  class='text-case-none'
                >
                  Click here to see more checks
                </v-btn>
              </template>

              <v-card>
                <v-card-title>
                  Full Service Checklist
                </v-card-title>
                <v-card-text>
                  <div class='checklist-item d-table mb-3'
                    v-for='fl in fullServiceList'
                    :key='fl'
                  >
                    <span class='d-table-cell'>
                      <img :src="assets('frontend/check-icon.png')" alt="Check icon">
                    </span>
                    <span v-html='fl' class='d-table-cell'></span>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
    </div>


    <div class="w-100 mot-section pt-15 pb-15">
      <div class="mot-section-img">
        <v-container>
          <v-row>
            <v-col cols="12" class="mot-service-sec text-center">
              <h2 class="index-heading mb-10">
                Still need to book only 
                <strong class='font-weight-600'>MOT</strong>?
              </h2>
              <div class="text-center m-auto">
                <v-img
                  src="https://static.manyautosltd.com/uploads/mot-01.png"
                  max-width="150px"
                  class="m-auto"
                >
                </v-img>
              </div>
              <div class="mot_price mt-8">
                Book MOT
                for only
                <strong class='primary--text'>
                  {{ currencySymbol }}
                  <strong v-html='$store.state.settings.motPrice'></strong>
                </strong>
                with up to 40% off
              </div>
              <div class="free_col_del mt-2 mb-8">
                Free collection and delivery nationwide.
              </div>
              <div class="text-center">
                <v-btn color="secondary" x-large class="mt-5 mr-4 px-5" @click='handleClick'>
                  Book&nbsp;<strong>MOT</strong>&nbsp;Now
                </v-btn>
                <br>
                <nuxt-link to='/check-mot-history' class='mt-2 d-inline-block'>
                  Want to check your MOT history?
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- <index-both-services 
      title='Looking for your <strong class="font-weight-600">car service</strong> only?'
    ></index-both-services> -->
    <index-testimonial></index-testimonial>
    <index-bottom-reg 
      title='Get Your Free <b class="font-weight-600">MOT</b> Quote Now'
      quote-btn-text='Get Free MOT Quote'
    ></index-bottom-reg>
  </div>
</template>

<script>
import IndexTestimonial from "../__components/index-testimonial.vue";
import IndexLandingNew from '../__components/index-landing-new.vue';
import BaseInfoIcons from '~/components/base-components/base-info-icons.vue';
import IndexBottomReg from '../__components/index-bottom-reg.vue';
import { mapState } from 'vuex';
import IndexBothServices from '../__components/index-both-services.vue';

export default {
  components: {
    IndexTestimonial,
    IndexLandingNew,
    BaseInfoIcons,
    IndexBottomReg,
    IndexBothServices,
  },

  data: () => ({
    checkList: [
      ['Free collection and delivery', '70 point vehicle check'],
      ['MOT test', 'MOT retest if failed (additional costs will incur)'],
      ['Engine oil replacement', 'Oil filter replacement'],
      ['Coolant top up ', 'Brake fluid top up'],
      ['Power steering fluid top up ', 'Clutch fluid top up'],
      ['Air filter replacement', 'MOT certificate on completion'],
      ['Service booked stamped or digital records updated', '12 months guarantee on all work completed'],
      ['Affordable payment plan offered if required', 'Original equipment manufacturer (OEM) parts used only'],
    ],
    fullServiceList: [
      "Check car history.",
      "Check timing belt replacement interval.",
      "Check for damage to bodywork, lamps, and trims.",
      "Check the condition of all seat belts.",
      "Check operation of interior and exterior lights.",
      "Check operation of ABS and/or airbag warning lights.",
      "Check windscreen washers and wipers.",
      "Check horn.",
      "Check operation of suspension dampers.",
      "Lubricate all door hinges, locks, and bonnet catches.",
      "Check fuel cap.",
      "Check under the Bonnet",
      "Check the cooling system.",
      "Check anti-freeze protection.",
      "Check brake fluid boiling point.",
      "Check all auxiliary drive belts.",
      "Check engine breather system.",
      "Check vacuum pipes.",
      "Check power steering operation and fluid condition.",
      "Check full throttle settings and lubricate linkage.",
      "Check battery level and lubricate terminals.",
      "Check and top up all under bonnet fluid levels.",
      "Vehicle Raised",
      "Change oil, oil filter, air filter, and fit new sump plug washer.",
      "Check fuel lines and brake pipes.",
      "Check the condition and security of the exhaust.",
      "Check and top up the rear axle and transfer box oil levels.",
      "Check and top up gearbox oil level.",
      "Check all steering and suspension joints, mounting, and gaiters.",
      "Carry out tyre check.",
      "Check all wheel bearings for excessive 'play' and noise.",
      "Check CV gaiters and joints for wear or splits.",
      "Check clutch adjustment and adjust.",
      "Grease all greasing points.",
      "Check operation and condition of front brakes.",
      "Check operation and condition of rear brakes, including handbrake.",
      "Carry out brake report.",
      "Vehicle Lowered",
      "Refill engine oil.",
      "Torque wheel nuts/studs.",
      "To Finish",
      "Road test vehicle and report any findings.",
      "Re-check engine oil level.",
      "Carry out emission report.",
      "Reset service lights.",
      "Ensure all upholstery, gear lever, steering wheel etc clean",
    ]
  }),

  computed: {
    ...mapState('booking', ['regDialog']),
  },

  watch: {
    regDialog(regDialog) {
      if (!regDialog) {
        setTimeout(() => {
          this.$store.commit('settings/SET_REDIRECT', {
            to: '/booking/create/free-mot-with-full-service',
            referrer: 'car-reg'
          });
        }, 500)
      }
    },

  },

  beforeDestroy() {
  },

  mounted() {
  },

  methods: {
    handleClick() {
      this.$store.commit('settings/SET_REDIRECT', {
        to: '/booking/create/mot-and-servicing',
        referrer: 'car-reg'
      });

      this.$store.commit('booking/TOGGLE_REG_DIALOG', true);
    },
  },

  head: {
    title: "Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",

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
          " Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content: process.env.APP_URL,
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
          " Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",
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

    // link: [
    //   {
    //     rel: "preload",
    //     as: "image",
    //     href: "https://static.manyautosltd.com/uploads/car-service-img.png",
    //     imagesrcset: "wolf_400px.jpg 400w, wolf_800px.jpg 800w, wolf_1600px.jpg 1600w",
    //     imagesizes: "50vw",
    //   }
    // ]
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .top-h-icons {
    max-width: 760px;
  }
  .top-h-icons .top-hi span {
    max-width: 170px;
  }
  @media (max-width: 768px) {
    .hs--text .has-offer {
      font-size: 32px;
    }
  }
}

.page-heading {
  text-transform: capitalize;
  font-size: 41px;
  line-height: 54px;
  font-weight: 500;
  color: #333;
  max-width: 810px;
  margin: auto;
}

.checklist-item {
  max-width: 330px;
  margin: auto;
  width: 100%;

  .d-table-cell:first-child {
    width: 30px;
  }

  img {
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
}


.mot-section {
  background: #fff8f8db;

  .mot-service-sec .mot-service-heading {
    text-transform: capitalize;
    font-size: 45px;
    line-height: 54px;
    font-weight: 500;
    color: #333;
  }
  .mot-service-sec-two .mot-service-heading-two {
    text-transform: capitalize;
    font-size: 45px;
    line-height: 54px;
    font-weight: 500;
    color: #333;
    margin-top: 70px;
  }

  .mot-service-sec .mot-service-heading::after {
    display: block;
    content: "";
    background: #00b4d8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 2px;
  }
  .mot-service-sec .mot_price {
    font-size: 36px;
    text-align: center;
    font-weight: 300;
    line-height: 1.5;
  }
  .mot-service-sec .mot_test {
    font-size: 34px;
    text-align: center;
    font-weight: 300;
    line-height: 1.5;
  }
  .mot-service-sec .free_col_del {
    font-size: 30px;
    text-align: center;
    font-weight: 300;
    margin: 0;
    line-height: 1.5;
  }
}
</style>
