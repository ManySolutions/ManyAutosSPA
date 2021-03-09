<template>
  <div class="car-mot-details home-sec-gaps pt-0">
    <section
      class="mot-section-first text-white"
      style="background-image: url(https://static.manyautosltd.com/uploads/mechanic-service-car-garage-is-check-list-cars.jpg);"
    >
      <v-sheet class="section-first" color="#005469e0">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="text-left">
              <v-breadcrumbs :items="items" active-class>
                <template v-slot:divider>
                  <v-icon color="white">mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" lg="8" class="m-auto text-white">
              <v-row>
                <v-col cols="12" sm="7" class="car-section">
                  <v-row>
                    <v-col>
                      <h4 class="mb-1"></h4>
                      <strong>
                        <h1>Ford B-MAX</h1>
                      </strong>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h4 class="mb-1">Colour</h4>
                      <h3>Silver</h3>
                    </v-col>
                    <v-col>
                      <h4 class="mb-1">Fuel Type</h4>
                      <h3>Petrol</h3>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h4 class="mb-1">Date Registered</h4>
                      <h3>08/07/2014</h3>
                    </v-col>
                    <v-col>
                      <h4 class="mb-1">MOT Valid Until</h4>
                      <h3>07/07/2021</h3>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="5"
                  class="mot-section text-center mt-9 mb-9"
                >
                  <div class="sec2">
                    <div class="heading mb-5">
                      <v-icon color="white" 
                      x-large 
                      class="pb-3 pr-1"
                      >
                        mdi-check-circle
                      </v-icon>
                      <span>MOT</span>
                    </div>
                    <p>Days until next MOT is Due</p>
                    <h2 class="mb-5">124 days</h2>
                    <!-- <div class="btn-expiry mt-5">
                      <v-btn
                        class="ma-2"
                        outlined
                        color="white"
                        x-large
                      >
                        <strong>Subscribe Alerts!</strong>
                      </v-btn>
                    </div> -->
                    <subscribe-popup></subscribe-popup>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </section>
    <!-- Section 2 -->

    <v-container>
      <v-row>
        <v-col cols="12" lg="8" class="m-auto">
          <v-row>
            <v-col cols="12" class="panels">
              <v-expansion-panels focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="6">
                        <span class="date-top">10 June 2021</span>
                      </v-col>
                      <v-col cols="6" class="status-top text-right pr-5">
                        <span>Pass</span>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <div class="pass-heading">
                          <h1>Pass</h1>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-row>
                          <v-col cols="6">
                            <p class="vehicle-property">Milage</p>
                            <p class="vehicle-property">MOT Test Num</p>
                            <p class="vehicle-property">Expiry Date</p>
                          </v-col>
                          <v-col cols="6">
                            <p class="vehicle-property-value">7491 mi</p>
                            <p class="vehicle-property-value">187696302039</p>
                            <p class="vehicle-property-value">10 June 2021</p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="6">
                        <span class="date-top-fail">10 June 2021</span>
                      </v-col>
                      <v-col cols="6" class="status-top-fail text-right pr-5">
                        <span>Fail</span>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <div class="pass-heading-fail">
                          <h1>Fail</h1>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-row>
                          <v-col cols="6">
                            <p class="vehicle-property">Milage</p>
                            <p class="vehicle-property">MOT Test Num</p>
                            <p class="vehicle-property">Expiry Date</p>
                          </v-col>
                          <v-col cols="6">
                            <p class="vehicle-property-value">7491 mi</p>
                            <p class="vehicle-property-value">187696302039</p>
                            <p class="vehicle-property-value">10 June 2021</p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Section 2 -->
  </div>
</template>

<script>
import SubscribePopup from '~/components/func-components/subscribe-popup.vue';
  export default {
    components: {
    SubscribePopup,
  },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'MOT Check',
          disabled: false,
          to: {name: 'mot-car-check'},
        },
        {
          text: 'FORD Details',
          disabled: true,
          to: {name: 'car-mot-details'},
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.car-mot-details .car-section h4 {
  font-weight: 300;
}

.car-mot-details .mot-section {
  padding: 7% 0;
  background: #088dafe0;
  opacity: 0.9;
  // border-left: 5px solid #fff;
  // border-right: 5px solid #fff;
}
.car-mot-details .mot-section .heading span {
  font-size: 2rem;
  font-weight: 700;
}
.car-mot-details .mot-section-first{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.car-mot-details .section-first{
  width: 100%;
  height: 100%;
  background-color:#005469e0
}

// section 2

.car-mot-details .panels .vehicle-property {
  color: #464646;
  font-weight: bold;
}
.car-mot-details .panels .date-top {
  font-weight: bold;
  color: #464646;
}
.car-mot-details .panels .status-top {
  font-weight: bold;
  color: #28a745;
}
.car-mot-details .panels .pass-heading {
  color: #28a745;
}

.car-mot-details .panels .vehicle-property {
  color: #464646;
  font-weight: bold;
}
.car-mot-details .panels .date-top-fail {
  font-weight: bold;
  color: #464646;
}
.car-mot-details .panels .status-top-fail {
  font-weight: bold;
  color: red;
}
.car-mot-details .panels .pass-heading-fail {
  color: red;
}
::v-deep .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: #fff;
}
// section 2
</style>