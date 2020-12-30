<template>
    <v-container class="pickup-section mb-10">
      <v-row>
        <v-col cols="12" md="6" class='text'>
          <h1 class='heading__title heading__title--bar mb-10 text-center' style="font-weight:lighter">
            Pickup And Delivery<br> <span class='font-weight-bold text-primary text-left'>Anywhere Anytime</span>
          </h1>
          <p>We collect your car from a place of your choice and deliver it back to you after it is repaired and
            serviced. If your car is not road worthy, we can arrange a recovery service for you.
          </p>
        </v-col>
        <v-col cols="12" md="6" class='text-right letter-image'>
          <img :src="assets('/customer-v2/pickup.jpg')" alt="">
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
</style>