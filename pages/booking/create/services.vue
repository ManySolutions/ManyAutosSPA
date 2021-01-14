<template>
  <div class="servers-list-page"
    :style='`background-image: url(${assets("frontend/bg-overlay.png")})`'
  >
    <v-container
      class='home-sec-gaps container-1400'
    >
      <v-row>
        <v-col>
          <h1 class='heading__title text-center pb-lg-5'>
            <span class='font-weight-light'>
              What would you like for your
            </span>
            <br>
            <span class='text-primary'>
              {{ vehicleName }}
            </span>
          </h1>
          <div
            class='mb-10 text-center'
            v-if='hasPaymentPlan'
          >
            <v-chip
              filter
              color='primary'
            >
              <v-icon class='mr-2'>mdi-check-decagram</v-icon>
              <strong>4-Payments</strong>&nbsp; Plan have been Selected
            </v-chip>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols=12 md=4 lg=3 xl="2">
          <base-service-grid
            title='MOT & Servicing'
            btn-title='MOT & Servicing'
            icon='car-service.png'
            url='./mot-and-servicing'
          >
            Book your MOT for<br>
            only 
            <strong style='font-size: 20px'>
              {{ currencySymbol }}
              {{ motPrice }}
            </strong>
            or select servicing  for your 
            {{ 'Ford' }}
          </base-service-grid>
        </v-col>
        <v-col cols=12 md=4 lg=3 xl="2">
          <base-service-grid
            title='Repairs'
            btn-title='Repair other parts'
            icon='car-repair.png'
            url='./parts'
          >
            Get a quote for anyother repairs required for your car.
          </base-service-grid>
        </v-col>
        <v-col cols=12 md=4 lg=3 xl="2">
          <base-service-grid
            title='Diagnostic'
            btn-title='Diagnostic'
            icon='diagnostic.png'
            url='./diagnostics'
          >
            Having problems? Book a diagnostic and we will 
            find the problem and give you a report of what your car needs
          </base-service-grid>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BaseServiceGrid from '@/components/base-components/base-service-grid';
import { mapState } from 'vuex';

export default {
  components: {
    BaseServiceGrid
  },
  
  props: ['motPrice', 'vehicleName'],

  computed: {
    ...mapState('booking', ['hasPaymentPlan']),
  }
}
</script>

<style lang="scss" scoped>
.servers-list-page {
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>