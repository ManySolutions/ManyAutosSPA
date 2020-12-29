<template>
  <NuxtChild/>
</template>

<script>
export default {
  mounted() {
    if (!this.isAuth ) {
      this.$router.push({ name: 'login', query: {
        path: this.$route.path
      } });
    }
  },

  watch: {
    isAuth(isAuth) {
      if (!isAuth) {
        this.$router.push({ name: 'login', query: {
          path: this.$route.path
        } });
      }
    }
  }
}
</script>