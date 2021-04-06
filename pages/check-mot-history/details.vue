<template>
  <div class="car-mot-details home-sec-gaps pt-0">
    <section
      class="mot-section-first text-white"
      style="
        background-image: url(https://static.manyautosltd.com/uploads/mechanic-service-car-garage-is-check-list-cars.jpg);
      "
    >
      <v-sheet class="section-first" color="#005469e0">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="text-left">
              <v-breadcrumbs :items="items" active-class class="pt-0">
                <template v-slot:divider>
                  <v-icon color="white">mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
            </v-col>
          </v-row>
        </v-container>
        <!-- /breadcrumb -->

        <v-container>
          <v-row>
            <v-col cols="12" lg="8" class="m-auto text-white">
              <v-row>
                <v-col cols="12" sm="7" class="car-section">
                  <v-skeleton-loader
                    v-if='isLoading'
                    type='heading, list-item, list-item, list-item'
                  ></v-skeleton-loader>
                  <template v-else-if='isValid'>
                    <v-row>
                      <v-col>
                        <h4 class="mb-1"></h4>
                        <strong>
                          <h1>
                            {{ vehicle.mot_history[0].make }}
                            {{ vehicle.mot_history[0].model }}
                          </h1>
                        </strong>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <h4 class="mb-1">Colour</h4>
                        <h3>{{ vehicle.mot_history[0].primaryColour }}</h3>
                      </v-col>
                      <v-col>
                        <h4 class="mb-1">Fuel Type</h4>
                        <h3>{{ vehicle.mot_history[0].fuelType }}</h3>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <h4 class="mb-1">Date Registered</h4>
                        <h3>{{ vehicle.mot_history[0].firstUsedDate }}</h3>
                      </v-col>
                      <v-col>
                        <h4 class="mb-1">MOT Valid Until</h4>
                        <h3>{{ vehicle.expiry_date }}</h3>
                      </v-col>
                    </v-row>
                  </template>
                </v-col>

                <v-col
                  cols="12"
                  sm="5"
                  class="mot-section text-center mt-9 mb-9"
                >
                  <div class="sec2">
                    <div class="heading mb-5">
                      <v-icon color="white" x-large class="pb-3 pr-1">
                        mdi-check-circle
                      </v-icon>
                      <span>MOT</span>
                    </div>
                    <p>Current MOT has</p>
                    <v-skeleton-loader v-if='isLoading' type='heading' class='sk-center'></v-skeleton-loader>
                    <template v-else-if='isValid'>
                      <h2 class="mb-5">
                        {{ vehicle.next_mot_pending_in }}
                      </h2>
                      <br />
                      <subscribe-popup></subscribe-popup>
                    </template>
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
        <v-col cols="12" class="mot-heading text-center">
          <div>
            <h1>MOT History</h1>
          </div>
        </v-col>
        <v-col cols="12" lg="8" class="m-auto">
          <v-skeleton-loader 
            v-if='isLoading' 
            type='list-item, list-item, list-item, list-item'
          ></v-skeleton-loader>
          <v-row v-else-if='isValid'>
            <v-col cols="12" class="panels">
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(motTest, i) in motTests"
                  :key="i"
                  focusable
                >
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="6">
                        <span 
                          :class="motTest.testResult == 'PASSED' ? 'date-top' : 'date-top-fail'"
                        >
                          {{ motTest.completedDate}}
                        </span>
                      </v-col>
                      <v-col 
                        cols="6"
                        class="text-right pr-5"
                        :class="motTest.testResult == 'PASSED' ? 'status-top' : 'status-top-fail'"
                      >
                        <span>{{
                          motTest.testResult
                        }}</span>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" sm="4">
                        <div 
                          :class="motTest.testResult == 'PASSED' ? 'pass-heading' : 'pass-heading-fail'"
                        >
                          <h1>{{ motTest.testResult }}</h1>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" md=4 class='pb-0'>
                            <p class="vehicle-property">MOT Test Num</p>
                          </v-col>
                          <v-col cols="12" md=8>
                            <p class="vehicle-property-value">
                              {{ motTest.motTestNumber }}
                            </p>
                            <v-divider class='d-md-none'></v-divider>
                          </v-col>
                          <!-- / -->
                          <v-col cols=12 md="4" class='pb-0'>
                            <p class="vehicle-property">Expiry Date</p>
                          </v-col>
                          <v-col cols=12 md="8">
                            <p class="vehicle-property-value">
                              {{ motTest.expiryDate || 'N/A' }}
                            </p>
                            <v-divider class='d-md-none'></v-divider>
                          </v-col>
                          <!-- / -->
                          <v-col cols=12 md="4" class='pb-0'>
                            <p class="vehicle-property">Comments</p>
                          </v-col>
                          <v-col cols=12 md="8">
                            <template v-if='!motTest.rfrAndComments.length'>
                              N/A
                            </template>
                            <v-simple-table v-else>
                              <template v-slot:default>
                                <thead>
                                  <tr>
                                    <th class="text-left">
                                      Type
                                    </th>
                                    <th class="text-left">
                                      Comment
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for='(comment, j) in motTest.rfrAndComments'
                                    :key="j"
                                  >
                                    <td>{{ comment.type }}</td>
                                    <td>{{ comment.text }}</td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </v-col>
                          <!-- / -->
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- <v-expansion-panel>
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="6">
                        <span class="date-top-fail">{{vehicle.mot_history[0].motTests[2].completedDate}}</span>
                      </v-col>
                      <v-col cols="6" class="status-top-fail text-right pr-5">
                        <span>{{vehicle.mot_history[0].motTests[2].testResult}}</span>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <div class="pass-heading-fail">
                          <h1>{{vehicle.mot_history[0].motTests[2].testResult}}</h1>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-row>
                          <v-col cols="6">
                             <p class="vehicle-property">MOT Test Num</p>
                            <p class="vehicle-property">Expiry Date</p>
                            <p class="vehicle-property">Comments</p>
                          </v-col>
                          <v-col cols="6">
                            <p class="vehicle-property-value">{{vehicle.mot_history[0].motTests[2].motTestNumber}}</p>
                            <p class="vehicle-property-value">{{vehicle.mot_history[0].motTests[2].expiryDate}}</p>
                            <p class="vehicle-property-value"><strong>Text:</strong>{{vehicle.mot_history[0].motTests[2].rfrAndComments[0].text}}</p>
                            <p class="vehicle-property-value"><strong>Type:</strong>{{vehicle.mot_history[0].motTests[2].rfrAndComments[0].type}}</p>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel> -->
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
import SubscribePopup from "~/components/func-components/subscribe-popup.vue";
import toastr from 'toastr';
import http from '~/utils/http';

export default {
  components: {
    SubscribePopup,
  },
  data: () => ({
    items: [
      {
        text: "Home",
        to: "/",
        exact: true,
      },
      {
        text: "Check MOT History",
        to: '/check-mot-history',
        exact: true,
      },
      {
        text: "Details",
        disabled: true,
      },
    ],
    vehicle: {},
    isLoading: false,
    isNotFound: false,
  }),
  computed: {
    isValid() {
      const {vehicle} = this;

      return !!Object.keys(vehicle).length;
    },
    motTests() {
      const {vehicle} = this;

      return vehicle.mot_history[0]
        ? vehicle.mot_history[0].motTests
        : null
    }
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.isLoading = true;
      const carReg = this.$route.query['car-reg'];

      http.get(`/vehicle/last-mot-detail/${carReg}`)
        .then(res => res.data)
        .then(data => {
          this.vehicle = data
        })
        .catch(err => {
          if (err.response.status == 404) {
            this.isNotFound = true;
            toastr.error('Your car information was not found, please try different car reg no.')
          } else {
            toastr.error('Some error occured, please try again');
          }
        })
        .finally(() => this.isLoading = false);
    },
  },
  // async asyncData({ app }) {
  //   const vehicle = await app.$axios.$get(
  //     "http://staging-v32020.manyautos.co.uk/api/v2/c/vehicle/last-mot-detail/HY59Xoo"
  //   );
  //   return { vehicle };
  // },
};
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
.car-mot-details .mot-section-first {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.car-mot-details .section-first {
  width: 100%;
  height: 100%;
  background-color: #005469e0;
}

// section 2

.car-mot-details .panels .vehicle-property {
  color: #464646;
  font-weight: bold;
  margin-bottom: 0px;
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
.car-mot-details .mot-heading {
  color: #464646;
}
::v-deep .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: #fff;
}
::v-deep .v-skeleton-loader .v-skeleton-loader__list-item {
  background: transparent;
  padding-left: 0px;
}
::v-deep .sk-center > div {
  margin: auto;
}
</style>