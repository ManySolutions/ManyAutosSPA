<template>
  <v-card
    color='primary'
    dark
    elevation='0'
  >
    <v-card-subtitle>
      Pending Additional Requests
      <v-chip
        v-if='order.is_request_discount'
        color='yellow'
        small
        style='color: black !important;'
      >
        Discounted
      </v-chip>
    </v-card-subtitle>
    <v-card-text>
      <v-data-table
        :headers='headers'
        :items='requests'
        :items-per-page="isDevice.lg ? 5 : 1"
        disable-sort
        disable-filtering
        light
        :loading="isFetching"
      >
        <template #item.price='{ item }'>
          <span v-if='item.discounted'>
            {{ item.discounted.price }}
            <small class='text-decoration-line-through'>
              {{ item.price }}
            </small>
          </span>
          <span v-else>
            {{ item.price }}
          </span>
        </template>
        <template #item.labour_cost='{ item }'>
          <span v-if='item.discounted'>
            {{ item.discounted.labour_cost }}
            <small class='text-decoration-line-through'>
              {{ item.labour_cost }}
            </small>
          </span>
          <span v-else>
            {{ item.labour_cost }}
          </span>
        </template>
        <template #item.total_cost='{ item }'>
          <span v-if='item.discounted'>
            {{ item.discounted.total_cost }}
            <small class='text-decoration-line-through'>
              {{ item.total_cost }}
            </small>
          </span>
          <span v-else>
            {{ item.total_cost }}
          </span>
        </template>
        <template #item.action='{item}'>
          <template v-if='item.status == "pending"'>
            <v-btn
              color='secondary'
              dark
              small
              class='mb-2'
              :loading='isLoading'
              @click='handleServiceAction(item.id, "approved")'
            >
              Accept
            </v-btn>
            <v-btn
              color='error'
              dark
              small
              class='mb-2'
              :loading='isLoading'
              @click='handleServiceAction(item.id, "rejecting")'
            >
              Reject&nbsp;
            </v-btn>
          </template>
          <template v-else>
            <span class='red--text'>
              Rejected
            </span>
          </template>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import toastr from 'toastr';
import { getRequests, serviceUpdate } from '~/api/booking';
export default {
  props: {
    items: [Object, Array],
    orderId: String,
    order: {
      default: {},
      type: [Object],
    },
  },

  data: () => ({
    headers: [
      { text: 'Service Name', value: 'name', sortable: false },
      { text: 'Service Price', value: 'price', sortable: false },
      { text: 'Labour Cost', value: 'labour_cost', sortable: false },
      { text: 'Total Cost + VAT', value: 'total_cost', sortable: false },
      { text: 'Apply Action', value: 'action', sortable: false }
    ],
    isLoading: false,
    isFetching: false,
    updatedRequests: null,
  }),

  computed: {
    requests() {
      const {items, updatedRequests} = this;
      const computeOn = updatedRequests !== null
        ? updatedRequests
        : items;

      return Object.keys(computeOn).map(key => computeOn[key]);
    },
  },

  methods: {
    handleServiceAction(requestId, status) {
      const {orderId} = this;
      this.isLoading = true;

      serviceUpdate(orderId, requestId, status, this.http)
        .then(res => {
          const {status, message} = res;

          if (!status) {
            toastr.error(message);
            return;
          }

          toastr.success(message);
          this.$emit('approved');
          this.getRequests();
        })
        .catch(() => toastr.error('Error when updating your request action, please try again'))
        .finally(() => this.isLoading = false)
    },

    getRequests() {
      this.isFetching = true;

      getRequests(this.orderId, this.http)
        .then(res => this.updatedRequests = res)
        .catch(() => toastr.error('Error when get updated requests, please try to reload manually'))
        .finally(() => this.isFetching = false)
    }
  }
}
</script>