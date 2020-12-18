<template>
  <v-navigation-drawer
    v-model="open"
    absolute
    right
    temporary
  >
    <template v-if='isAuth'>
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >
          <v-list-item
            v-for='(item, i) in items'
            :key='i'
            :to="{name: item.url}"
            exact
            exact-active-class="text-primary"
          >
            <v-list-item-title>
              <strong>{{ item.name }}</strong>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </template>
    <template v-else>
      <v-btn
        color='primary'
        large
        block
      >
        <v-icon>mdi-login</v-icon>
        Login to your account
      </v-btn>
      <v-btn
        color='secondary'
        large
        block
      >
        <v-icon>mdi-signup</v-icon>
        Create your new account
      </v-btn>
    </template>

    <template #append>
      <div class="pa-2" v-if='isAuth'>
        <v-btn 
          block
          color='blue-grey darken-3'
          dark
        >
          <v-icon small class='mr-3'>mdi-logout</v-icon>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },

  data: () => ({
    open: false,
    items: [
      {
        name: 'All Bookings',
        url: 'my-booking'
      },
    ]
  }),

  mounted() {
    this.open = this.isOpen;
  },

  watch: {
    isOpen(isOpen) {
      this.open = isOpen;
    },

    open(open) {
      if (!open) this.$emit('close');
    }
  }
}
</script>