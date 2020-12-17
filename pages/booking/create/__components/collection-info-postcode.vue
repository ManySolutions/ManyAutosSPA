<template>
  <div>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      label="Your Postcode"
      item-text='text'
      item-value='value'
      placeholder="Enter your postcode i.e RG28UF"
      filled
      rounded
      return-object
    >
    </v-autocomplete>
  </div>
</template>

<script>
import Vue from 'vue';
import { getAddress } from '~/api/postcode';

export default {
  data: () => ({
    model: null,
    entries: [],
    isLoading: false,
    search: null,
    ticker: null,
  }),

  computed: {
    items() {
      if (!this.entries) return [];

      return this.entries.map(function(entry) {
        return {
          text: entry.formatted_address.join(' '),
          value: JSON.stringify(entry)
        }
      })
    }
  },

  watch: {
    search (val) {
      if (this.entries.length) return;

      clearTimeout(this.ticker);

      this.ticker = setTimeout(() => {
        this.isLoading = true

        // Lazily load input items
        getAddress(this.search)
          .then(res => {
            this.entries = res.addresses;
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      }, 700);
    },

    model(val) {
      this.$emit('selected', val);
    }
  },
}
</script>