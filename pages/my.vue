<template>
  <NuxtChild/>
</template>

<script>
export default {
  mounted() {
    if (!this.isAuth) {
      this.$router.push({ name: 'index' });
    }
  }
}
</script>