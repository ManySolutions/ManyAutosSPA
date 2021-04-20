<template>
  <div class="company-service-sec w-100 pt-16 pb-16">
    <v-container>
        <v-row>
        <v-col cols="12" class="both-service-sec text-center">
          <h1 class="both-service-heading">
            Our Services
          </h1>
          <p>
            We can help you with everything from an oil change to an engine change.<br>
            We can handle any problem on both foreign and domestic vehicles.
          </p>
        </v-col>
      </v-row>
      <v-row class="inner-text-row">
        <v-col cols="12" sm="6"> 
        <v-card           
        elevation="0"
        >
        <v-list-item-title class="headline mb-1 pl-3 text-center">
            <v-img
              class="elevation-0 m-auto"
              alt=""
              src="https://static.manyautosltd.com/uploads/62x62.png"
              max-width="80px"
            >
            </v-img>
          <h3 class="mt-10 pb-3" style="font-weight: 600;">Full Service</h3>
          <h5 class="pb-3">Starting from</h5>
          <h2 style="color:#00b4d8 ">£59</h2>
        </v-list-item-title>
            <v-list-item 
            three-line
            >
            <v-list-item-avatar 
              tile 
              size="60" 
            >
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-text class="inner-text">
                  <ul>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span>70 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span>Drive and Test</span>
                    </li>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                  <div class="text-center">
                    <v-btn 
                    color="secondary" 
                    large 
                    class="mt-5 mr-4"
                    >
                      Get Instant Quote
                      <!-- <v-icon>
                        mdi-chevron-right
                      </v-icon> -->
                    </v-btn>
                  </div>
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>


        <v-col cols="12" sm="6"> 
        <v-card           
        elevation="0"
        >
        <v-list-item-title class="headline interim-sec mb-1 pl-3 text-center">
            <v-img
              class="elevation-0 m-auto"
              alt=""
              src="https://static.manyautosltd.com/uploads/Interim-service-62x62.png"
              max-width="80px"
            >
            </v-img>
          <h3 class="mt-10 pb-3" style="font-weight: 600;">Interim Service</h3>
          <h5 class="pb-3">Starting from</h5>
          <h2 style="color:#00b4d8 ">£59</h2>
        </v-list-item-title>
            <v-list-item 
            three-line
            >
            <v-list-item-avatar 
              tile 
              size="60" 
            >
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-text class="inner-text">
                  <ul>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span>50 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span> Oil and Oil Filter</span>
                    </li>
                    <li>
                      <v-icon
                      color="primary"
                      >
                        mdi-check-bold
                      </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                  <div class="text-center">
                    <v-btn 
                    color="secondary" 
                    large 
                    class="mt-5 mr-4"
                    >
                      Get Instant Quote
                      <!-- <v-icon>
                        mdi-chevron-right
                      </v-icon> -->
                    </v-btn>
                  </div>
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  .company-service-sec .both-service-sec .both-service-heading {
    text-transform: capitalize;
    font-size: 33px;
    line-height: 44px;
    font-weight: 300;
    color: #333;
  }

  .company-service-sec .both-service-sec .both-service-heading::after {
    display: block;
    content: "";
    background: #00b4d8;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: 2px;
  }

  .company-service-sec .both-service-sec p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 32px;
    margin-top: 34px;
    color: #777;
  }
  .company-service-sec h5{
    color: #333;
    font-weight: 500;
  }
  .company-service-sec .inner-text-row .inner-text {
    font-size: 14px;
    line-height: 24px;
    color: #777;
  }
  @media (max-width: 768px) {
      .company-service-sec .interim-sec {
      margin-top: 55px;
      text-align: center;
  }
  }
  .company-service-sec ul {
      list-style-type: none;
      max-width: 295px;
      margin:auto;
      padding-top: 15px;
  }
</style>
