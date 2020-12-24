<template>
  <v-container 
    fluid
    class='home-sec-gaps'
  >
    <v-row>
      <v-col cols=12 class="text-center mt-10 mb-7 pb-lg-5">
        <h1 class='heading__title heading__title--bar' style="font-weight:lighter">
          Our <span class='font-weight-bold'>Services</span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=12>
        <img 
          :src="assets('/customer-v2/011.png')" 
          alt="Our Services at ManyAutos LTD"
          class='pb-5 pt-4'
        >
      </v-col>

      <v-col cols=12 md=4>
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-tow-truck ml-lg-2 mr-2 mr-lg-0 order-lg-2"></i>
              <span class="order-lg-1"> Car Tuning</span>
            </h6>
            <p class='text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right m-auto'>
              We can arrange for vehicle recovery at extra cost.
            </p>
          </div>
        </div>

        <div class="media text-right">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end justify-content-lg-end text-center">
              <i class="text-primary ico-ma-car-alt mr-2 order-lg-2 ml-lg-2 mr-lg-0"></i>
              <span class=""> Overheating vehicle</span>
            </h6>
            <p class='m-auto text-center ml-lg-auto mr-lg-4 pr-lg-2 text-lg-right'>
              We diagnose and repair most overheating problems the same day.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols=12 class="pt-0">
        <div class="media text-left">
          <div class="media-body">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-breakdown mr-2"></i>
              <span class="">Engine Problem</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              We diagnose and repair the majority of engine issues.
            </p>
          </div>
        </div>

        <div class="media text-right">
          <div class="media-body mb-0">
            <h6 class="position-relative d-lg-flex align-items-lg-end text-center">
              <i class="text-primary ico-ma-accident mr-2"></i>
              <span class="">Accident Repair</span>
            </h6>
            <p class='text-center m-auto text-lg-left ml-lg-4 pl-lg-2'>
              We repair and respray accident damage vehicles.
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
</style>