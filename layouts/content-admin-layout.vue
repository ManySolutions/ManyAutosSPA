<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color='blue darken-1'
      dark
      class="navbar-custom"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Content Admin Panel
          </v-list-item-title>
          <v-list-item-subtitle>
            John Doe
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <template
          v-for="(item, k) in items"
        >
          <v-list-group
            v-if='item.children && item.children.length'
            :key="k"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
            color='white'
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.children"
              :key="child.title"
              link
              :to='"/apps/content-admin" + child.url'
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item
            v-else
            :key="k"
            link
            :to='"/apps/content-admin" + item.url'
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
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
          <img src="https://app.manyautosltd.com/assets/customer-v2/logo-default-dark.png" alt="logo" width='180'>
        </span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container
        fluid
      >
        <nuxt></nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/' },
          { title: 'Blogs', icon: 'mdi-view-dashboard', children: [
            { title: 'View All', url: '/blogs/list' },
            { title: 'Create New', url: '/blogs/create' },
            { title: 'Trash', url: '/blogs/trash' },
          ] },
        ],
        right: null,
      }
    },

    computed: {
      ...mapGetters('user', ['isContentAdmin'])
    },

    created() {
      if (!this.isContentAdmin)
        return this.$router.push('/')
    }
  }
</script>

<style lang="scss" scoped>
.app-bar-custom ::v-deep .v-toolbar__content{
  border-bottom: 1px solid #e4e4e4;
}
</style>