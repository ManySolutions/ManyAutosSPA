<template>
  <v-sheet elevation="0" class='car-repair-covid-bar'>
    <v-container>
      <v-row justify="center">
        <v-col class='py-0' md=7 lg=5 xl=4 align-self="center">
          <h6 class='text-h6 text-center text-md-right'>
            Looking to pay for your repair in installments?
          </h6>
        </v-col>
        <v-col cols=12 md=3 lg=2>
          <v-btn
            large
            block
            color='secondary'
            id='scrollToCovidForm'
          >
            Book with us now
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
// import { getVehicleDetails } from '~/api/vehicle';
import $ from 'jquery';

export default {
  data: () => ({}),

  mounted() {
    $(document).ready(() => {
      setTimeout(() => {
        $('.car-repair-covid-bar').css('bottom', 0);
      }, 5000);

      var lastScrollTop = 0;
      var formTop = $("#covidToStartScroll").offset().top - $(window).height() + $("#covidToStartScroll").height();
      $(window).scroll(function(event){
        var st = $(this).scrollTop();

        if (st <= formTop) { // st > lastScrollTop || 
          $('.car-repair-covid-bar').css({
            'bottom': -200,
            'transition-duration': '.3s',
          });
        } else {
          $('.car-repair-covid-bar').css({
            'bottom': 0,
            'transition-duration': '.4s',
          });
        }
        lastScrollTop = st;
      });

      $("#scrollToCovidForm").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#covidPlanForm").offset().top - 300
        }, 1000);

        $('#covidPlanForm').find('input').focus()
      });
    })
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.car-repair-covid-bar {
    position: fixed;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000000000;
    background: #00b4d8;
    width: 100%;
    box-shadow: 1px 5px 16px 1px #102b6591 !important;
    transition: bottom .3s linear;
    color: white;
}
</style>