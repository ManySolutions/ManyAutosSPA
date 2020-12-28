<template>
  <page-layout title='Alternator' heading-bg='customer-v2/static-pages/allpics/alternator1.jpg'>
    <div class="container">
      <div class="row">
        <section class="col-12 col-lg-9 ma-page-main-side margin-bottom-20" style="padding-top: 40px;">
          <div class="row">
            <div class="col-12">
              <p class="text-teal text-18 justify">An automotive charging system is made up of three major components
                the battery, the voltage regulator and an alternator. The alternator works with the battery to generate
                power for the electrical components of a vehicle, like the interior and exterior lights, and the
                instrument panel. An alternator gets its name from the term alternating current (AC). Alternators are
                typically found near the front of the engine and are driven by the crankshaft, which converts the
                pistons' up-and-down movement into circular movement. To learn more about the basic parts of car
                engines, some early model vehicles used a separate drive belt from the crankshaft pulley to the
                alternator pulley, but most cars today have a serpentine belt, or one belt that drives all components
                that rely on crankshaft power. Most alternators are mounted using brackets that bolt to a specific point
                on the engine. One of the brackets is usually a fixed point, while the other is adjustable to tighten
                the drive belt. Alternators produce AC power through electromagnetism formed through the stator and
                rotor relationship. The electricity is channelled into the battery, providing voltage to run the various
                electrical systems.</p>
            </div>
          </div>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item,i) in 1" :key="i" class="icon">
              <v-expansion-panel-header class="card-header">
                Where is the alternator and what does it look like?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The alternator is about the size of an old-fashioned pint glass and has lots of vents on its aluminium
                body that allow it to keep cool as it does its job. On one end of it is a pulley around which is a
                rubber belt. This same belt also goes around another pulley attached to the engine. As the engine turns,
                the belt turns with it and as it does so, it turns the pulley on the alternator. This pulley sits on a
                rotating shaft, called a rotor, that goes into the alternator. Look around the lower front and sides of
                your car’s engine. You’ll spot the alternator because unlike other components, it’s got those vents. You
                might also see that it’s pivoted at one end. Slackening off the bolt that secures this pivot allows you
                to move the alternator and adjust the belt. Too slack and it won’t turn the rotor too tight, and it
                risks damaging the alternator’s bearings.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                How does an alternator work?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The rotor is actually an electromagnet spinning inside fixed coils of tightly wound copper wire. These
                coils are called the stator, because they’re stationary. As the rotor spins, (remember, it’s being
                turned by the engine) it generates a small amount of electricity from two carbon bushes touching a
                couple of metal rings. This small charge generates a much bigger charge inside the stator. The
                electrical charge the stator generates is in the form of alternating current (AC). The trouble is, a car
                battery likes direct current (DC). The current needs to be rectified, so enter the rectifier. Rather
                like turning water into wine, the rectifier turns AC to DC. However, the battery likes its DC just so –
                not too much and not too little. So, to keep the battery happy, the alternator has a regulator that
                controls the amount of current going to the electromagnetic rotor.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                How do you know when the alternator is working?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Start your car’s engine. Did you notice that little red battery symbol come on briefly? It’s actually a
                warning symbol which, if it were to stay on, would indicate there’s a problem with the alternator. If
                the alternator has still got some life in it, the light may flicker or, if you make it work harder by
                turning on additional lights, the air con and the wipers, it may stay on. As the alternator really
                begins to pack up, those same systems may not function properly or stop working altogether. Since so
                many things are powered by electricity, you’d be surprised what can stop working, including vital
                instruments. However, it’s likely things will start failing in a pre-determined sequence with comfort
                features such as heated seats being the first to stop and the headlights, the last. If you pull over and
                raise the bonnet with the engine still running you might smell the alternator overheating, hear it
                making a grouching or whining noise or even, if you haven’t had it checked recently, see the rubber belt
                slipping or flapping about.

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                How do I know it’s not the battery at fault?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                When the alternator begins to fail or simply fails, the battery takes over but as we’ve seen, it does
                not last long. The trouble is, it’s slow death gets mixed up with the alternator’s so it can be hard to
                tell which is at fault. One easy way is to check the condition of the battery with a voltmeter. Another
                is to jump start the car. If the car starts and runs but soon stops, it’s the alternator that’s at fault
                because it’s not generating any electricity. If the car runs OK, the battery is likely to be the
                culprit. Time for a new one.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                What is a car alternator?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The car's alternator performs a simple, but vital job: to keep your car's battery charged. The battery
                is responsible for starting the car, spark plugs, lights, electrics, and sometimes power steering -
                quite a job - so it's essential that it's topped up - and that's what the alternator does.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i" class="icon">
              <v-expansion-panel-header class="card-header">
                What are common problems with an alternator?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                The alternator acts like a small generator: the engine spins it, and the alternator turns that spinning
                motion into electricity. The most common problems are worn brushes (the component that maintains
                constant electrical contact with the spinning alternator) and a failing voltage regulator which ensures
                that the charge is sent to the battery at the correct voltage.

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                What are the common symptoms of alternator problems?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Common signs of car alternator problems include the 'charge' or battery lights flashing on the
                dashboard, flickering or dimming headlights and interior lights and a growling or whining noise under
                the bonnet.

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                How to test an alternator for problems
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                A simple way to test an alternator for problems is to do what's known as the headlight test. Park your
                car with the headlights on or run it in neutral, then rev the engine. If the headlights dim you could
                well have an alternator problem. A better test is to take your car to a garage, where a car alternator
                can be tested using a multimeter tool.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                When should you consider an Alternator replacement?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Should you experience any problems like those listed above it is important to have the alternator
                inspected and, if necessary, have the alternator replaced. Always remember to service the alternator as
                and when stipulated in the manufacturer's guidelines. It is essential that the alternator is kept in
                tip-top condition, this should contribute to a prolonged and unproblematic alternator lifespan.

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header class="card-header">
                Alternator Replacement Free Collection and Delivery
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

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'Alternator',

    meta: [
      {
        name: 'description', 
        content: 'We repair and replace Alternator for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work.'
      },
      {
        name: 'keywords', 
        content: 'alternator, new alternator, alternator repair, alternator replace, alternator replacement'
      },
      {
        property: "og:title", 
        content: "Alternator | ManyAutos LTD"
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
        content: "We repair and replace Alternator for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Alternator | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "We repair and replace Alternator for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
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