<template>
  <span v-if='isPayable'>
    <v-btn
      v-if='hasPaymentAssist'
      color='light-blue darken-3'
      @click='handleAssistBegin(id)'
      class='px-2 mr-3'
      target="_blank"
      dark
      :loading='isAssistLoading'
      :class='isDevice.xs ? `mb-2` : ``'
    >
      <v-icon class='mr-2'>mdi-credit-card</v-icon>
      Pay in Installments
    </v-btn>
    <v-btn
      color='amber lighten-1'
      :href='paymentUrl'
      class='px-2 mr-3'
      target="_blank"
    >
      <v-icon class='mr-2'>mdi-credit-card</v-icon>
      {{ hasPaymentAssist ? 'Pay Full Payment' : 'Pay Now' }}
    </v-btn>
  </span>
</template>

<script>
import toastr from 'toastr';
import { begin_payment_assist } from '~/api/payment';

export default {
  props: {
    id: [String, Number],
    isPayable: Boolean,
    hasPaymentAssist: Boolean,
    paymentUrl: String,
  },

  data: () => ({
    isAssistLoading: false,
  }),

  methods: {
    handleAssistBegin(id) {
      this.isAssistLoading = true;

      begin_payment_assist(id, this.http)
        .then(res => {
          if (res.url) return window.location.href = res.url;

          if (!res.status || res.status !== 'ok') 
            toastr.error(res.msg || res.message || 'Some error occurred, please contact administrator');
        })
        .finally(() => this.isAssistLoading = false)
    }
  },
}
</script>