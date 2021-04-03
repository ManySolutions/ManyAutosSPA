<template>
  <div>
    <v-card 
      elevation='3' 
      class='container container--fluid py-2 white darken-2'
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
            color="#01133c"
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
            src="https://static.manyautosltd.com/uploads/reading-default-logo.png" 
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
  </div>
</template>

<script>
import Vue from 'vue';
import mixins from '@/mixins';
import NavbarDrawerLeft from '~/layouts/include/__components/navbar-drawer-left.vue';
import NavbarUserMenu from '~/layouts/include/__components/navbar-user-menu.vue';

Vue.mixin(mixins);

export default {
  name: 'navbar',

  components: {
    NavbarDrawerLeft,
    NavbarUserMenu,
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
.logo {
  max-width: 100%;
  max-height: 37px;
  cursor: pointer;
}

</style>