<template>
  <div class='service-item'>
    <div class="si-sec">
      <div class="">
        <h2 class='ma-si-heading'>
          {{ title }}
        </h2>
      </div>
      <div class="">
        <span class='ma-si-price'>
          {{ currencySymbol }}
          {{ priceFormatted || '00.00' }}
        </span>
      </div>
      <div class="">
        <!-- <mot-alert
          v-if='id == "MOT"'
          :mb='0'
          theme='info' 
        /> -->
      </div>
    </div>

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
      color='primary'
      block
      large
      class='mt-5'
    >
      <strong>
        Add to services
      </strong>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: [
    'title', 'price', 'id', 'description', 'btntext',
    'ind',
  ],
  data: () => ({
    INDKeys: ['IND0', 'IND1', 'IND2', 'IND3', 'IND4'],
    currencySymbol: process.env.CURRENCY_SYMBOL,
  }),
  computed: {
    priceFormatted() {
      return parseFloat(this.price).toFixed(2);
    }
  },
}
</script>

<style lang="scss" scoped>
.service-item {
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