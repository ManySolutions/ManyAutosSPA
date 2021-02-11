<template>
  <v-container class=' py-0'>
    <v-row>
      <v-col>
        <h1 class='text-h4 text-center'>
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
            <div :class="!item.has_payment_assist ? 'd-table' : 'py-2'">
              <div :class="!item.has_payment_assist ? 'd-table-cell' : 'pb-2'" v-if='item.is_payable'>
                <index-payment-buttons
                  is-payable
                  :payment-url="item.payment_website"
                  :id='item.id'
                  :has-payment-assist="item.has_payment_assist"
                ></index-payment-buttons>
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
import indexPaymentButtons from './_booking/__components/index-payment-buttons.vue';

export default {
  components: { indexPaymentButtons }, 
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
    },
  },

  head: {
    title: 'All Bookings | ManyAutos LTD'
  },
}
</script>