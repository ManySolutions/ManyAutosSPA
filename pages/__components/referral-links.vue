<template>
    <div>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
    </div>
</template>
<script>
export default {
    data:() => ({
      items: [
        { text: 'Your Bookings', icon: 'mdi-book-check' },
        { text: 'Your Referrals', icon: 'mdi-account-multiple' },
        { text: 'Logout', icon: 'mdi-logout' },
        ],
    }) 
}
</script>