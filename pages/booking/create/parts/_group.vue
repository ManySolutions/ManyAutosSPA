<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='heading__title text-center pb-lg-5'>
          <span class='font-weight-light'>
            Which
          </span>
            Exterior
          <span class='font-weight-light'>
            part need to repaire
          </span>
          <br>
          <span class='font-weight-light'>For Your</span>
          <br>
          <span class='text-primary'>
            {{ 'Ford' }}
            {{ 'Fista' }}?
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
              v-for="(operation, j) in components"
              :key='j'
              :title='operation.Operation'
              :price='parseFloat(operation.Price) + parseFloat(operation.LabourCost)'
              :id='operation.PartNo.trim() + "-" + operation.ItemID'
              :ind='[operation.IND0, operation.IND1, operation.IND2, operation.IND3, operation.IND4]'
            ></base-service-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPartsByGroupCode } from '~/api/vehicle';
export default {
  components: {
  },

  props: ['vehicleName', 'motPrice', 'modelId'],

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