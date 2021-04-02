<template>
  <client-only>
    <span>
      <v-btn 
        v-if='!modelId'
        text 
        @click='active = true' 
        color='primary'
        :class='cls'
      >See Pricing</v-btn>
      <v-skeleton-loader
        v-else-if='isLoading'
        type='list-item'
      ></v-skeleton-loader>
      <span v-else-if='price'>
        {{ currencySymbol + '' +  formattedPrice}}
      </span>
      <span v-else>Pricing Not Available</span>

      <reg-dialog
        :active='active'
        has-no-redirect
        @close='active = false'
      ></reg-dialog>
    </span>
  </client-only>
</template>
<script>
import http from '~/utils/http'
import { mapState } from 'vuex';
import regDialog from '~/layouts/include/reg-dialog.vue';

export default {
  components: { regDialog },
  props: {
    id: String,
    cls: String,
  },
  data: () => ({
    price: null,
    isLoading: true,
    active: false,
  }),
  computed: {
    ...mapState('booking', ['modelId']),

    formattedPrice() {
      const {price} = this;

      return parseFloat(price).toFixed(2);
    }
  },
  watch: {
    modelId(modelId) {
      const {id} = this;

      if (modelId) {
        this.isLoading = true;

        http.get(`get_vehicle_pricing/${modelId}/${id}`)
          .then(res => res.data)
          .then(res => this.price = res)
          .finally(() => this.isLoading = false);
      } else {
        this.isLoading = false
      }
    }
  },
  mounted() {
    const {modelId, id} = this;

    if (modelId) {
      http.get(`get_vehicle_pricing/${modelId}/${id}`)
        .then(res => res.data)
        .then(res => this.price = res)
        .finally(() => this.isLoading = false);
    } else {
      this.isLoading = false
    }
  }
}
</script>