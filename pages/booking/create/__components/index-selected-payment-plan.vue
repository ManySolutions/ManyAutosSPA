<template>
  <client-only>
    <div
      class='mb-10 d-inline-block'
      v-if='hasPaymentPlan'
    >
      <v-chip
        filter
        color='primary'
      >
        <v-icon class='mr-2'>mdi-check-decagram</v-icon>
        <strong>3 Installments</strong>&nbsp; Plan has been Selected
      </v-chip>
    </div>
  </client-only>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('booking', ['hasPaymentPlan']),
  }
}
</script>