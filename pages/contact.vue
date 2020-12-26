<template>
  <page-layout title="Contact Us">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" lg="4">
          <v-form @submit.prevent="handleSubmit()">
            <v-card class="mx-auto mt-5" max-width="500">
              <v-card-text>
                <h2 class="register-title text-center pt-5 mb-10">
                  Submit your query with us now.
                </h2>
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  placeholder="Your Name"
                  outlined
                  :error="!!errors.name"
                  :hint="errors.name ? errors.name[0] : null"
                  persistent-hint
                >
                </v-text-field>
                <v-text-field
                  v-model="form.mobile_no"
                  label="Contact No."
                  placeholder="Your Contact no."
                  outlined
                  :error="!!errors.mobile_no"
                  :hint="errors.mobile_no ? errors.mobile_no[0] : null"
                  persistent-hint
                >
                </v-text-field>
                <v-text-field
                  v-model="form.mobile_no"
                  label="Reg No."
                  placeholder="Your Car Reg no."
                  outlined
                  :error="!!errors.mobile_no"
                  :hint="errors.mobile_no ? errors.mobile_no[0] : null"
                  persistent-hint
                >
                </v-text-field>
                <v-text-field
                  v-model="form.email"
                  type="email"
                  label="E-Mail Address"
                  placeholder="Your Email"
                  outlined
                  :error="!!errors.email"
                  :hint="errors.email ? errors.email[0] : null"
                  persistent-hint
                >
                </v-text-field>
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Enquiry Details"
                  placeholder="Enter details of your enquiry."
                >
                </v-textarea>
                <v-file-input chips multiple label="File input"> </v-file-input>
                <div class="login text-center mt-10">
                  <v-btn tile color="success"> Reset </v-btn>
                  <v-btn color="primary"> Send Message </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-form>
        </v-col>
        <!-- /contact form -->

        <v-col cols="12" md="6" lg="4">
          <span>
            <h2 class="contact-heading mb-3 mt-7">Contact Details</h2>
          </span>
          <hr />
          <div class="col-12 margin-top-10">
            <div class="col-12">
              <p class="starts-from position-relative same-icon">
                <v-icon
                  class="MoveFaLeft position-absolute"
                  style="color: #00b4d8"
                  >mdi-pin</v-icon
                >
                <strong>Location</strong><br />Unit 4, Tunbridge Jones
                Industrial Estate, Cradock Road, Reading, RG2 0JT
              </p>
            </div>
            <div class="col-12">
              <p class="starts-from position-relative same-icon">
                <v-icon
                  class="MoveFaLeft position-absolute"
                  style="color: #00b4d8"
                  >mdi-cellphone-basic</v-icon
                >
                <strong>Contact Number</strong><br />
                <v-btn
                  text
                  color="primary"
                  class="py-0 px-0"
                  style="height: auto"
                  href="tel:01189876300"
                >
                  <span class="text-large"> 01189 876300 </span>
                </v-btn>
              </p>
            </div>
            <div class="col-12">
              <p class="starts-from position-relative same-icon">
                <v-icon
                  class="MoveFaLeft position-absolute"
                  style="color: #00b4d8"
                  >mdi-email</v-icon
                >
                <strong>Email</strong><br />
                info@manyautosltd.com
              </p>
            </div>
            <div class="col-12">
              <p class="starts-from position-relative same-icon">
                <v-icon
                  class="MoveFaLeft position-absolute"
                  style="color: #00b4d8"
                  >mdi-clock</v-icon
                >
                <strong>Opening Hours</strong><br />
                Monday-Friday:<br />
                9:30am to 6:30pm
              </p>
              <p class="text ml-3" style="">
                <span class="bold text-teal">Saturday:</span><br /><span
                  class="text-teal"
                  >9:30am to 6pm</span
                >
              </p>
              <p class="text ml-3">
                <span class="bold text-teal">Sunday:</span><br /><span
                  class="text-teal"
                  >Close</span
                >
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>
<script>
import toastr from "toastr";
import { mapActions } from "vuex";
import { registerUser } from "~/api/user";
import { countryList } from "~/utils/vars";
import pageLayout from "~/layouts/page-layout.vue";

export default {
  components: { pageLayout },
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        country_code: "44",
        mobile_no: "",
        is_sms: true,
        name: "",
      },
      countryList,
      errors: {},
      isLoading: false,
    };
  },

  methods: {
    ...mapActions("user", ["authorize"]),

    handleSubmit() {
      this.isLoading = true;
      this.errors = {};

      registerUser(this.form)
        .then((res) => {
          const { status, message, errors, user, access_token } = res;

          if (!status) {
            this.errors = errors;
            toastr.error(message);
            return;
          }

          this.authorize({ accessToken: access_token, user });
          toastr.success(message);
          this.$router.push({ name: "index" });
        })
        .catch((err) => {
          if (err >= 400) toastr.error("Unauthorized");
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
<style lang="scss" scoped>
.register-title {
  font-size: 27px;
  border: none;
  padding-top: 0px;
  padding-bottom: 10px;
  font-size: 27px;
  font-weight: 600;
  color: black;
}
h2.contact-heading.mb-3 {
  margin-top: 65px;
  color: #17a2b8;
}
hr {
  color: #17a2b8;
}
.same-icon {
  // font-size: 19px;
  // font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding-left: 10px;
  color: #0c0b0b;
}
.same-icon .v-icon {
  top: 3px;
  left: -27px;
}
strong {
  color: #212529;
}
.text {
  color: #0c0b0b;
}
</style>
