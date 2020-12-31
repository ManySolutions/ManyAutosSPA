<template>
    <v-container class="booking-section mb-10">
      <v-row>
        <v-col cols="12" md="6" class='text-right letter-image'>
          <img src="/assets/customer-v2/indexonline.jpg" alt class="center" />
        </v-col>
        <v-col cols="12" md="6" class='text mb-10'>
          <h1 class='heading__title heading__title--bar mb-4' style="font-weight:lighter">
            Online Booking At<br> <span class='font-weight-bold text-primary'>Many Autos</span>
          </h1>
          <p class="text-left mt-10 mb-10">Booking a service for your car has never been so easy. We have a <NuxtLink to='/service-booking'>book online vehicle
              repair service</NuxtLink> system,
            which is not offered by many <span class="font-weight-bold"> online repairs center in the UK.</span> Just enter your car’s registration number,
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
<style lang="scss" scoped>
.heading__title--bar:after {
    background: #CAF0F8;
    text-align: left;
}
.heading__title--bar {
    padding-bottom: 10px;
}
@media (max-width:768px){
    .booking-section .text{

        text-align: center;
    }
}
</style>