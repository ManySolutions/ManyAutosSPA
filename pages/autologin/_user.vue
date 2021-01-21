<template>
  <div>
    Redirecting you...
  </div>
</template>
<script>
import { autologin } from '~/api/user';
import { mapActions } from 'vuex';
import toastr from 'toastr';

export default {
  mounted() {
    const {signature, redirect_url} = this.$route.query;
    const {user} = this.$route.params;

    if (!redirect_url) redirect_url = '/';
    
    autologin(user, signature).then(res => {
      console.log('res autologib', res);
      const { status, access_token, user } = res;

      if (!status) {
        toastr.error('Unable to login, please try again later');
        return;
      }

      toastr.success('You have been successfully logged in');
      this.authorize({ accessToken: access_token, user});
      setTimeout(() => window.location.href=redirect_url, 300);
    })
    .catch((err) => {
      if (err >= 400) {
        toastr.error('Incorrect user details, please try again later');
      }
    })
  },

  methods: {
    ...mapActions('user', ['authorize']),

  }
}
</script>