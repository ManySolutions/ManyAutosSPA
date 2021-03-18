<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      width="400"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by we are verifying your quote.
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import toastr from 'toastr';
import { getQuoteInfo } from '~/api/booking'
export default {
  data: () => ({
    dialog: true
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      const {key} = this.$route.params;
      const {signature} = this.$route.query; 
      getQuoteInfo(key, signature, this.http)
        .then(res => res.data)
        .then(res => {
          const {
            total, subtotal, items, user, access_token, role,
            key
          } = res;

          this.$store.commit('booking/UPDATE_CART_CONTENT', {
            total, subtotal, items, key
          });
          this.$store.dispatch('user/authorize', {
            accessToken: access_token, user, role
          });

          toastr.success('Quote verified successfully, redirecting you to booking page');
          
          window.location.href = '/booking/create/collection-info';
        })
        .catch(err => {
          toastr.error('Invalid quote request, please try again later');
          setTimeout(() => this.$router.push('/'), 300);
        })
        .finally(() => this.dialog = false);
    }
  }
}
</script>