<template>
  <page-layout title='Free Car & Vehicle Diagnostics Test'
    heading-bg='customer-v2/static-pages/allpics/vehicleenginediagnosticservice1.jpg'>
    <div class="container">
      <div class="exc-section">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <article class="services-detail" style="padding-top: 90px;">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Engine
                    Diagnostic from  £29.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Engine
                    Diagnostic from  £29.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Engine
                    Diagnostic from  £29.99
                  </h5>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="entry-content mt-12">
                <p>
                  The Engine Control Unit (ECU) frequently monitors the performance of the vehicle. There are many
                  potential error codes that may only only be read by specialist vehicle diagnostic equipment. A warning
                  light can show on the dashboard alerting an issue to you, a diagnostic check would be required to
                  fully understand the whole extent and reason for the problem.
                </p>
                <p>
                  Our Car Diagnostic Engine management systems present new hurdles for today's modern automotive
                  workplaces and ECU faults are becoming a greatly common part of our daily operations. We continuously
                  invest in the latest UK code technology to give professional car diagnostics in the UK that rectify a
                  full range of sub-system issues.
                </p>
                <p>
                  In many cases, work can be completed on a while-you-wait basis and we always offer fair and clear
                  prices!
                </p>
                <p>
                  Our accident repairs in our UK Garage are amongst the best available in the area. As part of the Fix
                  Auto network, we use the latest dent removal and refinishing techniques, water-based materials and
                  SMART repair technology to restore bodywork and paintwork. From a minor dent to major collision
                  damage, we can do it all!
                </p>
                <p>
                  We believe in offering a full service range that caters for every part, component and feature on your
                  vehicle. Fix Auto now provides alloy wheel refurbishment in the UK to remove scuffs and scratches from
                  your rims without needing expensive replacements.
                </p>
                <p>
                  Call us today for servicing work , mechanical repairs and alloy wheel refurbishment in the UK!
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

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'Free Car & Vehicle Diagnostics Test',

    meta: [
      {
        name: 'description', 
        content: 'Many Autos provides a complete vehicle diagnostic service like Engine diagnostic, Fault diagnostic, EML diagnostic, Exhaust Emissions diagnostic, Brake diagnostic, Clutch diagnostic and much more.Our trained technicians quickly identify the problem and stop costly component failures.'
      },
      {
        name: 'keywords', 
        content: 'Free engine diagnostic test Reading,car engine diagnostic test,Fault diagnostic, EML diagnostic, Exhaust Emissions diagnostic, Brake diagnostic, Clutch diagnostic Reading'
      },
      {
        property: "og:title", 
        content: "Free Car & Vehicle Diagnostics Test | ManyAutos LTD"
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
        content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Free Car & Vehicle Diagnostics Test | ManyAutos LTD"
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