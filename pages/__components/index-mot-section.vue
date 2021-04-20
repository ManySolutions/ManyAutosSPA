<template>
  <div class="w-100 mot-section pt-15 pb-15">
    <div class="mot-section-img">
      <v-container>
        <v-row>
          <v-col cols="12" class="mot-service-sec text-center">
            <h1 class="mot-service-heading">
              Why not get your MOT done with us?
            </h1>
            <div class="text-center m-auto">
            <v-img
            src="https://static.manyautosltd.com/uploads/mot-01.png"
            max-width="150px"
            class="m-auto"
            >
            </v-img>
            </div>
            <div class="mot_price mt-8">Only £17 with a service or £35 without a service.</div>
            <div class="free_col_del mt-2">Free nationwide collection and delivery.</div>
            <div class="text-center">
              <v-btn 
              color="secondary" 
              x-large 
              class="mt-5 mr-4"
              >
                Get Instant Quote
              </v-btn>
            </div>
          </v-col>
          <!-- <v-col cols="12" class="mot-service-sec-two text-center">
            <h2 class="mot-service-heading-two">
              MOT Test changes
            </h2>
            <div class="mot_test mt-5">The MOT test changed on 20 May 2018 with new defect types introduced, stricter
              rules for diesel car emissions, and certain vehicles over 40 years old becoming exempt.</div>
          </v-col> -->
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mot-section {
        background: #fff8f8db;
}
  .mot-section .mot-service-sec .mot-service-heading {
    text-transform: capitalize;
    font-size: 48px;
    line-height: 54px;
    font-weight: 500;
    color: #333;
  }
  .mot-section .mot-service-sec-two .mot-service-heading-two {
    text-transform: capitalize;
    font-size: 45px;
    line-height: 54px;
    font-weight: 500;
    color: #333;
    margin-top: 70px;
  }

  .mot-section .mot-service-sec .mot-service-heading::after {
    display: block;
    content: "";
    background: #00b4d8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 2px;
  }
  .mot-section .mot-service-sec .mot_price {
    font-size: 36px;
    text-align: center;
    font-weight: 300;
    line-height: 1.5;
}
  .mot-section .mot-service-sec .mot_test {
    font-size: 34px;
    text-align: center;
    font-weight: 300;
    line-height: 1.5;
}
  .mot-section .mot-service-sec .free_col_del {
    font-size: 30px;
    text-align: center;
    font-weight: 300;
    margin: 0;
    line-height: 1.5;
}
</style>