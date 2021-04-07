<template>
  <client-only>
    <v-btn
      v-if='isInCart'
      text
      :color='!isHover ? "success" : "error"'
      small
      :class='cls'
      @mouseover="isHover = true"
      @click="handleRemove()"
      @mouseleave="isHover = false"
      :loading='isLoading'
      :disabled='isCartLoading'
    >
      <v-icon class='mr-2' small>
        {{ isHover ? 'mdi-close-circle' : 'mdi-check-circle-outline' }}
      </v-icon>
      <slot name='added'>
        <strong>
          Added in cart
        </strong>
      </slot>
    </v-btn>
    <v-btn
      v-else
      :color='color'
      :block='isMinDevice'
      :large='!small'
      :x-large='xLarge'
      :class='cls'
      :loading='isLoading'
      @click='handleAdd'
      :disabled='isCartLoading'
      :small='small'
    >
      <slot>
        <strong>
          Add to services
        </strong>
      </slot>
    </v-btn>
  </client-only>
</template>
<script>
import {mapState, mapGetters} from 'vuex';
import { fbqAddToCart } from '~/api/fbq';

export default {
  props: {
    id: String,
    price: String,
    title: String,
    small: Boolean,
    xLarge: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    cls: String,
    openRegForm: {
      type: Boolean,
      default: true
    },
    
  },
  data: () => ({
    isLoading: false,
    isHover: false,
    adding: false,
  }),
  computed: {
    ...mapState('booking', ['isCartLoading', 'modelId']),
    ...mapGetters('booking', ['cart']),

    isInCart() {
      try {
        return this.id in this.cart;
      } catch (error) {
        return false;
      }
    },
  },
  watch: {
    isCartLoading(isCartLoading) {
      const {id, cart, adding} = this;

      if (!isCartLoading) {
        this.isLoading = false;
        this.isHover = false;

        if (adding && id in cart) {
          this.$emit('added', id);
          this.adding = false;
        }
      }
    },
  },
  methods: {
    handleAdd() {
      if (!this.isReg()) return;

      this.isLoading = true;
      this.adding = true;
      const {id, title, price, modelId} = this;

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
    handleRemove() {
      this.isLoading = true;

      this.$store.dispatch('booking/removeFromCart', this.id);

      this.$emit('removed');
    },
    isReg() {
      const {modelId, openRegForm} = this;

      if (modelId) return true;
      if (openRegForm) this.$store.commit('booking/TOGGLE_REG_DIALOG', true);
      
      this.$emit('invalid-reg');
    }
  },

  mounted() {

  },
}
</script>