<template>
  <page-layout title='ABS Hydraulic Units' heading-bg='customer-v2/static-pages/allpics/abs-hydraulic1.jpg'>
    <div class="container">
      <div class="row">
        <section class="col-12 col-lg-9 ma-page-main-side margin-bottom-20">
          <div class="row">
            <div class="col-12">
              <p class="text-teal text-18 justify" style="padding-top: 30px;">
                ABS hydraulic units provide the pressure your car needs to prevent its wheels from locking.
                Your cars ABS hydraulic unit receives commands from the ABS controller. This in turn obtains
                speed-related data from sensor rings on each wheel. When the sensor ring detects that one of your wheels
                is spinning at a different speed than the others, the controller tells the ABS hydraulic unit to close
                the solenoid valve. This then reduces the braking force on the offending wheel and stops it from locking
                for more than a nanosecond. A faulty ABS hydraulic unit could cause your car to fail its MOT. If your
                wheels are locking and you see a warning light appear on the dashboard, it could be that your ABS
                hydraulic unit is not working as it should.
              </p>
            </div>
          </div>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item,i) in 1" :key="i" class="icon">
              <v-expansion-panel-header class="card-header">
                ABS Hydraulic Units and Sensors
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                ABS (or anti-lock braking system) is what keeps your wheels gripped to the road when braking sharply and
                prevents them from locking up to keep you in full control. The hydraulic unit in the ABS system works by
                equalising the pressure on each individual brake or adjusting it to stop the car from skidding or
                veering. Along with the ABS sensor, the hydraulic unit is an important component in terms of your car's
                safety, and we advise giving it the same TLC as the rest of your vehicle.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                ABS Hydraulic anti-lock brakes really work?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Anti-lock brakes really do help you stop better. They prevent wheels from locking up and provide the
                shortest stopping distance on slippery surfaces.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                ABS Hydraulic But do they really prevent accidents?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                This is the true measure of the effectiveness of ABS systems. The Insurance Institute for Highway Safety
                (IIHS) has conducted several studies trying to determine if cars equipped with ABS are Â­involved in
                more or fewer fatal accidents. It turns out that in a 1996 study, vehicles equipped with ABS were
                overall no less likely to be involved in fatal accidents than vehicles without. The study stated that
                although cars with ABS were less likely to be involved in accidents fatal to the occupants of other
                cars, they are more likely to be involved in accidents fatal to the occupants of the ABS car, especially
                single-vehicle accidents.There is much speculation about the reason for this. Some people think that
                drivers of ABS-equipped cars use the ABS incorrectly, either by pumping the brakes or by releasing the
                brakes when they feel the system pulsing. Some people think that since ABS allows you to steer during a
                panic stop, more people run off the road and crash. Some more recent information may indicate that the
                accident rate for ABS cars is improving, but there is still no evidence to show that ABS improves
                overall safety.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                What are an ABS pump hydraulic units?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify"> A brief teardown and look inside an ABS pump. The Anti-lock
                  Braking system in your car prevents your wheels from locking up during braking. Preventing a skid is
                  key to maintaining steering control and stability during a manoeuvre.</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                ABS Hydraulic Free Collection and Delivery
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
                  collected from is not within our range, then please do contact us.</p>
                <p class="text-teal text-18 justify">Many Autos operate a fleet of pool cars with a dedicated driver, so
                  wherever we are collecting from, we need to be able to leave one of our pool vehicles either in your
                  work car park / parking space, or if in a residential area, we would need to be able to leave our car
                  either at your house or on the road with a permit if required. We would be grateful if you could bear
                  this in mind when booking to use our free Collection and delivery service.</p>

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

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'ABS Hydraulic Units',

    meta: [
      {
        name: 'description', 
        content: 'We repair and replace ABS Hydraulic Units for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work.'
      },
      {
        name: 'keywords', 
        content: 'abs hydraulic units, new abs hydraulic units, abs hydraulic units repair, abs hydraulic units replace, abs hydraulic units replacement'
      },
      {
        property: "og:title", 
        content: "ABS Hydraulic Units | ManyAutos LTD"
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
        content: "We repair and replace ABS Hydraulic Units for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "ABS Hydraulic Units | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "We repair and replace ABS Hydraulic Units for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
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