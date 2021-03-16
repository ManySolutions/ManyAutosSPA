<template>
  <page-layout
    title="Earn Money Online by Referring a Friend"
    heading-bg-static="https://static.manyautosltd.com/uploads/referral-image.png"
    :has-quote-button="false"
  >
    <v-container class="main-container">
      <v-row justify="center">
        <v-col cols="12" sm="6" md=4>
          <div class="heading-first text-center primary--text">
            <h2 class="colorify-cash">EARN</h2>
            <h1 class="colorify-cash lg">£10</h1>
            <h4 class="colorify-cash one"><em>COMMISSION</em></h4>
            <h4 class="colorify-cash">per referral</h4>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md=4>
          <div class="second pt-md-15 text-center">
            <h4>Earn <strong>£10</strong> Online by Referring a Friend</h4>
            <p class="text-teal text-18 justify pt-5">
              Refer a friend and earn. No limits. Any successful referral will earn you £10. Don't hesitate to start
              telling everyone about our great service and free collection and
              delivery!
            </p>
          </div>
          <div class="mt-7 text-center">
            <v-btn 
              :x-large='$device.isDesktop' 
              :large='$device.isMobile' 
              color="secondary" 
              dark
              @click='handleClick'
            > 
              <strong>{{ isAuth ? 'Refer & Earn Now' : 'Register Now & Start Earning' }}</strong>  
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- /section 1  -->

    <section class="service-section home-3 mt-15 py-16 primary darken-4">
      <v-container>
        <v-row>
          <v-col>
            <div
              class="section-header wow fadeInUp text-center mb-15"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <h2 class="text-h3 mb-4 font-weight-300">
                3 Simple steps to start earning
              </h2>
            </div>
          </v-col>
        </v-row>
        <div class="section-wrapper">
          <v-row class="no-gutters justify-content-center">
            <v-col
              cols="12"
              class="wow fadeInUp"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <div class="service-item style-2">
                <div class="service-inner primary darken-2">
                  <div class="service-thumb">
                    <v-icon x-large color="white">
                      mdi-numeric-1-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class="text-h6 font-weight-600">Refer</h3>
                    <p class="text-h6">
                      Share your unique link or refer via email. Both options
                      are available one you log in to your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              class="wow fadeInUp"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <div class="service-item style-2 mt-10">
                <div class="service-inner primary darken-2">
                  <div class="service-thumb">
                    <v-icon x-large color="white">
                      mdi-numeric-2-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class="text-h6 font-weight-600">Dashboard</h3>
                    <p class="text-h6">
                      Watch your total grow as your referrals are completed.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              class="wow fadeInUp"
              data-wow-delay="0.3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <div class="service-item style-2 mt-10">
                <div class="service-inner primary darken-2">
                  <div class="service-thumb">
                    <v-icon x-large color="white">
                      mdi-numeric-3-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class="text-h6 font-weight-600">Withdraw</h3>
                    <p class="text-h6">
                      Click 'Claim now' when you are ready. Enter your bank
                      details and receive payment within 10 working days.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>
    <!-- /section 2 -->
    <v-container class="last-section py-10">
      <v-row>
        <v-col cols="12" md="7" lg=5>
          <div>
            <img
              src="https://static.manyautosltd.com/uploads/referral-image.png"
              alt="referral"
            />
          </div>
        </v-col>
        <v-col cols="12" md="5" lg=3 class="last my-auto">
          <div class="second pt-md-10 text-center">
            <h2>Refer a Friend & Earn <br><strong>£10 Online</strong></h2>
            <p class="text-teal text-18 justify pt-5">
              Spread the word and keep earning!
            </p>
          </div>
          <div class="my-2 text-center">
            <v-btn 
              :x-large='$device.isDesktop' 
              :large='$device.isMobile' 
              color="secondary" 
              dark
              @click='handleClick'
            > 
              <strong>{{ isAuth ? 'Refer & Earn Now' : 'Register Now & Start Earning' }}</strong>  
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/page-layout";
import { mapGetters } from 'vuex'

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
  },

  computed: {
    ...mapGetters('user', ['isAuth']),
  },

  mounted() {

  },

  methods: {
    handleClick() {
      if (this.isAuth) {
        this.$router.push('/my/referral');
      } else {
        this.$store.commit('settings/SET_REDIRECT', {
          to: '/my/referral', referrer: 'login-and-register'
        });
        this.$router.push({ name: 'register'})
      }
    }
  },

  head: {
    title: "Earn £10 | refer A Friend And Earn £10",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Don’t miss a chance to Earn £10 Daily By Referring any Friend or Family to bring their car for car repair and servicing Successful referral will get £10 avail this Bumper Offer from Many Autos LTD Automotive car repair servicing and Garage in United Kingdom.",
      },
      {
        name: "keywords",
        content:
          "Many autos ltd, refer a friend, earn money, and earn £10, automotive service, car repair servicing and Garage in United Kingdom"
      },
      {
        hid: 'og:title',
        property: "og:title",
        content: "Earn £10 | refer A Friend And Earn £10",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content: process.env.APP_URL + '/refer-a-friend',
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: "https://static.manyautosltd.com/uploads/referral-image.png",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Don’t miss a chance to Earn £10 Daily By Referring any Friend or Family to bring their car for car repair and servicing Successful referral will get £10 avail this Bumper Offer from Many Autos LTD Automotive car repair servicing and Garage in United Kingdom.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Earn £10 | refer A Friend And Earn £10",
      },
      {
        name: "twitter:description",
        content:
          "Don’t miss a chance to Earn £10 Daily By Referring any Friend or Family to bring their car for car repair and servicing Successful referral will get £10 avail this Bumper Offer from Many Autos LTD Automotive car repair servicing and Garage in United Kingdom.",
      },
      {
        name: "twitter:image",
        content: "https://static.manyautosltd.com/uploads/referral-image.png",
      },
      {
        itemprop: "image",
        content: "https://static.manyautosltd.com/uploads/referral-image.png",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "business.business",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.main-container .heading-first .colorify-cash {
  font-weight: 600;
}
.main-container .heading-first h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: -1rem;
}
.main-container .heading-first h1 {
  font-size: 6rem;
}
.main-container .heading-first h4 {
  font-size: 1.5rem;
}
.main-container .second h4 {
  font-size: 21px;
  color: #373a3c;
  font-weight: 600;
}

// covid-sec-2
.service-section.home-3 {
  background-image: url("https://static.manyautosltd.com/uploads/Edited (3).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #003569eb;
  background-attachment: fixed;
}
.service-section .section-header h2 {
  color: #fff;
  font-size: 2.5rem;
}
.service-section p {
  font-weight: 300;
}
.service-section .section-header p {
  color: #fff;
}
.service-section .section-header {
  text-align: center;
}
.service-section.home-3 .section-wrapper {
  margin-bottom: 10px;
}
.service-section .section-wrapper .no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.service-item.style-2 .service-inner {
  display: flex;
  flex-wrap: wrap;
}
.service-item.style-2 .service-inner {
  text-align: center;
  background: #1c416d;
  margin: auto;
  max-width: 550px;
  opacity: 0.8;
}
.service-item .service-inner {
  padding: 20px;
  border-radius: 6px;
}
.service-item.style-2 .service-inner .service-thumb {
  width: 100%;
}
.service-item .service-inner .service-thumb {
  margin-bottom: 20px;
}
.service-item.style-2 .service-inner .service-content h3 {
  color: #fff;
  margin-bottom: 5px;
}
.service-item.style-2 .service-inner .service-content p {
  color: #fff;
}
@media (min-width: 992px) {
  .service-item.style-2 .service-inner .service-thumb {
    margin-bottom: 0px;
    width: 95px;
  }
}
@media (min-width: 992px) {
  .service-item.style-2 .service-inner .service-content {
    width: calc(100% - 105px);
    text-align: left;
  }
}
@media (min-width: 600px) and (max-width: 992px) {
  .service-item.style-2 .service-inner {
    min-height: 270px;
  }
}
.v-application .text-h3 {
  font-size: 2.5rem !important;
}

.last-section .second h2 {
  font-size: 2rem;
  color: #003569eb;
  font-weight: 600;
}
.last-section .second p {
  font-size: 18px;
  font-weight: 400;
}

@media (min-width: 960px) {
  .home-sec-gaps {
    padding-bottom: 0px !important;
  }
}

// covid-sec-2 end
</style>

