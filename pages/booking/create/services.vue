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

      <v-row justify="center" class='mt-15 text-center'>
        <v-col cols=12 md=8 lg=6>
          <h1 class='heading__title text-case-none lsh'>
            <span class='font-weight-300'>Looking to search for any</span>
            <strong class='font-weight-600'>service</strong>
            <span class='font-weight-300'>or</span> 
            <strong class='font-weight-600'>repair</strong>?
          </h1>
          <div class='mt-7' style='max-width: 750px; margin: auto'>
            <search-box></search-box>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BaseServiceGrid from '@/components/base-components/base-service-grid';
import IndexSelectedPaymentPlan from './__components/index-selected-payment-plan.vue';
import SearchBox from '~/components/func-components/search-box.vue';

export default {
  components: {
    BaseServiceGrid,
    IndexSelectedPaymentPlan,
    SearchBox,
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
.lsh {
  font-size: 35px;
} 
</style>