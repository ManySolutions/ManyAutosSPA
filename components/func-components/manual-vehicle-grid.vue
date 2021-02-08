<template>
  <v-card class='mb-3 mx-sm-2'>
    <v-card-title>
      {{ `${vehicle.Mfr} ${vehicle.Range} ${vehicle.Year}` }}
    </v-card-title>
    <v-card-text>
      <p class='mb-2'>
        <strong>Fuel Capacity:</strong>
        {{ parseFloat(vehicle.Capacity).toFixed(1) }}
      </p>
      <p class='mb-2'>
        <strong>Variant:</strong>
        {{ vehicle.Trim }}
      </p>
      <p class='mb-2'>
        <strong>Body Type:</strong>
        {{ vehicle.Body }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color='primary'
        @click='handleClick'
      >
        Book Service Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { fbqLead } from '~/api/fbq';
import { saveCustomVehicle } from '~/api/vehicle';
export default {
  props: {
    vehicle: [Object],
    reg: [String]
  },
  methods: {
    handleClick() {
      const {vehicle, reg} = this;
      fbqLead(
        this.$fb, 
        reg, 
        vehicle.Mfr +' '+ vehicle.Range
      );

      this.$store.commit('booking/REGISTER_VEHICLE', {
        vehicle: vehicle,
        modelId: vehicle.Model_ID
      });

      this.$router.push('/booking/create/services');

      saveCustomVehicle(vehicle.Model_ID);
    }
  }
}
</script>