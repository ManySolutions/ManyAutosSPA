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
          :loading='isLoading'
          class="elevation-1"
        >
          <template #item.actions='{ item }'>
            <v-badge
              :content='item.requests_count'
              :value='item.requests_count'
              color='error'
              offset-x="10"
              offset-y="10"
            >
              <v-btn
                color='primary'
                :to='`/my/booking/${item.id}`'
                exact
              >
                Details
              </v-btn>
            </v-badge>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getBookings } from '~/api/booking';
export default {
  data: () => ({
    headers: [
      { text: 'Order ID#', value: 'id', sortable: false },
      { text: 'Car Collection Date', value: 'booking_date', sortable: false },
      { text: 'Services', value: 'services', sortable: false },
      { text: 'Total Cost', value: 'total_cost', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    bookings: [],
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
  },

  mounted() {
    this.fetch();
  },
  
  methods: {
    fetch() {
      this.isLoading = true;

      getBookings(this.http).then(res => {
        this.bookings = res;
      }).finally(() => this.isLoading = false);
    }
  },
}
</script>