<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <nuxt></nuxt>
    </v-main>

    <client-only>
      <mini-cart v-if='isDevice.xs || (isDevice.sm && !isDevice.md)'></mini-cart>
    </client-only>

    <default-footer></default-footer>
    
    <client-only>
      <g-analytics-code></g-analytics-code>
    </client-only>
  </v-app>
</template>

<script>
import Navbar from './include/navbar';
import MiniCart from '~/components/func-components/mini-cart';
import DefaultFooter from './include/default-footer.vue';
import GAnalyticsCode from '~/components/func-components/g-analytics-code.vue';

export default {
  name: 'default',

  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
    ]
  },
  
  components: {
    Navbar,
    MiniCart,
    DefaultFooter,
    GAnalyticsCode,
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
