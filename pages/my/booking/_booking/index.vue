<template>
  <v-container class='booking-single'>
    <v-row>
      <v-col>
        <v-breadcrumbs
          :items='breadcrumbs'
        ></v-breadcrumbs>
      </v-col>
    </v-row>
    <!-- /breadcrumb -->

    <v-skeleton-loader
      v-if='isLoading'
      type='card-heading, list-item-three-line, list-item-three-line, list-item-three-line'
    ></v-skeleton-loader>
    <v-card v-else-if='booking'>
      <v-card-title>
        <span>
          Booking 
          <span class='font-weight-700'>#{{ bookingId }}</span> 
          Details
        </span>
      </v-card-title>
      <v-spacer></v-spacer>

      <v-card-text v-if='Object.keys(booking.requests).length'>
        <booking-additional-requests
          :items='booking.requests'
          :order-id='bookingId'
        ></booking-additional-requests>
      </v-card-text>
      <!-- /additional requests -->

      <v-row>
        <v-col md=6>
          <v-card-subtitle>
            Collection Information
          </v-card-subtitle>
          <v-card-text>
            <v-simple-table>
              <template #default>
                <tbody>
                  <tr>
                    <td class='align-top font-weight-600'>Address</td>
                    <td>{{ booking.info.address }}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-600'>Postcode</td>
                    <td>{{ booking.info.postcode }}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-600'>Collection Date</td>
                    <td>{{ booking.info.collection_date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <!-- /collection details -->
        </v-col>
        <v-col md=6>
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
                    <td>{{ booking.vehicle.RegistrationNumber }}</td>
                  </tr>
                  <tr>
                    <td class='font-weight-600'>Name</td>
                    <td :class='`${color}--text`'>
                      {{ vehicleName }}
                    </td>
                  </tr>
                  <tr>
                    <td class='font-weight-600'>Fuel Type</td>
                    <td>
                      {{ booking.vehicle.Fuel }}
                    </td>
                  </tr>
                  <tr>
                    <td class='font-weight-600'>Modal year</td>
                    <td>
                      {{ booking.vehicle.Year }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <!-- /vehicle info -->
        </v-col>

      </v-row>

      <v-spacer></v-spacer>
      <v-card-subtitle>
        Services List
      </v-card-subtitle>
      <v-card-text>
        <v-data-table
          :headers='headers'
          :items='Object.keys(booking.services).map(key => booking.services[key])'
          :items-per-page="5"
          disable-sort
          disable-filtering
        ></v-data-table>
      </v-card-text>
      <!-- /vehicle info -->
    </v-card>
  </v-container>
</template>
<script>
import toastr from 'toastr';
import { getSingleBooking } from '~/api/booking';
import BookingAdditionalRequests from '../__components/booking-additional-requests.vue';
export default {
  components: { BookingAdditionalRequests },
  data: () => ({
    headers: [
      { text: 'Service Name', value: 'name', sortable: false },
      { text: 'Service Price', value: 'price', sortable: false },
      { text: 'Labour Cost', value: 'labour_cost', sortable: false },
      { text: 'Total Cost (inc Yax)', value: 'total_cost', sortable: false },
    ],

    booking: null,
    isLoading: false,

    breadcrumbs: [
      {
        text: 'Bookings',
        disabled: false,
        to: {name: 'my-booking'},
        exact: true,
      },
    ],
  }),
  computed: {
    bookingId() {
      return this.$route.params.booking;
    },
    color() {
      const {booking} = this;

      return booking.vehicle
        ? (booking.vehicle.Colour).toLowerCase()
        : null;
    },
    vehicleName() {
      const {booking} = this;

      return booking.vehicle
        ? booking.vehicle.Manufacturer + ' ' + booking.vehicle.Model
        : null;
    },
  },
  mounted () {
    this.fetch();

    this.breadcrumbs = [...this.breadcrumbs, {
      text: 'Booking #' + this.bookingId,
      disabled: true,
      href: '#'
    }];
  },
  methods: {
    fetch() {
      this.isLoading = true;

      getSingleBooking(this.bookingId, this.http)
        .then(res => {
          this.booking = res;
        })
        .catch(err => toastr.error('Error while fetching records: '+ err ))
        .finally(() => this.isLoading = false)
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