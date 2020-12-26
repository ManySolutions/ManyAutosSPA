<template>
    <div>
    <v-app-bar
      color="blue-grey darken-2"
      dense
      dark
    >

      <v-toolbar-title><img 
            :src="assets('/customer-v2/logo-default.png')" 
            :alt="appTitle"
            class='logo'
            @click='$router.push("/")'
          ></v-toolbar-title>

      <v-spacer></v-spacer>

     
      <v-menu
        offset-y
      >
    <template v-slot:activator="{ on, attrs }">
        <h5
          v-bind="attrs"
          v-on="on"
        >
        <v-icon
         right
         >
          mdi-menu-down
         </v-icon>
          Car Services
        </h5>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to='item.url'
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
       <v-menu
        offset-y
      >
    <template v-slot:activator="{ on, attrs }">
        <h5
          v-bind="attrs"
          v-on="on"
        >
        <v-icon
         right
         >
          mdi-menu-down
         </v-icon>
          Car Repair
        </h5>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in carItems"
          :key="index"
          :to='item.url'
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
        <div class="links">
           <h5><NuxtLink class="link-child" to="/mot">MOT</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/how-it-works">How It Works?</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/service-booking">Book A Service </NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/about">About Us</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/contact">Contact Us</NuxtLink></h5>
       </div>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'app-bar',

  data: () => ({
     items: [
        {title: 'Audi Car Service', url: '/audi-service'},
        {title: 'BMW Car Service', url: '/BMW-service'},
        {title: 'Citroen Car Service', url: '/citroen-service'},
        {title: 'Daewoo Car Service', url: '/daewoo-service'},
        {title: 'Fiat Car Service', url: '/fiat-service'},
        {title: 'View More...', url: '/'},
      ],
      carItems: [
        {title: 'Abs Controllers', url: '/abs-controllers'},
        {title: 'Abs Hydraulic Units', url: '/abs-hydraulic-units'},
        {title: 'Abs Pump', url: '/abs-pump'},
        {title: 'Abs Ring', url: '/abs-ring'},
        {title: 'Abs Sensor', url: '/abs-sensor'},
        {title: 'View More...', url: '/'},
      ],
   
    })
  }
 
</script>

<style lang="scss" scoped>
.logo {
  max-width: 100%;
  max-height: 37px;
  cursor: pointer;
}
.links {
    display: contents;
}
.links .link-child{
    font-size: 13px;
    text-decoration: none;
}
h5 {
    font-size: 13px;
    color: #00b4d8;
    margin: 8px;
}
.v-icon{
    color: #00b4d8;
}
</style>