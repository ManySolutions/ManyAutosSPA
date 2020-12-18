<template>
  <div class='text-center'>
    <slot name='before'></slot>
    
    <v-btn
      color='secondary'
      class='text-capitalize mt-1'
      :to='{name: "booking-create"}'
      dense
      block
      text
    >
      <span>
        <strong>
          Continue with {{ vehicle.RegistrationNumber }}
        </strong>
      </span>
      <v-icon class='ml-4'>
        mdi-chevron-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('booking', ['modelId', 'vehicle']),
  }
}
</script>