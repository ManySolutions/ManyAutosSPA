<template>
  <v-navigation-drawer
    v-model="open"
    absolute
    left
    temporary
  >
    <div
      class='main-menu'
      :class='activeChild ? "hide-main-menu" : ""'
    >
      <template v-for='(item,i) in menu'>
        <div 
          :key='i'
          class='px-2'
        >
          <v-btn
            :to='item.url'
            color='default'
            exact-active-class="primary--text"
            text
            block
            class='text-capitalize text-left my-1'
            large
            @click="item.children ? handleGetChildren(i) : ''"
          >
            <span class='w-100 font-weight-600'>
              {{ item.title }}
            </span>
            <v-icon v-if='item.children'>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <!-- <v-divider :key='i' v-if='i < menu.length - 1'></v-divider> -->
      </template>
    </div>

    <div
      class='child-menu'
      :class='activeChild ? "show-child-menu" : ""'
    >
      <v-btn
        color='primary'
        text
        block
        large
        class='text-capitalize text-left my-1 justify-start'
        @click='activeChild = null'
      >
        <v-icon>mdi-chevron-left</v-icon>
        <span class='ml-3'>
          {{ activeChildName }}
        </span>
      </v-btn>
      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="secondary white--text pl-4"
        >
          <v-list-item
            v-for='(child,i) in activeChildMenu'
            :key='i'
            :to='child.url'
          >
            <v-list-item-title>
              <strong>
                {{child.title}}
              </strong>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },

  data: () => ({
    open: false,
    group: null,
    menu: [
      {title: 'Home', url: '/'},
      {title: 'Car MOT Tests', url: '/mot'},
      {title: 'How it Works?', url: '/how-it-works'},
      {title: 'Book a Service', url: '/service-booking'},
      {title: 'Car Full Service', url: '/service-booking'},
      {title: 'Car Interim Service', url: '/service-booking'},
      {title: 'Car Services in UK', url: null, children: [
        {title: 'Audi Car Service', url: '/audi-car-service'},
      ]},
      {title: 'Car Repair in UK', url: null, children: [
        {title: 'Audi Car Service', url: '/audi-car-service'},
      ]},
      {title: 'About Us', url: '/about'},
      {title: 'Contact Us', url: '/contact'},
    ],
    activeChild: null,
  }),

  computed: {
    activeChildName() {
      return this.activeChild
        ? this.menu[this.activeChild].title
        : null;
    },

    activeChildMenu() {
      return this.activeChild
        ? this.menu[this.activeChild].children
        : null;
    }
  },

  watch: {
    isOpen(isOpen) {
      this.open = isOpen;
    },

    open(open) {
      if (!open) this.$emit('close');
    }
  },

  mounted() {
    this.open = this.isOpen;
  },

  methods: {
    handleGetChildren(index) {
      this.activeChild = index;
    }
  },
}
</script>

<style lang="scss" scoped>
.main-menu {
  transition-duration: .3s;
  transition-delay: .4s;
  width: 100%;
  &.hide-main-menu {
    transition-duration: .4s;
    position: relative;
    margin-left: -260px;
  }
}
.child-menu {
  z-index: -1;
  opacity: 0;
  position: absolute;
  width: 100%;
  transform: scale(.9);
  transition-duration: .3s;
  &.show-child-menu {
    display: block;
    opacity: 1;
    transition-duration: .6s;
    transition-delay: .5s;
    z-index: 1;
    transform: scale(1);
  }
}
::v-deep {
  .v-navigation-drawer__content {
    display: flex;
  }
}
</style>