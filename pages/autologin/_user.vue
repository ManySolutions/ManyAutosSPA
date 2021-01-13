<template>
  <div>
    Redirecting you...
  </div>
</template>
<script>
import { autologin } from '~/api/user';

export default {
  mounted() {
    const {signature} = this.$route.query;
    const {user} = this.$route.params;
    
    autologin(user, signature).then(res => {
      console.log('res is ', res);
    })
  } 
}
</script>