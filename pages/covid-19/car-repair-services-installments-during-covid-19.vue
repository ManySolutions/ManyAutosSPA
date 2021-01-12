<template>
  <page-layout
    title='Car Repair During COVID 19 | Car Repair Instalment Plan'
    heading-bg='customer-v2/static-pages/registergarages.jpg'
  >
    <v-container>
      <v-row>
        <div class="col-12">
          <div class="row align-items-center pb-4 text-md-right text-center booking">
            <div class="col-md-6 margin-top-25 order-md-2 text-left">
              <img src="https://static.manyautosltd.com/uploads/car-repair-services-installments-during-covid-19.jpg" alt="car repair services installments during covid 19">

            </div>
            <div class="col-md-6 margin-top-5-per" style="margin-top:-35px;">
              <h2 class="green2">You Do The Booking</h2>
              <p class="text-teal text-22">It couldn't be easier to get started. Simply pick up the phone or book
                online. Enter your vehicle registration, postcode and follow the simple steps to tell us what service
                you require.</p>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="row align-items-center pb-4 text-center booking">
            <div class="col-md-6 text-md-right">
              <img :src="assets('customer-v2/static-pages/collection.jpg')" alt="We Do The Collection">

            </div>
            <div class="col-md-6 margin-top-5-per" style="margin-top:-35px;">
              <h2 class="green2">We Do The Collection</h2>
              <p class="text-teal text-22">
                Take advantage of our free collection & delivery service from
                home or work. If your vehicle is not road worthy, we can arrange
                a recovery service for you.
              </p>
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

</style>