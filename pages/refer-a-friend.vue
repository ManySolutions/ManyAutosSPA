<template>
  <page-layout
    title="Refer your friends to us and we'll pay you"
    heading-bg='customer-v2/static-pages/registergarages.jpg'
    :has-quote-button='false'
  >

    <v-container class="main-container">
      <v-row>
          <v-col cols="12" sm="6">
              <div class="heading-first text-center">
                    <h2 class="colorify-cash">EARN</h2>
                    <h1 class="colorify-cash lg">£10</h1>
                    <h4 class="colorify-cash one"><em>COMMISSION</em></h4>
                    <h4 class="colorify-cash">per referral</h4>
                </div>
          </v-col>
          <v-col cols="12" sm="6">
              <div class="second pt-15 text-center">
                  <h4>Refer a friend and earn. No limits</h4>
                  <p class="text-teal text-18 justify pt-5">Any successful referral will earn you £10. Don't hesitate to
                    start telling everyone about our great service and free collection and delivery!</p>
              </div>
            <div class="my-2 text-center">
            <v-btn
              x-large
              color="success"
              dark
            >
              Register Now
            </v-btn>
          </div>
          </v-col>
      </v-row>
  </v-container>
    <!-- /section 1  -->

    <section class="service-section home-3 home-sec-gaps mt-15">
      <v-container class="container pb-16">
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
              <h2 class='text-h3 mb-4 font-weight-300'>3 Simple steps to start earning</h2>
              <!-- <p class="text-h6">
                Earn rewards by sharing your unique link with clients.
              </p> -->
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
                <div class="service-inner">
                  <div class="service-thumb">
                    <!-- <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    /> -->
                    <v-icon
                    x-large
                    color="white"
                    >
                        mdi-numeric-1-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>
                      Refer
                    </h3>
                    <p class="text-h6">
                      Share your unique link or refer via email. Both options are available one you log in to your
                      dashboard.
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
                <div class="service-inner">
                  <div class="service-thumb">
                    <!-- <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    /> -->
                    <v-icon
                    x-large
                    color="white"
                    >
                        mdi-numeric-2-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Dashboard</h3>
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
                <div class="service-inner">
                  <div class="service-thumb">
                    <!-- <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    /> -->
                    <v-icon
                    x-large
                    color="white"
                    >
                        mdi-numeric-3-circle
                    </v-icon>
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Withdraw</h3>
                    <p class="text-h6">
                      Click 'Claim now' when you are ready. Enter your bank details and receive payment within 10
                      working days.
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
    <v-container class="last-section mt-10">
      <v-row>
          <v-col cols="12" md="7">
              <div>
                  <img
                      src="https://static.manyautosltd.com/uploads/referral-image.jpg"
                      alt="referral">
              </div>
          </v-col>
        <v-col cols="12" md="5" class="last my-auto">
          <div class="second pt-md-10 text-center">
            <h2>Refer a friend</h2>
            <p class="text-teal text-18 justify pt-5">Spread the word and keep earning!</p>
          </div>
          <div class="my-2 text-center">
            <v-btn 
            x-large 
            color="success"
            dark>
              Register Now
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'About Us',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.'
      },
      {
        name: 'keywords', 
        content: 'many autos ltd automotive service,car services,full car service,garage service'
      },
      {
        property: "og:title", 
        content: "About Us | ManyAutos LTD"
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
        content: "logo-default.png"
      },
      {
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "About Us | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
      },
      {
        name: "twitter:image", 
        content: "logo-default.png"
      },
      {
        itemprop: "image", 
        content: "logo-default.png"
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

.main-container .heading-first .colorify-cash {
    color: #003569eb !important;
    font-weight: 600;
}
.main-container .heading-first h2{
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: -1rem;
}
.main-container .heading-first h1{
    font-size: 6rem;
}
.main-container .heading-first h4{
    font-size: 1.5rem;
}
.main-container .second h4{
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
  opacity: .8;
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

.last-section .second h2{
    font-size: 2rem;
    color: #003569eb;
    font-weight: 600;
}
.last-section .second p{
    font-size: 18px;
    font-weight: 400;
}

@media (min-width: 960px){
    .home-sec-gaps {
    padding-bottom: 0px !important;
}
}

// covid-sec-2 end

</style>

