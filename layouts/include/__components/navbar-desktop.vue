<template>
  <v-sheet
    color="blue-grey darken-2" 
    dark
    elevation="3"
  >
    <v-container class='p-0 navbar-top-container'>
      <v-row>
        <v-col class='p-0'>
          <v-app-bar 
            color="blue-grey darken-2" 
            dark
            elevation="0"
          >
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
                    :key="i + index"
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

            <v-spacer></v-spacer>

            <v-btn
              v-for='(social, j) in socials'
              :key='j + 100'
              elevation='0'
              style='min-width: 0px'
              class='px-2 mr-2'
              :href='social.url'
              target="_blank"
              :color='social.color' 
              dark
            >
              <v-icon v-text='social.icon'></v-icon>
            </v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>

export default {
  data: () => ({
    navbarMenu: [
      // { 
      //   title: "Refer & Earn Online", 
      //   url: "/refer-a-friend", 
      //   btn: true,
      //   rounded: true, 
      //   icon: 'mdi-alert-decagram-outline',
      //   small: false,
      //   color: 'blue-grey darken-2',
      //   elevation: 0,
      // },
      { title: "Home", url: "/" },
      { title: "Car Services", url: "/car-service" },
      { title: "Car Repairs", url: "/car-repairs" },
      // { title: "Car Services", url: "#", children: [
      //   { title: "Audi Car Service", url: "/audi-service" },
      //   { title: "BMW Car Service", url: "/BMW-service" },
      //   { title: "Citroen Car Service", url: "/citroen-service" },
      //   { title: "Daewoo Car Service", url: "/daewoo-service" },
      //   { title: "Fiat Car Service", url: "/fiat-service" },
      //   { title: "View All Services...", url: "/sitemap#car-services" },
      // ] },
      // { title: "Car Repairs", url: "#", children: [
      //   { title: "Abs Controllers", url: "/abs-controllers" },
      //   { title: "Abs Hydraulic Units", url: "/abs-hydraulic-units" },
      //   { title: "Abs Pump", url: "/abs-pump" },
      //   { title: "Abs Ring", url: "/abs-ring" },
      //   { title: "Abs Sensor", url: "/abs-sensor" },
      //   { title: "View All Repairs...", url: "/sitemap#car-repairs" },
      // ] },
      { title: "Book MOT", url: "/mot" },
      { title: "Check MOT History", url: "/check-mot-history" },
      { title: "Car Diagnostics", url: "/car-diagnostics" },
      { title: "How It Works?", url: "/how-it-works" },
      { title: "Blogs", url: "/blogs" },
      // { title: "About Us", url: "/about" },
    ],
    socials: [
      {
        icon: 'mdi-facebook', 
        url: 'https://www.facebook.com/manyautos.co.uk',
        color: 'blue darken-1'
      },
      {
        icon: 'mdi-instagram', 
        url: 'https://www.instagram.com/manyauto/',
        color: 'red darken-1'
      },
      {
        icon: 'mdi-twitter', 
        url: 'https://twitter.com/manyautos',
        color: 'blue darken-3'
      },
       {
        icon: 'mdi-youtube', 
        url: 'https://www.youtube.com/channel/UCj5peOCn-mwfKkOplGkrD4w',
        color: 'red darken-1'
      },
    ]
  }),

  mounted() {}
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
.navbar-top-container {
  @media (min-width: 1264px) and (max-width: 1904px) {
    max-width: 1585px;
  }
}
</style>