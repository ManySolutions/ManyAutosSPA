<template>
  <div class='desktop-cart'>
    <v-card
      class="mx-auto"
    >
      <v-list-item tow-line>
        <v-list-item-content>
          <div class="overline mb-4 font-weight-600">
            YOUR ADDED SERVICES
          </div>
          <index-selected-payment-plan></index-selected-payment-plan>
          <!-- /paymist plan using -->
          <div>
            <v-skeleton-loader
              v-if='isCartLoading'
              type='list-item, list-item, list-item'
            ></v-skeleton-loader>
            <v-simple-table v-else>
              <template #default>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th class='text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if='isCartEmpty'>
                    <td colspan="3">
                      <v-alert
                        type="warning"
                        class='mt-4'
                        color='blue lighten-3'
                      >
                        {{ 'No service added by you yet!' }}
                      </v-alert>
                    </td>
                  </tr>
                  <template v-else>
                    <tr 
                      v-for='(item, i) in cart'
                      :key='i'
                    >
                      <td>
                        {{ item.name }}
                      </td>
                      <td>
                        {{ currencySymbol + item.price }}
                      </td>
                      <td class='text-center'>
                        <v-btn
                          color='error'
                          small
                          icon
                          @click='handleRemove(item.id)'
                        >
                          <v-icon>
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </template>
            </v-simple-table>
            <!-- / items list ended -->

            <v-card 
              outlined 
              class='px-4 mt-4' 
              v-if='!isCartLoading'
            >
              <v-row>
                <v-col class='pb-0'>
                  Subtotal
                </v-col>
                <v-col class='text-right pb-0'>
                  <span class='font-weight-700'>
                    {{ currencySymbol }}
                    {{ cartTotal }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class='pb-0'>
                  VAT
                </v-col>
                <v-col class='text-right pb-0'>
                  <span class='font-weight-700'>
                    {{ currencySymbol }}
                    {{ cartTaxes }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class=''>
                  Total
                </v-col>
                <v-col class='text-right'>
                  <span class='font-weight-700'>
                    {{ currencySymbol }}
                    {{ cartSubTotal }}
                  </span>
                </v-col>
              </v-row>
            </v-card>
            <!-- /total costs -->
            
            <br v-if='hasPaymentPlan'/>
            <installment-plan-details v-if='hasPaymentPlan'></installment-plan-details>
            <!-- installments -->
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          color='secondary'
          block
          large
          to='/booking/create/collection-info'
          v-if='hasBookNowBtn'
          :disabled='isCartEmpty'
        >
          <strong>
            Book Now
          </strong>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
// import $ from 'jquery';
import { mapState, mapGetters, mapActions } from 'vuex';
import indexSelectedPaymentPlan from '~/pages/booking/create/__components/index-selected-payment-plan.vue';
import InstallmentPlanDetails from './installment-plan-details.vue';

export default {
  components: { indexSelectedPaymentPlan, InstallmentPlanDetails },
  data: () => ({
    currencySymbol: process.env.CURRENCY_SYMBOL,
  }),

  computed: {
    ...mapState('booking', ['cartContent', 'isCartLoading', 'cartError', 'hasPaymentPlan']),
    ...mapGetters('booking', ['cartCount', 'cart']),

    isCartEmpty() {
      return this.cartCount > 0 ? false : true;
    },

    cartTaxes() {
      const {subtotal, total} = this.cartContent;
      const calc = subtotal - total;

      return  !Number.isNaN(calc) ? parseFloat(calc).toFixed(2) : '0.00';
    },

    cartTotal() {
      return this.cartContent.total || '0.00';
    },

    cartSubTotal() {
      return this.cartContent.subtotal || '0.00';
    },

    hasBookNowBtn() {
      return this.$route.name != "booking-create-collection-info";
    }
  },

  watch: {
  },

  beforeMount() {
  },

  mounted() {
    this.getCart();
  },

  methods: {
    ...mapActions('booking', ['getCart']),

    handleRemove(id) {
      this.$store.dispatch('booking/removeFromCart', id)
    },
  }
  
}
</script>