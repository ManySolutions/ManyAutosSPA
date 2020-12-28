<template>
  <page-layout
    title="Register Your Garage"
    heading-bg="customer-v2/static-pages/registergarages.jpg"
  >
    <div>
      <v-container class="garage-network pt-10">
        <v-row class="justify-content-center">
          <v-col cols="12" md="6">
            <v-form @submit.prevent="handleSubmit()">
              <v-card class="mx-auto mt-5" max-width="344">
                <v-card-text>
                  <h3
                    class="register-title text-center pt-5 mb-10"
                    style="font-size: 1.75rem; font-weight: 300"
                  >
                    Register Here
                  </h3>
                  <v-text-field
                    label="Garage Name"
                    placeholder="Your Garage Name"
                    outlined
                    :value='garage.title'
                    disabled
                  >
                  </v-text-field>
                  <v-text-field
                    label="Full Name"
                    placeholder="Your Name"
                    outlined
                    :value='garage.name'
                    disabled
                  >
                  </v-text-field>
                  <v-text-field
                    type="email"
                    label="E-Mail Address"
                    placeholder="Your Email"
                    outlined
                    :value='garage.email'
                    disabled
                  >
                  </v-text-field>
                  <v-text-field
                    label="Mobile No."
                    placeholder="Your Mobile no."
                    outlined
                    :value='garage.mobile_no'
                    disabled
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.password'
                    :error='!!errors.password'
                    :hint="errors.password ? errors.password[0] : null"
                    label="Password"
                    placeholder="*****"
                    type="password"
                    outlined
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.password_confirmation'
                    :error='!!errors.password_confirmation'
                    :hint="errors.password_confirmation ? errors.password_confirmation[0] : null"
                    required
                    label="Confirm Password"
                    placeholder="*****"
                    type="password"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.phone_no'
                    :error='!!errors.phone_no'
                    :hint="errors.phone_no ? errors.phone_no[0] : null"
                    label="Telephone" 
                    placeholder="Your no." 
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.vat'
                    :error='!!errors.vat'
                    :hint="errors.vat ? errors.vat[0] : null"
                    label="VAT No"
                    placeholder="Your VAT no."
                    outlined
                  >
                  </v-text-field>
                  <collection-info-postcode
                    input-style='outlined'
                    @selected='handlePostcodeChange'
                  ></collection-info-postcode>
                  <v-alert 
                    v-if='!!errors.lat || !!errors.address'
                    text 
                    type='error'
                    dense
                    class='pt-0'
                  >
                    {{ 'Please select an address from list after searching using postcode above' }}
                  </v-alert>
                  <v-text-field
                    v-model='form.account_no'
                    :error='!!errors.account_no'
                    :hint="errors.account_no ? errors.account_no[0] : null"
                    required
                    label="Your Account No."
                    placeholder="Account No."
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.sort_code'
                    :error='!!errors.sort_code'
                    :hint="errors.sort_code ? errors.sort_code[0] : null"
                    required
                    label="Your Sort Code."
                    placeholder="Sort Code."
                    outlined
                  >
                  </v-text-field>
                  <v-file-input
                    v-model='form.business_owner_id'
                    :error='!!errors.business_owner_id'
                    :hint="errors.business_owner_id ? errors.business_owner_id[0] : null"
                    label="Business Owner Id"
                    outlined
                  ></v-file-input>
                  <v-file-input
                    v-model='form.business_utility_bill'
                    :error='!!errors.business_utility_bill'
                    :hint="errors.business_utility_bill ? errors.business_utility_bill[0] : null"
                    label="Business Utility Bill"
                    outlined
                  ></v-file-input>
                  <v-file-input
                    v-model='form.insurnace_certificate'
                    :error='!!errors.insurnace_certificate'
                    :hint="errors.insurnace_certificate ? errors.insurnace_certificate[0] : null"
                    label="Insurance Certificate"
                    outlined
                    required
                  ></v-file-input>
                  <v-text-field
                    v-model='form.insurance_expiry_date'
                    :error='!!errors.insurance_expiry_date'
                    :hint="errors.insurance_expiry_date ? errors.insurance_expiry_date[0] : null"
                    required
                    label="Insurance Expiry Date"
                    placeholder="Insurance Expiry Date"
                    outlined
                    type='date'
                  >
                  </v-text-field>
                  
                  <div class="login text-right">
                    <v-btn color="primary"
                      type='submit'
                      :loading='isLoading'
                    > Submit </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </page-layout>
</template>
<script>
import PageLayout from "@/layouts/page-layout";
import { getApprovedGarage, registerGarage } from '~/api/garage';
import toastr from 'toastr';
import CollectionInfoPostcode from '../booking/create/__components/collection-info-postcode.vue';

const URL = "window.location.href";

export default {
  components: {
    PageLayout,
    CollectionInfoPostcode,
  },

  data: () => ({
    signature: null,
    id: null,
    garage: {},
    form: {
      password: '',
      password_confirmation: '',
      phone_no: '',
      vat: '',
      postcode: '',
      lat: '',
      lng: '',
      address: '',
      sort_code: '',
      account_no: '',
      business_owner_id: null,
      business_utility_bill: null,
      insurnace_certificate: null,
      insurance_expiry_date: '',
    },
    errors: {},
    isLoading: false,
  }),

  mounted() {
    this.signature = this.$route.query.signature;
    this.id = this.$route.params.id;

    this.getGarage();
  },

  methods: {
    getGarage() {
      const {id, signature} = this;
      getApprovedGarage(id, signature).then(data => {
        const { status, garage } = data;

        if (!status) {
          toastr.error('Invalid garage request, please request to register first');
          return this.$router.push('/request-to-register-your-garage');
        }
        
        this.garage = garage;
      }).catch(err => {
        if (err.response.status == 403)
          toastr.error('Invalid garage request, please request to register first');
          return this.$router.push('/request-to-register-your-garage');
      })
    },

    handleSubmit() {
      const formData = new FormData();
      const {form, id} = this;
      this.isLoading = true;
      this.alert = {
        message: '',
        type: '',
      };
      this.errors = {};

      Object.keys(form).map((index) => {
        formData.append(index, form[index]);
      });

      registerGarage(id, formData).then(data => {
        const {status, message, errors} = data;

        if (!status) {
          toastr.error(message);
          this.errors = errors;
          return;
        }

        toastr.success(message);
        this.$router.push('./success');
      }).catch(err => {
        const {data} = err.response;

        toastr.error(data.message || 'Some error occured please try again');
        this.errors = data.errors;
        
      }).finally(() => this.isLoading = false);
    },

    handlePostcodeChange({ postcode, lat, lng, address }) {
      this.form = {
        ...this.form,
        postcode, lat, lng, address
      }
    }
  },

  head: {
    title: "Register Your Garage",

    meta: [
      {
        name: "description",
        content:
          "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.",
      },
      {
        name: "keywords",
        content:
          "MOT, MOT test, Car MOT test,vehicle MOT Test, MOT test in Reading, MOT with free collection,MOT with free delivery, MOT garage, MOT in Reading",
      },
      {
        property: "og:title",
        content: "Register Your Garage | ManyAutos LTD",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: URL,
      },
      {
        property: "og:image",
        content: "logo-default.png",
      },
      {
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        property: "og:description",
        content:
          "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Register Your Garage | ManyAutos LTD",
      },
      {
        name: "twitter:description",
        content:
          "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.",
      },
      {
        name: "twitter:image",
        content: "logo-default.png",
      },
      {
        itemprop: "image",
        content: "logo-default.png",
      },
      {
        property: "og:type",
        content: "business.business",
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
.garage-network .card.register-form {
  background-color: #d7ddde;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.garage-network .card.register-form label {
  padding-top: 14px;
  font-weight: 200;
}
@media (max-width: 768px) {
  .garage-network .card.register-form {
    margin-top: 35px;
  }
}
</style>