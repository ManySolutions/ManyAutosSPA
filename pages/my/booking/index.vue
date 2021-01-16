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
            <div class="d-table">
              <div class='d-table-cell'>
                <v-btn
                  v-if='item.is_payable'
                  color='amber lighten-1'
                  :href='item.payment_website'
                  class='px-2 mr-3'
                  target="_blank"
                >
                  <v-icon class='mr-2'>mdi-credit-card</v-icon>
                  Pay Now
                </v-btn>
              </div>
              <v-badge
                :content='item.requests_count'
                :value='item.requests_count'
                color='error'
                offset-x="10"
                offset-y="10"
                class='d-table-cell'
              >
                <v-btn
                  color='primary'
                  :to='`/my/booking/${item.id}`'
                  exact
                >
                  Details
                </v-btn>
              </v-badge>
            </div>
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
      { text: 'Order ID#', value: 'id', sortable: true },
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