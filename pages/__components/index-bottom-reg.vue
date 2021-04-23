<template>
  <v-sheet color='white' class='py-16 my-5'>
    <h2 class="index-heading">Looking for an instant quote for your next repair?</h2>
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
:v-deep {
  .reg-card {
    padding: 10px;
  }
}
</style>