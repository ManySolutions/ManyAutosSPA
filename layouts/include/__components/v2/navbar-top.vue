<template>
  <v-sheet
    color='#33434a'
  >
    <v-container>
      <v-row justify="center" align="center">
        <v-col class='d-none d-lg-block'>
          <NuxtLink to="/">
            <v-img 
              :src="assets('customer-v2/logo-default.png')" 
              max-width="200px"
            ></v-img>
          </NuxtLink>
        </v-col>
        <v-col>
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
            <navbar-user-menu desktop-view></navbar-user-menu>
            <v-btn
              :color='colorSecond'
              class=' ml-2'
              elevation="3"
              id='scrollToRegForm'
              :to='$route.name != "index" ? "/service-booking" : "" '
              @click='$route.name == "index" ? handleFocusBtn() : ""'
            >
              Get Instant Quote
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

export default {
  components: { navbarUserMenu },
  data: () => ({
    size: '27px',
    colorFirst: 'white',
    colorSecond: 'primary'
  }),

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
</style>