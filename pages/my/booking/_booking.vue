<template>
  <v-container class='booking-single'>
    <h4 class='text-h5 text-center'>
      
    </h4>

    <v-card>
      <v-card-title>
        <span>
          Booking 
          <span class='font-weight-700'>#{{ bookingId }}</span> 
          Details
        </span>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle>
        Collection Information
      </v-card-subtitle>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <tbody>
              <tr>
                <td class='align-top font-weight-600'>Address</td>
                <td>15 Cresswell Close Reading Berkshire</td>
              </tr>
              <tr>
                <td class='font-weight-600'>Postcode</td>
                <td>RG28UF</td>
              </tr>
              <tr>
                <td class='font-weight-600'>Collection Date</td>
                <td>Nov 11 2020</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <!-- /collection details -->

      <v-spacer></v-spacer>
      <v-card-subtitle>
        Vehicle Details
      </v-card-subtitle>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <tbody>
              <tr>
                <td class='align-top font-weight-600'>Reg. Number</td>
                <td>HY59XOO</td>
              </tr>
              <tr>
                <td class='font-weight-600'>Name</td>
                <td class='blue--text'>Ford Fiesta 2009</td>
              </tr>
              <tr>
                <td class='font-weight-600'>Fuel Type</td>
                <td>Petrol</td>
              </tr>
              <tr>
                <td class='font-weight-600'>Modal year</td>
                <td>2009</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <!-- /vehicle info -->

      <v-spacer></v-spacer>
      <v-card-subtitle>
        Services List
      </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers='headers'
          :items='services'
          :items-per-page="1"
          disable-sort
          disable-filtering
        ></v-data-table>
      </v-card-text>
      <!-- /vehicle info -->
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    headers: [
      { text: 'Service Name', value: 'name', sortable: false },
      { text: 'Service Price', value: 'price', sortable: false },
      { text: 'Labour Cost', value: 'labour_cost', sortable: false },
      { text: 'Total Cost (inc Yax)', value: 'total_cost', sortable: false },
    ],

    services: [
      {
        name: 'MOT',
        price: '11.22',
        labour_cost: 'N/A',
        total_cost: '11.22',
      }
    ],
  }),
  computed: {
    bookingId() {
      return this.$route.params.booking;
    }
  }
}
</script>

<style lang="scss" scoped>
.booking-single {
  &::v-deep thead.v-data-table-header.v-data-table-header-mobile {
    display: none;
  }
}
</style>