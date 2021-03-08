<template>
  <v-container class="home-sec-gaps">
    <v-row>
      <v-col cols="12">
        <v-form ref='form' @submit.prevent="handleSubmit">
          <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h2 class="forgot-pass text-center pt-5 mb-10">
                Forgot Your Password?
              </h2>
              <v-alert v-if='resStatus' :type='resStatus'>{{resMsg}}</v-alert>
              <v-text-field
                label="Your Email"
                placeholder="example@gmail.com"
                type="email"
                outlined
                v-model="form.email"
                :error='!!errors.email'
                :hint="errors.email ? errors.email[0] : null"
              >
              </v-text-field>
              <div class="update text-center">
                <v-btn color="secondary" large block type='submit'
                  :loading='isLoading'
                > Reset my Password </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import toastr from 'toastr';
import { forgotPassword } from '~/api/user';
export default {
  data: () => ({
    form: {
      email: '',
    },
    isLoading: false,
    errors: {},
    resMsg: null,
    resStatus: null,
  }),

  methods: {
    handleSubmit() {
      this.isLoading = true;
      this.errors = {};
      this.resStatus = null;

      forgotPassword(this.form)
        .then(res => {
          const {status, message, errors} = res;

          if (!status) {
            toastr.error(message);
            this.errors = errors;
            this.resStatus = 'error'
            this.resMsg = message;
            return;
          }

          toastr.success(message);
          this.resStatus = 'success'
          this.resMsg = message;
          this.$refs.form.reset();
        })
        .catch(err => {
          const {errors, message} = err.response.data;

          if (err.response.status > 400) {
            this.resStatus = 'error'
            this.resMsg = message;
            this.errors = errors
            toastr.error(message);
          }
        })
        .finally(() => this.isLoading = false)
    }
  },

  head: {
    title: "Forgot Your Password?",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.",
      },
      {
        name: "keywords",
        content:
          "many autos ltd automotive service,car services,full car service,garage service",
      },
      {
        property: "og:title",
        content: "Forgot Your Password? | ManyAutos LTD",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: process.env.APP_URL + "/forgot-password",
      },
      {
        property: "og:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Forgot Your Password? | ManyAutos LTD",
      },
      {
        name: "twitter:description",
        content:
          "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.",
      },
      {
        name: "twitter:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        itemprop: "image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
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
</style>