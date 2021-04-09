<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <nuxt></nuxt>
    </v-main>

    <client-only>
      <mini-cart v-if='isDevice.xs || (isDevice.sm && !isDevice.md)'></mini-cart>
    </client-only>

    <client-only>
      <reg-dialog></reg-dialog>
    </client-only>

    <default-footer></default-footer>
  </v-app>
</template>

<script>
import Navbar from './include/navbar';
import MiniCart from '~/components/func-components/mini-cart';
import DefaultFooter from './include/default-footer.vue';
import RegDialog from './include/reg-dialog.vue';

export default {
  name: 'default',

  head: {
    script: [
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      //   async: true,
      // },
      {
        src: 'https://static.manyautosltd.com/assets/smartsupp.js',
        async: true,
        defer: true,
      },
    ]
  },
  
  components: {
    Navbar,
    MiniCart,
    DefaultFooter,
    RegDialog,
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
