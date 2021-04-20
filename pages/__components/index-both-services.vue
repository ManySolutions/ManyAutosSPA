<template>
  <div class="company-service-sec w-100 pt-16 pb-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="both-service-sec text-center">
          <h1 class="both-service-heading">Our Services</h1>
          <p class='pb-8'>
            We can help you with everything from an oil change to an engine
            change.<br />
            We can handle any problem on both foreign and domestic vehicles.
          </p>
        </v-col>
      </v-row>
      <v-row class="inner-text-row" justify="center">
        <v-col cols="12" sm="6" lg=4>
          <v-card elevation="1" outlined>
            <v-list-item-title class="headline mb-1 pl-3 pt-7 text-center">
              <v-img
                class="elevation-0 m-auto"
                alt=""
                src="https://static.manyautosltd.com/uploads/62x62.png"
                max-width="80px"
              >
              </v-img>
              <h3 class="mt-10 pb-3" style="font-weight: 700">Full Service</h3>
              <h5 class="pb-3">Starting from</h5>
              <h2 class='primary--text'>£59.99</h2>
            </v-list-item-title>
            <v-list-item three-line class='pb-7'>
              <!-- <v-list-item-avatar tile size="60"> </v-list-item-avatar> -->
              <v-list-item-content>
                <v-list-item-text class="inner-text">
                  <ul class='list-style-none'>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>70 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>Drive and Test</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                color='secondary'
                title='Full Service'
                block
                large
              >
                Book Full Service
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" lg=4>
          <v-card elevation="0" outlined>
            <v-list-item-title
              class="headline interim-sec mb-1 pl-3 pt-7 text-center"
            >
              <v-img
                class="elevation-0 m-auto"
                alt=""
                src="https://static.manyautosltd.com/uploads/Interim-service-62x62.png"
                max-width="80px"
              >
              </v-img>
              <h3 class="mt-10 pb-3" style="font-weight: 700">
                Interim Service
              </h3>
              <h5 class="pb-3">Starting from</h5>
              <h2 class='primary--text'>£59.99</h2>
            </v-list-item-title>
            <v-list-item three-line class='pb-7'>
              <v-list-item-content>
                <v-list-item-text class="inner-text">
                  <ul>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>50 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span> Oil and Oil Filter</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                </v-list-item-text>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                color='secondary'
                title='Interim Service'
                block
                large
              >
                Book Interim Service
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BtnAddService from '~/components/func-components/btn-add-service.vue';
export default {
  components: {
    BtnAddService,
  }
};
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
.company-service-sec h5 {
  color: #333;
  font-weight: 500;
}
.company-service-sec .inner-text-row .inner-text {
  font-size: 14px;
  line-height: 24px;
  color: #777;
  text-align: center;
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
  margin: auto;
  padding-top: 15px;
  display: inline-block;
  text-align: left;
  padding-left: 0;
}

.inner-text-row .v-card {
  max-width: 320px;
  margin: auto;
}
</style>
