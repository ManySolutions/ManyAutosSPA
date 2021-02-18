<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="handleSubmit()">
          <v-card class="mx-auto mt-5" max-width="480">
            <v-card-text>
              <h2 class="register-title text-center pt-5 mb-10">
                Create Account
              </h2>
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
                    label="Name"
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
                v-model='form.email'
                type='email'
                label="E-Mail Address"
                placeholder="youremail@gmail.com"
                outlined
                :error='!!errors.email'
                :hint="errors.email ? errors.email[0] : null"
                persistent-hint
              >
              </v-text-field>
              <v-text-field 
                v-model='form.password'
                label="Password" 
                placeholder="*****" 
                outlined
                :error='!!errors.password'
                :hint="errors.password ? errors.password[0] : null"
                persistent-hint
                type='password'
              >
              </v-text-field>
              <v-text-field
                v-model='form.password_confirmation'
                label="Confirm Password"
                placeholder="*****"
                outlined
                type='password'
              >
              </v-text-field>
              <v-select
                v-model="form.country_code"
                :items="countryList"
                menu-props="auto"
                label="Country Code"
                prepend-icon="mdi-map"
                single-line
                outlined
                :error='!!errors.country_code'
                :hint="errors.country_code ? errors.country_code[0] : null"
                persistent-hint
                item-text='name'
                item-value='code'
              ></v-select>
              <v-text-field
                v-model='form.mobile_no'
                label="Mobile No."
                placeholder="7700 ***796"
                outlined
                :error='!!errors.mobile_no'
                :hint="errors.mobile_no ? errors.mobile_no[0] : null"
                persistent-hint
              >
              </v-text-field>
              <v-checkbox
                v-model='form.is_sms'
                label="Notifictaion Via SMS"
                color="primary"
                hide-details
              ></v-checkbox>
              <div class="login text-center mt-10">
                <v-btn 
                  color="primary" 
                  large block
                  type='submit'
                  :loading='isLoading'
                > Register </v-btn>
              </div>
              <hr style="margin-top: 25px" />
              <p class="text text-center mt-5" style="color: #212529">
                Already have an account?
              </p>
              <div class="signup text-center">
                <v-btn color="error" 
                  large block
                  :to='{name: "login"}'
                > Login </v-btn>
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
import { mapActions, mapState, mapGetters } from 'vuex';
import { registerUser } from '~/api/user';
import { countryList } from '~/utils/vars';
import { fbqCompleteRegistration } from '~/api/fbq';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        password_confirmation: '',
        country_code: '44',
        mobile_no: '',
        is_sms: true,
        name: '',
        f_name: '',
        s_name: '',
      },
      countryList,
      errors: {},
      isLoading: false,
    };
  },

  computed: {
    ...mapState('settings', ['redirect']),
    ...mapGetters('user', ['isAuth']),
  },


  mounted() {
    const { redirect, isAuth } = this;

    if (isAuth) {
      if ( redirect.referrer == 'register' ) {
        this.$router.push(redirect.to)
      } else {
        this.$router.push({name: 'index'})
      }
    }
  },

  methods: {
    ...mapActions('user', ['authorize']),

    handleSubmit() {
      this.isLoading = true;
      this.errors = {};
      const {form, redirect} = this;
      
      registerUser(form).then(res => {
        const {status, message, errors, user, access_token} = res;

        if (!status) {
          this.errors = errors;
          toastr.error(message);
          return;
        }

        // fbqCompleteRegistration(
        //   this.$fb,
        //   form.f_name,
        //   form.s_name,
        //   form.email,
        //   form.mobile_no,
        //   form.country_code
        // );

        this.authorize({ accessToken: access_token, user});
        toastr.success(message);
      
        if ( redirect.referrer == 'register' ) {
          this.$router.push(redirect.to)
        } else {
          this.$router.push({name: 'index'})
        }
      }).catch(err => {
        if (err >= 400) toastr.error('Unauthorized')
      }).finally(() => this.isLoading = false);
    }
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
</style>
