<template>
  <page-layout title='Finance' heading-bg='customer-v2/static-pages/allpics/finance1.jpg'>
    <div class="container">
      <div class="row">
        <section class="col-12 col-lg-9 ma-page-main-side margin-bottom-20" style="padding-top: 40px;">
          <div class="row">
            <div class="col-12">
              <p class="text-teal text-18 justify">Spread the cost of any unexpected repair, service items, body shop
                parts with 0% finance. Interest-free finance packages are available over a 3, 4, 5, or 6 months basis,
                allowing you to budget effectively. Applying is quick and easy, and we can advise you if you are
                eligible within 5 minutes.</p>
            </div>
          </div>
          <v-expansion-panels popout>
            <v-expansion-panel  class="icon">
              <v-expansion-panel-header class="card-header">
                Can I finance car repairs?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Yes, you can pay for all or some of your car repair bill with car service and repair finance. From
                replacing car parts to a full transmission, engine, repair, service, mot repair maintaining your vehicle
                can get costly. If you need help paying for routine service or urgent repairs, Many Autos car service
                and repair could be the answer.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Finance on servicing and repair
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                At Many Autos we want to help ease the cost of your car repair service, and any unexpected vehicle
                repairs, by offering our customers the option to spread the cost over either four or twelve months
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Servicing and repair spread the cost
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Finance on servicing and repair spread the cost over 3, 4, 5, or 6 months You pay 25% of the bill when
                work is completed. The remaining 75% is spread over over 3, 4, 5, or 6 months payments. You must have a
                valid UK debit card to arrange the payment plan
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Finance available on following services
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Alternator Anti Roll Bar Link Air Suspension Brakes Cv Joint Car Service Catalytic Converter Crankshaft
                Clutch Coil Springs Drag Links Drive Shaft Exhaust Repair Flywheel Fuel Pump Fuel Injectors Glow Plug
                Handbrake Head Gasket New Tyre Starter Motor Suspension Services Radiator Rear Axle Steering Thermostat
                Vacuum Pump Water Pump Replacement Wheel Cylinder Finance on servicing and repair spread the cost over
                3, 4, 5, or 6 months. You pay 25% of the bill when work is completed. The remaining 75% is spread over
                3, 4, 5, or 6 months payments. You must have a valid UK debit card to arrange the payment
              </v-expansion-panel-content>
            </v-expansion-panel>
            <h4 class="text-center mt-5" style="font-size: 1.2rem;">For more help or advice please call us on
              <strong>01189876300</strong> to speak to one of our friendly team member.</h4>
          </v-expansion-panels>

        </section>

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
    title: 'Finance | Car Finance',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Interest-free finance packages are available over a 3, 4, 5, or 6 months basis, allowing you to budget effectively. Applying is quick and easy, and we can advise you if you are eligible within 5 minutes so Don’t waste your Time get your Car repair Finance From Many Autos LTD to Keep your Car in Good Health.'
      },
      {
        name: 'keywords', 
        content: 'finance, interest free finance, repair finance, service finance, garage finance, car repair finance'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Finance | Car Finance"
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
        content: "Interest-free finance packages are available over a 3, 4, 5, or 6 months basis, allowing you to budget effectively. Applying is quick and easy, and we can advise you if you are eligible within 5 minutes so Don’t waste your Time get your Car repair Finance From Many Autos LTD to Keep your Car in Good Health."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Finance | Car Finance"
      },
      {
        name: "twitter:description", 
        content: "Interest-free finance packages are available over a 3, 4, 5, or 6 months basis, allowing you to budget effectively. Applying is quick and easy, and we can advise you if you are eligible within 5 minutes so Don’t waste your Time get your Car repair Finance From Many Autos LTD to Keep your Car in Good Health."
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