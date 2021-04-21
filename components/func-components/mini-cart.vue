<template>
  <div class='mini-cart' v-if='!isCartEmpty'>
    <template>
      <v-btn
        color="secondary"
        dark
        fixed
        bottom
        right
        @click='drawer = true'
        x-large
        rounded
        class='pl-1 btn-mini-cart text-capitalize'
      >
        <v-badge
          color="primary"
          overlap
          :content="cartCount"
          :value="cartCount"
          offset-x='-5'
          offset-y='10'
        >
          <v-btn
            color="secondary darken-1"
            dark
            bottom
            right
            fab
            @click='drawer = true'
            small
            elevation="0"
            class='mr-2'
          >
            <v-icon class='arrow-anim arrow-slide-up'>mdi-cart</v-icon>
            <v-icon class='arrow-anim-next arrow-slide-down'>mdi-arrow-right</v-icon>
          </v-btn>
          {{ btnText }}
        </v-badge>
      </v-btn>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        bottom
        temporary
        class='mini-cart-drawer'
      >
        <v-alert
          color='red'
          type='error'
          dense
          text
          outlined
          v-if='cartError'
          class='mt-5 mx-5'
        >
          Cart Received a critical error
          Please consult with administrator
        </v-alert>
        <v-card
          elevation="0"
          v-else
        >
          <v-card-title>
            Your services list
          </v-card-title>
          <v-card-text class='mc-text-container'>
            <index-selected-payment-plan></index-selected-payment-plan>
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
                  <tr
                    v-else 
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
                  SubTotal 
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
                <v-col class='text-right '>
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
          </v-card-text>
          <v-card-actions class='mc-actions'>
            <v-skeleton-loader
              v-if='isCartLoading'
              type='button'
            ></v-skeleton-loader>
            <v-btn
              v-else-if='hasBookNowBtn'
              color='secondary'
              block large
              dark
              to='/booking/create/collection-info'
              :disabled='isCartEmpty'
            >
              <strong>
                Book now
              </strong>
              <v-icon
                right
                dark
              >
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </template>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapState, mapGetters, mapActions } from 'vuex';
import { getCartInstance } from '~/api/cart';
import IndexSelectedPaymentPlan from '~/pages/booking/create/__components/index-selected-payment-plan.vue';
import InstallmentPlanDetails from './installment-plan-details.vue';

export default {
  components: { IndexSelectedPaymentPlan, InstallmentPlanDetails, },
  data: () => ({
    drawer: false,
    switchIcon: 10000,
    beforeCartSize: 0,
    showNextIco: false,
    interval: null,
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
    },

    btnText() {
      if (this.$route.name == 'booking-create-collection-info') {
        return 'Services List'
      }

      return 'Book Now';
    }
  },

  watch: {
    drawer(drawer) {
      if (!drawer) return;

      this.getCart();
    },

    cart(cart) {
      if (Object.keys(cart).length > this.beforeCartSize) {
        this.showNextIco = true;
      }

      this.getCart();
    },

    showNextIco(showNextIco) {
      if (showNextIco) {
        $('.arrow-anim').removeClass('arrow-slide-up').addClass('arrow-slide-down');
        $('.arrow-anim-next').removeClass('arrow-slide-down').addClass('arrow-slide-up');
        
        this.switchIcon = 5000;
      } else {
        $('.arrow-anim').removeClass('arrow-slide-down').addClass('arrow-slide-up');
        $('.arrow-anim-next').removeClass('arrow-slide-up').addClass('arrow-slide-down');

        this.switchIcon = 10000;
      }
    },

    isCartEmpty (isCartEmpty) {
      if (isCartEmpty) this.drawer = false;
    },

    $route() {
      this.bootstrap();
    }
  },

  mounted() {
    this.bootstrap();
  },

  methods: {
    ...mapActions('booking', ['getCart']),

    handleRemove(id) {
      this.$store.dispatch('booking/removeFromCart', id)
    },

    bootstrap() {
      if ( !(this.$route.name == 'booking-create-collection-info') ) {
        this.interval = setInterval(() => {
          this.showNextIco = !this.showNextIco
        }, this.switchIcon);
      } else {
        clearInterval(this.interval);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mini-cart {
  z-index: 2147483648;
  &::v-deep .v-skeleton-loader__button {
    margin-left: 20px;
  }
}
i.arrow-slide-up {
  opacity: 1;
  transition-duration: .3s;
  transition-delay: .2s;
  font-size: 24px;
}
i.arrow-slide-up, i.arrow-slide-down {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}
i.arrow-slide-down {
  opacity: 0;
  transition-duration: .3s;
}
i.arrow-anim {
  font-size: 0px;
}
.mini-cart-drawer {
  z-index: 10000000000;
  max-height: 60%;
}
.btn-mini-cart {
  z-index: 1;
  @media (min-width: 768px) {
    bottom: 26px;
  }
}
.mc-actions {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background: white;
  border-top: 1px solid #e8e8e8;
}
.mc-text-container {
  padding-bottom: 80px;
}
</style>