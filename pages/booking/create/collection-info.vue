<template>
  <booking-layout :breadcrumbs="breadcrumbs">
    <template #title>
      <span class='font-weight-light'>
        Fill collection information to complete order
      </span>
    </template>

    <v-form
      @submit.prevent="handleSubmit"
    >
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
            :disabled='!isStep1Valid'
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
          <collection-info-postcode
            @selected='handlePostcodeChange'
          ></collection-info-postcode>
          <v-alert
            color='success'
            type="success"
            v-if='Object.keys(form.address).length'
          >
            {{ form.address.formatted_address.join(' ') }}
          </v-alert>
          <v-btn
            @click="step = 1"
          >
            Back
          </v-btn>
          <v-btn
            color="secondary"
            @click="step = 3"
            :disabled='!isStep2Valid'
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
          <collection-info-user
            @invalid='handleInvalidUser'
            @user='handleUser'
            :errors='errors'
            v-if='!isAuth'
          ></collection-info-user>
          <v-alert v-else type='success'>
            You booking will be create as 
            <strong>{{ info ? info.email : '' }}</strong>
          </v-alert>
          <v-btn
            @click="step = 2"
          >
            Back
          </v-btn>
          <v-btn
            color="secondary"
            @click="step = 4"
            :disabled='!isStep3Valid'
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
          <collection-info-other
            @change='handleOtherChange'
          ></collection-info-other>
          <v-row justify="end">
            <v-col cols=4 md=3 lg=2>
              <v-btn
                @click="step = 3"
                large
              >
                Back
              </v-btn>
            </v-col>
            <v-col cols=8 md=6 lg=4 xl=3>
              <v-btn
                color="primary"
                @click="''"
                block large
                :disabled='!isFormValid'
                :loading='isLoading'
                type='submit'
              >
                Finish
              </v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <!-- / step 2 ended -->
        
      </v-stepper>
    </v-form>
  </booking-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import toastr from 'toastr';
import collectionInfoDatePicker from './__components/collection-info-date-picker.vue'
import CollectionInfoOther from './__components/collection-info-other.vue';
import CollectionInfoPostcode from './__components/collection-info-postcode.vue';
import CollectionInfoUser from './__components/collection-info-user';
import { createBooking } from '~/api/booking';
import BookingLayout from '~/layouts/booking-layout.vue';

export default {
  components: { 
    collectionInfoDatePicker, CollectionInfoPostcode,
    CollectionInfoUser,
    CollectionInfoOther,
    BookingLayout,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        to: {name: 'booking-create'},
        exact: true,
      },
      {
        text: 'Collection information',
        disabled: true,
        href: '#'
      },
    ],

    form: {
      collection_date: new Date().toISOString().substr(0, 10),
      postcode: null,
      address: {},
      lat: null,
      lng: null,
      note: '',
      user: {},
    },

    step: 1,

    isLoading: false,

    errors: {},
  }),

  computed: {
    ...mapGetters('booking', ['isCartEmpty']),
    ...mapGetters('user', ['isAuth']),
    ...mapState('user', ['info']),
    ...mapState('booking', ['cartContent', 'modelId']),

    isStep1Valid() {
      const { collection_date } = this.form;

      return collection_date
        && new Date(collection_date).getTime() >= new Date().getTime()
    },
    isStep2Valid() {
      const { postcode, lat, lng, address } = this.form;

      return !!( postcode && lat && lng && Object.keys(address).length );
    },
    isStep3Valid() {
      const { user } = this.form;

      return ( Object.keys(user).length >= 4 || this.isAuth );
    },
    isFormValid() {
      const { isStep1Valid, isStep2Valid, isStep3Valid } = this;

      return ( isStep1Valid && isStep2Valid && isStep3Valid );
    },
  },

  watch: {
    isCartEmpty(isCartEmpty) {
      if (isCartEmpty) this.$router.push('/booking/create')
    },

    isStep1Valid(isValid) {
      if (isValid) this.step = 2;
    },
    isStep2Valid(isValid) {
      if (isValid) this.step = 3;
    },
  },

  mounted() {
    const { isCartEmpty } = this;

    if (isCartEmpty) this.$router.push('/booking/create')
  },

  methods: {
    handleCollectionDateChange(date) {
      this.form.collection_date = date;
    },
    handlePostcodeChange({ postcode, lat, lng, address}) {
      this.form = {
        ...this.form,
        postcode, lat, lng, address
      };
    },
    handleInvalidUser() {
      this.form.user = {};
    },
    handleUser({ email, password, mobileNo, countryCode, name }) {
      this.form.user = {
        ...this.form.user,
        email,
        password,
        name,
        mobile_no: mobileNo,
        country_code: countryCode,
      };
    },
    handleOtherChange({ note }) {
      this.form.note = note;
    },
    handleSubmit() {
      if (!this.isFormValid) return

      this.isLoading = true;
      const { form, cartContent, modelId } = this;

      createBooking({
        ...form,
        cart: cartContent.cart_details,
        model_id: modelId
      }, this.http).then(res => res.data)
        .then(data => {
          const { status, message, access_token, user, errors } = data;

          if (!status) {
            toastr.error('Failed: ' + message);
            this.errors = errors;

            return data;
          }

          this.$store.dispatch('booking/clearCart');
          
          if (access_token) {
            this.$store.dispatch('user/authorize', {
              accessToken: access_token, 
              user
            });
          }

          toastr.success(message);

          setTimeout(() => {
            window.location.href='/booking/create/success'
          }, 500);
        })
        .catch(err => toastr.error(err))
        .finally(() => this.isLoading = false);
    }
  }
}
</script>