<template>
  <v-container>
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
      </v-col>
    </v-row>

    <v-row>
      <v-col>
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
      <v-col>
        <base-service-grid
          title='Repairs'
          btn-title='Repair other parts'
          icon='car-repair.png'
          url='./parts'
        >
          Get a quote for anyother repairs required for your car.
        </base-service-grid>
      </v-col>
      <v-col>
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
</template>

<script>
import BaseServiceGrid from '@/components/base-components/base-service-grid';

export default {
  components: {
    BaseServiceGrid
  },
  
  props: ['motPrice', 'vehicleName'],
}
</script>