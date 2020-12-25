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
         left
         >
          mdi-arrow-down-drop-circle-outline
         </v-icon>
          Car Services In UK
        </h5>
        <h5
          v-bind="attrs"
          v-on="on"
        >
          Car Repair in UK
        </h5>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-cars
          v-for="(cars, Index) in carItems"
          :key="Index"
        >
          <v-list-cars-title>{{ cars.title }}</v-list-cars-title>
        </v-list-cars>
      </v-list>
      </v-menu>
        <div class="links">
           <h5><NuxtLink class="link-child" to="/">Car MOT Tests</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">How It Works?</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">Book A Service </NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">Car Full Service </NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">Car Interim Service</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">About Us</NuxtLink></h5>
           <h5><NuxtLink class="link-child" to="/">Contact Us</NuxtLink></h5>
       </div>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'app-bar',

  data: () => ({
     items: [
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      carItems: [
        { title: 'Click Me' },
        { title: 'Click Me 2' },
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
    font-size: 10px;
    text-decoration: none;
}
h5 {
    font-size: 10px;
    color: #00b4d8;
    margin: 3px;
}
</style>