<template>
  <page-layout title='MOT Test' heading-bg='customer-v2/static-pages/mot.jpg'>
    <div class="container">
      <div class="row">
        <section class="col-12 col-lg-9 ma-page-main-side margin-bottom-20" style="padding-top: 40px;">
          <div class="row">
            <div class="col-12">
              <p class="text-teal text-18 justify para">MOT testing is required by law on all vehicles in the UK that
                are 3 years old or more. The annual inspection follows strict criteria set out by the DVSA that
                determines if your car is fit for purpose and in roadworthy condition. The MOT test covers a broad range
                of vehicle safety checks including lights, tyres, seatbelts and emissions and can only be carried out by
                a MOT garage with DVSA-approved examiners.</p>
              <p class="text-teal text-18 justify">During the MOT test the nominated tester, a person accredited by the
                DVSA to assess your vehicle, will conduct a comprehensive inspection to ensure the vehicle is in
                roadworthy condition. However, it is not the same as having your vehicle serviced and the MOT test does
                not check the general mechanical condition of the vehicle. Also, the assessment is based on the
                condition of the vehicle on the day.</p>
              <p><img style="margin:0 auto; display:block;" class="img-responsive"
                  :src="assets('customer-v2/static-pages/mot-checks.png')" alt="MOT-Checks"></p>
              <p class="text-teal text-18 justify">If the vehicle passes, the nominated tester will separately list and
                inform you of any 'advisory' or 'minor' items that will require attention in the near future, so you can
                keep an eye on them. If the vehicle fails you will be required to get the necessary repairs done ,you
                may be entitled to a free re-test.</p>
            </div>
          </div>
          <v-expansion-panels popout>
            <v-expansion-panel  class="icon">
              <v-expansion-panel-header class="card-header">
                MOT Test Changes Since 20 May 2018
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify">Major changes to the MOT test came into force on 20th May this year
                  regarding the way faults and problems are classified when a vehicle is tested. From this date, all
                  vehicle faults are recorded as either Minor, Major or Dangerous. All Class 3,4,5 and 7 vehicles are
                  tested against the new criteria; this includes all cars, motorhomes, buses and goods vehicles up to
                  3,500kg.</p>
                <p class="text-teal text-18 justify">At present, a vehicle can simply pass, fail or receive an advisory
                  on a specific item on the MOT test. So, how does the new MOT criteria for recording defects work?
                  Here’s an explanation of the new categories plus some examples from the draft MOT guidance from the
                  DVSA.</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Minor MOT Faults
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify">A ‘minor’ fault would be considered as one where the problem does
                  not cause an immediate safety risk but should be rectified soon. This is very similar to the existing
                  system whereby an advisory is given to items that the driver should be aware of and may cause a future
                  MOT failure if not addressed. A MOT certificate will still be issued if a vehicle only has minor
                  faults.</p>
                <p class="text-teal text-18 justify">Example:<br>All vehicles manufactured since 1971 must have a
                  minimum of 2 brake lights (or stop lights) at the rear of the vehicle. If a vehicle has three brakes
                  lights and one is not functioning, the vehicle will receive a Minor defect on the MOT.</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Major MOT Faults
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <div class="panel-body">
                  <p class="text-teal text-18 justify">A ‘major’ fault is more serious, poses a potential safety risk to
                    drivers and others. It could also be a defect that has a damaging impact on the environment. These
                    faults will result in a MOT failure and the owner will not be issued with an MOT pass certificate
                    until the issues have been rectified. </p>
                  <p class="text-teal text-18 justify">Example:<br>Using the same vehicle as an example, if two of the
                    three brake lights are inoperative (specifically, more than ½), the vehicle will receive a Major
                    defect on the MOT.</p>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Dangerous MOT Faults
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <div class="panel-body">
                  <p class="text-teal text-18 justify">Meanwhile a fault classed as ‘dangerous’ is one that poses an
                    immediate risk to the safety of the driver and other road users, and as such, the vehicle should not
                    be driven until the fault has been rectified. This will also result in an immediate MOT failure.</p>
                  <p class="text-teal text-18 justify">Example:<br>Let’s take our vehicle with a brake light problem
                    once again. If all of the brake lights are missing, broken or inoperative, the vehicle will receive
                    a Dangerous defect on the MOT since other road users will have no way of telling if the vehicle is
                    braking or coming to a stop.</p>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Will the MOT still include advisories?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Yes, minor faults will still be recorded in the same way and will appear as advisory items on the MOT
                test certificate. However, the DVSA have added that, when the new MOT is rolled out in May, the
                certificate will likely include explicit safety warnings for cars with serious faults and will highlight
                penalties for driving a dangerous vehicle.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel  class="icon">
              <v-expansion-panel-header class="card-header">
                Why is the MOT test has changed?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify">The changes bring MOT testing in the UK in line with the new EU
                  directive known as the European Union Roadworthiness Package which will use the same terminology for
                  categorising faults. The terminology is also in keeping with existing wording for the Road Traffic Act
                  which deems it is against the law to drive a vehicle that is in a ‘dangerous condition’. More
                  specifically, the Act states that “a person is guilty of an offence if he uses, or causes or permits
                  another to use, a motor vehicle or trailer on a road when. the condition of the motor vehicle or
                  trailer, or of its accessories or equipment.is such that the use of the motor vehicle or trailer
                  involves a danger of injury to any person”.</p>
                <p class="text-teal text-18 justify">So, in relation to MOTs, a ‘Dangerous’ item on the test is one
                  whereby the vehicle should not be driven away from the garage since driving a vehicle in a dangerous
                  condition is a criminal offence.</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What effect will the MOT changes have on drivers?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                In terms of what constitutes a pass or fail, the new defect categories won’t have any real effect
                (unless you drive a diesel model - see below). A fail in a specific test area before the changes is
                still be a fail since 20th May, the main difference is that a failed component will now be classified as
                major or dangerous depending on its condition. In both cases the fault should be fixed immediately in
                order to obtain a new MOT test certificate, but if the fault is classed as Dangerous the vehicle should
                not be driven at all until rectified. The new measures are intended to highlight to drivers the most
                urgent problems and the safety risks they pose.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Changes For Diesel Owners
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <p class="text-teal text-18 justify">As well as the change in MOT fault classification, the MOT test is
                  also much stricter for owners of diesel vehicles. All petrol and diesel cars must complete an
                  emissions test in order to pass their MOT. That is, the amount of dangerous pollutants that the
                  vehicle produces and expels from the exhaust such as carbon monoxide is measured and should not
                  surpass the limit set by the DVSA. The limit for diesel vehicles is lowered from 20th May meaning the
                  test is stricter and harder to pass for older vehicles where the exhaust system may not be as
                  effective. In addition, vehicles fitted with a diesel particulate filter are scrutinised more closely
                  and if smoke of any colour is emitted, the vehicle will be issued a Major fault, and consequently a
                  MOT fail.</p>
                <p class="text-teal text-18 justify">This is the latest in a series of steps by the Government to
                  discourage drivers from buying new or used diesel vehicles. In the Autumn budget, it was announced
                  that anyone buying a new diesel car from April this year will face a tax hike and be charged as if the
                  vehicle was in the next tax band for the first year. This could add anything from £15 to £500 on to
                  your road tax bill in the first year. So, be mindful if you are planning to buy a new or used diesel
                  vehicle soon, you may be hit hard in the pocket trying to keep it on the road.</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                How much is a MOT for a car?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                In 2018, the maximum fee for a car is £54.85 and £29.65 for a standard motorcycle. There's a complete
                list on the GOV.uk website. Some MOT test centres will charge less than the maximum fee
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What is tested in a MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                This Ministry of Transport test is commonly known as a 'MOT' A MOT involves dozens of checks on your
                car, ranging from the brakes and fuel system to lights, mirrors, seatbelts, windscreen wipers and
                exhaust system. It doesn't cover the condition of the engine, clutch and gearbox.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Can you drive your car away if it fails the MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                In any other circumstances, driving the vehicle would be breaking the law. The answer is that you can
                still drive your vehicle if it fails the test and its existing MOT certificate is still valid (i.e. if
                your test was before the expiry date) as long as no 'dangerous' problem(s) were listed in the MOT
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Is the MOT test changed?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                MOT rule changes: 20 May 2018. The MOT test changed on 20 May 2018, with new defect types, stricter
                rules for diesel car emissions, and some vehicles over 40 years old becoming exempt. The changes affect
                cars, vans, motorcycles and other light passenger vehicles. There are 5 main changes you need to know.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What happens if you fail a MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                If your car fails its MOT: You will be given a refusal of MOT certificate (VT30) Your vehicle must be
                repaired and retested to comply with MOT standards. You may not be covered by your insurance, so you are
                advised not to drive it, except to an approved test centre or a garage for repairs.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                Is my car MOT exempt?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Cars to become MOT exempt when they hit 40 (years of age) An extra 300,000 owners of classic old cars
                will be MOT exempt after the Department for Transport announced cars more than 40 years old will no
                longer have to undergo their annual roadworthiness check.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What you need to pass a MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                <div class="panel-body">
                  <p class="text-teal text-18 justify">Car cleaning products.<br>Brake fluid (if
                    required)<br>Replacement mirror glass (if required)<br>New wiper blades (if required)<br>Top up your
                    screen wash (if it's getting a bit low)<br>Number plates (if required)<br>Bulbs (if
                    required)<br>Tyre tread depth gauge.</p>
                </div>

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                What do I need to take to a MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                What documents do I need to bring? If your vehicle is undergoing its first MOT then a V5C vehicle
                registration certificate (log book) is required, this document is also required if your vehicle has had
                a change of registration plate since its last MOT. In all other instances no documentation is required.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                How long do you have to fix a failed MOT?
              </v-expansion-panel-header>
              <v-expansion-panel-content eager class="card-header-body">
                Bring it back within 10 working days: If you choose to have your car repaired elsewhere, you can take it
                back to the original testing centre for a partial retest within10 days of the initial test.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-header class="card-header">
                MOT Free Collection and Delivery
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
    title: 'MOT Test',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.'
      },
      {
        name: 'keywords', 
        content: 'MOT, MOT test, Car MOT test,vehicle MOT Test, MOT test in Reading, MOT with free collection, MOT with free delivery, MOT garage, MOT in Reading'
      },
      {
        property: "og:title", 
        content: "MOT Test | ManyAutos LTD"
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
        hid: 'og:description',  property: 'og:description', 
        content: "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "MOT Test | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300."
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