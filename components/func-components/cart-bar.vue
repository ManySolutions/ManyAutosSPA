<template>
  <v-sheet
    v-if='isShowBar' 
    elevation="0" 
    class='cart--bar'
  >
    <v-container>
      <v-row justify="center">
        <v-col class='py-0' md=5 lg=4 xl=3 align-self="center">
          <h6 class='text-h6 text-center text-md-right'>
            Total Amount (inc VAT) <strong v-html='currencySymbol + cartSubTotal'></strong>
          </h6>
        </v-col>
        <v-col cols=12 md=3 lg=2>
          <v-btn
            large
            block
            color='secondary'
            to='/booking/create/collection-info'
          >
            Book now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
// import { getVehicleDetails } from '~/api/vehicle';
import $ from 'jquery';
import { mapGetters} from 'vuex';

export default {
  data: () => ({}),

  computed: {
    ...mapGetters('booking', ['isCartEmpty', 'cartSubTotal', 'cartCount']),

    isShowBar() {
      const {cartCount, isDevice} = this;

      return cartCount && isDevice.md;
    }
  },

  watch: {
    cartCount(cartCount) {
      if (!cartCount) return;
      
      $('.cart--bar').css({
        'bottom': 0,
        'transition-duration': '.4s',
      });
    }
  },

  mounted() {
    $(document).ready(() => {
      setTimeout(() => {
        $('.cart--bar').css('bottom', 0);
      }, 5000);

      var lastScrollTop = 0;
      $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
          $('.cart--bar').css({
            'bottom': -200,
            'transition-duration': '.3s',
          });
        } else {
          $('.cart--bar').css({
            'bottom': 0,
            'transition-duration': '.4s',
          });
        }
        lastScrollTop = st;
      });
    })
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.cart--bar {
    position: fixed;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000000000;
    background: #f0f0f0;
    width: 100%;
    box-shadow: 1px 5px 16px 1px #102b6591 !important;
    transition: bottom .3s linear;
}
</style>