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
          :price='motPrice'
          :id='`MOT`'
          :ind='["Free Retest", "Emissions and exhaust test", "Collection and delivery"]'
        ></base-service-item>
        <base-service-item
          :loading='isLoading'
          :title='`Interim Service`'
          :price='services.INTERIM_SERVICE ? services.INTERIM_SERVICE.price : "00.00"'
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

export default {
  components: {
    BaseServiceItem,
    BookingLayout
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