<template>
  <page-layout
    title='Tyre Balancing'
    heading-bg='customer-v2/static-pages/allpics/tyrebalancing1.jpg'
  >
       <div class="container">
      <div class="row">
        <section class="col-12 col-lg-9 ma-page-main-side margin-bottom-20" style="padding-top: 40px;">
          <div class="row">
            <div class="col-12">
              <p class="text-teal text-18 justify">One of the more common questions that we get asked in our centres is if wheel balancing and wheel alignment are two terms used to describe the same thing. After all, they sound very similar and both aid the long-term health of your tyre. Balancing and alignment are in fact two very different practices and whereas balancing addresses the distribution of weight around the wheel, alignment looks at the position of the wheels in relation to the road and each other. It’s easy to confuse the two, so here’s a closer look at each one and the benefits this can bring to you and your car Wheel balancing ensures that weight is distributed equally around the wheel and that the tyre rotates evenly. This involves adding small balancing weights to the rim which counter weight inconsistencies. If you imagine a set of balancing scales, when you add a heavy weight to one side the scales will tip. If you then add a number of smaller, less heavy items to the other side, the scales will gradually begin to tilt the more you add until finally, when you have added enough smaller weights, the scales will once again level out. Add too many weights and the scales will tip the other way. Although this is a simpler example, wheel balancing works in the same way and if an imbalance towards one side of the wheel is identified, wheel weights are added to the opposite side to even out the distribution of weight. It’s important to address wheels that are not correctly balanced to ensure you receive the best ride comfort. Incorrectly balanced wheels produce a vibration that is felt through the steering wheel when travelling above a certain speed that can cause considerable discomfort over time. What’s more, balance issues can cause premature wearing of your tyres, suspension and steering components.</p>
            </div>
          </div>
          <v-expansion-panels popout>
            <v-expansion-panel  class="icon">
              <v-expansion-panel-header class="card-header">
                What does wheel balancing do?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                When tyre are fitted to wheels at the point of sale, they are measured again on balancing machine, and correction weights are applied to counteract the combined effect of the tyre and wheel unbalance. After sale, tyres may be rebalanced if driver perceives excessive vibration.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What happens when you don’t balance tyre?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Your tyre will wear down prematurely when the wheel assembly isn't balanced, and you may be in for some not so good vibrations. Even a quarter of an ounce of imbalance can put uneven pressure on the treads, causing uneven tread wear and excess heat that shorten the life of the tyre.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What does an out of balance tyre feel like?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The common symptoms of out of balance tyre are uneven and faster tread wear, poor fuel economy, and vibration in the steering wheel, the floorboard or the seat that gets worse at faster speeds. If a front tyre isn't properly balanced, you'll likely feel vibration in the steering wheel.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Is tyre balancing necessary?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Tyre balancing is different from wheel alignment, which involves the angle of the wheels and their relation to the ground. As you drive, your tyre lose balance, so periodic tyre balancing service is needed to return proper balance. Tyre imbalance can cause problems for both the vehicle and tyres.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Do new tyre need balancing?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                When tyres are installed, the wheels need to be balanced. If this is not done, the new tyre will most likely not roll as smoothly, causing a number of concerns to the driver and vehicle, most notably when the steering wheel shakes and rocks back and forth during specific speeds. Wheels can be balanced on a wheel balancing machine available at all Many Autos branches. The tyre and wheel assembly are mounted on the machine which then spins the wheel to calculate even the slightest variance in weight across the wheel. The balancing machine then highlights the exact position where a counter weight should be applied and which size of weights to use to correctly balance the wheel.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
               Tyre Balancing Free Collection and Delivery
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify"> Sometimes, the worst part of getting your car fixed is having to
                  bring it to the garage. We are therefore happy to offer our customers a free collection and delivery
                  service If you prearrange a collection, we will pick your car up from your home or place of work and
                  drive it to our premises, carry out all the necessary work (having consulted you) and deliver it back
                  to you at the end of the day.</p>
                <p class="text-teal text-18 justify">We are able to tow, jump start or repair your vehicle if you are
                  experiencing problems or broken down for a small fee. If we can't sadly start your vehicle, we can
                  contact a local recovery firm to collect your vehicle for a very competitive price.</p>
                <ul class="list mt-2 mb-2">
                  <li>Don't want to waste your day off? </li>
                  <li>You don't have the time to take your car in for a service or repairs? </li>
                  <li>Have you got problems with getting to and from the garage? </li>
                </ul>
                <p class="text-teal text-18 justify">Here at Many Autos, we believe that we offer a valuable product
                  with our Free Collection and Delivery Service, we can collect either from your place of work or from
                  your home address. If you are unsure about whether the address you are considering having your vehicle
                  collected from is not within our range, then please do contact us.<br></p>
                <p class="text-teal text-18 justify">Many Autos operate a fleet of pool cars with a dedicated driver, so
                  wherever we are collecting from, we need to be able to leave one of our pool vehicles either in your
                  work car park / parking space, or if in a residential area, we would need to be able to leave our car
                  either at your house or on the road with a permit if required. We would be grateful if you could bear
                  this in mind when booking to use our free Collection and delivery service</p>

              </v-expansion-panel-content>
            </v-expansion-panel>
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
    title: 'Tyre Balancing',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'We do tyre balancing for all makes and models in Reading, United Kingdom. We also provide free collection and delivery service from your home or place of work.'
      },
      {
        name: 'keywords', 
        content: 'tyre balancing, balancing, rear tyre balancing, front tyre balancing'
      },
      {
        property: "og:title", 
        content: "Tyre Balancing | ManyAutos LTD"
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
        hid: 'og:description', name: 'og:description', property: 'og:description', 
        content: "We do tyre balancing for all makes and models in Reading, United Kingdom. We also provide free collection and delivery service from your home or place of work."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Tyre Balancing | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "We do tyre balancing for all makes and models in Reading, United Kingdom. We also provide free collection and delivery service from your home or place of work."
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