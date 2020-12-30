<template>
  <v-container 
    class='home-sec-gaps'
  >
    <v-row>
      <v-col cols=12 class="text-center mb-7 pb-lg-5">
        <h1 class='heading__title heading__title--bar' style="font-weight:lighter">
          Our <span class='font-weight-bold'>Services</span>
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols=12 lg=6 xl='4' order-lg=2>
        <img 
          :src="assets('customer-v2/011.png')" 
          alt="Our Services at ManyAutos LTD"
          class='pb-5 pt-4'
        >
      </v-col>

      <v-col cols=12 lg=3 order-lg=1>
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-check-circle ml-lg-2 mr-2 mr-lg-0 order-lg-2"></i>
              <span class="order-lg-1"> Interim Service</span>
            </h6>
            <p class='text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right m-auto'>
              Interim service consists of 50 checks of your car. This service is for the drivers who cover
              20,000 or more miles per day. They need to get their car serviced 
              twice a year but getting a full service is not important. This 50 check process includes 
              an oil change, filter change, and some other checks and main maintenance.
            </p>
          </div>
        </div>

        <div class="media text-right">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-breakdown mr-2 order-lg-2 ml-lg-2 mr-lg-0"></i>
              <span class=""> Full Service</span>
            </h6>
            <p class='m-auto text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right'>
              Full service is a detailed service of your car. It consists of 70 check points which include oil change, 
              filter change, pollen filter change, and also all the other checks and services that are 
              required to properly inspect the car for any problems or issues. It is advised to get your car 
              serviced annually.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols=12 lg=3 order-lg=3 class="pt-0">
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-car mr-2"></i>
              <span class="">MOT</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              MOT is a test introduced by the ministry of the UK. It is done yearly. 
              The motive of this test is to check the condition, roadworthiness, safety, 
              and exhaust emissions of your car. This test is necessary for the vehicles in the 
              United Kingdom, that are being used for more than 3 years. We have our 
              <NuxtLink to='/mot'>car repair and MOT</NuxtLink> center with DVSA approved examiners.
            </p>
          </div>
        </div>

        <div class="media text-right">
          <div class="media-body mb-0">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-accident mr-2"></i>
              <span class="">Repairs</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              We can repair your car after an accident or damages. We also offer 
              <strong>doorstep car repair service</strong>, 
              so don’t hesitate to contact us if you need any kind of assistance. We are committed 
              to providing a comprehensive range of car parts.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.heading__title--bar:after {
    background: #CAF0F8;
}
.heading__title--bar {
    padding-bottom: 10px;
}
.home-our-service img {
  margin: 50px auto;
}
.media .media-body h6 {
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.9em;
    font-family: inherit;
    text-transform: uppercase;
    i {
      font-size: 40px;
      vertical-align: sub;
    }
}
.media-body {
    margin-bottom: 60px;
}

@media (min-width: 960px) {
  .heading__title {
    margin-bottom: 60px;
  }
}
</style>