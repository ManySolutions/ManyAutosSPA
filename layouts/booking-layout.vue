<template>
  <div
    class='booking-layout-page home-sec-gaps pt-5'
    :style='`background-image: url(${assets("frontend/bg-overlay.png")})`'
  >
    <v-container>
      <v-row justify="center">
        <v-col>
          <h1 class='heading__title text-center pb-lg-5'>
            <slot name='title'></slot>
            <index-selected-payment-plan
              v-if='!isDevice.md'
            ></index-selected-payment-plan>
          </h1>
        </v-col>
      </v-row>

      <slot name='before-breadcrumb'></slot>
      
      <v-row justify="center">
        <v-col cols=12 lg=8 xl=6>
          <v-breadcrumbs
            :items='breadcrumbs'
          ></v-breadcrumbs>
        </v-col>
        <v-col
          v-if='isDevice.md'
          cols=12 lg=4 xl=3
          class='d-none d-md-block'
        ></v-col>
      </v-row>

      <v-row justify="center" v-if='!noSearchBox'>
        <v-col cols=12 md=8 xl=6>
          <search-box box-style='solo'></search-box>
        </v-col>
        <v-col cols=12 md=4 xl=3></v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols=12 md=8 xl=6>
          <v-sheet 
            elevation="2"
            class='px-lg-7 py-3'
            v-if='!noTabs'
          >
            <v-tabs 
            >
              <v-tab
                to="/booking/create/mot-and-servicing"
              >
                MOT & Servicing
              </v-tab>
              <v-tab
                to="/booking/create/parts"
              >
                Repairs
              </v-tab>
              <v-tab
                to="/booking/create/diagnostics"
              >
                Diagnostics
              </v-tab>
            </v-tabs>
          </v-sheet>
          <slot></slot>
        </v-col>
        <v-col
          v-if='isDevice.md'
          cols=12 md=4 xl=3
          class='d-none d-md-block'
        >
          <desktop-cart></desktop-cart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import desktopCart from '~/components/func-components/desktop-cart.vue'
import SearchBox from '~/components/func-components/search-box.vue'
import IndexSelectedPaymentPlan from '~/pages/booking/create/__components/index-selected-payment-plan.vue'
export default {
  components: { desktopCart, IndexSelectedPaymentPlan, SearchBox },
  props: {
    breadcrumbs: [Array, Object],
    noTabs: Boolean,
    noSearchBox: Boolean,
  }
}
</script>

<style lang="scss" scoped>
.booking-layout-page {
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>