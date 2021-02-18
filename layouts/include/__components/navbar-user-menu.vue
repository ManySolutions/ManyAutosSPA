<template>
  <div>
    <v-btn
      v-if='desktopView && !isAuth'
      text
      :color='colorFirst'
      class='px-3'
      @click='""'
    >
      <v-icon 
        dark
        class=''
        :size="size"
      >
        mdi-account-circle
      </v-icon>
      <span class="text-large ml-2">
        <span class='top-text'>Welcome</span>
        <span class='top-text'>
          <NuxtLink to="/login">Login</NuxtLink>
          |
          <NuxtLink to="/register">Create</NuxtLink>
        </span>
      </span>
    </v-btn>

    <v-menu offset-y v-else open-on-hover >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          dark
          large
          class='px-3'
          style='min-width: auto'
          v-bind="attrs"
          v-on="on"
        >
          <v-icon :size="size">
            mdi-account-circle
          </v-icon>
          <span class='ml-2 text-capitalize' v-if='isAuth && desktopView'>
            Hi, {{info.f_name}}
          </span>
        </v-btn>
      </template>
      <v-list v-if='isAuth'>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="{name: item.url}"
          exact
          exact-active-class="text-primary"
        >
          <v-icon v-if='item.icon' small class='mr-2'>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="handleLogout()">
          <v-list-item-title>
            <v-icon small class='mr-2'>mdi-logout</v-icon>  
            {{ 'Logout' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-card
        v-else
        elevation='0'
      >
        <v-card-text>
          <v-btn
            block
            color='primary'
            text
            class='text-capitalize'
            :to='{name: "login"}'
          >
            Login
          </v-btn>
          <v-divider class='my-2'></v-divider>
          <v-btn
            block
            color='secondary'
            text
            class='text-capitalize'
            :to='{name: "register"}'
          >
            Create new account
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { logoutUser } from '~/api/user';

export default {
  props: {
    desktopView: Boolean
  },
  data: () => ({
    size: '30px',
    colorFirst: 'white',
    colorSecond: 'primary',

    items: [
      {
        name: 'All Bookings',
        url: 'my-booking'
      },
      {
        name: 'Refer a friend',
        url: 'my-referral'
      },
      {
        name: 'Your Earnings',
        url: 'my-referral-overview'
      },
    ],
  }),

  computed: {
    ...mapState('user', ['info', 'roles'])
  },

  mounted() {
    this.setContentAdminMenu();
  },

  methods: {
    ...mapActions('user', ['logout']),

    handleLogout() {
      logoutUser(this.http).then(res => {
        this.logout();
        window.location.reload();
      })
    },

    setContentAdminMenu() {
      if ( this.roles && !this.roles.includes('content-admin') )
        return;

      this.items.push(
        {name: 'Manage Blogs', url: 'apps-content-admin-blogs-list', icon: 'mdi-table-of-contents'}
      )
    }
  }
}
</script>

<style lang="scss" scoped>
span.top-text {
    display: block;
    font-size: 13px;
    text-align: left;
}
</style>