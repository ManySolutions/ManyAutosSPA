<template>
  <page-layout title='Vehicle Collection And Recovery Service'
    heading-bg='customer-v2/static-pages/allpics/collectionandrecovery1.jpg'>
    <div class="container">

      <!-- Services Detail -->
      <div class="exc-section">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <article class="services-detail" style="padding-top: 90px;">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Non Drivable Vehicle
                    Collection from <br> £40.00
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Collection Free if
                    drivable
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Drop off at your
                    convenience
                  </h5>
                </div>
                
              </div>
              <div class="clearfix"></div>
              <div class="entry-content mt-12">
                <p>
                  Many Autos LTD company is based in Reading, but we're operating throughout the surrounding area. We
                  cover all aspects of car maintenance and offer <b class="text-bold text-primary"> collection and
                    recovery services in Reading.</b> Vehicle delivery and recovery gives the ultimate convenience of
                  the car coming to you.
                </p>
                <p>
                  We serve a wide range of domestic and commercial clients with a prompt, reliable and professional
                  service at very competitive rates in Reading.
                </p>
                <p>
                  All our staff are highly trained and offer a professional, courteous and friendly service. If you
                  require car repairs, servicing, manual gearbox overhaul, reconditioning, MOT's, auto electrics, engine
                  diagnostics and brake servicing then you can rely on us for efficient work and friendly, knowledgeable
                  staff.
                </p>
                <p>
                  For professional and reliable <b class="text-bold text-primary"> vehicle collection and delivery
                    services,</b> contact us right now! Call Many Autos today on <a href="tel:01189876300" class="Bold">
                    01189 876300</a> via our Contact page for more information on our full range of services and see
                  what we can do for you. We look forward to hearing from you!
                </p>
              </div><!-- .entry-content -->
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

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'Vehicle Collection And Recovery Service',

    meta: [
      {
        name: 'description', 
        content: 'Many Autos LTD cover all aspects of car maintenance and offer collection and recovery services in UK. Vehicle delivery and recovery gives the ultimate convenience of the car coming to you.Call Many Autos today on 01189 876300 via our Contact page for more information on our full range of services.'
      },
      {
        name: 'keywords', 
        content: 'Vehicle Collection And Recovery, Auto Collection And Recovery UK,Car Maintenance Collection And Recovery'
      },
      {
        property: "og:title", 
        content: "Vehicle Collection And Recovery Service | ManyAutos LTD"
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
        content: "Many Autos LTD cover all aspects of car maintenance and offer collection and recovery services in UK. Vehicle delivery and recovery gives the ultimate convenience of the car coming to you.Call Many Autos today on 01189 876300 via our Contact page for more information on our full range of services."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Vehicle Collection And Recovery Service | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos LTD cover all aspects of car maintenance and offer collection and recovery services in UK. Vehicle delivery and recovery gives the ultimate convenience of the car coming to you.Call Many Autos today on 01189 876300 via our Contact page for more information on our full range of services."
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