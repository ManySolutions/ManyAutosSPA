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
      { text: 'Order ID#', value: 'id' },
      { text: 'Car Collection Date', value: 'booking_date' },
      { text: 'Services', value: 'services' },
      { text: 'Total Cost', value: 'total_cost' },
      { text: 'Actions', value: 'actions' },
    ],

    bookings: [
      {
        id: '389201',
        booking_date: '27 Nov 2020',
        services: 'MOT, Interim Service',
        total_cost: '138.11',
        status: 'in-progress'
      }
    ]

  })
}
</script>