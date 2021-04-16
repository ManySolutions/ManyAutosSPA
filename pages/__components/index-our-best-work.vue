<template>
  <div class='home-reviews w-100'>
    <v-container class='our-best-work-page'>
      <v-row>
        <v-col cols="12" md="6" class="our-best-work-detail my-auto">
          <div class="our-best-work-heading">
            <h1>
              We care about our customers
            </h1>
          </div>
          <div>
            <p class="pt-5 pb-5">
              From our free collection and delivery of your vehicle to our 12 month warranty, we are here to make your
              life easier and simpler. We have been in business for over 15 years and have extensive experience with all
              makes and models. So any work that is required, we can do. We carry out all work, big or small from an MOT
              to Head gaskets and engine replacements. We keep our prices fair and clear. We do not carry out any work
              until we have had a chance to explain to you the issues and the costs of repairs, so you have no nasty
              surprises.
            </p>
          </div>
          <div class="info-button mt-5">
            <v-btn color="primary" x-large>
              View Details
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="for-mobile text-center">
          <v-row>
            <v-col cols="12" class="mb-8">
              <div class="clients">
                <div class="client-heading text-white">
                    <span class="shape-bg"></span>
                  <span style="font-size:46px">25K</span>
                  <span>
                    <v-icon color="white" x-large class="pb-5">
                      mdi-plus
                    </v-icon>
                  </span>
                  <div>
                    <h3 style="padding-bottom:9px;">Happy Client's</h3>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="projects">
                <span style="font-size:28px; color:#01133c"><strong>585</strong></span>
                <span>
                  <v-icon color="primary" large class="pb-3">
                    mdi-plus
                  </v-icon>
                </span>
                <h3 class="pr-3" style="font-size:18px; font-weight:400; color:#01133c">Projects</h3>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="services">
                <span style="font-size:28px; color:#01133c"><strong>585</strong></span>
                <span>
                  <v-icon color="primary" large class="pb-3">
                    mdi-plus
                  </v-icon>
                </span>
                <h3 class="pr-3" style="font-size:18px; font-weight:400; color:#01133c">Services</h3>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="client-quantity">
                <span style="font-size:28px; color:#01133c"><strong>585</strong></span>
                <span>
                  <v-icon 
                  color="primary" 
                  large 
                  class="pb-3"
                  >
                    mdi-plus
                  </v-icon>
                </span>
                <h3 class="pr-3" style="font-size:18px; font-weight:400; color:#01133c">Client's</h3>
              </div>
            </v-col>
            <v-col>
              <img
                src="https://static.manyautosltd.com/uploads/car-mechanic-wearing-white-uniform-stand-holding-wrench (1)_800x534.jpg">
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="6" class="my-auto for-large">
          <div class="our-best-work-img text-center text-white pb-4">
            <!-- <div class="text-behind"> -->
              <div class="text-top">
                <span style="font-size:46px">25K</span>
                <span>
                  <v-icon color="white" x-large class="pb-5">
                    mdi-plus
                  </v-icon>
                </span>
                <h3 style="padding-bottom:11px;">Happy Client's</h3>
              </div>
            <!-- </div> -->
            <div class="text-on-image">
              <span style="font-size: 20px;"><strong>585</strong></span>
              <span>
                <v-icon color="white">
                  mdi-plus
                </v-icon>
              </span>
              <h3>Projects</h3>
            </div>
            <div class="text-on-image-2">
              <span style="font-size: 20px;"><strong>585</strong></span>
              <span>
                <v-icon color="white">
                  mdi-plus
                </v-icon>
              </span>
              <h3>Services</h3>
            </div>
            <div class="text-on-image-3">
              <span style="font-size: 20px;"><strong>585</strong></span>
              <span>
                <v-icon color="white">
                  mdi-plus
                </v-icon>
              </span>
              <h3>Clients</h3>
            </div>
            <img
              src="https://static.manyautosltd.com/uploads/car-mechanic-wearing-white-uniform-stand-holding-wrench (1)_800x534.jpg">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style lang="scss" scoped>
  .home-reviews {
    background-color: #eff2f2;
  }

  .our-best-work-img {
    position: relative;
  }

  .bottom-right {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }

  .our-best-work-page {
    padding-top: 150px;
    padding-bottom: 150px;
  }

  .our-best-work-page p {
    font-size: 16px;
    font-weight: 400;
    color: #777;
    line-height: 28px;
    text-align: left;
  }

  @media (max-width:960px) {
    .our-best-work-page {
      background-color: #eff2f2;
      padding-top: 70px;
      padding-bottom: 70px;
    }

    .our-best-work-page p {
      text-align: center;
    }
  }

  .our-best-work-page .our-best-work-detail .our-best-work-heading h1 {
    font-size: 40px;
    color: #01133c;
    text-align: left;
    text-transform: capitalize;
  }

  .our-best-work-page .our-best-work-detail .our-best-work-heading span {
    font-size: 40px;
    color: #ef0f3a;
  }

  .our-best-work-page ul {
    list-style-type: none;
  }

  .our-best-work-page .our-best-work-detail .info-button {
    text-align: left;
  }

  @media (max-width: 1260px) {

    .our-best-work-page .our-best-work-detail .our-best-work-heading h1 {
      text-align: center;
    }

    .our-best-work-page .our-best-work-detail .info-button {
      text-align: center;
    }
  }

//   @media (min-width: 1260px) {
//     .our-best-work-page .our-best-work-detail {
//       padding-left: 4rem;
//     }

//   }

  @media (min-width:700px) {
    .for-mobile {
      display: none;
    }
  }

  .for-mobile .client-heading {
    max-width: 201px;
    margin: auto;
    background-color: #ef0f3a;
    padding: 9px 0px;
  }

  @media (max-width:700px) {
    .for-large {
      display: none;
    }
  }

  @media (min-width: 700px) {
    .our-best-work-img {
      position: relative;
      width: 800px;
    }

    .our-best-work-img .text-top {
      position: absolute;
      text-align: center;
      top: 14px;
    //   width: 100%;
      color: #fff;
    //   margin: 0 auto;
      left: 14px;
    //   background-color: #ef0f3a;
      padding-right: 8px;
      padding-left: 8px;

    }
    .our-best-work-img .shape-bg {
        position: relative;
        left: -10px;
        top: 10px;
        background-color: transparent;
        z-index: 0;
        border: 2px solid #ffffff;
        width: 100%;
        height: 100%;
    }
    .our-best-work-img .text-on-image {
      position: absolute;
      text-align: center;
      top: 470px;
      width: 100%;
      color: #fff;
      margin: 0 auto;
      left: -344px;

    }

    .our-best-work-img .text-on-image-2 {
      position: absolute;
      text-align: center;
      top: 470px;
      width: 100%;
      color: #fff;
      margin: 0 auto;
      left: -246px;

    }

    .our-best-work-img .text-on-image-3 {
      position: absolute;
      text-align: center;
      top: 470px;
      width: 100%;
      color: #fff;
      margin: 0 auto;
      left: -155px;

    }
  }
  .for-mobile .client-heading {
      position: relative;
  }
  .for-mobile .client-heading .shape-bg {
    position: absolute;
    left: -10px;
    top: 10px;
    background-color: transparent;
    z-index: 0;
    border: 2px solid #ef0f3a;
    width: 100%;
    height: 100%;
}

.vs-experiance-box1 {
    position: relative;
    width: 100%;
    max-width: 220px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
}

</style>
