<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
import navbar from './__components/navbar';

export default {
  components: {
    navbar,
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
