<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="login()">
          <v-card 
            class="mx-auto mt-5" 
            max-width="480"
          >
            <v-card-text>
              <h2 class="text-h5 font-weight-600 text-center pt-5 mb-10">
                Login to your account
              </h2>

              <v-alert
                v-if='errorMessage'
                type='error'
                dense
                text
              >
                {{ errorMessage }}
              </v-alert>
              <v-text-field
                v-model="form.email"
                label="E-Mail Address" 
                placeholder="youremail@gmail.com"
                outlined
                type='email'
                :error='!!errors.email'
                :hint='errors.email ? errors.email[0] : null'
                persistent-hint
              ></v-text-field>
              <v-text-field 
                v-model='form.password'
                label="Password" 
                placeholder="*****"
                type='password'
                outlined
                hide-details
                :error='!!errors.password'
                :hint='errors.password ? errors.password[0] : null'
                persistent-hint
              ></v-text-field>
              <!-- <v-btn text color='primary' class='py-0 px-0' style='height: auto'>
                <span class="text-large" >
                  Forgot Your Password?
                </span>
              </v-btn> -->

              <div class="login text-center mt-5">
                <v-btn 
                  color="primary" 
                  large 
                  block
                  type='submit'
                  :loading='isLoading'
                >
                  Login
                </v-btn>
              </div>
              <hr style="margin-top:25px;">
              <p 
                class="text text-center mt-5" 
                style="color:#212529;"
              >
                Need to create an account?
              </p>
              <div class="signup text-center">
                <v-btn 
                  color="error" 
                  large 
                  block
                  :to='{name: "register"}'
                >
                  Signup Here
                </v-btn>
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
import { loginUser } from '~/api/user';
import { mapActions } from 'vuex';

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
    },
    errors: {},
    errorMessage: null,
    msgType: null,
    isLoading: false,
    redirectUrl: '/my/booking',
  }),

  mounted() {
    const { redirect_url } = this.$route.query;

    if (redirect_url) {
      this.redirectUrl = redirect_url;
    }
  },

  methods: {
    ...mapActions('user', ['authorize']),

    login() {
      this.errors = {};
      this.errorMessage = null;
      this.isLoading = true;

      loginUser(this.form)
        .then(res => res.data)
        .then(res => {
          const { status, errors, access_token, user, message, role } = res;

          if (!status) {
            this.errors = errors || {};
            this.errorMessage = message;
            return;
          }

          toastr.success('You have been successfully logged in');
          this.authorize({ accessToken: access_token, user, role});
          setTimeout(() => window.location.href=this.redirectUrl, 300);
        })
        .catch((err) => {
          if (err >= 400) {
            this.errorMessage = 'Email or password is incorrect'
          }
        })
        .finally(() => this.isLoading = false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

