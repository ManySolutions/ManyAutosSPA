<template>
  <v-container class="booking-section">
    <v-row>
      <v-col cols="12" md="6" class="text letter-image position-relative">
        <v-img
          src="https://static.manyautosltd.com/uploads/online-ticket-booking.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <div class="text-center">
          <h1 class="heading__title mb-4 text-center" style="font-weight:lighter">
            Online Booking at
            <br />
            <span class='font-weight-bold'> ManyAutos </span>
            <!-- <v-img
              src="https://static.manyautosltd.com/uploads/logo-default-dark.png"
              alt="ManyAutos LTD"
              width="240px"
              class="m-auto"
            ></v-img> -->
          </h1>
          <p class="mt-10 mb-10">
            Booking a service for your car has never been so easy. We have a
            <NuxtLink
              to="/service-booking"
              style='color: inherit'
            >
              book online vehicle repair service
            </NuxtLink> 
            system, which is not offered by many
            online repairs center in the UK.
            Just enter your car’s registration number, select from the available
            services with instant, upfront prices, and you are done.
          </p>
          <!-- <v-btn color="secondary" x-large to="/service-booking"> Book Now Online </v-btn> -->
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss"scoped>
.heading__title--bar:after {
  background: #caf0f8;
  text-align: left;
}

.heading__title--bar {
  padding-bottom: 10px;
}
.heading__title {
  text-transform: initial;
}
p {
  // font-size: 22px;
  max-width: 740px;
  text-align: center;
  margin: 0px auto;
}

.booking-section .text {
  text-align: left;
}

@media (max-width: 962px) {
  .booking-section .text {
    text-align: center;
  }
}

@media (min-width: 568px) and (max-width: 962px) {
  .booking-section .center {
    width: 50%;
    text-align: center;
  }
}

@media (min-width: 568px) and (max-width: 962px) {
  .heading__title {
    margin-top: -35px;
  }
}

@media (min-width: 1260px) {
  .booking-section img {
    max-width: 90%;
  }
}

@media (min-width:960px) {
  
}
</style>

