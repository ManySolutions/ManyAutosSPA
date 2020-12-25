<template>
  <v-menu offset-y>
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
        <v-icon>
          mdi-account-circle
        </v-icon>
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
</template>

<script>
import { mapActions } from 'vuex';
import { logoutUser } from '~/api/user';

export default {
  data: () => ({
    items: [
      {
        name: 'All Bookings',
        url: 'my-booking'
      },
    ],
  }),

  methods: {
    ...mapActions('user', ['logout']),

    handleLogout() {
      logoutUser(this.http).then(res => {
        this.logout();
        window.location.reload();
      })
      
    }
  }
}
</script>