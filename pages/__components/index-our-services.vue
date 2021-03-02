<template>
  <v-container 
    class='home-sec-gaps'
  >
    <v-row>
      <v-col cols=12 class="text-center mb-7 pb-lg-5">
        <h1 class='heading__title mb-10' style="font-weight:lighter">
          Our <span class='font-weight-bold'>Services</span>
        </h1>
        <!-- <p style='max-width:700px' class='m-auto mb-5 mb-md-10'>
          We offer interim service, full service, MOT, A range of diagnostic assessments or any car repair services.
        </p> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols=12 lg=6 xl='4' order-lg=2 class="text-center">
        <img src="https://static.manyautosltd.com/uploads/911.png"
          alt="Our Services at ManyAutos LTD" class='pb-5 pt-4 img'>
        <!-- <v-img 
          :src="assets('customer-v2/011.png')" 
          alt="Our Services at ManyAutos LTD"
          class='pb-5 pt-4 img'
        >
        </v-img> -->
      </v-col>

      <v-col cols=12 lg=3 order-lg=1>
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-check-circle ml-lg-2 mr-2 mr-lg-0 order-lg-2"></i>
              <span class="order-lg-1"> Interim Service</span>
            </h6>
            <p class='text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right m-auto'>
              We recommend the interim service every 6 months or 6,000 miles. Interim service 
              includes an oil change, filter change, and
              some routine checks and maintenance.
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
              We recommend the full service every 12 months or 12,000 miles. 
              The full service include oil change, filter change,
              pollen filter change, and also all the other checks to properly inspect.
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
              We offer advance bookings for your MOT. MOT test include
              condition, roadworthiness, safety, and exhaust emissions of your car. 
              We have our
              <NuxtLink text color='primary' to="/mot">car repair and MOT centers</NuxtLink>
              with DVSA approved.
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
              We are committed to providing a comprehensive range of car repair services. 
              We also work with many of the top UK warranty and insurance companies to get you back on the road.
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
.home-our-service .img {
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
    margin-bottom: 30px;
  }
}
</style>