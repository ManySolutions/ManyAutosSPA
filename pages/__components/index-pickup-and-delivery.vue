<template>
  <v-container class="pickup-section">
    <v-row>
      <!-- <v-col cols="12" md="6" order-md="2" class='letter-image'>
        <v-img 
          src="https://static.manyautosltd.com/uploads/pickup-2.jpg" 
          alt="" 
        />
      </v-col> -->

       <v-col cols="12" md="6" order-md="2" class="text-center">
        <img src="https://static.manyautosltd.com/uploads/pickup-2_626x417.jpg"
          alt="pickup and delivery">
      </v-col>

      <v-col cols="12" md="6" order-md="1" class='text-center' align-self="center">
        <h1 class='heading__title mb-10 text-center' style="font-weight:lighter">
          <span class=''> Pickup and Delivery </span>
          <br>
          <span class='font-weight-bold'>Anywhere Anytime</span>
        </h1>
        <p>
          We collect your car from a place of your choice and deliver it back to you after it is repaired and
          serviced. If your car is not road worthy, we can arrange a recovery service for you at extra cost.
        </p>
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

.pickup-section .heading__title {
  text-align: right;
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

.pickup-section .text {

  text-align: right;
}

@media (max-width:962px) {
  .pickup-section .text {

    text-align: center;
  }

  .pickup-section .heading__title {
    text-align: center;
  }
}

.pickup-section .center {
  text-align: right;
}

@media (min-width:568px) and (max-width:962px) {
  .pickup-section .center {
    width: 50%;
    text-align: center;
  }
}

@media (min-width:1260px){
  .pickup-section img {
    max-width: 90%;
  }
}
</style>