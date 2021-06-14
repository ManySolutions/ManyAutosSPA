<template>
  <booking-layout :breadcrumbs="breadcrumbs" no-tabs no-search-box>
    <template #title>
      <span class='font-weight-light'>
        Fill collection information to complete order
      </span>
    </template>

    <v-form
      @submit.prevent="''"
    >
      <v-card class=''>
        <div class='d-flex flex-no-wrap justify-space-between align-middle'>
          <div>
            <v-card-title>
              <span v-if='isStep1Valid'>
                <v-icon color='error' class='mr-2' v-if='step_errors.step1'>
                  mdi-information-outline
                </v-icon>
                <v-icon v-else color='success' class='mr-2'>
                  mdi-check-circle-outline
                </v-icon>
                Collection date
              </span>
              <span v-else>
                <v-icon color='blue darken-2' class='mr-2'>
                  mdi-circle-edit-outline
                </v-icon>
                Choose collection date
              </span>
            </v-card-title>
            <v-card-subtitle class='pl-12'>
              <span v-if='isStep1Valid' class='success--text'>
                {{form.collection_date}}
              </span>
              <span v-else>
                Collection date will be used to collect your vehicle
              </span>
            </v-card-subtitle>
          </div>
          <div v-if='isStep1Valid' class='ma-3'>
            <v-btn
              v-if='step == 1'
              color='error'
              @click='step = activeStep'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Cancel
            </v-btn>
            <v-btn
              v-else
              color='blue darken-2'
              @click='step = 1'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Edit
            </v-btn>
          </div>
        </div>
        <v-card-text class='pt-0' :class='step == 1 ? `` : `d-none`'>
          <collection-info-date-picker
            @change='handleCollectionDateChange'
          ></collection-info-date-picker>
        </v-card-text>
      </v-card>
      <!-- /collection info -->

      <v-card class='mt-5' :disabled='!isStep1Valid'>
        <div class='d-flex flex-no-wrap justify-space-between align-middle'>
          <div>
            <v-card-title>
              <span v-if='isStep2Valid'>
                <v-icon color='error' class='mr-2' v-if='step_errors.step2'>
                  mdi-information-outline
                </v-icon>
                <v-icon v-else color='success' class='mr-2'>
                  mdi-check-circle-outline
                </v-icon>
                Collection Address
              </span>
              <span v-else>
                <v-icon color='blue darken-2' class='mr-2'>
                  mdi-circle-edit-outline
                </v-icon>
                Your Postcode
              </span>
            </v-card-title>
            <v-card-subtitle class='pl-12'>
              <span v-if='isStep2Valid' class='success--text'>
                {{form.address.formatted_address.join(' ')}}
              </span>
              <span v-else>
                Enter your postcode and choose your collection address
              </span>
            </v-card-subtitle>
          </div>
          <div v-if='isStep2Valid' class='ma-3'>
            <v-btn
              v-if='step == 2'
              color='error'
              @click='step = activeStep'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Cancel
            </v-btn>
            <v-btn
              v-else
              color='blue darken-2'
              @click='step = 2'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Edit
            </v-btn>
          </div>
        </div>
        <v-card-text class='pt-0' :class='step == 2 ? `` : `d-none`'>
          <collection-info-postcode
            @selected='handlePostcodeChange'
          ></collection-info-postcode>
        </v-card-text>
      </v-card>
      <!-- /postcode and address -->

      <v-card class='mt-5' :disabled='!isStep2Valid'>
        <div class='d-flex flex-no-wrap justify-space-between align-middle'>
          <div>
            <v-card-title>
              <span v-if='isStep3Valid'>
                <v-icon color='error' class='mr-2' v-if='step_errors.step3'>
                  mdi-information-outline
                </v-icon>
                <v-icon v-else color='success' class='mr-2'>
                  mdi-check-circle-outline
                </v-icon>
                Your Personal Info
              </span>
              <span v-else>
                <v-icon color='blue darken-2' class='mr-2'>
                  mdi-circle-edit-outline
                </v-icon>
                Your Personal Info
              </span>
            </v-card-title>
            <v-card-subtitle class='pl-12'>
              <span v-if='isAuth' class='success--text'>
                Booking will be created using
                <br>
                <strong>{{ info ? info.email : '' }}</strong>
              </span>
              <span v-else-if='isStep3Valid' class='success--text'>
                Your account will be created as 
                <strong v-html='form.user.f_name + ` ` + form.user.s_name'></strong>
              </span>
              <span v-else>
                Enter your personal information to create account.
              </span>
            </v-card-subtitle>
          </div>
          <div v-if='isStep3Valid && !isAuth' class='ma-3'>
            <v-btn
              v-if='step == 3'
              color='error'
              @click='step = activeStep'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Cancel
            </v-btn>
            <v-btn
              v-else
              color='blue darken-2'
              @click='step = 3'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Edit
            </v-btn>
          </div>
        </div>
        <v-card-text class='pt-0' :class='step == 3 ? `` : `d-none`'>
          <collection-info-user
            @invalid='handleInvalidUser'
            @user='handleUser'
            :errors='errors'
            v-if='!isAuth'
          ></collection-info-user>
          <v-alert v-else color='success' text>
            Your booking will be created as 
            <strong>{{ info ? info.email : '' }}</strong>
          </v-alert>
        </v-card-text>
      </v-card>
      <!-- personal information -->

      <v-card class='mt-5' :disabled='!isStep3Valid'>
        <div class='d-flex flex-no-wrap justify-space-between align-middle'>
          <div>
            <v-card-title>
              <span v-if='isStep3Valid'>
                <v-icon color='success' class='mr-2'>
                  mdi-check-circle-outline
                </v-icon>
                Other Information
              </span>
              <span v-else>
                <v-icon color='blue darken-2' class='mr-2'>
                  mdi-circle-edit-outline
                </v-icon>
                Other Information
              </span>
            </v-card-title>
            <v-card-subtitle class='pl-12'>
              Click on the finish button to complete your booking
            </v-card-subtitle>
          </div>
          <div v-if='isStep3Valid' class='ma-3'>
            <v-btn
              v-if='step != 4'
              color='success'
              @click='step = 4'
              text
              :x-large='isDevice.lg'
              :small='isDevice.xs'
            >
              Finish
            </v-btn>
          </div>
        </div>
        <v-card-text class='pt-0' :class='step == 4 ? `` : `d-none`'>
          <collection-info-other
            @change='handleOtherChange'
          ></collection-info-other>
          <v-row justify="end">
            <v-col v-if='errorMsg' cols=12 sm=6 md=6 lg=8 xl=9>
              <v-alert
                color="red"
                dense
                text
                type="error"
              >
                {{ errorMsg }}
              </v-alert>
            </v-col>
            <v-col cols=12 sm=6 md=6 lg=4 xl=3>
              <v-btn
                color="primary"
                @click="handleSubmit"
                block large
                :disabled='!isFormValid || isLoading'
                :loading='isLoading'
                type='submit'
              >
                Finish Booking
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

    </v-form>

    <v-dialog
      v-model="is_login_dialog"
      max-width="490"
    >
      <v-card>
        <v-card-title class="headline">
          Account Already Exists
        </v-card-title>

        <v-card-text>
          An account against the email <strong>{{ form.user.email }}</strong>
          already exists. If it's you please try to login first, 
          else please use another email address.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="primary darken-1"
            text
            @click="is_login_dialog = false; step = 3"
          >
            Use another email
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            to='/login'
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="bookingDialog"
      persistent
      width="300"
    >
      <v-card
        :color="successBooking ? `success` : `primary`"
        dark
      >
        <v-card-text v-if='isLoading' class='text-center pt-3'>
          please wait while we are processing your booking...
          <br>
          <v-progress-circular
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-circular>
        </v-card-text>
        <v-card-text v-if='successBooking' class='text-center pt-3'>
          <v-icon x-large>mdi-check-circle</v-icon>
          <br><br>
          Your booking has been processed successfully, 
          Redirecting to success page...
        </v-card-text>
      </v-card>
    </v-dialog>
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
import { fbqInitiateCheckout, fbqPurchase } from '~/api/fbq';
import http from '~/utils/http';

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
      has_payment_plan: false,
      referrer_id: null,
    },

    step: 1,
    activeStep: null,

    isLoading: false,

    errors: {},
    errorMsg: null,

    is_login_dialog: false,

    step_errors: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },

    successBooking: false,
    bookingDialog: false,
  }),

  computed: {
    ...mapGetters('booking', ['isCartEmpty', 'cartCount', 'cart', 'cartKey', 'vehicleName', 'carReg']),
    ...mapGetters('user', ['isAuth']),
    ...mapState('user', ['info']),
    ...mapState('booking', ['cartContent', 'modelId', 'hasPaymentPlan', 'referralId']),

    isStep1Valid() {
      const { collection_date } = this.form;

      return collection_date
        && new Date(collection_date).getTime() >= new Date().getTime()
    },
    isStep2Valid() {
      const { postcode, lat, lng, address } = this.form;

      return this.isStep1Valid 
        && !!( postcode && lat && lng && Object.keys(address).length );
    },
    isStep3Valid() {
      const { user } = this.form;

      return this.isStep2Valid 
        && ( Object.keys(user).length >= 4 || this.isAuth );
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
      if (isValid) this.step = this.isAuth ? 4 : 3;
    },
    $data: {
      handler({ isLoading, successBooking }) {
        this.bookingDialog = isLoading || successBooking;
      },
      deep: true,
    }
  },

  mounted() {
    const { isCartEmpty } = this;

    if (isCartEmpty) this.$router.push('/booking/create');
    
    this.form.has_payment_plan = this.hasPaymentPlan;
    this.form.referrer_id = this.referralId;

    fbqInitiateCheckout(
      this.$fb,
      'car_repair',
      this.cart,
      this.cartCount,
      this.cartContent.subtotal,
    );
  },

  methods: {
    handleCollectionDateChange(date) {
      this.form.collection_date = date;
      this.step = 2;
      this.activeStep = 2;
    },
    handlePostcodeChange({ postcode, lat, lng, address}) {
      this.form = {
        ...this.form,
        postcode, lat, lng, address
      };

      const nextStep = this.isAuth ? 4 : 3;
      
      this.step = nextStep;
      this.activeStep = nextStep;
    },
    handleInvalidUser() {
      this.form.user = {};
      this.activeStep = 3;
    },
    handleUser({ email, password, mobileNo, countryCode, name, s_name, f_name }) {
      this.form.user = {
        ...this.form.user,
        email,
        password,
        name,
        mobile_no: mobileNo,
        country_code: countryCode,
        s_name,
        f_name,
      };
      this.activeStep = 4;
      this.step = 4;
      
      this.sendPreOrderRequest();
    },
    handleOtherChange({ note }) {
      this.form.note = note;
    },
    handleSubmit() {
      if (!this.isFormValid || this.successBooking) return

      this.isLoading = true;
      this.errorMsg = null;
      this.step_errors = {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
      };
      const { form, cartKey, modelId } = this;

      createBooking(
        {
          ...form,
          key: cartKey,
          model_id: modelId
        },
        this.http
      )
        .then(res => res.data)
        .then(data => {
          const { 
            status, message, access_token, user, errors, id, is_email_exist 
          } = data;

          if (is_email_exist) {
            this.is_login_dialog = true;
            this.$store.commit('settings/SET_REDIRECT', {
              to: '/booking/create/collection-info',
              referrer: 'login'
            });
          }

          if (!status) {
            toastr.error('Failed: ' + message);
            this.errorMsg = message;
            this.errors = errors;
            
            if (data.is_date_error) this.step_errors.step1 = true;
            if (data.is_address_error) this.step_errors.step2 = true;
            if (data.is_personal_info_error) this.step_errors.step3 = true;

            return data;
          }

          try {
            fbqPurchase(
              this.$fb,
              this.cart,
              this.cartCount,
              this.cartContent.subtotal,
              this.info ? this.info.id : user.id,
              id,
              this.hasPaymentPlan ? '1' : null
            );
          } catch (error) { }
          
          if (access_token) {
            this.$store.dispatch('user/authorize', {
              accessToken: access_token, 
              user
            });
          }

          // toastr.success(message);
          this.successBooking = true;
          window.location.href='/booking/create/success';

        })
        .catch(err => toastr.error(err.response.body.message))
        .finally(() => this.isLoading = false);
    },

    sendPreOrderRequest() {
      const { form, cartKey, vehicleName, carReg } = this;

      const data = {
        ...form, 
        key: cartKey,
        car_reg: carReg,
        vehicle_name: vehicleName,
        };       

        http.post('/discarded/booking', data)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-card__title {
    word-break: unset;
    font-size: 16px;
    font-weight: 600;
}
</style>