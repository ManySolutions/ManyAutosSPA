<template>
  <div>
    <v-container 
      fluid
      class='py-0'
    >
      <v-row
        class=''
      >
        <v-col cols=5>
          <v-btn 
            text 
            color='teal lighten-6'
            class='pl-0'
            href='tel:01189876300'
          >
            <v-icon 
              dark
              class='mr-1'
            >
              mdi-cellphone-basic
            </v-icon>
            <span class="text-large">
              01189 876300
            </span>
          </v-btn>
        </v-col>
        <v-col
          class='text-right top-social'
        >
          <v-btn
            text
            elevation='0'
            style='min-width: 0px'
            class='px-1'
            href='https://wa.me/+4401189876300'
            target="_blank"
          >
            <v-icon color='teal lighten-6'>
              mdi-whatsapp
            </v-icon>
          </v-btn>
          <v-btn
            text
            elevation='0'
            style='min-width: 0px'
            class='px-1'
            href='http://m.me/manyautos.co.uk?ref=contact_from_website'
            target="_blank"
          >
            <v-icon color='blue darken-1'>
              mdi-facebook-messenger
            </v-icon>
          </v-btn>
          <v-btn
            text
            elevation='0'
            style='min-width: 0px'
            class='px-1'
            href='https://wa.me/+4401189876300'
            target="_blank"
          >
            <v-icon color='red darken-1'>
              mdi-instagram
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <!-- /navbar top -->
    </v-container>
    <v-card 
      elevation='3' 
      class='container container--fluid py-2 blue-grey darken-2'
      tile
    >
      <v-row
        no-gutters
      >
        <v-col>
          <v-btn
            text
            dark
            large
            class='px-3'
            style='min-width: auto'
            @click="drawer = true"
          >
            <v-icon>
              mdi-menu
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols=6
          class='text-center'
        >
          <img 
            :src="assets('/customer-v2/logo-default.png')" 
            :alt="appTitle"
            class='logo'
            @click='$router.push("/")'
          >
        </v-col>
        <v-col
          class='text-right'
        >
          <navbar-user-menu></navbar-user-menu>
        </v-col>
      </v-row>
    </v-card>

    <navbar-drawer-left 
      :is-open='drawer'
      @close='drawer = false'
    ></navbar-drawer-left>
<app-bar></app-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import mixins from '@/mixins';
import NavbarDrawerLeft from './__components/navbar-drawer-left.vue';
import NavbarUserMenu from './__components/navbar-user-menu.vue';
import AppBar from './__components/app-bar.vue';

Vue.mixin(mixins);

export default {
  name: 'navbar',

  components: {
    NavbarDrawerLeft,
    NavbarUserMenu,
    AppBar,
  },

  data: () => ({
    drawer: false,
     items: [
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
   
    })
  }
 
</script>

<style lang="scss" scoped>
.text-large {
  font-size: 18px;
}
.logo {
  max-width: 100%;
  max-height: 37px;
  cursor: pointer;
}
.instagram {
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
.top-social {
  .v-icon.v-icon {
    font-size: 29px;
  }
}

</style>