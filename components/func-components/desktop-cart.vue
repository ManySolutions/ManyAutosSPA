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
                    <tr v-for='(item, i) in cartContent.cart_details'
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
                          @click='handleRemove(i)'
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
                  Total Cost
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
                  Subtotal Cost
                </v-col>
                <v-col class='text-right '>
                  <span class='font-weight-700'>
                    {{ currencySymbol }}
                    {{ cartSubTotal }}
                  </span>
                </v-col>
              </v-row>
            </v-card>
            <!-- /total costs -->
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

export default {
  data: () => ({
    currencySymbol: process.env.CURRENCY_SYMBOL,
  }),

  computed: {
    ...mapState('booking', ['cartContent', 'isCartLoading', 'cart', 'cartError']),

    ...mapGetters('booking', ['cartCount']),

    isCartEmpty() {
      return this.cartCount > 0 ? false : true;
    },

    cartTaxes() {
      return parseFloat(
        this.cartContent.cart_subtotal - this.cartContent.cart_total
      ).toFixed(2) || 0.00;
    },

    cartTotal() {
      return this.cartContent.cart_total || 0.00;
    },

    cartSubTotal() {
      return this.cartContent.cart_subtotal || 0.00;
    },

    hasBookNowBtn() {
      return this.$route.name != "booking-create-collection-info";
    }
  },

  watch: {
    cart() {
      this.getCart();
    },
  },

  mounted() {
    console.log(this.$route);
  },

  methods: {
    ...mapActions('booking', ['getCart']),

    handleRemove(key) {
      const cartIndex = this._cartIndex(key);
      console.log(cartIndex);
      if (cartIndex == null) return;

      this.$store.commit('booking/REMOVE_FROM_CART', cartIndex);

      this.getCart();
    },

    _cartIndex(item) {
      let i;

      for (i = 0; i < this.cart.length; i++) {
        let elem = this.cart[i];

        if (elem == item) return i;
      }

      return null;
    },
  }
  
}
</script>