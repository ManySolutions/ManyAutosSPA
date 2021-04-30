<template>
  <booking-layout
    :breadcrumbs='breadcrumbs'
  >
    <template #title>
      <span class='font-weight-light'>
        Choose
      </span>
        MOT
      <span class='font-weight-light text-lowercase'>or</span>
      Servicing
      <span class='font-weight-light'>For Your</span>
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
          :title='`MOT`'
          :price='motPriceCalculated'
          :oldPrice='services.MOT ? services.MOT.old_price : "00.00"'
          :id='`MOT`'
          :ind='["Free Retest", "Emissions and exhaust test", "Collection and delivery"]'
        >
          <template #before-list>
            <mot-with-services></mot-with-services>
          </template>
        </base-service-item>
        <base-service-item
          :loading='isLoading'
          :title='`Interim Service`'
          :price='services.INTERIM_SERVICE ? services.INTERIM_SERVICE.price : "00.00"'
          :oldPrice='services.INTERIM_SERVICE ? services.INTERIM_SERVICE.old_price : "00.00"'
          :id='`INTERIM_SERVICE`'
          :ind='[
            "Oil and Oil Filter", 
            "50 point vehicle check", 
            "Collection and delivery"
          ]'
        ></base-service-item>
        <base-service-item
          :loading='isLoading'
          :title='`Full Service`'
          :price='services.FULL_SERVICE ? services.FULL_SERVICE.price : "00.00"'
          :oldPrice='services.FULL_SERVICE ? services.FULL_SERVICE.old_price : "00.00"'
          :id='`FULL_SERVICE`'
          :ind='[
            "70 point vehicle checks", 
            "Drive and Test", 
            "Collection and delivery"
          ]'
        ></base-service-item>
      </v-card-text>
    </v-card>
  </booking-layout>
</template>

<script>
import { getServices } from '~/api/vehicle';
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
import BookingLayout from '~/layouts/booking-layout.vue';
import $ from 'jquery';
import {mapGetters} from 'vuex';
import MotWithServices from '~/components/func-components/mot-with-services.vue';

export default {
  components: {
    BaseServiceItem,
    BookingLayout,
    MotWithServices
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
  }),

  computed: {
    ...mapGetters('booking', ['cart']),

    motPriceCalculated() {
      const {services, cart} = this;

      if (!services.MOT) return '00.00'

      if ('INTERIM_SERVICE' in cart) {
        return services.MOT.mot_with_interim;
      }
      if ('FULL_SERVICE' in cart) {
        return services.MOT.mot_with_full;
      }

      return services.MOT.price;
    }
  },

  watch: {
    isLoading(isLoading) {
      const { hash } = this.$route;
      
      if (hash && !isLoading) {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000);
      }
    }
  },

  mounted() {
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