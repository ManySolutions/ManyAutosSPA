<template>
  <div class='car-repair-plan-form' id='covidPlanForm'>
    <v-form @submit.prevent="handleSubmit()">
      <v-row>
        <v-col cols=12 md=8>
          <v-text-field
            v-model='reg'
            label="Your car Reg No. here"
            required
            outlined
            filled
            dark
            hide-details
            class='reg-input'
          ></v-text-field>
        </v-col>
        <v-col cols=12 md=4>
          <v-btn x-large color="secondary" block :loading='isLoading' type="submit">
            <strong> Book now </strong>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import { getVehicleDetails } from '~/api/vehicle';

export default {
  data: () => ({
    reg: '',
    isLoading: false,
    error: false,
    errorMessage: null,
  }),

  methods: {
    handleSubmit() {
      this.error = false;
      this.isLoading = true;

      getVehicleDetails(this.reg)
        .then(res => {
          if (res.status && res.status == false) {
            this.error = true;
            this.errorMessage = res.message;
          } else {
            this.$store.commit('booking/REGISTER_VEHICLE', {
              vehicle: res.vehicle,
              modelId: res.vehicle.Model_ID
            });
            this.$store.commit('booking/HAS_PAYMENT_PLAN', true);

            this.$router.push('/booking/create/services');
          }
        }).finally(() => this.isLoading = false);
    }
  }
}
</script>

<style lang="scss" scoped>
.car-repair-plan-form {
  max-width: 500px;
  margin: 0px auto;
}
.reg-input ::v-deep input {
  font-size: 20px; 
  text-transform: uppercase;
  margin-top: 0;
}
</style>