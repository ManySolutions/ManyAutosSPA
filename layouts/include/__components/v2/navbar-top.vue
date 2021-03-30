<template>
  <v-sheet
    color='#33434a'
  >
    <v-container class='navbar-top-container'>
      <v-row justify="center" align="center">
        <v-col cols=12 sm=3 class='d-none d-lg-block'>
          <NuxtLink to="/">
            <v-img 
              :src="assets('customer-v2/logo-default.png')" 
              max-width="200px"
            ></v-img>
          </NuxtLink>
        </v-col>
        <v-col cols=12 sm=9>
          <div class="d-flex flex-row justify-end align-center">
            <v-btn
              text
              :color='colorSecond'
              class='px-1'
              href='tel:01189876300'
            >
              <v-icon
                dark
                class=''
                :size="size"
                :color='colorFirst'
              >
                mdi-phone-classic
              </v-icon>
              <span class="text-large ml-2">
                <span class='top-text text-capitalize' :style='`color: ${colorFirst}`'>
                  Call Us To Book
                </span>
                <span class='top-text-bottom'>01189 876300</span>
              </span>
            </v-btn>
            <span class='d-none d-lg-inline-block'>
              <navbar-user-menu desktop-view></navbar-user-menu>
            </span>
            <v-btn
              :color='colorSecond'
              class='gqbtn ml-2'
              elevation="3"
              id='scrollToRegForm'
              :to='$route.name != "index" ? "/service-booking" : "" '
              @click='$route.name == "index" ? handleFocusBtn() : ""'
            >
              Book now
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import navbarUserMenu from '../navbar-user-menu.vue'
import $ from 'jquery';
import {mapGetters} from 'vuex';

export default {
  components: { navbarUserMenu },
  data: () => ({
    size: '27px',
    colorFirst: 'white',
    colorSecond: 'primary'
  }),

  computed: {
    ...mapGetters('user', ['isAuth']),  
  },

  watch: {
  },

  mounted() {
  },

  methods: {
    handleFocusBtn() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#home-reg-form").offset().top - 300
      }, 1000);

      $('#home-reg-form').find('input').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
span.top-text {
    display: block;
    font-size: 13px;
}

span.top-text-bottom {
    display: block;
    font-size: 18px;
    font-weight: 700;
}

.navbar-top-container {
  @media (min-width: 1264px) and (max-width: 1904px) {
    max-width: 1585px;
  }
}
</style>