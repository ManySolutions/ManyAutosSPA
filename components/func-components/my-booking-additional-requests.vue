<template>
  <v-card
    color='primary'
    dark
    elevation='0'
  >
    <v-card-subtitle>
      Pending Additional Requests
    </v-card-subtitle>
    <v-card-text>
      <v-data-table
        :headers='headers'
        :items='requests'
        :items-per-page="1"
        disable-sort
        disable-filtering
        light
        :loading="isFetching"
      >
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
  },

  data: () => ({
    headers: [
      { text: 'Service Name', value: 'name', sortable: false },
      { text: 'Service Price', value: 'price', sortable: false },
      { text: 'Labour Cost', value: 'labour_cost', sortable: false },
      { text: 'Total Cost (inc Yax)', value: 'total_cost', sortable: false },
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
          this.getRequests();
        })
        .catch(err => toastr.error('Error when updating your request action, please try again'))
        .finally(() => this.isLoading = false)
    },

    getRequests() {
      this.isFetching = true;

      getRequests(this.orderId, this.http)
        .then(res => this.updatedRequests = res)
        .catch(err => toastr.error('Error when get updated requests, please try to reload manually'))
        .finally(() => this.isFetching = false)
    }
  }
}
</script>