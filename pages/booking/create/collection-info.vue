<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='heading__title text-center pb-lg-5 font-weight-light'>
          Fill collection information
          to complete order
        </h1>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
        <v-breadcrumbs
          :items='breadcrumbs'
        ></v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-form>
          <v-stepper
            v-model="step"
            vertical
          >
            <!-- / step 1 started -->
            
            <v-stepper-step
              :complete="step > 1"
              step="1"
            >
              Choose collection date
              <small>Our collection timing is between 09:00 to 11:00</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <collection-info-date-picker
                @change='handleCollectionDateChange'
              ></collection-info-date-picker>
              <v-btn
                color="secondary"
                @click="step = 2"
              >
                Next
              </v-btn>
            </v-stepper-content>

            <!-- /step 1 ended -->

            <v-stepper-step
              :complete="step > 2"
              step="2"
            >
              Select Collection Address
            </v-stepper-step>

            <v-stepper-content step="2">
              <collection-info-postcode></collection-info-postcode>
              <v-btn
                @click="step = 1"
              >
                Back
              </v-btn>
              <v-btn
                color="secondary"
                @click="step = 3"
              >
                Next
              </v-btn>
            </v-stepper-content>

            <!-- / step 2 ended -->
            
            <v-stepper-step
              :complete="step > 3"
              step="3"
            >
              Personal Information
            </v-stepper-step>

            <v-stepper-content step="3">
              <collection-info-user></collection-info-user>
              <v-btn
                @click="step = 2"
              >
                Back
              </v-btn>
              <v-btn
                color="secondary"
                @click="step = 4"
              >
                Next
              </v-btn>
            </v-stepper-content>

            <!-- / step 2 ended -->
            
            <v-stepper-step
              :complete="step > 4"
              step="4"
            >
              Finish Booking
            </v-stepper-step>

            <v-stepper-content step="4">
              <collection-info-other></collection-info-other>
              <v-row>
                <v-col cols=4>
                  <v-btn
                    @click="step = 3"
                    large
                  >
                    Back
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    color="primary"
                    @click="''"
                    block large
                  >
                    Finish
                  </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <!-- / step 2 ended -->
            
          </v-stepper>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import collectionInfoDatePicker from './__components/collection-info-date-picker.vue'
import CollectionInfoOther from './__components/collection-info-other.vue';
import CollectionInfoPostcode from './__components/collection-info-postcode.vue';
import CollectionInfoUser from './__components/collection-info-user';
export default {
  components: { 
    collectionInfoDatePicker, CollectionInfoPostcode,
    CollectionInfoUser,
    CollectionInfoOther
    },
  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        href: 'services'
      },
      {
        text: 'Collection information',
        disabled: true,
        href: '#'
      },
    ],

    form: {
      collection_date: new Date().toISOString().substr(0, 10),
      postcode: '',
      address: {},
      latitude: null,
      longitude: null,
      note: '',
      user: {
        email: '',
        password: '',
      }
    },

    step: 4,
  }),

  methods: {
    handleCollectionDateChange(date) {
      this.form.collection_date = date;
      this.step = 2;
    }
  }
}
</script>