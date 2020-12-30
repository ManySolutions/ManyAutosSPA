<template>
  <v-container 
    class='home-sec-gaps home-hiw'
  >
    <v-row>
      <div class="col-12 text-center mb-7 pb-lg-5">
        <h1 class="heading__title heading__title--bar" style="font-weight:lighter;">
          How <span class='font-weight-bold'>We Work</span>
        </h1>
      </div>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm='6' md='3'>
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>1</em>
            <img :src="assets('customer-v2/img1.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600">BOOKING</h6>
            <p class="color-dark mb-0">Book your Vehicle online or by phone.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3'>
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>2</em>
            <img :src="assets('customer-v2/img2.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600">COLLECTION</h6>
            <p class="color-dark mb-0">Have your car collected from wherever convenient.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3'>
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>3</em>
            <img :src="assets('customer-v2/img3.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600">SERVICE</h6>
            <p class="color-dark mb-0">Sit back,relax and let us do the work.We will keep you informed every step of the
              way.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3'>
        <div class="steps">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>4</em>
            <img :src="assets('customer-v2/img4.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600">DELIVERY</h6>
            <p class="color-dark mb-0">Have your car delivered and enjoy.</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.home-hiw {
  @media (min-width: 960px) {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    .heading__title {
      margin-bottom: 60px;
    }
  }
}
.mb-55 {
  margin-bottom: 55px;
}
.text-center {
    text-align: center !important;
}
.heading__title--bar:after {
    background: #CAF0F8;
}
 .steps img {
    border-radius: 50%;
    max-width: 110px;
    @media (min-width: 960px) {
      max-width: 170px;
    }
}
.steps .steps-digits {
    position: absolute;
    left: 10px;
    background: #1ea5c7;
    padding: 3px 9px;
    color: white;
    border-radius: 30px;
    top: -5px;
    font-weight: bold;
    font-style: inherit;
    font-size: 14px;
    @media (min-width: 960px) {
      left: 20px;
      padding: 5px 11px;
      top: 5px;
    }
}
.steps .step-content h6 {
    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
    margin-top: 12px;
    margin-bottom: 12px;
    @media (min-width: 960px) {
      margin-top: 22px;
      margin-bottom: 22px;
      font-size: 21px;
    }
}
.step-content {
    max-width: 270px;
    margin: 0px auto;
}
</style>