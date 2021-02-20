<template>
  <v-container>
    <v-row justify="center">
      <v-col v-if='$device.isDesktop' cols=12 md=4 lg=3 xl=2>
        <v-card
          height="400"
          width="256"
          class="mx-auto"
        >
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-icon>
                <v-icon x-large>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ 'Hi, '+ (info ? info.name : '') }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ 'Navigation' }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in menus"
                :key="item.title"
                link
                :to='item.url'
                exact
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col cols=12 md=8>
        <NuxtChild/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    menus: [
      {title: 'Bookings List', url: '/my/booking'},
      {title: 'Refer A Friend', url: '/my/referral'},
      {title: 'Your Earnings', url: '/my/referral/overview'},
    ]
  }),

  computed: {
    ...mapState('user', ['info'])
  },

  mounted() {
    if (!this.isAuth ) {
      this.$router.push({ name: 'login', query: {
        path: this.$route.path
      } });
    }
  },

  watch: {
    isAuth(isAuth) {
      if (!isAuth) {
        this.$router.push({ name: 'login', query: {
          path: this.$route.path
        } });
      }
    }
  },
}
</script>