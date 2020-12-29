<template>
  <div class='home-sec-gaps servicing-page-sec'
    :style='`background-image: url(${assets("frontend/bg-overlay.png")})`'
  >
    <h1 class='heading__title font-weight-300 text-center pb-10'>
      Book 
      <strong class='text-primary font-weight-700'>
        Servicing, Repairs, 
        <br>
        Diagnostic
      </strong>
      <span style='text-transform: initial'>or</span>
      <strong class='text-primary font-weight-700'>MOT</strong>
      With Us Now
    </h1>
    <car-reg-form-card></car-reg-form-card>
  </div>
</template>

<script>
import CarRegFormCard from '~/components/func-components/car-reg-form-card.vue';

export default {
 components: {
    CarRegFormCard,
  },
}
</script>

<style lang="scss" scoped>
.servicing-page-sec {
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>