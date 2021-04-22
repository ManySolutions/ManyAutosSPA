<template>
  <v-sheet color='white' class='py-16 my-5'>
    <h2 class="mission-heading mb-10 mb-lg-15">Looking for an instant quote for your next repair?</h2>
    <car-reg-form-card title='' ></car-reg-form-card>
  </v-sheet>
</template>
<script>
import carRegFormCard from "~/components/func-components/car-reg-form-card.vue"

export default {
  components: { carRegFormCard },
}
</script>
<style lang="scss" scoped>
.mission-heading {
  font-size: 32px;
  line-height: 34px;
  font-weight: 400;
  color: #333;
  margin-bottom: 13px;
  text-align: center;
}
.mission-heading::after {
  display: block;
  content: "";
  background: #00b4d8;
  width: 100px;
  height: 2px;
  margin: auto;
  margin-top: 13px;
}
:v-deep {
  .reg-card {
    padding: 10px;
  }
}
</style>