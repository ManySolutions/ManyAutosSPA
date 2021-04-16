<template>
  <v-container class='home-sec-gaps home-hiw'>
    <v-row>
      <v-col cols=12 class="mb-7">
          <h1 class='heading__title text-center'>
            How We Work
          </h1>
          <!-- <p>Progressively enable pandemic markets for process-centric processes. Completely iterate resource maximizing process improvements.</p> -->
        </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm='6' md='3' lg="6" class="before-xl">
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits'>1</em>
            <v-img src="https://static.manyautosltd.com/uploads/booking-reading_303x303.jpg"
              alt="Book your Vehicle online or by phone" class='img'>
            </v-img>
          </span>
          <div class="step-content">
            <h6 class="fw-600">BOOKING</h6>
            <p class="color-dark mb-0">Book a service for your vehicle online or by phone. It takes less than five
              minutes to book a service your vehicle needs.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="before-xl">
        <div class="steps mb-5 pb-3 feature-step">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits-2'>2</em>
            <v-img src="https://static.manyautosltd.com/uploads/collection-reading_303x303.jpg"
              alt="Have your car collected from wherever convenient" class='img'>
            </v-img>
          </span>
          <div class="step-content">
            <h6 class="fw-600">COLLECTION</h6>
            <p class="color-dark mb-0">Have your car collected from a place of your choice at a convenient time, for free.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="before-xl">
        <div class="steps mb-5 pb-3">
          <span class='position-relative d-inline-block order-1' style="position: relative !important;">
            <em class='steps-digits-3'>3</em>
            <v-img src="https://static.manyautosltd.com/uploads/service-reading_303x303.jpg"
              alt="We will keep you informed every step of the way" class='img'>
            </v-img>
          </span>
          <div class="step-content order-0">
            <h6 class="fw-600">SERVICE</h6>
            <p class="color-dark mb-0">Sit back, relax and let us put the life back into your vehicle. We will keep you
              informed every step of the way.</p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="before-xl">
        <div class="steps feature-step no-arrow">
          <span class='position-relative d-inline-block' style="position: relative !important;">
            <em class='steps-digits-4'>4</em>
            <v-img src="https://static.manyautosltd.com/uploads/delivery-reading_303x303.jpg"
              alt="Have your car delivered and enjoy" class='img'>
            </v-img>
          </span>
          <div class="step-content">
            <h6 class="fw-600">DELIVERY</h6>
            <p class="color-dark mb-0">Have your car delivered after it has been serviced and is good to be back on the road.</p>
          </div>
        </div>
      </v-col>

      <!-- ONLY XL -->
      <v-col cols="12" sm='6' md='3' lg="6" class="only-xl">
        <div class="steps mb-5 pb-3">
          <v-row>
            <v-col cols="6">
              <span class='position-relative d-inline-block' style="position: relative !important;">
                <em class='steps-digits'>1</em>
                <v-img src="https://static.manyautosltd.com/uploads/booking-reading_303x303.jpg"
                  alt="Book your Vehicle online or by phone" class='img'>
                </v-img>
              </span>
            </v-col>
            <v-col cols="6"  class="my-auto pl-7">
              <div class="step-content">
                <h6 class="fw-600">Booking</h6>
                <p class="color-dark mb-0">Book a service for your vehicle online or by phone. It takes less than five minutes to book a service your vehicle needs.</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="only-xl">
        <div class="steps mb-5 pb-3 feature-step">
          <v-row>
            <v-col cols="6">
              <span class='position-relative d-inline-block' style="position: relative !important;">
                <em class='steps-digits-2'>2</em>
                <v-img src="https://static.manyautosltd.com/uploads/collection-reading_303x303.jpg"
                  alt="Have your car collected from wherever convenient" class='img'>
                </v-img>
              </span>
            </v-col>
            <v-col cols="6" class="my-auto pl-7">
              <div class="step-content">
                <h6 class="fw-600">COLLECTION</h6>
                <p class="color-dark mb-0">Have your car collected from a place of your choice at a convenient time, for free.</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="only-xl">
        <div class="steps mb-5 pb-3 arrow">
          <v-row>
            <v-col cols="6" class="my-auto">
              <div class="step-content">
                <h6 class="service-heading">SERVICE</h6>
                <p class="color-dark">Sit back, relax and let us put the life back into your vehicle. We will keep you
                  informed every step of the way.</p>
              </div>
            </v-col>
            <v-col cols="6">
              <span class='position-relative d-inline-block' style="position: relative !important;">
                <em class='steps-digits-3'>3</em>
                <v-img src="https://static.manyautosltd.com/uploads/service-reading_303x303.jpg"
                  alt="We will keep you informed every step of the way" class='img'>
                </v-img>
              </span>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col cols="12" sm='6' md='3' lg="6" class="only-xl">
        <div class="steps no-arrow">
          <v-row>
            <v-col cols="6" class="my-auto">
              <div class="step-content-lg">
                <h6 class="fw-600">DELIVERY
                </h6>
                <p class="color-dark">Have your car delivered after it has been serviced and is good to be back on the road.</p>
              </div>
            </v-col>
            <v-col cols="6">
              <span class='position-relative d-inline-block' style="position: relative !important;">
                <em class='steps-digits-4'>4</em>
                <v-img src="https://static.manyautosltd.com/uploads/delivery-reading_303x303.jpg"
                  alt="Have your car delivered and enjoy" class='img'>
                </v-img>
              </span>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- ONLY XL -->
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
  .home-hiw {
    @media (min-width: 960px) {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;

      .heading__title {
        margin-bottom: 30px;
      }
    }
  }
.home-hiw .heading__title {
    font-size: 40px;
    color: #01133c;
    text-align: center;
}
.home-hiw p{
    font-size: 16px;
    font-weight: 400;
    color: #777;
    line-height: 28px;
    text-align: center;
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

  .steps .img {
    border-radius: 50%;
    max-width: 150px;

    @media (min-width: 1500px) {
      max-width: 400px;
    }
  }

  .steps .steps-digits {
    position: absolute;
    left: 10px;
    background:#0046e2;
    padding: 3px 9px;
    color: white;
    border-radius: 30px;
    top: -5px;
    font-weight: bold;
    font-style: inherit;
    font-size: 14px;
    z-index: 1;

    @media (min-width: 960px) {
      left: 20px;
      padding: 5px 11px;
      top: -4px;
      font-size: small;
    }
  }

    .steps .steps-digits-2 {
    position: absolute;
    left: 10px;
    background: #ef0f3a;
    padding: 3px 9px;
    color: white;
    border-radius: 30px;
    top: -5px;
    font-weight: bold;
    font-style: inherit;
    font-size: 14px;
    z-index: 1;

    @media (min-width: 960px) {
      left: 20px;
      padding: 5px 11px;
      top: -4px;
      font-size: small;
    }
  }

  .steps .steps-digits-3 {
    position: absolute;
    left: 10px;
    background:#0046e2;
    padding: 3px 9px;
    color: white;
    border-radius: 30px;
    top: -5px;
    font-weight: bold;
    font-style: inherit;
    font-size: 14px;
    z-index: 1;

    @media (min-width: 960px) {
      left: 20px;
      padding: 5px 11px;
      top: -4px;
      font-size: small;
    }
  }

  .steps .steps-digits-4 {
    position: absolute;
    left: 10px;
    background: #ef0f3a;
    padding: 3px 9px;
    color: white;
    border-radius: 30px;
    top: -5px;
    font-weight: bold;
    font-style: inherit;
    font-size: 14px;
    z-index: 1;

    @media (min-width: 960px) {
      left: 20px;
      padding: 5px 11px;
      top: -4px;
      font-size: small;
    }
  }

  .steps .step-content h6 {
    color: #06182d;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .steps .step-content-lg h6 {
    color: #06182d;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .step-content {
    max-width: 270px;
    margin: 0px auto;
  }

  @media (min-width: 1200px) {
    .step-content {
      display: inline-block;
    }
  }

  @media (min-width: 1200px) {
    .step-content-lg {
      display: inline-block;
    }
  }

  .steps {
    position: relative;

    @media (min-width: 1500px) {
      margin-top: 172px;

      &:after {
        background-image: url(https://static.manyautosltd.com/uploads/border-line-5-1.png);
        background-repeat: no-repeat;
        content: "";
        display: block;
        height: 77px;
        position: absolute;
        right: 150px;
        top: -21px;
        width: 204px;
        z-index: 4;
      }
    }

    &.feature-step {
      @media (min-width: 1500px) {
        margin-top: 70px;

        &:after {
          display: none;
        }

        &:before {
          background-image: url(https://static.manyautosltd.com/uploads/border-line-5-2.png);
          background-repeat: no-repeat;
          bottom: -33px;
          content: "";
          display: block;
          height: 80px;
          position: absolute;
          right: 107px;
          width: 206px;
          z-index: 4;
          top: 254px;
        }
      }
    }

    &.arrow {
      @media (min-width: 1500px) {
        margin-top: 70px;

        &:before {
          display: none;
        }

        &:after {
          background-image: url(https://static.manyautosltd.com/uploads/border-line-5-3.png);
          background-repeat: no-repeat;
          bottom: -33px;
          content: "";
          display: block;
          height: 80px;
          position: absolute;
          right: 230px;
          width: 175px;
          z-index: 4;
          top: 7px;
        }
      }
    }

    &.no-arrow {
      @media (min-width: 1500px) {

          margin-top: -58px;
          margin-left: 70px;

        &:after {
          display: none;
        }

        &:before {
          background-image: url(https://static.manyautosltd.com/uploads/border-line-5-4.png);
          background-repeat: no-repeat;
          bottom: -33px;
          content: "";
          display: block;
          height: 80px;
          position: absolute;
          right: 205px;
          width: 175px;
          z-index: 4;
          top: 252px;
        }
      }
    }
  }

  @media (max-width: 1500px) {
    .only-xl {
      display: none;
    }
  }

  @media (min-width: 1500px) {
    .before-xl {
      display: none;
    }

    .steps .steps-digits{
    left: 41px;
    padding: 0px 12px;
    top: 5px;
    font-size: x-large;
}
    .steps .steps-digits-2{
    left: 41px;
    padding: 0px 12px;
    top: 5px;
    font-size: x-large;
}
    .steps .steps-digits-3{
    left: 197px;
    padding: 0px 12px;
    top: -4px;
    font-size: x-large;
}
    .steps .steps-digits-4{
    left: 197px;
    padding: 0px 12px;
    top: -6px;
    font-size: x-large;
}
  }
// .steps-digits {
//   position: absolute;
//   top: calc(50% - 150px);
//   left: calc(50% - 150px);
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   box-shadow:
//     inset 0 0 50px #fff,
//     inset 20px 0 80px #f0f,
//     inset -20px 0 80px #0ff,
//     inset 20px 0 300px #f0f,
//     inset -20px 0 300px #0ff,
//     0 0 50px #fff,
//     -10px 0 80px #f0f,
//     10px 0 80px #0ff;
// }
</style>