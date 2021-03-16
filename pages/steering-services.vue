<template>
  <page-layout title='Steering Replacement & Repair '
    heading-bg='customer-v2/static-pages/allpics/steeringservices1.jpg'>
    <div class="container">
      <div class="exc-section">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <article class="services-detail" style="padding-top: 90px;">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Steering Fluid
                    from <br> £48.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Steering Racks
                  from £149.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Track Rods
                  from <br> £99.99
                  </h5>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="entry-content mt-12">
                <p>
                  We are the best power steering service providers in Reading (the UK).
                </p>
                <p>
                  Many Autos LTD aim to produce all the necessary information and reviews on current steering to enable
                  you. We're going to ensure your car faults are repaired quickly and as inexpensively as possible.
                </p>
                <p>
                  Call us on <a href="tel:01189876300" class="Bold"> 01189 876300</a> today and compare power steering
                  repairs, replacement prices in the UK to find the best deal at Many Autos LTD.
                </p>
              </div>
            </article>
          </div>
          <div class="clearfix"></div>
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
    title: 'Steering Replacement |Steering repair',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos LTD offers Steering repair and Steering replacement and free check steering in United Kingdom. Our expert technician fix Vehicle steering problems in cheap rates. Call us right now or click here for more detail.'
      },
      {
        name: 'keywords', 
        content: 'Steering Repair services United Kingdom, Steering replacement services United Kingdom, free Steering check United Kingdom, Cheap Steering Repair in United Kingdom'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Steering Replacement |Steering repair"
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
        content: "Many Autos LTD offers Steering repair and Steering replacement and free check steering in United Kingdom. Our expert technician fix Vehicle steering problems in cheap rates. Call us right now or click here for more detail."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Steering Replacement |Steering repair"
      },
      {
        name: "twitter:description", 
        content: "Many Autos LTD offers Steering repair and Steering replacement and free check steering in United Kingdom. Our expert technician fix Vehicle steering problems in cheap rates. Call us right now or click here for more detail."
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
@media (max-width:513px){

.page.static-page .static-page-heading+div{

    padding-top: 0px;
}
}
.exc-section .services-detail .same-icon{

    font-size: 19px;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding-left: 40px;

}
.exc-section .services-detail .same-icon .v-icon{

    top:4px;
    left: 0px;
}

 h5{
    color: #00B4D8;
}
</style>