<template>
  <page-layout
    title='Car Repair During COVID 19 | Car Repair Instalment Plan'
    heading-bg='customer-v2/static-pages/registergarages.jpg'
  >
    <v-container class="covid-page" style="padding-top:50px;">
      <v-row>
        <div class="col-12">
          <div class="row align-items-center pb-4  text-center booking">
            <div class="col-md-6 margin-top-25 order-md-2">
              <img src="https://static.manyautosltd.com/uploads/pexels-matheus-bertelli-799443.jpg" alt="car repair services installments during covid 19" class="image-one">

            </div>
            <div class="col-md-6 margin-top-5-per sec-1">
              <h2 class="green2">Helping You To Get Back On The Road</h2>
              <p class="text-teal text-22 mt-4">We always say that customers are our topmost priority. In critical times like
                this, we want to help you in any way we can.</p>
              <p class="text-teal text-22">With the support from our network of garages, we are following all the social
                distancing measures and offering Auto repair payment plans so you can have a safe and affordable
                experience.</p>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="row align-items-center pb-4 text-center booking">
            <div class="col-md-6 ">
              <img src="https://static.manyautosltd.com/uploads/open-in-covid19.jpg" alt="open-in-covid19" class="image-two">

            </div>
            <div class="col-md-6 margin-top-5-per sec-2">
              <h2 class="green2">We Are Open And Unaffected by COVID-19 </h2>
              <p class="text-teal text-22 mt-4">Our garages are open and providing the services to maintain your car during this pandemic. We are taking all the social distancing measures to protect our customers as well as our employees. You can book any service online as we are always available digitally.</p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
      <v-container 
    class='covid-sec-2'
  >
    <v-row>
      <v-col cols=12 class="text-center mb-7 pb-lg-5">
        <p style='max-width:700px' class='m-auto mb-5 mb-md-10'>
          We will ask you to help us a little by following the necessary measures with us
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols=12 lg=3 xl='4' order-lg=2 class="text-center">
        <!-- <img 
          :src="assets('customer-v2/011.png')" 
          alt="Our Services at ManyAutos LTD"
          class='pb-5 pt-4'
        > -->
          
      </v-col>

      <v-col cols=12 lg=3 order-lg=1>
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-check-circle ml-lg-2 mr-2 mr-lg-0 order-lg-2"></i>
              <span class="order-lg-1"> Social distancing</span>
            </h6>
            <p class='text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right m-auto'>
              Social distancing rules are followed in our garage. Every person has to keep a 2-meter distance from each
              other and avoid any kind of contact.
            </p>
          </div>
        </div>

        <div class="media text-right">
          <div class="media-body med">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-check-circle ml-lg-2 mr-2 mr-lg-0 order-lg-2"></i>
              <span class=""> Masks are compulsory</span>
            </h6>
            <p class='m-auto text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right'>
              All the employees and customers are supposed to wear masks at all times. You won’t be allowed to enter the
              garage without a face mask.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols=12 lg=3 order-lg=3 >
        <div class="media-second text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-check-circle mr-2"></i>
              <span class="">Hygiene is a priority</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              All of our employees are extra careful about hygiene. They wash their hands and sanitize them at all
              times. We sanitize your car before and after it has been worked on in our garage.
            </p>
          </div>
        </div>
        
        <div class="media text-right">
          <div class="media-body mb-0 med">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-check-circle mr-2"></i>
              <span class="">Protective gear</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              We offer a no-contact service; our employees will be provided fresh gloves for each car servicing. 
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
     <v-row>
      <v-col cols=12 class="text-center mb-7 pb-lg-5 media-body-last">
        <div class="media-body" style="max-width:700px; margin:auto;">
            <h6 class=" text-center mt-12">
              <i class="text-primary ico-ma-check-circle mr-2"></i>
              <span class="">Checking for everyone’s safety</span>
            </h6>
            <p class='text-center'>
              We will check our employee's fever every day and look out for any symptoms regarding covid-19. This will
              be done for your safety and your peace of mind. 
            </p>
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
    title: 'Car Repair During COVID 19 | Car Repair Instalment Plan',

    meta: [
      {
        name: 'description', 
        content: 'We provide our customers with a risk-free environment. We are concerned for you and want to help you during covid-19. We are offering an affordable payment plan for you.'
      },
      {
        name: 'keywords', 
        content: 'car repair payment plan, pay later auto repair, car service installments, vehicle service plan, fix now pay later '
      },
      {
        property: "og:title", 
        content: "Car Repair During COVID 19 | Car Repair Instalment Plan | ManyAutos LTD"
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
        property: "og:description", 
        content: "We provide our customers with a risk-free environment. We are concerned for you and want to help you during covid-19. We are offering an affordable payment plan for you."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Car Repair During COVID 19 | Car Repair Instalment Plan | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "We provide our customers with a risk-free environment. We are concerned for you and want to help you during covid-19. We are offering an affordable payment plan for you."
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
.covid-page .green2{
  font-weight: 300;
}
@media (min-width: 960px){
  .covid-page .booking .sec-2 {
  text-align: left;
}
 .covid-page .booking .sec-1 {
  text-align: right;
}
}
@media (min-width: 560px) and (max-width:960px){
  .covid-page .booking .image-one{

    max-width: 57%;
    text-align: center;
  }
  .covid-page .booking .image-two{

    max-width: 60%;
  }
}
@media (min-width: 1260px){
  .covid-page .booking .image-one{

    max-width: 70%;
    text-align: center;
  }
  .covid-page .booking .image-two{

    max-width: 70%;
  }
}
.covid-sec-2 .media-body h6{
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.9em;
    font-family: inherit;
    text-transform: uppercase;
}
.covid-sec-2 .media .media-body h6{
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.9em;
    font-family: inherit;
    text-transform: uppercase;
}
.covid-sec-2 .media-body h6 i{
    font-size: 40px;
    vertical-align: sub;
}
.covid-sec-2 .media-second .media-body h6{
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.9em;
    font-family: inherit;
    text-transform: uppercase;
}
.covid-sec-2 .media-second .media-body h6 i{
    font-size: 40px;
    vertical-align: sub;
}
@media (max-width:1263px){
  .covid-sec-2 .media-second{
    margin-top: -20px;
}
}
.covid-sec-2 .media .media-body h6 i{
    font-size: 40px;
    vertical-align: sub;
}
@media (max-width:1263px){
  .covid-sec-2 .media .media-body{
    margin-bottom: 50px;
}
}
@media (max-width:1263px){
  .covid-sec-2 .media-second .media-body{
    margin-bottom: 50px;
}
}
.covid-sec-2 .media-body-last .media-body h6{
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.9em;
    font-family: inherit;
    text-transform: uppercase;
}
.covid-sec-2  .media-body-last .media-body h6 i{
    font-size: 40px;
    vertical-align: sub;
}
@media (max-width:1263px){
  .covid-sec-2 .media-body-last {
    margin-top: -24px;
}
}
@media (min-width: 1264px){
  .covid-sec-2 .media .media-body.med {
    margin-top: 30px;
  }
}
</style>