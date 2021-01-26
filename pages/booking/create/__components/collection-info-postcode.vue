<template>
  <div class='postcode-search'>
    <v-text-field
      v-model="search"
      :loading="isLoading"
      label="Your Postcode"
      placeholder="Enter your postcode i.e RG28UF"
      :filled='inputStyle == "rounded"'
      :rounded='inputStyle == "rounded"'
      :outlined='inputStyle == "outlined"'
    >
    </v-text-field>

    <p v-if='postcode'>
      Showing result for: 
      <strong>
        {{ postcode }}
      </strong>
    </p>
    <div class='entries-container' v-if='entries && entries.length'>
      <v-list-item-group
        v-model="model"
      >
        <v-list-item
          v-for='(entry, i) in entries'
          :key='i' 
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ entry.formatted_address.join(' ') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getAddress } from '~/api/postcode';
import { fbqFindLocation } from '~/api/fbq';

export default {
  props: {
    inputStyle: {
      default: 'rounded',
      type: String,
    }
  },
  data: () => ({
    model: null,
    entries: [],
    isLoading: false,
    search: null,
    ticker: null,
    postcode: null,
    lat: null,
    lng: null,
  }),

  computed: {
  },

  watch: {
    search (val) {
      if (val.length < 2) return;

      this.entries = [];
      this.postcode = null
      this.lat = null
      this.lng = null
      this.model = null;

      clearTimeout(this.ticker);

      this.ticker = setTimeout(() => {
        this.isLoading = true

        // Lazily load input items
        getAddress(this.search)
          .then(res => {
            this.entries = res.addresses;
            this.postcode = res.postcode;
            this.lat = res.latitude;
            this.lng = res.longitude;

            if (res.postcode) {
              fbqFindLocation(
                this.$fb,
                res.postcode,
                res.lat,
                res.lng,
              );
            }
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      }, 700);
    },

    model(val) {
      const { entries } = this;

      if (val == null || typeof entries == 'undefined') return;

      const { postcode, lat, lng } = this;
      const address = entries[val];

      this.$emit('selected', {
        postcode, lat, lng, address
      });

      fbqFindLocation(
        this.$fb,
        postcode,
        lat,
        lng,
        address.town_or_city,
        address.county,
        address.district,
        address.country
      );
    }
  },
}
</script>

<style lang="scss" scoped>
.entries-container {
  max-height: 350px;
  overflow: auto;
  margin-bottom: 40px;
}

.postcode-search {
  &::v-deep .v-list-item__title, .v-list-item__subtitle {
    white-space: initial;
  }
}
</style>