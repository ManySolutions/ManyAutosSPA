<template>
  <page-layout title='Exhaust Repair, Fitting & Replacement and Free Check Reading'
    heading-bg='customer-v2/static-pages/allpics/exhaustservice1.jpg'>
    <div class="container">

      <!-- Services Detail -->
      <div class="exc-section">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <article class="services-detail" style="padding-top: 90px;">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Rear Exhaust
                    From<br> £29.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Centre Exhaust
                    From <br> £39.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon>Exhaust Flexi
                    Pipe
                    From £39.99
                  </h5>
                </div>

              </div>
              <div class="clearfix"></div>
              <div class="entry-content mt-12">
                <p>
                  Many Autos sports and performance exhaust systems come with a lifespan warranty. The piped are 2 mm
                  thick/gauge stainless steel and are obtainable up to 2 1/2 inches. The silencers/back boxes are
                  available four flavours, Low and Medium Noise, very polished edges and case.
                </p>
                <h5 style="font-size: 1.25rem; margin-bottom:12px;">
                  <em>
                    Medium Noise highly polished case - edge will need polishing by the customer
                  </em></h5>
                <p>
                  We can make a single exit system into a dual. Adding a dummy can give to the appearance of a dual exit
                  system. It's up to you!
                </p>
                <p>

                  Call us today on <a href="tel:01189876300" class="Bold"> 01189 876300</a> and get a FREE car exhaust
                  check! Many Autos also offer different ranges of exhaust systems like car exhaust fitting and car
                  exhaust replacement in the UK.
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
    title: 'Exhaust Repair, Fitting & Replacement and Free Check Reading',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Get a FREE car exhaust check and find out more about the range of exhaust services like car exhaust repair,car exhaust fitting, Exhaust cleaning, car exhaust replacement in Reading. Book right now an exhaust fitting at low cost in our Reading workshop UK'
      },
      {
        name: 'keywords', 
        content: 'free exhaust check Reading,car exhaust repair Reading,car exhaust fitting Reading,car exhaust replacement in Reading, Low cost exhaust repair'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Exhaust Repair, Fitting & Replacement and Free Check Reading | ManyAutos LTD"
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
        content: "Get a FREE car exhaust check and find out more about the range of exhaust services like car exhaust repair,car exhaust fitting, Exhaust cleaning, car exhaust replacement in Reading. Book right now an exhaust fitting at low cost in our Reading workshop UK"
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Exhaust Repair, Fitting & Replacement and Free Check Reading | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Get a FREE car exhaust check and find out more about the range of exhaust services like car exhaust repair,car exhaust fitting, Exhaust cleaning, car exhaust replacement in Reading. Book right now an exhaust fitting at low cost in our Reading workshop UK"
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