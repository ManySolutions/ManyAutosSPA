<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='text-h4 text-center py-4'>
          All Bookings
        </h1>
        <v-data-table
          :headers="headers"
          :items="bookings"
          :items-per-page="10"
          :options.sync="options"
          :loading='isLoading'
          :server-items-length="totalBookings"
          class="elevation-1"
        >
          <template #item.actions='{ item }'>
            <v-btn
              color='primary'
            >
              Details
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'Order ID#', value: 'id', sortable: false },
      { text: 'Car Collection Date', value: 'booking_date', sortable: false },
      { text: 'Services', value: 'services', sortable: false },
      { text: 'Total Cost', value: 'total_cost', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    bookings: [
      {
        id: '389201',
        booking_date: '27 Nov 2020',
        services: 'MOT, Interim Service',
        total_cost: '138.11',
        status: 'in-progress'
      }
    ],

    options: {},
    isLoading: false,
    totalBookings: 30,
  }),

  watch: {
    options: {
      handler(options) {
        console.log(options)
      },
      deep: true
    }
  }
}
</script>