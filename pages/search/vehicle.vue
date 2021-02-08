<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <h1 class='heading__title text-center pb-lg-5 font-weight-100' v-html='title'>
          </h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card max-width="900px" class='m-auto'>
            <v-card-subtitle>Find vehicle manually</v-card-subtitle>
            <v-card-text>
              <manual-vehicle-search
                @vehicles='handleVehicles'
              ></manual-vehicle-search>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="800"
      scrollable
    >
      <v-card
        class='pt-2'
      >
        <v-card-subtitle>
          <v-row>
            <v-col align-self="center">
              Vehicles List
            </v-col>
            <v-col class='text-right'>
              <v-btn 
                fab color='primary' text
                style='width: auto; height: auto;'
                class='p-2'
                @click='dialog = false'
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-text class='pt-3' style='max-height: 500px'>
          <v-row no-gutters>
            <template v-for='(vehicle, i) in vehicles'>
              <v-col
                v-if='!isSameVehicle(vehicle, i)'
                :key='i'
                cols=12
                sm=6
                md=4
              >
                <manual-vehicle-grid
                  :vehicle='vehicle'
                  :reg='$route.query.reg_no'
                ></manual-vehicle-grid>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ManualVehicleGrid from '~/components/func-components/manual-vehicle-grid.vue';
import manualVehicleSearch from '~/components/func-components/manual-vehicle-search.vue';
import http from '~/utils/http';
export default {
  components: { manualVehicleSearch, ManualVehicleGrid },
  data: () => ({
    dialog: false,
    vehicles: [],
  }),
  computed: {
    title() {
      const {no_reg_found, reg_no} = this.$route.query;

      if (no_reg_found && reg_no) {
        return `Sorry! <small>vehicle not found against your reg 
          <b class='font-weight-600'>${reg_no}</b>
          <br /> Please use dropdown instead</small>`;
      }

      return `Find Vehicle Manually`
    },
  },
  watch: {
  },
  mounted () {
    
  },
  methods: {
    handleVehicles(vehicles) {
      this.vehicles = vehicles;
      this.dialog = true;
    },

    isSameVehicle(obj, index) {
      const vehicles = this.vehicles;
      const nObj = {...obj};

      delete nObj.Model_ID

      for (let i = 0; i < index; i++) {
        const element = {...vehicles[i]};

        delete element.Model_ID

        if (JSON.stringify(nObj) == JSON.stringify(element)) {
          return true;
        }
      }

      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.heading__title {
  text-transform: none;
}
</style>