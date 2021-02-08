<template>
  <div class='text-center' v-if='isActive'>
    <slot name='before'></slot>
    
    <v-btn
      color='primary'
      class='text-capitalize mt-1'
      :to='{name: "booking-create"}'
      :dense='dense'
      :block='block'
      :text='textBtn'
      :outlined='!textBtn'
      :small='small'
      elevation="0"
    >
      <span>
        <strong>
          Continue with {{ vehicleName }}
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
  props: {
    textBtn: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
  },
  
  computed: {
    ...mapState('booking', ['modelId', 'vehicle']),

    isActive() {
      const { modelId, vehicle } = this;
      
      return modelId && Object.keys(vehicle).length
    },

    vehicleName() {
      const {vehicle} = this;
      
      if (vehicle.RegistrationNumber)
        return vehicle.RegistrationNumber

      return vehicle.Mfr;
    }
  },
}
</script>