<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <nuxt></nuxt>
    </v-main>

    <mini-cart></mini-cart>
  </v-app>
</template>

<script>
import Navbar from './__components/navbar';
import MiniCart from '~/components/func-components/mini-cart';

export default {
  components: {
    Navbar,
    MiniCart,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
