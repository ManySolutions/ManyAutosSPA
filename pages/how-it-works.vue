<template>
  <page-layout title='How it works' heading-bg='customer-v2/static-pages/howitworks.jpg'>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="text-teal text-center para">
            Many Autos is a simple and complete solution for your car maintenance.
            Why waste time on traditional comparison sites looking for the best deal,
            Many Autos offer a hassle free solution for all kind of car repairs and services.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="row align-items-center pb-4 text-md-right text-center booking">
            <div class="col-md-6 margin-top-25 order-md-2 text-left">
              <img :src="assets('/customer-v2/static-pages/booking.png')" alt="You Do The Booking">

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
              <img :src="assets('/customer-v2/static-pages/collection.jpg')" alt="We Do The Collection">

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

        <div class="col-12">
          <div class="row align-items-center pb-4 text-md-right text-center booking">
            <div class="col-md-6 order-md-2">
              <img style="display:block;" :src="assets('/customer-v2/static-pages/service.jpg')" alt="We Do The Service">

            </div>
            <div class="col-md-6 margin-top-5-per" style="margin-top:-35px;">
              <h2 class="green2">We Do The Service</h2>
              <p class="text-teal text-22">Sit back, relax and we will do the work. We will keep you informed every step
                of the way. If any additional work is required, one of our advisors will always seek authorisation from
                you before any work is carried out. We use OEM quality parts to protect your manufacturer warranty.</p>
            </div>
          </div>

        </div>

        <div class="col-12">
          <div class="row align-items-center text-center pb-4 booking">
            <div class="col-md-6 text-md-right ">
              <img :src="assets('/customer-v2/static-pages/delivery.jpg')" alt="We Do The Delivery">

            </div>
            <div class="col-md-6 margin-top-10-per" style="margin-top: -35px;">
              <h2 class="green2">We Do The Delivery</h2>
              <p class="text-teal text-22">Have your vehicle delivered to your home or work address free of charge, with
                the service book stamped and including a 12 month warranty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'How it works',

    meta: [
      {
        name: 'description', 
        content: 'Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300'
      },
      {
        name: 'keywords', 
        content: 'how it works, free collection and delivery, car service, repair, MOT, free collection, free delivery, collection and delivery'
      },
      {
        property: "og:title", 
        content: "How it works | ManyAutos LTD"
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
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "How it works | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
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
h2{
    font-size: 2rem;
}
       .para{
           padding-top: 130px;
           padding-bottom: 20px;
       }
   
       @media (max-width:768px){
           .para {
               padding-top: 40px;
           }
       }
       .green2{
           font-weight: 200;
       }
       
      @media (max-width:768px){
          .green2{
            padding-top: 10px;
              
          }
      }
      
</style>