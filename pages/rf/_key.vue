<template>
  <div>
    <service-booking></service-booking>

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
          Please stand by we are verifying your referrer.
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
import { verifyReferral } from '~/api/user';
import serviceBooking from '../service-booking.vue';
// $('#servie-reg-form').find('input').focus()
export default {
  components: { serviceBooking },
  data: () => ({
    dialog: true,
  }),
  computed: {
    hash() {
      return this.$route.params.key;
    }
  },
  mounted(){
    this.verify(this.hash);
  },
  methods: {
    verify(hash) {
      verifyReferral(hash).then(res => {
        this.$store.commit('booking/SET_REFERRAL_ID', res);
      }).finally(() => this.dialog = false)
    }
  },
}
</script>