import $ from 'jquery';
import { mapState, mapGetters } from 'vuex';
import { isSmallDevice } from '~/utils/helpers';
import http from '~/utils/http';

export default {
  data: () => ({
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
      let baseURL = process.env.LOCAL_ASSETS_URL;

      if (process.client && window.location.hostname != 'localhost') {
        baseURL = process.env.PRODUCTION_ASSETS_URL
      }

      return baseURL + url;
    },
  },

  mounted() {
    this.isMinDevice = isSmallDevice();

    $(window).resize(() => {
      this.isMinDevice = isSmallDevice();
    });
  },
}