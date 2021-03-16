<template>
  <page-layout title='Online service book| Many Autos LTD'
    heading-bg='customer-v2/static-pages/allpics/onlineservicebook1.jpg'>
    <div class="container">
      <div class="col-md-10 col-md-offset-1">
        <div class="row">
          <div class="col-12">
            <p class="text-teal text-18 justify" style="padding-top: 30px;">
              If you have ever considered buying a second hand car, one of the main pieces of advice you will have
              received is to make sure the vehicle has a full service history or service record (also known as service
              book). The service
              history in the traditional sense was a book that came with the vehicle when it was purchased new. Any work
              that is carried out on the vehicle is recorded in this book and is accompanied by a garage stamp,
              verifying
              that the work listed was actually carried out. This book will carry a history of all the vehicle
              maintenance that has been carried out on the vehicle.
            </p>
            <h3 class="text-blue" style="color: #00b4d8; font-size: 1.5rem;font-weight: 500;">We Maintain Online Service
              Book For Following Makes</h3>
            <p>We work with the following manufacturers: <span class="text-teal"><strong> Audi, BMW, Land Rover, Mazda,
                  Mercedes, Mini, Seat, Skoda, Smart, Volkswagen</strong></span>. So rest assured we are committed to
              providing you with the best service which includes making sure we update your records once we have carried
              out the work on the vehicle.</p>
          </div>
      <v-expansion-panels popout>
      <v-expansion-panel  class="icon">
        <v-expansion-panel-header class="card-header">
          Why is this so important?
        </v-expansion-panel-header>
        <v-expansion-panel-content eager class="card-header-body">
          When buying a second hand car it is most important to make sure that the vehicle has been maintained to the
          manufacturer recommendations. Firstly this is to ensure there is no cause of issue with the manufacturer
          warranty. Secondly it is to ensure that the car has been looked after as following the manufacturers
          maintenance schedule is very much likely to keep your car in good health and reduce chances of any problems
          from issues such as dirty oil clogging the engine or dirty filters blocking air flow.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel >
        <v-expansion-panel-header class="card-header">
          What has changed?
        </v-expansion-panel-header>
        <v-expansion-panel-content eager class="card-header-body">
          With the rise of 'the internet of things' and the integration of the internet into our everyday lives, it was
          inevitable that the physical service book would become a relic of the past. Many manufacturers have moved away
          from providing a physical book to be filled out and stamped and now have 'DSR' (Digital Service Records or
          'DSB' (Digital Service Books) or some variation of this name. The function remains the same. The online
          service record provides a historic record of all of the maintenance and services that have been carried out on
          your vehicle. A fully maintained service record not only ensures that you have not voided your manufacturer
          warranty it can also significantly increase the resale value of your car. At Many Autos we understand that
          this is a valuable service to provide and as such we have accounts with many of the big vehicle manufacturers
          and have been authorised to view and update the digital service records. We work with the following
          manufacturers: Audi, BMW, Land Rover, Mazda, Mercedes, Mini, Seat, Skoda, Smart, Volkswagen. So rest assured
          we are committed to providing you with the best service which includes making sure we update your records once
          we have carried out the work on the vehicle.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
        <h4 class="text-center mt-10" style="font-size: 1.2rem;">For more help or advice please call us on <strong>01189876300</strong> to
      speak to one of our friendly team member.</h4>
        </div>
      </div>
    </div>


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
    title: 'Online service',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos One of the Leading car Garage in United Kingdom providing service and repair of all makes and models in United Kingdom. We also provide free collection and Delivery service from your home or place of work you just need to book your online service to get free quote online.'
      },
      {
        name: 'keywords', 
        content: 'Online service, Free quote online, free collection and Delivery, car Garage in United Kingdom'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Online service"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: URL
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:site_name',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "Many Autos One of the Leading car Garage in United Kingdom providing service and repair of all makes and models in United Kingdom. We also provide free collection and Delivery service from your home or place of work you just need to book your online service to get free quote online."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Online service"
      },
      {
        name: "twitter:description", 
        content: "Many Autos One of the Leading car Garage in United Kingdom providing service and repair of all makes and models in United Kingdom. We also provide free collection and Delivery service from your home or place of work you just need to book your online service to get free quote online."
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
        hid: 'og:type',
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.card-header{
    background: whitesmoke;
    border: 1px solid #ececec;
    color: #1ea5c7;
    padding: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
}
.card-header-body{
    background-color: #fff;
    padding-top: 16px;
}
</style>