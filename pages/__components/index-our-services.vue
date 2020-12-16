<template>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-0 text-center pb-lg-5">
          <!-- heading -->
          <h1 class='heading__title heading__title--bar' style="font-weight:lighter">
            Our <span class='font-weight-bold'>Services</span>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center home-our-service">
        <div class="col-12 col-lg-6 order-lg-2 align-self-center">
          <img :src="assets('/customer-v2/011.png')" alt="">
        </div>
  
        <div class="col-11 col-lg-3 order-lg-1">
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
        </div>
  
        <div class="col-11 col-lg-3 order-lg-3">
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
        </div>
      </div>
    </div>
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
}
.media-body {

    margin-bottom: 60px;
}
</style>