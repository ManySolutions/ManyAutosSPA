<template>
  <page-layout title="Contact Us"
  headingBgStatic='https://static.manyautosltd.com/uploads/contact-us.jpg'
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-form @submit.prevent="handleSubmit()">
            <v-card class="mx-auto mt-5" max-width="500">
              <v-card-text>
                <h2 class="register-title text-center pt-5 mb-10">
                  Submit your query with us now.
                </h2>
                <v-alert v-if='alert.status' :type='alert.status'>
                  {{ alert.message }}
                </v-alert>
                <v-row>
                  <v-col class='py-0'>
                    <v-text-field
                      v-model="form.f_name"
                      label="First Name"
                      placeholder="Your First Name"
                      outlined
                      :error="!!errors.f_name"
                      :hint="errors.f_name ? errors.f_name[0] : null"
                      persistent-hint
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class='py-0'>
                    <v-text-field
                      v-model="form.s_name"
                      label="Last Name"
                      placeholder="Your Last Name"
                      outlined
                      :error="!!errors.s_name"
                      :hint="errors.s_name ? errors.s_name[0] : null"
                      persistent-hint
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
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
                  v-model="form.reg_no"
                  label="Reg No."
                  placeholder="Your Car Reg no."
                  outlined
                  :error="!!errors.reg_no"
                  :hint="errors.reg_no ? errors.reg_no[0] : null"
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
                  v-model='form.message'
                  outlined
                  name="input-7-4"
                  label="Enquiry Details"
                  placeholder="Enter details of your enquiry."
                  :error="!!errors.message"
                  :hint="errors.message ? errors.message[0] : null"
                >
                </v-textarea>
                <v-file-input chips multiple label="File input"> </v-file-input>
                <div class="login text-center mt-10">
                  <v-btn 
                    color="primary" 
                    type="submit" 
                    :loading='isLoading'
                    large
                  > Send Message </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-form>
        </v-col>
        <!-- /contact form -->

        <v-col cols="12" md="4" lg="4">
          <span>
            <h2 class="contact-heading mb-3 mt-7">Contact Details</h2>
          </span>
          <hr />
          <div class="col-12 margin-top-10">
            <!-- <div class="col-12">
              <p class="starts-from position-relative same-icon">
                <v-icon
                  class="MoveFaLeft position-absolute"
                  style="color: #00b4d8"
                  >mdi-pin</v-icon
                >
                <strong>Location</strong><br />Unit 4, Tunbridge Jones
                Industrial Estate, Cradock Road, Reading, RG2 0JT
              </p>
            </div> -->
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
import { generateTicket } from "~/api/user";
import { countryList } from "~/utils/vars";
import pageLayout from "~/layouts/page-layout.vue";
import { fbqContact } from '~/api/fbq';

export default {
  components: { pageLayout },
  data() {
    return {
      form: {
        email: "",
        mobile_no: "",
        name: "",
        message: '',
        reg_no: '',
        f_name: '',
        s_name: '',
      },
      errors: {},
      isLoading: false,
      alert: {
        status: null,
        message: '',
      },
    };
  },

  methods: {
    ...mapActions("user", ["authorize"]),

    handleSubmit() {
      this.isLoading = true;
      this.errors = {};
      this.alert = {
        ...this.alert,
        status: null,
        message: '',
      };

      const {form} = this;

      generateTicket(form, this.http)
        .then((res) => {
          const { status, message, errors } = res;

          if (!status) {
            this.errors = errors;
            toastr.error(message);
            this.alert = {
              status: 'error',
              message,
            }
            return;
          }

          fbqContact(
            this.$fb,
            form.f_name,
            form.s_name,
            form.email,
            form.mobile_no,
            form.reg_no
          );

          toastr.success(message);

          this.form = {
            ...this.form,
            email: "",
            mobile_no: "",
            name: "",
            message: '',
            reg_no: '',
          }

          this.alert = {
            status: 'success',
            message,
          }
        })
        .catch((err) => {
          const { message, errors } = err.response.data;

          this.errors = errors;
          toastr.error(message);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  head: {
    title: 'Contact',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'We value your opinion and feedback. Contact us if you want any help regarding our services or if you have any complains. We will be at your service.'
      },
      {
        name: 'keywords', 
        content: 'Contact car services, contact garage in United Kingdom, contact garages, car body repair near me, car garages near me'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Contact"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: URL
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:site_name',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "We value your opinion and feedback. Contact us if you want any help regarding our services or if you have any complains. We will be at your service."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Contact"
      },
      {
        name: "twitter:description", 
        content: "We value your opinion and feedback. Contact us if you want any help regarding our services or if you have any complains. We will be at your service."
      },
      {
        name: "twitter:image", 
        content: "logo-default.png"
      },
      {
        itemprop: "image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
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
