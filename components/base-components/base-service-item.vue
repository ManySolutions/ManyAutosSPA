<template>
  <div class='service-item'>
    <v-skeleton-loader
      v-if='loading'
      type='article, button'
    ></v-skeleton-loader>
    <div v-else>
      <v-row class="si-sec">
        <v-col 
          class='py-0' 
          cols=12 
          md=6
        >
          <h2 class='ma-si-heading'>
            {{ title }}
          </h2>
        </v-col>
        <v-col 
          class='py-0'
          :class='isDevice.md ? "text-right": ""' 
          cols=12 
          md=6
        >
          <span class='ma-si-price'>
            {{ currencySymbol }}
            {{ priceFormatted || '00.00' }}
          </span>
        </v-col>
        <div class="">
          <!-- <mot-alert
            v-if='id == "MOT"'
            :mb='0'
            theme='info' 
          /> -->
        </div>
      </v-row>

      <div class="si-sec" v-if='description'>
        <p class="my-0">
          {{ description }}
        </p>
      </div>

      <div class="si-sec" v-if='ind && ind.length'>
        <ul class="list-group list-group-flush">
          <template v-for='i in ind'>
            <li class="list-group-item"
              :key='i'
              v-if='i'  
            >
              <img :src="assets('frontend/check-icon.png')" alt="Check icon">
              {{ i }}
            </li>
          </template>
        </ul>
      </div>

      <v-btn
        v-if='isInCart'
        text
        :color='!isHover ? "success" : "error"'
        small
        class='mt-10'
        @mouseover="isHover = true"
        @click="handleRemove()"
        @mouseleave="isHover = false"
        :loading='isLoading'
      >
        <v-icon class='mr-2' small>
          {{ isHover ? 'mdi-close-circle' : 'mdi-check-circle-outline' }}
        </v-icon>
        <strong>
          Added in cart
        </strong>
      </v-btn>
      <v-btn
        v-else
        color='primary'
        :block='isMinDevice'
        large
        class='mt-5'
        :loading='isLoading'
        @click='handleAdd'
        :disabled='isCartLoading'
      >
        <strong>
          Add to services
        </strong>
      </v-btn>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  props: [
    'title', 'price', 'id', 'description', 'btntext',
    'ind', 'loading'
  ],
  data: () => ({
    INDKeys: ['IND0', 'IND1', 'IND2', 'IND3', 'IND4'],
    currencySymbol: process.env.CURRENCY_SYMBOL,
    isLoading: false,
    isHover: false,
  }),
  computed: {
    ...mapState('booking', ['cart', 'isCartLoading']),

    priceFormatted() {
      return parseFloat(this.price).toFixed(2);
    },

    isInCart() {
      return this.cart.includes(this.id);
    },
    
    cartIndex() {
      let i;

      for (i = 0; i < this.cart.length; i++) {
        let elem = this.cart[i];

        if (elem == this.id) return i;
      }

      return null;
    },
  },
  methods: {
    handleAdd() {
      this.isLoading = true;

      setTimeout(() => {
        this.$store.commit('booking/ADD_TO_CART', this.id);

        this.isLoading = false;
      },500)
    },
    handleRemove() {
      this.isLoading = true;
      if (this.cartIndex == null) return;

      setTimeout(() => {
        this.$store.commit('booking/REMOVE_FROM_CART', this.cartIndex);

        this.isLoading = false;
      },200)
    },
  },
}
</script>

<style lang="scss" scoped>
.service-item {
  &::v-deep .v-skeleton-loader__button {
    margin-left: 20px;
  }

  padding: 30px 20px;
  @media (min-width:720px) {
    padding: 40px;
  }
  &:not(:first-child) {
    border-top: 1px solid #f1f1f1;
  }
  .ma-si-heading {
    font-size: 22px;
    font-weight: 600;
    color: #212529;
    margin-bottom: 1rem;
  }
  .ma-si-price {
    font-weight: 700;
    font-size: 21px;
    color: #1895b3;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  .si-sec:not(:first-child) {
    margin-top: 20px;
  }
  .list-group-flush .list-group-item {
    border-bottom: none;
    padding-left: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #212529;
    font-size: 15px;
    @media (min-width: 768px) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    img {
      width: 18px;
      margin-right: 13px;
    }
  }
  .btn.btn-lg {
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 15px;
  }
}
</style>