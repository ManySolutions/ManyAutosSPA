<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="login()">
          <v-card 
            class="mx-auto mt-5" 
            max-width="420"
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
                <nuxt-link to="/forgot-password" class="mt-4 d-inline-block text-decoration-none">
                  Forgot Your Password?
                </nuxt-link>
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
import { mapActions, mapState, mapGetters } from 'vuex';

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

    if ( this.isAuth ) this.$router.push('/my/booking')
  },

  computed: {
    ...mapState('settings', ['redirect']),
    ...mapGetters('user', ['isAuth']),
  },

  methods: {
    ...mapActions('user', ['authorize']),

    login() {
      this.errors = {};
      this.errorMessage = null;
      this.isLoading = true;
      const {redirect} = this;

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

          if ( redirect.referrer == 'login' || redirect.referrer == 'login-and-register' ) {
            this.$store.commit('settings/RESET_REDIRECT');
            setTimeout(() => window.location.href=redirect.to, 300);
          } else {
            setTimeout(() => window.location.href=this.redirectUrl, 300);
          }
        })
        .catch((err) => {
          if (err >= 400) {
            this.errorMessage = 'Email or password is incorrect'
          }
        })
        .finally(() => this.isLoading = false)
    }
  },
   head: {
    title: 'Login | ManyAutos LTD',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Login into your account and have a look at all the records of your vehicle’s services and repairs. Keep your car in a good shape with Many Autos LTD and Book MOT or car maintenance services.'
      },
      {
        name: 'keywords', 
        content: 'many autos ltd, book MOT, car maintenance, auto shops,car garages near me, car servicing, Login'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Login | ManyAutos LTD"
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
        content: "Login into your account and have a look at all the records of your vehicle’s services and repairs. Keep your car in a good shape with Many Autos LTD and Book MOT or car maintenance services."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Login | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Login into your account and have a look at all the records of your vehicle’s services and repairs. Keep your car in a good shape with Many Autos LTD and Book MOT or car maintenance services."
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
}
</script>

<style lang="scss" scoped>

</style>

