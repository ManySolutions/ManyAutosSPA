<template>
  <v-row
    style='background-image: url(https://static.manyautosltd.com/uploads/car-mechanic-wearing-white-uniform-stand-holding-wrench.jpg)'
    class='has-bg-overlay home-sec-2'
  >
    <v-col cols=12>
      <div class='sec-2 text-center'>
        <h2 class='h1 text-white heading__title mb-5'>
          Affordable & Professional Car Repair Services
        </h2>
        <p class='font-weight-300 m-auto' style='max-width:900px;'>
          Our motto is to provide our clients with absolutely
          the best 
          <NuxtLink to="/car-service" class='text-white'
          >
            vehicle maintenance services
          </NuxtLink>.
          You will receive the same honest and satisfactory treatment and services whenever you visit our garage.
          We provide maintenance service in all categories of vehicles.
        <div class='pt-10 text-center'>
          <v-btn
            large outlined
            color='primary'
            to='/sitemap#car-repairs'
          >
            <strong>
              View all services
            </strong>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
      <v-img src='https://static.manyautosltd.com/uploads/handsome-tyre-repairman-isolated-white.png'
        class='service-man-img d-none d-lg-block'
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
  }),

  computed: {
  },

  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.has-bg-overlay {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(94deg, rgba(13, 168, 199, 0.77), rgba(13, 168, 199, 1));
  }
  &:after {
    background: rgb(51 51 51 / 67%);
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
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 960px) {
    padding-right: 100px;
  }
  p {
    font-size: 20px;
  }
}
.home-sec-2 {
  background-size: cover;
  background-position: center;
}
.car-text {
  font-weight: 100;
  font-size: 17px;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding-bottom: 10px;
}
.service-man-img{
  position: absolute;
  right: 30px;
  bottom: 0;
  z-index: 1;
}
</style>