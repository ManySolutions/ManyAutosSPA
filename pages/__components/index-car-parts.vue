<template>
  <div class="home-car-parts w-100">
    <v-container class="home-sec-gaps home-cp">
      <v-row cols="12">
        <v-col class="mb-7">
          <h1
            class="heading__title text-center"
            style="font-weight: lighter"
          >
            A Huge Range of
            <br />
            <span class="font-weight-bold">Car Parts</span>
          </h1>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps mb-5 pb-3 pb-lg-5">
            <v-img class='img' :src="assets('customer-v2/icons/brake-disc.png')" alt="" />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">Braking</h6>
              <p class="color-dark mb-0">
                Brake discs and pads wear down over time, so keeping them in
                good condition is vital.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps mb-5 pb-3 pb-lg-5">
            <v-img class='img' :src="assets('customer-v2/icons/air-filter.png')" alt="" />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">Filter</h6>
              <p class="color-dark mb-0">
                Fuel, oil and air filters are essential for keeping your car
                free from harmful particles
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps mb-5 pb-3 pb-lg-5">
            <v-img class='img'
              :src="assets('customer-v2/icons/steering-wheel.png')"
              alt=""
            />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">Steering</h6>
              <p class="color-dark mb-0">
                We’ve got all the parts you’ll need to keep your steering on the
                straight and narrow
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps mb-5 pb-3 pb-lg-0 mb-lg-0">
            <v-img class='img' :src="assets('customer-v2/icons/suspension.png')" alt="" />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">Suspension</h6>
              <p class="color-dark mb-0">
                Ensure your drive is as smooth as possible with high-quality
                shock absorbers and more
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps mb-5 pb-3 pb-lg-0 mb-lg-0">
            <v-img class='img' :src="assets('customer-v2/icons/headlight.png')" alt="" />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">Visibility</h6>
              <p class="color-dark mb-0">
                Make sure you can see and be seen when you’re driving at night
                or in adverse weather
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="steps">
            <v-img class='img' :src="assets('customer-v2/icons/engineering.png')" alt="" />
            <div class="step-content">
              <h6 class="fw-600 mb-3 mt-4">And More...</h6>
              <p class="color-dark mb-0">
                We are committed to providing a comprehensive range of parts for
                every make of car
              </p>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
.home-car-parts {
  background-color: #f8fafc;
}
.mb-55 {
  margin-bottom: 55px;
}
.text-center {
  text-align: center !important;
}
.heading__title--bar:after {
  background: #caf0f8;
}
.steps .img {
  height: 70px;
  width: 70px;
  margin: auto;
}
.steps .step-content h6 {
  color: #06182d;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0;
  font-family: inherit;
  text-transform: uppercase;
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
.home-cp {
  @media (min-width: 960px) {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    .heading__title {
      margin-bottom: 60px;
    }
  }
}
</style>