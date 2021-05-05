<template>
  <booking-layout
    :breadcrumbs='breadcrumbs'
  >
    <template #title>
      <span class='font-weight-light'>
        Get Your Free
      </span>
        MOT
      <span class='font-weight-light'>Deal For Your</span>
      <br>
      <span class='text-primary'>
        {{ vehicleName }}
      </span>
    </template>

    <v-card
      tile
      elevation="1"
    >
      <v-card-text>
        <base-service-item
          :loading='isLoading'
          :title='`Full Service + Free MOT`'
          :price='services.FULL_SERVICE ? services.FULL_SERVICE.price : "00.00"'
          :oldPrice='services.FULL_SERVICE ? services.FULL_SERVICE.old_price : "00.00"'
          :id='`MOT_AND_FULL_SERVICE`'
          :ind="[
            '70 point vehicle check',
            'MOT test', 
            'MOT retest if failed (additional costs will incur)',
            'Engine oil replacement', 'Oil filter replacement',
            'Air filter replacement', 
            'Coolant top up',
            'And more other checks...',
          ]"
          :hasNoBtn="isDealBooked"
        >
          <template #before-list>
            <!-- <p style='max-width: 430px;' class='mt-3 nt'>
              Book your car Full Service with up to 30% discount 
              and get MOT for FREE
            </p> -->
          </template>
          <template v-if='isDealBooked' #after>
            <v-btn color='success' text class='mt-5 px-0' small>
              <v-icon class='mr-2' small>
                mdi-check-circle-outline</v-icon>
              <strong>Your deal is successfully added</strong>
            </v-btn>
          </template>
        </base-service-item>
        <!-- <v-btn 
          text 
          color='primary' 
          class='text-case-none'
          to='/booking/create/mot-and-servicing'
        >
          Click here to view other services
        </v-btn> -->
      </v-card-text>
    </v-card>

    <v-dialog
      v-model='cartDialog'
      max-width="400px"
      transition="dialog-bottom-transition"
    >
      <client-only>
        <desktop-cart hasContinueBtn @continue='cartDialog=false'></desktop-cart>
      </client-only>
    </v-dialog>
  </booking-layout>
</template>

<script>
import { getServices } from '~/api/vehicle';
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
import BookingLayout from '~/layouts/booking-layout.vue';
import $ from 'jquery';
import {mapGetters} from 'vuex';
import MotWithServices from '~/components/func-components/mot-with-services.vue';
import DesktopCart from '~/components/func-components/desktop-cart.vue';

export default {
  components: {
    BaseServiceItem,
    BookingLayout,
    MotWithServices,
    DesktopCart
  },
  
  props: ['vehicleName', 'motPrice', 'modelId'],

  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        to: './services'
      },
      {
        text: 'Mot & Servicing',
        disabled: true,
      },
    ],

    isLoading: true,
    services: {},
    cartDialog: false,
    bookedBefore: false,
  }),

  computed: {
    ...mapGetters('booking', ['cart']),

    isDealBooked() {
      try {
        const { cart, isLoading, bookedBefore } = this;
        const booked = !!('MOT' in cart && 'FULL_SERVICE' in cart);

        if (!isLoading && !bookedBefore && booked) {
          this.cartDialog = true;
        }

        return booked;
      } catch (error) {
        return false;
      }
    }
  },

  watch: {
  },

  mounted() {
    try {
      this.bookedBefore = !!('MOT' in this.cart && 'FULL_SERVICE' in this.cart);
    } catch (error) { }

    this.fetch();
  },

  methods: {
    fetch() {
      this.isLoading = true;

      getServices(this.modelId)
        .then(res => {
          this.services = res.services
        }).finally(() => this.isLoading = false)
    }
  }
}
</script>