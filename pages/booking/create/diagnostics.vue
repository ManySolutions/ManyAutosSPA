<template>
  <booking-layout :breadcrumbs="breadcrumbs">
    <template #title>
      <span class='font-weight-light'>
        Choose
      </span>
        <span style="color:#1e69b8;">Diagnostics</span>
      <span class='font-weight-light'>For Your</span>
      <br>
      <span class='text-primaryy' style="color:#1e69b8;">
        {{ vehicleName }}
      </span>
    </template>

    <v-card
      tile
      elevation="1"
    >
      <v-card-text>
        <template v-if='isLoading'>
          <base-service-item
            v-for='n in 4'
            :key='n'
            :loading='isLoading'
            :title='""'
            :price='""'
            :id='""'
            :ind='[]'
          ></base-service-item>
        </template>
        <base-service-item
          v-else
          v-for='(diagnostic, i) in diagnostics'
          :key='i'
          :title='diagnostic.name'
          :price='diagnostic.price'
          :id='diagnostic.key'
          :ind='diagnostic.attributes.info'
        ></base-service-item>
      </v-card-text>
    </v-card>
  </booking-layout>
</template>

<script>
import { getServices } from '~/api/vehicle';
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
import BookingLayout from '~/layouts/booking-layout.vue';
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
        text: 'Diagnostics',
        disabled: true,
      },
    ],

    isLoading: true,
    diagnostics: {},
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      this.isLoading = true;

      getServices(this.modelId)
        .then(res => {
          this.diagnostics = res.diagnostics
        }).finally(() => this.isLoading = false)
    }
  }
}
</script>