<template>
  <v-sheet
    color="#0046e2" 
    dark
    elevation="3"
  >
    <v-container class='p-0 navbar-top-container'>
      <v-row>
        <v-col class='p-0'>
          <v-app-bar 
            color="#0046e2" 
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
                    color='white' 
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
                color="white"
                :key='i'
                :to='menu.url'
                class='text-capitalize font-weight-600'
                :rounded='menu.rounded'
                :plan='menu.plan'
                :small='menu.small'
                :elevation="menu.elevation"
              >
                <v-icon v-if='menu.icon' small class='mr-2' color='white'>{{menu.icon}}</v-icon>
                <span class='white--text'>{{ menu.title }}</span>
              </v-btn>
            </template>
<!-- for upper btn <span>:color='menu.color || `white`'</span> -->
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
      { title: "Home", url: "/" },
      { title: "MOT", url: "/mot" },
      { title: "How It Works?", url: "/how-it-works" },
      { title: "Book A Service", url: "/service-booking" },
      { title: "About Us", url: "/about" },
    ],
    socials: [
      {
        icon: 'mdi-facebook', 
        url: 'https://www.facebook.com/manyautos.co.uk',
        color: 'transparent'
      },
      {
        icon: 'mdi-instagram', 
        url: 'https://www.instagram.com/manyauto/',
        color: 'transparent'
      },
      {
        icon: 'mdi-twitter', 
        url: 'https://twitter.com/manyautos',
        color: 'transparent'
      },
       {
        icon: 'mdi-youtube', 
        url: 'https://www.youtube.com/channel/UCj5peOCn-mwfKkOplGkrD4w',
        color: 'transparent'
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