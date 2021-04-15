<template>
  <div class='service-item' :id='id'>
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

      <btn-add-service
        :id='id'
        :price='price'
        :title='title'
        @added='handleAdded'
        cls='mt-10'
      ></btn-add-service>
    </div>

    <v-dialog
      v-model='cartDialog'
      max-width="400px"
      transition="dialog-bottom-transition"
    >
      <client-only>
        <desktop-cart hasContinueBtn @continue='cartDialog=false'></desktop-cart>
      </client-only>
    </v-dialog>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import { fbqAddToCart } from '~/api/fbq';
import btnAddService from '../func-components/btn-add-service.vue';
import DesktopCart from '../func-components/desktop-cart.vue';

export default {
  components: { btnAddService, DesktopCart },
  props: [
    'title', 'price', 'id', 'description', 'btntext',
    'ind', 'loading'
  ],
  data: () => ({
    INDKeys: ['IND0', 'IND1', 'IND2', 'IND3', 'IND4'],
    currencySymbol: process.env.CURRENCY_SYMBOL,
    isLoading: false,
    isHover: false,
    cartDialog: false,
  }),
  computed: {
    ...mapState('booking', ['isCartLoading', 'modelId']),
    ...mapGetters('booking', ['cart']),

    priceFormatted() {
      return parseFloat(this.price).toFixed(2);
    },

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
      if (!isCartLoading) this.isLoading = false;
    },
  },
  methods: {
    handleAdd() {
      this.isLoading = true;
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

      this.$store.dispatch('booking/removeFromCart', this.id)
    },

    handleAdded() {
      if (this.$device.isMobile || this.isDevice.xs) {
        this.cartDialog = true;
      }
    }
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