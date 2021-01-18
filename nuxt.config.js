import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - ManyAutos',
    title: 'ManyAutos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-175329070-1',
        async: true,
      },
      {
        src: 'https://static.manyautosltd.com/assets/smartsupp.js',
        async: true,
      },
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
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/jsonld'},
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    '@nuxtjs/google-fonts',

    'nuxt-compress',
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
    // treeShake: true,
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
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    // }
  },

  googleFonts: {
    families: {
      'Open+Sans': {
        wght: [300, 400, 600, 700, 800],
        ital: [400]
      },
      Montserrat: {
        wght: [300, 600, 700, 800],
      },
      Roboto: {
        wght: [200, 300, 400, 600, 800],
      },
    },

    display: 'swap',

    preload: true,
  },


  watchers: {
    webpack: {
      // poll: 1000,
      ignored: ['node_modules']
    }
  },


  env: {
    ENVIRONMENT: 'development',
    CURRENCY_SYMBOL: '£',
    APP_URL: 'http://www.manyautosltd.com',
    API_URL: 'https://app.manyautosltd.com/api/v2/c/',
    ASSETS_URL: 'https://app.manyautosltd.com/assets/',
    RECAPTCHA_SITE_KEY: '6LdIdBcaAAAAAGoHmtHlYIa7vSFbJ4Ja0_gQCBlX',
  }
}
