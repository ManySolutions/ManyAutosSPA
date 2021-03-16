<template>
  <v-card elevation="0" :outlined='outlined'>
    <template v-if='hasPaymentPlan && isCartEmpty'>
      <v-alert text type=info class='mb-0'>
        Select a service to see your installment plan details
      </v-alert>
    </template>
    <template v-else-if='hasPaymentPlan'>
      <v-card-subtitle>Installment Plan Details</v-card-subtitle>
      <v-card-text>
        <small>
          <strong>Note:</strong>
          The accurate installments date will be decided once your car work will be completed
        </small>
      </v-card-text>
      <v-card-text>
        <v-skeleton-loader v-if='loadingInstallment' 
          type="list-item, list-item, list-item"
        ></v-skeleton-loader>
        <v-simple-table v-else>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  #
                </th>
                <th class="text-left">
                  Date
                </th>
                <th class="text-left">
                  Amount ({{currencySymbol}})
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for='(item, i) in schedules' :key=i>
                <td>{{i + 1}}</td>
                <td>{{item.date}}</td>
                <td>{{currencySymbol}} {{item.amount / 100}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </template>
    <template v-else>
      <v-alert text type='info' class='mb-0'>
        No payment plan was selected
      </v-alert>
    </template>
  </v-card>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  props: {
    outlined: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    ...mapState('booking', ['hasPaymentPlan', 'loadingInstallment', 'installmentPlanDetails']),
    ...mapGetters('booking', ['isCartEmpty']),
    schedules() {
      return this.installmentPlanDetails.schedule || [];
    },
  },
  watch: {
    hasPaymentPlan(hasPaymentPlan) {
      if (hasPaymentPlan) 
        this.$store.dispatch('booking/getInstallmentPlan')
    }
  },
}
</script>