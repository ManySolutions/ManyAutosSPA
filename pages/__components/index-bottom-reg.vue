<template>
  <v-sheet color='white' class='py-16 my-5'>
    <h2 class="index-heading" v-html='title'></h2>
    <car-reg-form-card title='' :btn-text='quoteBtnText'></car-reg-form-card>
  </v-sheet>
</template>
<script>
import carRegFormCard from "~/components/func-components/car-reg-form-card.vue"

export default {
  components: { carRegFormCard },
  
  props: {
    title: {
      default: 'Looking for an instant quote for your next repair?',
      type: String
    },
    quoteBtnText: {
      default: 'Get Instant Quote',
      type: String
    },
  },
}
</script>
<style lang="scss" scoped>
:v-deep {
  .reg-card {
    padding: 10px;
  }
}
</style>