<template>
  <div class='navbar-container'>
    <navbar-top></navbar-top>
    <navbar-mobile v-if='!isDevice.lg'></navbar-mobile>
    <navbar-desktop v-else></navbar-desktop>
  </div>
</template>

<script>
import NavbarDesktop from './__components/navbar-desktop.vue';
import navbarMobile from './__components/navbar-mobile.vue';
import NavbarTop from './__components/navbar-top.vue';

export default {
  components: { navbarMobile, NavbarTop, NavbarDesktop },

  data: () => ({

  }),
}
</script>

<style lang="scss" scoped>
.navbar-container {
  z-index: 2;
}
</style>