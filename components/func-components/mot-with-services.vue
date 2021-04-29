<template>
  <span class='mt-5 mt-md-0 d-inline-block'>
    <v-btn 
      text small 
      :color='isFull ? `success` : `primary`'
      class='text-capitalize font-weight-600 px-0 mb-2 mb-md-0'
      @click='isFull ? "" : handleAdd("MOT_AND_FULL_SERVICE", "MOT and Full Service" , "0")'
      :disabled='isCartLoading'
    >
      <v-icon small class='mr-2'>mdi-check-decagram</v-icon>
      {{ isFull ? 'Booked' : 'Book' }} 
      With Full Service For Free
    </v-btn>
    <v-btn text small
      :color='isInterim ? `success` : `primary`'
      class='text-capitalize font-weight-600 px-0'
      @click='isInterim ? "" : handleAdd("MOT_AND_INTERIM_SERVICE", "MOT and Interim Service" , "0")'
      :disabled='isCartLoading'
    >
      <v-icon small class='mr-2'>mdi-check-decagram</v-icon>
      {{ isInterim ? 'Booked' : 'Book' }} 
      With Interim Service For Only {{currencySymbol}}9.99
    </v-btn>
  </span>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import { fbqAddToCart } from '~/api/fbq';

export default {
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters('booking', ['cart']),
    ...mapState('booking', ['modelId', 'isCartLoading']),

    isFull() {
      try {
        const { cart } = this;

        return !!('MOT' in cart && 'FULL_SERVICE' in cart);
      } catch (error) {
        return false;
      }
    },
    isInterim() {
      try {
        const { cart } = this;

        return !!('MOT' in cart && 'INTERIM_SERVICE' in cart);
      } catch (error) {
        return false;
      }
    },
  },

  methods: {
    handleAdd(id, title, price) {
      const {modelId} = this;

      fbqAddToCart(
        this.$fb,
        id, 
        title,
        price
      );

      this.$store.dispatch('booking/addToCart', {
        id,
        modelId
      });
    },
  }
}
</script>
<style lang="scss" scoped>
::v-deep .v-btn {
  white-space: initial;
  display: block;
  text-align: left;
}
</style>