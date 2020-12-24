<template>
  <v-card class="select-service-boxes"
    :class='isMotExpired ? "mot-expired" : ""'
  >
    <v-card-text
      style='text-center'
    >
      <span class='mot-expired-lbl' v-if='isMotExpired'>
        <i class="fa fa-exclamation-triangle mr-1"></i>
        Attention! MOT Expired
      </span>
      <v-row class="mx-0 px-0 text-lg-center">
        <v-col cols=4 md=12>
          <img 
            :src="assets('customer-v2/icons/' + icon)" 
            :alt="title"
            class='d-inline-block'
          >
        </v-col>
        <v-col cols=8 md=12>
          <h2 class=''>{{ title }}</h2>
          <p class='mt-0 rep-text'>
            <slot></slot>
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color='primary'
        large block
        :to="url || '/'"
        class='services-btn'
      >
        <strong>
          {{ btnTitle }}
        </strong>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    subTitle: String,
    price: String,
    afterPrice: String,
    btnTitle: String,
    icon: String,
    isMotExpired: Boolean,
  }
}
</script>

<style lang="scss" scoped>
.select-service-boxes {
  h2 {
    color: #474747;
    margin-bottom: 20px;
  }

  @media (min-width:960px) {
    min-height: 370px;
  }

  &.mot-expired {
    border: 2px solid #f44336;
  }
  img {
    height: auto;
    width: 100%;
    max-width: 70px;
    @media (min-width: 960px) {
      height: 100%;
      width: auto;
      max-height: 70px;
      max-width: initial;
    }
  }
  .card-body {
    position: relative;
    > p {
      min-height: 85px;
    }
    > .btn {
      position: absolute;
      width: calc(100% - 40px);
      bottom: 20px;
    }
  }
  .mot-expired-lbl {
    display: inline-block;
    // width: 175px;
    padding: 7px 11px;
    position: absolute;
    top: -18px;
    left: 10px;
    z-index: 1;
    background: #F44336;
    color: white;
    font-weight: 700;
    border-radius: 4px;
    font-size: 12px;
  }
  @media (min-width: 960px) {
    .rep-text {
      min-height: 110px;
    }
  }
}
</style>