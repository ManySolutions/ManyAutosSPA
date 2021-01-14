<template>
  <div>
    <v-app-bar 
      color="blue-grey darken-2" 
      dark
      elevation="3"
    >
      <v-toolbar-title
        ><img
          :src="assets('customer-v2/logo-default.png')"
          :alt="appTitle"
          class="logo"
          @click="$router.push('/')"
      />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <template v-for='(menu, i) in navbarMenu'>
        <v-menu
          v-if='menu.children'
          offset-y
          :key='i'
          open-on-hover
          eager
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              text 
              color=primary 
              class='text-capitalize font-weight-600'
              v-bind="attrs" 
              v-on="on"
            >
              {{ menu.title }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(child, index) in menu.children"
              :key="index"
              :to="child.url"
            >
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          v-else
          :text='!menu.btn'
          :color='menu.color || `primary`'
          :key='i'
          :to='menu.url'
          class='text-capitalize font-weight-600'
          :rounded='menu.rounded'
          :plan='menu.plan'
          :small='menu.small'
          :elevation="menu.elevation"
        >
          <v-icon v-if='menu.icon' small class='mr-2' color='primary'>{{menu.icon}}</v-icon>
          <span class='primary--text'>{{ menu.title }}</span>
        </v-btn>
      </template>
      <navbar-user-menu></navbar-user-menu>
    </v-app-bar>
  </div>
</template>

<script>
import navbarUserMenu from "./navbar-user-menu.vue"

export default {
  components: { navbarUserMenu },
  data: () => ({
    navbarMenu: [
      { 
        title: "Covid19 Car Repair", 
        url: "/car-repair-during-covid-19", 
        btn: true,
        rounded: true, 
        icon: 'mdi-alert-decagram-outline',
        small: false,
        color: 'blue-grey darken-1',
        elevation: 0,
      },
      { title: "Car Services", url: "#", children: [
        { title: "Audi Car Service", url: "/audi-service" },
        { title: "BMW Car Service", url: "/BMW-service" },
        { title: "Citroen Car Service", url: "/citroen-service" },
        { title: "Daewoo Car Service", url: "/daewoo-service" },
        { title: "Fiat Car Service", url: "/fiat-service" },
        { title: "View All Services...", url: "/sitemap#car-services" },
      ] },
      { title: "Car Repairs", url: "#", children: [
        { title: "Abs Controllers", url: "/abs-controllers" },
        { title: "Abs Hydraulic Units", url: "/abs-hydraulic-units" },
        { title: "Abs Pump", url: "/abs-pump" },
        { title: "Abs Ring", url: "/abs-ring" },
        { title: "Abs Sensor", url: "/abs-sensor" },
        { title: "View All Repairs...", url: "/sitemap#car-repairs" },
      ] },
      { title: "MOT", url: "/mot" },
      { title: "How It Works?", url: "/how-it-works" },
      { title: "Book A Service", url: "/service-booking" },
      { title: "Blogs", url: "/blogs" },
      // { title: "About Us", url: "/about" },
    ]
  }),
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 100%;
  max-height: 45px;
  cursor: pointer;
  position: relative;
  top: 3px;
}
</style>