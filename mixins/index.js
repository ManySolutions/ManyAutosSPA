import $ from 'jquery';
import { mapState, mapGetters } from 'vuex';
import { isSmallDevice } from '~/utils/helpers';
import http from '~/utils/http';

export default {
  data: () => ({
    assetsURL: 'https://manyautosltd.com/assets/',
    appTitle: 'Many Autos LTD',
    currencySymbol: process.env.CURRENCY_SYMBOL,
    isMinDevice: false,
  }),

  computed: {
    ...mapState('user', ['accessToken']),
    ...mapGetters('user', ['isAuth']),

    http() {
      const { accessToken } = this;

      http.interceptors.request.use(config => {
        config.headers.common['Authorization'] = accessToken 
          ? 'Bearer ' + accessToken
          : null;

        return config;
      });

      return http;
    },
  },

  watch: {
  },

  methods: {
    assets(url) {
      return this.assetsURL + url;
    },
  },

  mounted() {
    this.isMinDevice = isSmallDevice();

    $(window).resize(() => {
      this.isMinDevice = isSmallDevice();
    });
  },
}