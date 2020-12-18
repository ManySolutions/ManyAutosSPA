<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex';
import http from '~/utils/http';

export default {
  computed: {
    ...mapState('user', ['accessToken']),
  },

  watch: {
    accessToken(accessToken) {
      this.setAccessTokenForHttp(accessToken);
    }
  },

  mounted() {
    this.setAccessTokenForHttp(this.accessToken);
  },

  methods: {
    setAccessTokenForHttp(accessToken) {
      if (!accessToken) return ;

      http.interceptors.request.use(config => {
        config.headers.common['Authorization'] = 'Bearer ' + accessToken
        return config;
      });
    }
  }
}
</script>