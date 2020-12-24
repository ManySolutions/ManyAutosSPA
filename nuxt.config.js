import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - app',
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@mdi/font/css/materialdesignicons.css',

    '@/assets/css/bootstrap-utilities.min.css',

    '@/assets/scss/style.scss',

    '@/assets/vendor/icomoon/style.css',
    '@/assets/vendor/icomoon-2/style.css',

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#00b4d8',
          secondary: '#06d6a0'
        },
      }
    },
    icons: {
      iconfont: 'mdi'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      vue: {
        prettify: false
      }
    },
    parallel: true,
    cache: true,
    hardSource: true,
  },

  googleFonts: {
    families: {
      'Open+Sans': {
        wght: [300, 400, 600, 700, 800],
        ital: [400]
      },
      Montserrat: {
        wght: [200, 300, 500, 600, 700, 800],
      },
    },

    display: 'swap',

    preload: true,
  },


  env: {
    ENVIRONMENT: 'development',
    CURRENCY_SYMBOL: '£',
    LOCAL_API_URL: 'http://manyautos.local/api/v2/c/',
    PRODUCTION_API_URL: 'https://staging-v32020.manyautos.co.uk/api/v2/c/',
    LOCAL_ASSETS_URL: 'http://manyautos.local/assets/',
    PRODUCTION_ASSETS_URL: 'https://staging-v32020.manyautos.co.uk/assets/',
  }
}
