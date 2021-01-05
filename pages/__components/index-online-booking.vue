<template>
  <v-container class="booking-section mb-10">
    <v-row>
      <v-col cols="12" md="6" class='text letter-image'>
      <v-card
        class="mx-auto my-12
        text-center"
        max-width="374"
      >
    <v-img
        height="250"
        src="http://manyautos.local/assets/customer-v2/static-pages/booking-online.jpg"
    >
    </v-img>
    <h1 class='online-title pt-5' style="font-weight:lighter"
    >
        Online Booking At <br> <span class='font-weight-bold text-primary'>Many Autos</span>
    </h1>
    <v-card-text>
      <div> Booking a service for your car has never been so easy. We have a <NuxtLink to='/service-booking'>book online
          vehicle
          repair service</NuxtLink> system,
        which is not offered by many <span class="font-weight-bold">online repairs center in the UK.</span> Just
        enter your car’s registration number,
        select from the available services with instant, upfront prices, and you are done.</div>
    </v-card-text>
   <div class="online-btn pb-5 d-md-none">
    <v-btn
      color="primary"
      large
      to="/service-booking"
    >
      Book Now
    </v-btn>
   </div>
  </v-card>
    </v-col>
    <v-col cols="12" md="6" class='text mb-10'>
    <v-card
        class="mx-auto my-12
        text-center"
        max-width="374"
    >
    <v-img
        height="250"
        src="http://manyautos.local/assets/customer-v2/static-pages/pickup.jpg"
    >
    </v-img>
    <h1 class='online-title pt-5' style="font-weight:lighter"
    >
        Pickup And Delivery<br> <span class='font-weight-bold text-primary'>Anywhere<br> Anytime</span>
    </h1>
    <v-card-text>
      <div class="data mb-4">We collect your car from a place of your choice and deliver it back to you after it is repaired and
          serviced. If your car is not road worthy, we can arrange a recovery service for you at extra cost.</div>
    </v-card-text>
  </v-card>
    </v-col>
     <div class="col text-center d-none d-md-block">
    <v-btn
      color="primary"
      x-large
      to="/service-booking"
      class="online-btn mb-5"
    >
      Book Now
    </v-btn>
     </div>
      </v-row>
    </v-container>
</template>
<style lang="scss"scoped>

</style>
