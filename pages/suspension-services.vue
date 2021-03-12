<template>
  <page-layout title='Suspension Repair & Replacement'
    heading-bg='customer-v2/static-pages/allpics/suspensionservices1.jpg'>
    <div class="container">
      <div class="exc-section">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <article class="services-detail" style="padding-top: 90px;">
              <div class="row">
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Anti Roll Bar
                    Link
                    From<br> £19.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Suspension
                    Arms
                    From<br> £57.99
                  </h5>
                </div>
                <div class="col-sm-4">
                  <h5 class="starts-from position-relative same-icon">
                    <v-icon class="MoveFaLeft position-absolute" style="color: #00B4D8;">mdi-tag</v-icon> Shock
                    Absorbers
                    From<br> £57.99
                  </h5>
                </div>

              </div>
              <div class="clearfix"></div>
              <div class="entry-content mt-12">
                <p>
                  Our technicians are ready to vary the ride height of your automobile by lowering the suspension
                  exploitation one among the kits accessible from the sports and performance market. We're happy to
                  provide components.
                </p>
                <p>
                  The suspension has the following benefits:
                  <br>
                  1) Looks - The lowered look is great
                  <br>
                  2) Lowering the centre of gravity of the vehicle improves the handling
                </p>
                <p>
                  Call us today on <a href="tel:01189876300" class="Bold"> 01189 876300</a>or visit our garage
                  in the UK and leave your suspension issues in our hands. Many Autos trained technicians are
                  specialists in car suspension repair.
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
    title: 'Suspension Repair Replacement | Many Autos LTD',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos LTD expert technician fix suspension problems right now. Our offers services Suspension ARMS, Suspension Bushes, Shock Absorbers, Coil Springs, suspension repair and  suspension replacement and free check in Reading.'
      },
      {
        name: 'keywords', 
        content: 'Suspension ARMS Reading, Suspension Bushes, Shock Absorbers in Reading, Coil Springs, suspension repair, suspension replacement Reading'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Suspension Repair Replacement | Many Autos LTD"
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
        content: "Many Autos LTD expert technician fix suspension problems right now. Our offers services Suspension ARMS, Suspension Bushes, Shock Absorbers, Coil Springs, suspension repair and  suspension replacement and free check in Reading."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Suspension Repair Replacement | Many Autos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos LTD expert technician fix suspension problems right now. Our offers services Suspension ARMS, Suspension Bushes, Shock Absorbers, Coil Springs, suspension repair and  suspension replacement and free check in Reading."
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