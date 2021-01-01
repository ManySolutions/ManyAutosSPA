<template>
  <v-container class="booking-section mb-10">
    <v-row>
      <v-col cols="12" md="6" class='text letter-image'>
        <img src="http://manyautos.local/assets/customer-v2/static-pages/indexonline.jpg" alt="" class="center" />
      </v-col>
      <v-col cols="12" md="6" class='text mb-10'>
        <h1 class='heading__title heading__title--bar mb-4 pt-5' style="font-weight:lighter">
          Online Booking At<br> <span class='font-weight-bold text-primary'>Many Autos</span>
        </h1>
        <p class="mt-10 mb-10">Booking a service for your car has never been so easy. We have a <NuxtLink
            to='/service-booking'>book online vehicle
            repair service</NuxtLink> system,
          which is not offered by many <span class="font-weight-bold">online repairs center in the UK.</span> Just
          enter your car’s registration number,
          select from the available services with instant, upfront prices, and you are done.</p>
            <v-btn
            color="primary"
            large
            to="/service-booking"
            >
            Book Now
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
<style lang="scss"scoped>
.heading__title--bar:after {
  background: #CAF0F8;
  text-align: left;
}

.heading__title--bar {
  padding-bottom: 10px;
}

.booking-section .text {

  text-align: left;
}

@media (max-width:962px) {
  .booking-section .text {

    text-align: center;
  }
}

@media (min-width:568px) and (max-width:962px) {
  .booking-section .center {
    width: 50%;
    text-align: center;
  }
}

@media (min-width:568px) and (max-width:962px) {
  .heading__title {
    margin-top: -35px;
  }
}

</style>