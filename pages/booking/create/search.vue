<template>
  <booking-layout
    :breadcrumbs='breadcrumbs'
    no-tabs
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
        <v-skeleton-loader
          v-if='isLoading'
          type='article, button'
        ></v-skeleton-loader>
        <div v-else-if='services.length'>
          <v-card-subtitle>
            Your Search Result For: <strong>{{ keyword }}</strong>
          </v-card-subtitle>
          <base-service-item
            v-for='(service, k) in services'
            :key='k'
            :title='service.title'
            :price='service.price'
            :id='service.id'
            :ind='service.ind'
          ></base-service-item>
        </div>
        <v-alert
          v-else-if='keyword'
          text
          type='info'
        >
          No service, repair or diagnostic found against your search query
        </v-alert>
        <v-alert
          v-else
          text
          type='primary'
        >
          Type in the search box and click on a result to see your repairs/services.
        </v-alert>
        <div v-if='!isLoading && keyword' class='mt-5'>
          <v-divider></v-divider>
          <br>
          <group-request-a-quote-alert is-textable></group-request-a-quote-alert>
        </div>
      </v-card-text>
    </v-card>
  </booking-layout>
</template>

<script>
import { getSearchPart } from '~/api/vehicle';
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
import BookingLayout from '~/layouts/booking-layout.vue';
import GroupRequestAQuoteAlert from './__components/group-request-a-quote-alert.vue';
export default {
  components: {
    BaseServiceItem,
    BookingLayout,
    GroupRequestAQuoteAlert
  },
  
  props: ['vehicleName', 'motPrice', 'modelId'],

  data: () => ({
    isLoading: true,
    results: {
      type: null,
      results: [],
      message: null,
    },
  }),

  async asyncData(context) {
    const {keyword} = context.route.query
    return {
      keyword,
      breadcrumbs: [
        {
          text: 'Services',
          disabled: false,
          to: './services'
        },
        {
          text: 'Search',
          disabled: false,
          to: './services#search'
        },
        {
          text: keyword,
          disabled: true,
        },
      ],
    }
  },

  computed: {
    services() {
      const {type, results, message} = this.results;

      if (!type) return [];

      if (type == 'repairs') return results.map(item => ({
        price: parseFloat(item.Price) + parseFloat(item.LabourCost),
        title: item.Operation,
        id: item.PartNo.trim() + "-" + item.ItemID,
        ind: [item.IND0, item.IND1, item.IND2, item.IND3, item.IND4]
      }))

      if (type == 'diagnostics') return results.map(item => ({
        price: item.price,
        title: item.name,
        id: item.key,
        ind: item.attributes.info
      }))

      if (type == 'mot-and-servicing') return results.map(item => ({
        price: item.price,
        title: item.name,
        id: item.key,
        ind: item.ind
      }))

      return [];
    }
  },

  watch: {
    $route(route) {
      this.keyword = route.query.keyword;

      this.fetch();
    }
  },

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      this.isLoading = true;

      getSearchPart(this.modelId, this.keyword)
        .then(res => {
          this.results = res
        }).finally(() => this.isLoading = false)
    }
  }
}
</script>