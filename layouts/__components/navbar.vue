<template>
  <div>
    <v-container 
      fluid
      class='py-0'
    >
      <v-row
        class=''
      >
        <v-col>
          <v-btn 
            text 
            color='primary'
            class='pl-0'
          >
            <v-icon 
              dark 
              class='mr-2'
            >
              mdi-cellphone-basic
            </v-icon>
            <span class="text-large">
              01189 876300
            </span>
          </v-btn>
        </v-col>
        <v-col
          class='text-right'
        >
          <v-btn
            color='teal lighten-6'
            dark
            elevation='0'
            style='min-width: 0px'
            class='px-2'
          >
            <v-icon>
              mdi-whatsapp
            </v-icon>
          </v-btn>
          <v-btn
            color='blue darken-1'
            dark
            elevation='0'
            style='min-width: 0px'
            class='px-2'
          >
            <v-icon>
              mdi-facebook
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
      </v-row>
    </v-card>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from 'vue';
import mixins from '@/mixins';

Vue.mixin(mixins);

export default {
  name: 'navbar',

  data: () => ({
    drawer: false,
    group: null,
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
}
</style>