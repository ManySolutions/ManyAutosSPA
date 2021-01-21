<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color='primary'
      dark
      class="navbar-custom"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Garage Panel
          </v-list-item-title>
          <v-list-item-subtitle>
            London Garage
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color='white'
      flat
      outlined
      class='app-bar-custom'
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">
          <img src="/assets/frontend/logo-n-dark.png" alt="logo" width='100'>
        </span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
      >
        asdfsadfadf
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>

<style lang="scss" scoped>
.app-bar-custom ::v-deep .v-toolbar__content{
  border-bottom: 1px solid #e4e4e4;
}
</style>