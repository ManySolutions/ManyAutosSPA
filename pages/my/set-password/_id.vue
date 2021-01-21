<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="handleSubmit">
          <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h2 class="set-pass text-center pt-5 mb-10">
                Update Your Password
              </h2>
               <v-text-field
                v-model='form.password'
                :error='!!errors.password'
                :hint="errors.password ? errors.password[0] : null"
                label="Password"
                placeholder="*****"
                type="password"
                outlined
              >
              </v-text-field>
              <v-text-field
                v-model='form.password_confirmation'
                label="Confirm Password"
                placeholder="*****"
                type="password"
                outlined
              >
              </v-text-field>          
              <div class="update text-center">
                <v-btn 
                  color="primary" 
                  large 
                  block
                  type='submit'
                  :loading='isLoading'

                > 
                  Update Password
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
import { updatePassword } from '~/api/user';
import toastr from 'toastr';
import {mapActions} from 'vuex';

export default {
  data: () => ({
    form: {
      password: '',
      password_confirmation: '',
    },
    id: null,
    signature: null,
    errors: {},
    isLoading: false,
  }),


  mounted() {
  },

  methods: {
    ...mapActions('user', ['logout']),

    handleSubmit() {
      this.isLoading = true;

      const {id} = this.$route.params;
      const {signature, redirect_url} = this.$route.query;

      updatePassword(this.http, id, signature, this.form).then(res => {
        const { status, errors, message } = res;

        if (!status) {
          this.errors = errors;
          return;
        }

        toastr.success(message);
        
        if (redirect_url) window.location.href=redirect_url

        this.logout();
        this.$router.push('/login');
      })
      .catch((err) => {
        const {data} = err.response;

        toastr.error(data.message || 'Some error occured please try again');
        this.errors = data.errors;
      })
      .finally(() => this.isLoading = false);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>