import $ from 'jquery';
import { mapState, mapGetters } from 'vuex';
import { isSmallDevice } from '~/utils/helpers';
import http from '~/utils/http';

export default {
  data: () => ({
    appTitle: 'Many Autos LTD',
    currencySymbol: process.env.CURRENCY_SYMBOL,
    isMinDevice: false,
    isDevice: {
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    },
    winSize: null,
    apiUrl: process.env.API_URL,
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
    winSize(winSize) {
      this.isDevice = {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
      };

      let newSizes = {};

      if (winSize >= 600) {
        newSizes = {...newSizes, sm: true};
        if (winSize >= 960) {
          newSizes = {...newSizes, md: true};
          if (winSize >= 1264) {
            newSizes = {...newSizes, lg: true};
            if (winSize >= 1904) {
              newSizes = {...newSizes, xl: true};
            }
          }
        }
      } else {
        newSizes = {...newSizes, xs: true};
      }

      this.isDevice = {...this.isDevice, ...newSizes};
    }
  },

  methods: {
    assets(url) {
      return process.env.ASSETS_URL + url;
    },

    hasSlot(slot) {
      return !!this.$slots[slot] || !!this.$scopedSlots[slot];
    }
  },

  mounted() {
    if (process.client) {
      this.isMinDevice = isSmallDevice();
      this.winSize = window.innerWidth;

      $(window).resize(() => {
        this.winSize = window.innerWidth;
        this.isMinDevice = isSmallDevice();
      });
    }
  },
}