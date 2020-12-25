<template>
  <booking-layout :breadcrumbs="breadcrumbs">
    <template #title>
      <span class='font-weight-light'>
        Select a category to view parts
      </span>
    </template>

    <v-card>
      <v-card-subtitle>Part's Groups List</v-card-subtitle>
      <v-card-text>
        <v-skeleton-loader
          v-if='isLoading'
          type='list-item, list-item, list-item, list-item, list-item'
        ></v-skeleton-loader>
        <v-list v-else>
          <v-list-item-group>
            <v-list-item
              v-for="group in groups"
              :key="group.GroupCode"
              :to='"./parts/" + group.GroupCode'
            >
              <v-list-item-title v-text="group.Group"></v-list-item-title>
              <v-list-item-icon>
                <v-icon>
                  mdi-chevron-right
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </booking-layout>
</template>

<script>
import { getPartsGroup } from '~/api/vehicle';
import BookingLayout from '~/layouts/booking-layout.vue';

export default {
  components: {
    BookingLayout,
  },

  props: ['vehicleName', 'motPrice', 'modelId'],

  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        to: '../services'
      },
      {
        text: 'Part\'s Categories',
        disabled: true,
      },
    ],

    groups: [],
    isLoading: true,
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      this.isLoading = true;

      getPartsGroup(this.modelId)
        .then(res => {
          this.groups = res.partsGroup
        }).finally(() => this.isLoading = false)
    }
  }
}
</script>