<template>
      <v-row 
        :style='`background-image: url(${assets("customer-v2/static-pages/Services.jpg")})`'
        class='has-bg-overlay home-sec-2 home-sec-gaps'
    >
     <v-col cols=12>
      <div class='sec-2 text-center'>
        <h2 class='h1 text-white heading__title mb-5 font-weight-300'> 
          Services
        </h2>
        <p class='font-weight-300 m-auto' style='max-width:900px;'>
          We offer all types of services. The type of service you choose for your car will depend on various factors,
          including the condition of your car, the number of miles you’ve driven, and the last time your car was
          serviced. We use the latest equipment, allowing our qualified technicians and mechanics to diagnose any
          problems quickly and efficiently. We provide our clients with <nuxt-link to="/how-it-works">affordable
          mechanics</nuxt-link> and services.
        </p> 
        <v-btn
        color="secondary"
        x-large
        dark
        to="/service-booking"
        class="service-btn mt-10"
        >
        Book A Service With Us Now
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.has-bg-overlay {
  position: relative;
  margin-bottom: -12px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(15 74 86 / 77%);
  }
  &:after {
    background: rgb(62 32 32 / 67%);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.sec-2 {
  position: relative;
  z-index: 1;
  color: white;
}
.home-sec-2 {
  background-size: cover;
  background-position: center;
}
</style>