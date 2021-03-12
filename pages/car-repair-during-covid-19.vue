<template>
  <page-layout
    title='Car Repair During COVID 19 | Car Repair Installment Plan'
    headingBgStatic='https://static.manyautosltd.com/uploads/covid-cover.jpg'
    :has-quote-button='false'
    cls='car-repair-during-covid-19'
    sub-title='Car Repair Pay Later Service'
  >
      <section class="about-section style-3 bg-about padding-tb home-sec-gaps">
      <v-container>
        <v-row
          class="justify-content-center align-items-center flex-row-reverse"
        >
          <v-col
            cols="12"
            lg="6"
            class="wow fadeInUp"
            data-wow-delay="0.3s"
            style="
              visibility: visible;
              animation-delay: 0.3s;
              animation-name: fadeInUp;
            "
          >
            <div class="about-thumb d-none d-lg-block text-center">
              <img
                src="https://static.manyautosltd.com/uploads/covid-4.png"
                alt="car repair payment plan"
              />
              <car-repair-during-covid-19-dialog v-if='isDevice.lg'></car-repair-during-covid-19-dialog>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            class="wow fadeInUp"
            data-wow-delay="0.4s"
            style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInUp;
            "
          >
            <div class="about-content">
              <div class="ab-title">
                <span>About (2021-nCoV)</span>
                <h2 class='text-h3 mb-5'>Car Repair Payment Plans</h2>
                <p class='text-sec'>
                  Covid-19 has affected everyone in a different way. Many people
                  are struggling financially due to it. We understand your
                  situation and want to make things easy for you. We provide you
                  the
                  <NuxtLink to="/car-service"
                    >car repair pay later service</NuxtLink
                  >. You can pay your dues in installments for the next 4 
                  months.
                </p>
                <p class='text-sec'>
                  This <strong>vehicle servicing installments plan</strong> is
                  devised for your ease and comfort.
                </p>
                <ul class="lab-ul">
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/whocanapply.png"
                        alt="whocanapply"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Who can apply</h3>
                      <p  class='text-sec'>
                        Anyone who is a resident of the United Kingdom and is 18
                        years of age or above can apply for our payment plan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/deposit.png"
                        alt="deposit"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Deposit</h3>
                      <p class='text-sec'>
                        A 25% initial deposit is required and the rest can be paid in installments for the next
                        4
                        months.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/interest-free.png"
                        alt="interest-free"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Interest-free</h3>
                      <p  class='text-sec'>
                        Our <NuxtLink to="/"
                          >car repair service installment during
                          covid-19</NuxtLink
                        >
                         is interest-free. No extra money would be charged from
                        you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/apply.png"
                        alt="apply"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">When do I apply</h3>
                      <p  class='text-sec'>
                        You can apply right after we give you a quote for your
                        services and purchases.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="pt-10 text-center d-lg-none">
                <car-repair-during-covid-19-dialog v-if='!isDevice.lg'></car-repair-during-covid-19-dialog>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <v-container
      class="covid-page"
      style="padding-top: 120px;"
    >
      <v-row>
        <!-- <v-col cols=12 class="text-center ">
          <h1 style="margin-bottom: 20px; font-weight: 300;">Car Repair Pay Later Service </h1>
        </v-col> -->
      </v-row>
      <v-row>
        <v-col cols=12>
          <v-row 
            class="row align-items-center text-center booking"
            justify='center'
          >
            <v-col cols=12 md=6 xl=4 class="margin-top-25 order-md-2 text-md-right">
              <img
                src="https://static.manyautosltd.com/uploads/covid-road_626x417.jpg"
                alt="car repair services installments during covid 19"
                class="image-one pl-md-8"
              />
            </v-col>
            <v-col cols=12 md=6 lg=5 class="margin-top-5-per sec-1 text-md-left">
              <h2 class="green2 text-h3 mb-7">
                Helping You To Get Back On The Road
              </h2>
              <p class="text-sec mt-4" id='covidToStartScroll'>
                We always say that customers are our topmost priority. In
                critical times like this, we want to help you in any way we can.
              </p>
              <p class="text-sec text-22">
                With the support from our network of garages, we are following
                all the social distancing measures and offering Car repair
                payment plans so you can have a safe and affordable experience.
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols=12>
          <v-row 
            class="row align-items-center text-center booking home-sec-gaps"
            justify='center'
          >
            <v-col cols=12 md=6 xl=4 class="margin-top-25 text-md-left">
              <img
                src="https://static.manyautosltd.com/uploads/open-in-covid19.jpg"
                alt="open in covid19"
                class="image-two pr-md-8"
              />
            </v-col>
            <v-col cols=12 md=6 lg=5 class="margin-top-5-per sec-2 order-md-2 text-md-left">
              <h2 class="green2 text-h3 mb-7">We Are Open And Unaffected by COVID-19 </h2>
              <p class="text-sec mt-4">
                Our garages are open and providing the services to maintain your
                car during this pandemic. We are taking all the social
                distancing measures to protect our customers as well as our
                employees. You can book any service online as we are always
                available digitally.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <!-- /section 1  -->

    <section class="service-section home-3 home-sec-gaps">
      <v-container class="container">
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
              <h2 class='text-h3 mb-4 font-weight-300'>Important Measures for Covid-19 Prevention</h2>
              <p class="text-h6">
                We will ask you to help us a little by following the necessary
                measures with us
              </p>
            </div>
          </v-col>
        </v-row>
        <div class="section-wrapper">
          <v-row class="no-gutters justify-content-center">
            <v-col
              cols="12"
              sm="6"
              md="6"
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
                    <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    />
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>
                      Social distancing
                    </h3>
                    <p class="text-h6">
                      Social distancing rules are followed in our garage. Every
                      person has to keep a 2-metre distance from each other and
                      avoid any kind of contact.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
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
                    <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    />
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Masks are compulsory</h3>
                    <p class="text-h6">
                      All the employees and customers are required to wear masks
                      at all times. You won’t be allowed to enter the garage
                      without a face mask.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
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
                    <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    />
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Hygiene is a priority</h3>
                    <p class="text-h6">
                      All of our employees are extra careful about hygiene. They
                      wash their hands and sanitize them at all times. We
                      sanitize your car before and after it has been worked on
                      in our garage.
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
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
                    <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    />
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Protective gear</h3>
                    <p class="text-h6">
                      We offer a no-contact service; our employees will be
                      provided fresh gloves for each car servicing. 
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
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
                    <img
                      src="https://static.manyautosltd.com/uploads/check.png"
                      alt="check"
                    />
                  </div>
                  <div class="service-content">
                    <h3 class='text-h6 font-weight-600'>Checking for everyone’s safety</h3>
                    <p class="text-h6">
                      We will check our employee's temperature for a fever every day and look out
                      for any symptoms regarding covid-19. This will be done for
                      your safety and your peace of mind.
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

    <v-container>
    <v-row>
      <v-col cols="12">
          <v-row 
        class="row align-items-center text-center booking home-sec-gaps pb-0 mt-5"
        justify='center'
      >
        <v-col cols=12 md=6 xl=4 class="margin-top-25 text-md-left">
          <img
            src="https://app.manyautosltd.com/assets/customer-v2/static-pages/collection.jpg"
            alt="open in covid19"
            class="image-two pr-md-8"
          />
        </v-col>
        <v-col cols=12 md=6 lg=5 class="margin-top-5-per sec-2 order-md-2 text-md-left">
          <h2 class="green2 text-h3 mb-7">Collection and Delivery Service</h2>
          <p class="text-sec mt-4">
            We are providing you the collection and delivery service. We know
            that you might be hesitant in bringing your car to the garage. You
            don’t have to worry, we will collect your car from your doorstep
            and deliver it back to you once it has been serviced. We will
            sanitize your car before returning it to you. 
          </p>
        </v-col>
      </v-row>
      </v-col>
    <v-col cols="12">
        <v-row 
        class="row align-items-center text-center booking"
        justify='center'
        style="padding-top:110px;"
      >
        <v-col cols=12 md=6 xl=4 class="margin-top-25 order-md-2 text-md-right">
          <img
            src="https://static.manyautosltd.com/uploads/online-payment_626x417.jpg"
            alt="car repair services installments during covid 19"
            class="image-one pl-md-8"
          />
        </v-col>
        <v-col cols=12 md=6 lg=5 class="margin-top-5-per sec-1 text-md-left">
          <h2 class="green2 text-h3 mb-7">
            Online payment and receipts
          </h2>
          <p class="text-sec mt-4">
            To avoid contact, all the receipts and documents of your car
            will be sent to you online. You can according to our 
            <strong>car repair payment plan</strong>, 
            payments can be made online or via mobile terminal to avoid handling money.   
          </p>
        </v-col>
      </v-row>
    </v-col>
    </v-row>
    </v-container>
    <!-- <section class="about-section style-3 bg-about padding-tb home-sec-gaps">
      <v-container>
        <v-row
          class="justify-content-center align-items-center flex-row-reverse"
        >
          <v-col
            cols="12"
            lg="6"
            class="wow fadeInUp"
            data-wow-delay="0.3s"
            style="
              visibility: visible;
              animation-delay: 0.3s;
              animation-name: fadeInUp;
            "
          >
            <div class="about-thumb d-none d-lg-block text-center">
              <img
                src="https://static.manyautosltd.com/uploads/covid-4.png"
                alt="car repair payment plan"
              />
              <car-repair-during-covid-19-dialog v-if='isDevice.lg'></car-repair-during-covid-19-dialog>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            class="wow fadeInUp"
            data-wow-delay="0.4s"
            style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInUp;
            "
          >
            <div class="about-content">
              <div class="ab-title">
                <span>About (2021-nCoV)</span>
                <h2 class='text-h3 mb-5'>Car Repair Payment Plans</h2>
                <p class='text-sec'>
                  Covid-19 has affected everyone in a different way. Many people
                  are struggling financially due to it. We understand your
                  situation and want to make things easy for you. We provide you
                  the
                  <NuxtLink to="/car-service"
                    >car repair pay later service</NuxtLink
                  >. You can pay your dues in installments for the next 4 
                  months.
                </p>
                <p class='text-sec'>
                  This <strong>vehicle servicing installments plan</strong> is
                  devised for your ease and comfort.
                </p>
                <ul class="lab-ul">
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/whocanapply.png"
                        alt="whocanapply"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Who can apply</h3>
                      <p  class='text-sec'>
                        Anyone who is a resident of the United Kingdom and is 18
                        years of age or above can apply for our payment plan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/deposit.png"
                        alt="deposit"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Deposit</h3>
                      <p class='text-sec'>
                        A 25% initial deposit is required and the rest can be paid in installments for the next
                        4
                        months.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/interest-free.png"
                        alt="interest-free"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">Interest-free</h3>
                      <p  class='text-sec'>
                        Our <NuxtLink to="/"
                          >car repair service installment during
                          covid-19</NuxtLink
                        >
                         is interest-free. No extra money would be charged from
                        you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="ab-thumb">
                      <img
                        src="https://static.manyautosltd.com/uploads/apply.png"
                        alt="apply"
                      />
                    </div>
                    <div class="ab-content">
                      <h3 class="text-h6 font-weight-600">When do I apply</h3>
                      <p  class='text-sec'>
                        You can apply right after we give you a quote for your
                        services and purchases.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="pt-10 text-center d-lg-none">
                <car-repair-during-covid-19-dialog v-if='!isDevice.lg'></car-repair-during-covid-19-dialog>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section> -->

    <car-repair-during-covid-19-bar></car-repair-during-covid-19-bar>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/page-layout";
import CarRepairDuringCovid19Dialog from './__components/car-repair-during-covid-19--dialog.vue';
import CarRepairDuringCovid19Bar from './__components/car-repair-during-covid-19--bar.vue';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
    CarRepairDuringCovid19Dialog,
    CarRepairDuringCovid19Bar,
  },

  head: {
    title: "Car Repair During COVID 19 | Car Repair Instalment Plan",

    meta: [
      {
        hid: 'description', name: 'description',
        content:
          "We provide our customers with a risk-free environment. We are concerned for you and want to help you with car repair  during covid-19. We are offering an affordable car repair Instalment plan for you avail our Fix now pay later service offer .",
      },
      {
        name: "keywords",
        content:
          "car repair Instalment plan, pay later car repair, car service installments, vehicle service plan, fix now pay later, car repair  during covid-19",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content:
          "Car Repair During COVID 19 | Car Repair Instalment Plan",
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
        content: "logo-default.png",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: 'og:description',  property: 'og:description',
        content:
          "We provide our customers with a risk-free environment. We are concerned for you and want to help you with car repair  during covid-19. We are offering an affordable car repair Instalment plan for you avail our Fix now pay later service offer .",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content:
          "Car Repair During COVID 19 | Car Repair Instalment Plan",
      },
      {
        name: "twitter:description",
        content:
          "We provide our customers with a risk-free environment. We are concerned for you and want to help you with car repair  during covid-19. We are offering an affordable car repair Instalment plan for you avail our Fix now pay later service offer .",
      },
      {
        name: "twitter:image",
        content: "logo-default.png",
      },
      {
        itemprop: "image",
        content: "logo-default.png",
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
.text-sec {
  font-size: 21px;
  font-weight: 300;
  font-family: "Open Sans";
  color: #000000;
}
.covid-page .green2 {
  font-weight: 300;
}
@media (min-width: 960px) {
  .covid-page .booking .sec-2 {
    text-align: left;
  }
  .covid-page .booking .sec-1 {
    text-align: right;
  }
}
@media (min-width: 560px) and (max-width: 960px) {
}
@media (min-width: 1260px) {
}
// covid-sec-2
.service-section.home-3 {
  background-image: url("https://static.manyautosltd.com/uploads/covid-background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #003569eb;
  background-attachment: fixed;
}
.service-section .section-header h2 {
  color: #fff;
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
  margin: 10px;
  min-height: 238px;
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
.service-section .section-wrapper .no-gutters img {
  max-width: 15%;
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
  .service-section .section-wrapper .no-gutters img {
    max-width: 55%;
  }
}
@media (min-width: 600px) and (max-width: 992px) {
  .service-item.style-2 .service-inner {
    min-height: 270px;
  }
}

// covid-sec-2 end
// covid-sec-3 start
.covid-sec-3 h2 {
  font-size: 30px;
  line-height: 48px;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
}
.covid-sec-3 h3 {
  font-size: 30px;
  line-height: 48px;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
}
.covid-sec-3 p {
  font-size: 18px;
}
// last section
.bg-about {
  background-color: #144575;
  // margin-bottom: -41px;
}
// @media (min-width: 960px) {
//   .bg-about {
//     margin-bottom: -111px;
//   }
// }
.about-section.style-3 .about-content .ab-title > span {
  color: #00ff99;
  display: inline-block;
  font-size: 18px;
}
.bg-about h2 {
  color: #fff;
}
@media (min-width: 576px) {
  h2 {
    font-size: 30px;
    line-height: 48px;
  }
}
.bg-about p {
  color: #fff;
}
@media (min-width: 576px) {
  p {
    font-size: 16px;
  }
}
.about-section .about-thumb img {
  max-width: 100%;
}
.about-section .about-content .ab-title ul li .ab-content h3 {
  margin-bottom: 5px;
  color: #fff;
}
@media (min-width: 576px) {
  .about-section .about-content .ab-title ul li .ab-content h3 {
    font-size: 20px;
  }
}
.about-section .about-content .ab-title ul {
  margin-top: 30px;
  margin-left: -7px;
  padding-left: 0px;
}
.about-section .about-content .ab-title ul li {
  display: flex;
  flex-wrap: wrap;
}
.about-section .about-content .ab-title ul li .ab-thumb {
  width: 80px;
  height: 80px;
  text-align: center;
}
.about-section .about-content .ab-title ul li .ab-thumb img {
  max-width: 60%;
}
.about-section .about-content .ab-title ul li .ab-content {
  width: calc(100% - 95px);
}
.about-section .about-content .ab-title ul li {
  justify-content: space-between;
  padding: 15px 0;
}
.service-section p {
    line-height: 25px!important;
    font-weight: 300;
}
a {
    text-decoration: none;
}
.text-h3 {
    font-weight: 300 !important;
}


</style>
 <style lang="scss">
 @media (min-width: 960px) {
  .car-repair-during-covid-19 div.static-page-heading {
    padding-top: 160px !important;
    padding-bottom: 270px !important;
  }
}
.car-repair-during-covid-19.page.static-page .static-page-heading .slantdiv {
    background: #144575 !important;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: skew(0deg, -2deg) translate(0px, 46px);
}
 </style>