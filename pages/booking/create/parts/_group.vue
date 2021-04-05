<template>
  <booking-layout :breadcrumbs="breadcrumbs">
    <template #title>
      <span class='font-weight-light'>
        Which
      </span>
        <span style="color:#0046e2;">Exterior</span>
      <span class='font-weight-light'>
        part need to repaire
      </span>
      <br>
      <span class='font-weight-light'>For Your</span>
      <br>
      <span class='text-primaryy' style="color:#0046e2;">
        {{ vehicleName }}
      </span>
    </template>

    <v-card
      tile
      elevation="1"
    >
      <v-card-text>
        <group-request-a-quote-alert is-textable></group-request-a-quote-alert>
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
          v-for="(operation, j) in components"
          :key='j + 100'
          :title='operation.Operation'
          :price='parseFloat(operation.Price) + parseFloat(operation.LabourCost)'
          :id='operation.PartNo.trim() + "-" + operation.ItemID'
          :ind='[operation.IND0, operation.IND1, operation.IND2, operation.IND3, operation.IND4]'
        ></base-service-item>
      </v-card-text>
    </v-card>
  </booking-layout>
</template>

<script>
import { getPartsByGroupCode } from '~/api/vehicle';
import BookingLayout from '~/layouts/booking-layout.vue';
import GroupRequestAQuoteAlert from '../__components/group-request-a-quote-alert.vue';
export default {
  components: {
    BookingLayout,
    GroupRequestAQuoteAlert
  },

  props: ['vehicleName', 'modelId'],

  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        to: '/booking/create/services',
        exact: true,
      },
      {
        text: 'Part\'s Categories',
        disabled: false,
        to: '/booking/create/parts',
        exact: true,
      },
      {
        text: 'Categories',
        disabled: true,
      },
    ],

    components: [],
    isLoading: true,
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      this.isLoading = true;
      const { group } = this.$route.params;

      getPartsByGroupCode(this.modelId, group)
        .then(res => {
          this.components = res;
        }).finally(() => this.isLoading = false)
    }
  }
}
</script>