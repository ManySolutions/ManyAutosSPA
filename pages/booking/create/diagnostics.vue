<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='heading__title text-center pb-lg-5'>
          <span class='font-weight-light'>
            Choose
          </span>
            Diagnostics
          <span class='font-weight-light'>For Your</span>
          <br>
          <span class='text-primary'>
            {{ vehicleName }}
          </span>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-breadcrumbs
          :items='breadcrumbs'
        ></v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getServices } from '~/api/vehicle';
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
export default {
  components: {
    BaseServiceItem
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