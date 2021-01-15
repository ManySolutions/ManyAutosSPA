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
            <br>
            <index-selected-payment-plan></index-selected-payment-plan>
          </h1>
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
import IndexSelectedPaymentPlan from './__components/index-selected-payment-plan.vue';

export default {
  components: {
    BaseServiceGrid,
    IndexSelectedPaymentPlan,
  },
  
  props: ['motPrice', 'vehicleName'],

  computed: {
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