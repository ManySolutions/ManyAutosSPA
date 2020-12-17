<template>
  <div>
    <v-btn
      color="secondary"
      dark
      fixed
      bottom
      right
      fab
      @click='drawer = true'
    >
      <v-badge
        color="primary"
        overlap
        :content="cartCount"
        :value="cartCount"
        offset-x="0"
        offset-y="0"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
    >
      <v-card
        elevation="0"
      >
        <v-card-title>
          Your services list
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th class='text-center'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='(item, i) in items'
                  :key='i'
                >
                  <td>
                    {{ item.name }}
                  </td>
                  <td>
                    {{ currencySymbol }}
                    {{ item.price }}
                  </td>
                  <td class='text-center'>
                    <v-btn
                      color='error'
                      small
                      icon
                    >
                      <v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color='secondary'
            block large
            dark
          >
            <strong>
              Book now
            </strong>
            <v-icon
              right
              dark
            >
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { getCartInstance } from '~/api/cart';

export default {
  data: () => ({
    drawer: false,
    items: [
      {
        name: 'MOT',
        price: '20.00'
      },
      {
        name: 'Interim Service',
        price: '120.00'
      },
      {
        name: 'Oil and Gas',
        price: '34.00'
      },
      {
        name: 'Full service',
        price: '134.00'
      },
    ],
    currencySymbol: process.env.CURRENCY_SYMBOL
  }),

  computed: {
    ...mapState('booking', ['cart', 'modelId']),

    ...mapGetters('booking', ['cartCount']),
  },

  watch: {
    drawer(drawer) {
      if (!drawer) return;

      this.fetch();
    }
  },

  mounted() {

  },

  methods: {
    fetch() {
      getCartInstance(this.modelId, this.cart)
        .then(res => {
          console.log('res', res);
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>