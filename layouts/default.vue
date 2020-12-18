<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <nuxt></nuxt>
    </v-main>

    <client-only>
      <mini-cart></mini-cart>
      <default-authorize></default-authorize>
    </client-only>
  </v-app>
</template>

<script>
import Navbar from './__components/navbar';
import MiniCart from '~/components/func-components/mini-cart';
import DefaultAuthorize from './__components/default-authorize.vue';

export default {
  name: 'default',
  
  components: {
    Navbar,
    MiniCart,
    DefaultAuthorize,
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
