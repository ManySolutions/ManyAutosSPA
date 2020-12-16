<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='heading__title text-center pb-lg-5'>
          <span class='font-weight-light'>
            Choose
          </span>
            MOT
          <span class='font-weight-light text-lowercase'>or</span>
          Servicing
          <span class='font-weight-light'>For Your</span>
          <br>
          <span class='text-primary'>
            {{ 'Ford' }}
            {{ 'Fista' }}
          </span>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          tile
          elevation="1"
        >
          <v-card-text>
            <base-service-item
              :title='`MOT`'
              :price='64.33'
              :id='`MOT`'
              :ind='["Free Retest", "Emissions and exhaust test", "Collection and delivery"]'
            ></base-service-item>
            <base-service-item
              :title='`Interim Service`'
              :price='120'
              :id='`INTERIM_SERVICE`'
              :ind='[
                "Oil and Oil Filter", 
                "50 point vehicle check", 
                "Collection and delivery"
              ]'
            ></base-service-item>
            <base-service-item
              :title='`Full Service`'
              :price='130'
              :id='`FULL_SERVICE`'
              :ind='[
                "70 point vehicle checks", 
                "Drive and Test", 
                "Collection and delivery"
              ]'
            ></base-service-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BaseServiceItem from '~/components/base-components/base-service-item.vue'
export default {
  components: {
    BaseServiceItem

  }
}
</script>