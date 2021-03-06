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
            :text='!item.btn'
            :color='item.color || `default`'
            :rounded='item.rounded'
            :plan='item.plan'
            :small='item.small'
            :elevation="item.elevation"
            exact-active-class="primary--text"
            block
            class='text-capitalize text-left my-1'
            large
            @click="item.children ? handleGetChildren(i) : ''"
          >
            <span class='w-100 font-weight-600'
              :class='item.textColor ? `${item.textColor}--text` : ``'
            >
              <v-icon v-if='item.icon' small class='mr-2' :color='item.textColor || `default`'>
                {{item.icon}}
              </v-icon>
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
      {title: 'Book Car MOT', url: '/mot'},
      {title: 'Check MOT History', url: '/check-mot-history'},
      {title: 'Book Your Car Service', url: '/car-service'},
      {title: 'Book Your Car Repair', url: '/car-repairs'},
      {title: 'Book Car Diagnostics', url: '/car-diagnostics'},
      {title: 'All Car Services', url: null, children: [
        {title: 'Audi Car Service', url: '/audi-service'},
        {title: 'BMW Car Service', url: '/BMW-service'},
        {title: 'Citroen Car Service', url: '/citroen-service'},
        {title: 'Daewoo Car Service', url: '/daewoo-service'},
        {title: 'Fiat Car Service', url: '/fiat-service'},
        {title: 'Ford Car Service', url: '/ford-service'},
        {title: 'Honda Car Service', url: '/honda-service'},
        {title: 'Kia Car Service', url: '/kia-service'},
        {title: 'Land Rover Car Service', url: '/land-rover-service'},
        {title: 'Lexus Car Service', url: '/lexus-service'},
        {title: 'View More...', url: '/sitemap#car-services'},
      ]},
      {title: 'All Car Repairs', url: null, children: [
        {title: 'Abs Controllers', url: '/abs-controllers'},
        {title: 'Abs Hydraulic Units', url: '/abs-hydraulic-units'},
        {title: 'Abs Pump', url: '/abs-pump'},
        {title: 'Abs Ring', url: '/abs-ring'},
        {title: 'Abs Sensor', url: '/abs-sensor'},
        {title: 'Abs ', url: '/abs'},
        {title: 'Air Filter Replacement', url: '/air-filter-replacement'},
        {title: 'Air Suspension', url: '/air-suspension'},
        {title: 'Aldershot', url: '/aldershot'},
        {title: 'Alternator', url: '/alternator'},
        {title: 'View More...', url: '/sitemap#car-repairs'},
      ]},
      {title: 'How it Works?', url: '/how-it-works'},
      {title: 'Blogs', url: '/blogs'},
      { 
        title: "Refer & Earn Online", 
        url: "/refer-a-friend", 
        btn: true,
        rounded: true, 
        icon: 'mdi-alert-decagram-outline',
        small: true,
        color: 'grey lighten-4',
        elevation: 0,
        textColor: 'primary'
      },
      { 
        title: "Covid19 Installment Plan", 
        url: "/car-repair-during-covid-19", 
        btn: true,
        rounded: true, 
        icon: 'mdi-alert-decagram-outline',
        small: true,
        color: 'grey lighten-4',
        elevation: 0,
        textColor: 'primary'
      },
      // {title: 'Contact Us', url: '/contact'},
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
    transition-delay: .2s;
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