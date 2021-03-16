<template>
  <page-layout
    title="Register Your Garage"
    heading-bg="customer-v2/static-pages/registergarages.jpg"
  >
    <div>
      <v-container class="garage-network pt-10">
        <v-row justify="center">
          <v-col cols="12" md="6" lg=4 order-md="2">
            <v-form @submit.prevent="handleSubmit()">
              <v-card class="mx-auto mt-5">
                <v-card-text>
                  <h3 class="register-title text-center pt-5 mb-10">
                    Register Here
                  </h3>
                  
                  <v-alert :type='alert.type' v-if='alert.message'>
                    {{ alert.message }}
                  </v-alert>

                  <v-text-field
                    v-model='form.garagename'
                    :error='!!errors.garagename'
                    :hint="errors.garagename ? errors.garagename[0] : null"
                    label="Garage Name"
                    placeholder="Your Garage Name"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field 
                    v-model='form.name'
                    :error='!!errors.name'
                    :hint="errors.name ? errors.name[0] : null"
                    label="Name" 
                    placeholder="Your Name" 
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.contact_no'
                    :error='!!errors.contact_no'
                    :hint="errors.contact_no ? errors.contact_no[0] : null"
                    label="Contact No."
                    placeholder="Your Contact no."
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    v-model='form.email'
                    :error='!!errors.email'
                    :hint="errors.email ? errors.email[0] : null"
                    type="email"
                    label="E-Mail Address"
                    placeholder="Your Email"
                    outlined
                  >
                  </v-text-field>
                  <div class="login text-left">
                    <!-- <vue-recaptcha :sitekey='siteKey' :loadRecaptchaScript="true">
                    </vue-recaptcha> -->
                    <v-btn color="primary" left type='submit'
                      :loading='isLoading'
                    > Contact Me </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-form>
          </v-col>
          <!-- /register form -->

          <v-col cols="12" md="6" order-md="1">
            <div class="values">
              <h2>Why you should join our Network?</h2>
              <h3 style="font-weight: 200; font-size: 1.75rem">
                Simple, upfront and fair.
              </h3>
              <p class="heading-para" style="padding-top: 20px">
                Joining our network means - we look after you as well as the
                customers. Pricing is always clear and upfront so there are no
                surprises for the customer.
              </p>
              <v-icon class="logos" style="color: #00b4d8"
                >mdi-laptop-windows</v-icon
              ><span class="icon"
                >Easy to use online booking management system.<br
              /></span>
              <v-icon class="logos" style="color: #00b4d8"
                >mdi-credit-card-outline</v-icon
              ><span class="icon"
                >Price promise: there will never be a monthly fee.<br
              /></span>
              <v-icon class="logos" style="color: #00b4d8"
                >mdi-timer-sand</v-icon
              ><span class="icon ml-2">
                Payment is made 10 working days after job completion.<br
              /></span>
              <v-icon class="logos" style="color: #00b4d8"
                >mdi-laptop-windows</v-icon
              ><span class="icon"
                >Chat with an advisor with ease, no waiting in call queues.<br
              /></span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/page-layout";
import VueRecaptcha from 'vue-recaptcha';
import { requestToRegisterGarage } from '~/api/garage';
import toastr from 'toastr';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
    VueRecaptcha,
  },

  data: () => ({
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    form: {
      garagename: '',
      name: '',
      contact_no: '',
      email: '',
    },
    alert: {
      message: '',
      type: '',
    },
    isLoading: false,
    errors: {},
  }),

  methods: {
    handleSubmit() {
      const { form } = this;
      this.isLoading = true;
      this.alert = {
        message: '',
        type: '',
      };
      this.errors = {};

      requestToRegisterGarage(form).then(data => {
        const {status, message, errors} = data;

        if (!status) {
          toastr.error(message);
          this.errors = errors;
          return;
        }

        toastr.success(message);
        this.form = {
          ...form,
          garagename: '',
          name: '',
          contact_no: '',
          email: '',
        };
        this.alert = {
          type: 'success',
          message,
        }

      }).catch(err => {
        const {data} = err.response;

        toastr.error(data.message || 'Some error occured please try again');
        this.errors = data.errors;
        
      }).finally(() => this.isLoading = false);
    },
  },

  head: {
    title: "Register Your Garage",

    meta: [
      {
        hid: 'description', name: 'description',
        content:
          "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300",
      },
      {
        name: "keywords",
        content:
          "MOT, MOT test, Car MOT test,vehicle MOT Test, MOT test in Reading, MOT with free collection,MOT with free delivery, MOT garage, MOT in Reading",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content: "Register Your Garage",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content: URL,
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: "logo-default.png",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: 'og:description',  property: 'og:description',
        content:
          "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Register Your Garage",
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
        hid: 'og:type',
        property: "og:type",
        content: "business.business",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .garage-network .values .logos {
    padding-bottom: 3px;
    // padding-top: 20px;
  }
}
.garage-network .register-title {
  font-size: 1.75rem;
  font-weight: 300;
}
.garage-network .values .logos {
  font-size: 22px;
  padding-bottom: 3px;
  // padding-top: 20px;
}
h2 {
  font-weight: 200;
  font-size: 2rem;
}
.garage-network .list .icon {
  margin-left: 12px;
  font-weight: 200;
  font-size: 20px;
}
.garage-network .values .icon {
  margin-left: 12px;
  font-weight: 200;
  font-size: larger;
  padding-bottom: 3px;
  padding-top: 2px;
}
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