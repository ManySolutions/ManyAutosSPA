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
</style>