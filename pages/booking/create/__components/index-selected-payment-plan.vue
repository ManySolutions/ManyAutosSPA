<template>
  <span>
    <client-only>
      <div
        class='mb-10 d-inline-block'
        v-if='hasPaymentPlan'
      >
        <v-chip
          filter
          color='primary'
          close
          @click:close='handleRemove'
        >
          <v-icon class='mr-2'>mdi-check-decagram</v-icon>
          <strong>3 Installments</strong>&nbsp; Plan has been Selected
        </v-chip>
      </div>
    </client-only>
  </span>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('booking', ['hasPaymentPlan']),
  },
  
  methods: {
    handleRemove() {
      this.$store.commit('booking/HAS_PAYMENT_PLAN', false);
    }
  }
}
</script>