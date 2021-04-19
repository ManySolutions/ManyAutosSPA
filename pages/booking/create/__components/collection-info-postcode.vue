<template>
  <div class='postcode-search'>
    <v-text-field
      v-model="search"
      :loading="isLoading"
      label="Your Postcode *"
      placeholder="Enter your postcode i.e RG28UF"
      :filled='inputStyle == "rounded"'
      :rounded='inputStyle == "rounded"'
      :outlined='inputStyle == "outlined"'
    >
    </v-text-field>

    <v-alert v-if='notFoundMsg' type='info' dense text>
      {{ notFoundMsg }}
    </v-alert>
    <v-sheet 
      v-if='entries && entries.length'
      color='whitesmoke'
      rounded
      outlined
    >
      <div class='entries-container'>
        <v-list-item-group
          v-model="model"
        >
          <template v-for='(entry, i) in entries'>
            <v-divider :key='`${i}-1`' v-if='i > 0'></v-divider>
            <v-list-item
              :key='i' 
              color='primary'
            >
              <v-list-item-content>
                <v-list-item-title class='blue--text darken-2'>
                  {{ entry.formatted_address.join(' ') }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </div>
    </v-sheet>
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
    notFoundMsg: null,
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
      this.notFoundMsg = null;

      clearTimeout(this.ticker);

      this.ticker = setTimeout(() => {
        this.isLoading = true

        // Lazily load input items
        getAddress(this.search)
          .then(res => {
            if (typeof(res.status) != 'undefined' && res.status == false) {
              this.notFoundMsg = res.msg;
              return;
            }

            this.notFoundMsg = null;
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