<template>
  <div class='navbar-container'>
    <navbar-top-v2></navbar-top-v2>
    <template v-if='$device.isDesktop && !isMobileSize'>
      <navbar-desktop></navbar-desktop>
    </template>
    <template v-else>
      <navbar-mobile></navbar-mobile>
    </template>
  </div>
</template>

<script>
import NavbarDesktop from './__components/navbar-desktop.vue';
import navbarMobile from './__components/navbar-mobile.vue';
import NavbarTop from './__components/navbar-top.vue';
import NavbarTopV2 from './__components/v2/navbar-top.vue';

export default {
  components: { navbarMobile, NavbarTop, NavbarTopV2, NavbarDesktop },

  data: () => ({

  }),

  computed: {
    isMobileSize() {
      if (this.winSize && !this.isDevice.lg)
        return true
      else 
        return false;
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-container {
  z-index: 2;
}
</style>