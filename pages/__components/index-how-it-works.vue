<template>

  <div class="container">
    <div class="row">
      <div class="col-12 text-center mb-55 pb-lg-5">
        <h1 class="heading__title heading__title--bar" style="font-weight:lighter;">
          How <span class='font-weight-bold'>We Work</span>
        </h1>
      </div>
    </div>
    <div class="row c-mb-53 c-mb-lg-0 text-center">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>1</em>
            <img :src="assets('/customer-v2/img1.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600 mb-3 mt-4 mb-lg-3 mt-lg-5">BOOKING</h6>
            <p class="color-dark mb-0">Book your Vehicle online or by phone</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>2</em>
            <img :src="assets('/customer-v2/img2.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600 mb-3 mt-4 mb-lg-3 mt-lg-5">COLLECTION</h6>
            <p class="color-dark mb-0">Have your car collected from wherever convenient</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>3</em>
            <img :src="assets('/customer-v2/img3.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600 mb-3 mt-4 mb-lg-3 mt-lg-5">SERVICE</h6>
            <p class="color-dark mb-0">Sit back,relax and let us do the work.We will keep you informed every step of the
              way.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="steps">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>4</em>
            <img :src="assets('/customer-v2/img4.jpg')" alt="">
          </span>
          <div class="step-content">
            <h6 class="fw-600 mb-3 mt-4 mb-lg-3 mt-lg-5">DELIVERY</h6>
            <p class="color-dark mb-0">Have your car delivered and enjoy.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <style lang="scss" scoped>
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
}
.steps .step-content h6 {

    color: #06182d;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0;
}
</style>