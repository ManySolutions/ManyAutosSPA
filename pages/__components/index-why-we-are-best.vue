<template>
  <v-container fluid class="pt-0">
    <v-row>
      <section class="best-bacground-image text-white"
        style="background-image: url(https://static.manyautosltd.com/uploads/car-mechanic-wearing-white-uniform-stand-holding-wrench2.jpg)">
        <div class="best-background" style="padding-top:125px; padding-bottom:125px;">
          <v-container class='our-best-work-page'>
            <v-row>
              <v-col cols=12 class="mb-7">
                <h1 class='heading__title text-center'>
                  WHY WE ARE BEST
                </h1>
                <p class="text-center">Professionally transition focused e-commerce whereas open-source niche markets. Proactively mesh
                  sustainable internal or "organic" sources.</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4" class="for-mobilee text-center">
                <div class="first-image">
                  <div class="text-best-image">
                    <div class="featured-content media align-items-center">
                      <div class="media-icon"><span class="featured-icon">
                          <v-icon color="white" x-large>
                            mdi-trophy-award
                          </v-icon>
                        </span>
                      </div>
                      <div class="media-body">
                        <h2 class="featured-title">100% Guarantee</h2>
                      </div>
                    </div>
                  </div>
                  <img src="https://static.manyautosltd.com/uploads/1_800x534.jpg">
                </div>
              </v-col>

              <v-col cols="12" md="4" class="for-mobilee text-center">
                <div class="first-image">
                  <div class="text-best-image">
                    <div class="featured-content media align-items-center">
                      <div class="media-icon"><span class="featured-icon">
                          <v-icon color="white" x-large>
                            mdi-security-network
                          </v-icon>
                        </span>
                      </div>
                      <div class="media-body">
                        <h2 class="featured-title">Security & Trust</h2>
                      </div>
                    </div>
                  </div>
                  <img src="https://static.manyautosltd.com/uploads/2_800x533.jpg">
                </div>
              </v-col>

              <v-col cols="12" md="4" class="for-mobilee text-center">
                <div class="first-image">
                  <div class="text-best-image">
                    <div class="featured-content media align-items-center">
                      <div class="media-icon"><span class="featured-icon">
                          <v-icon color="white" x-large>
                            mdi-calculator-variant
                          </v-icon>
                        </span>
                      </div>
                      <div class="media-body">
                        <h2 class="featured-title">Estimate & Quote</h2>
                      </div>
                    </div>
                  </div>
                  <img src="https://static.manyautosltd.com/uploads/3_800x533.jpg">
                </div>
              </v-col>

              <!-- <v-col cols="12" md="4" class="for-mobilee text-center">
                <img
                  src="https://static.manyautosltd.com/uploads/auto-mechanic-catching-car-s-engine.jpg">
              </v-col> -->
            </v-row>
          </v-container>
        </div>
      </section>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
  .best-bacground-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    margin-bottom: -25px;
  }

  .best-background {
    width: 100%;
    height: 100%;
    background-color: #051335f5;
  }

  .first-image {
    position: relative;
  }

  //   .text-best-image{
  //       position: absolute;
  //       text-align: center;
  //       top: 140px;
  //       width: 100%;
  //       color: #fff;
  //       margin: 0 auto;
  //       left: -57px;
  //   }
  .featured-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px 35px;
    z-index: 4;
    display: flex;
    top: 183px;
  }

  .featured-layout4 .featured-title {
    color: #fff;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .featured-layout4 .featured-title {
    color: #fff;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 24px;
  }
</style>
