<template>
  <NuxtChild/>
</template>

<script>
export default {
  mounted() {
    if (!this.isAuth) {
      this.$router.push({ name: 'index' });
    }
  },

  watch: {
    isAuth(isAuth) {
      if (!isAuth) {
        this.$router.push({ name: 'index' });
      }
    }
  }
}
</script>