<template>
<v-container>
  <v-row class="total-row mx-auto text-center">
    <v-col cols="12" md="3" class="referral-card mx-auto my-auto">
  <v-card
    class="mx-auto
    d-none d-md-block"
    width="256"    
    tile
  >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
                mdi-account
            </v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <referral-links></referral-links>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</v-col>
 <!-- section 2 -->
<!-- <v-col cols="12" class="user-button
d-flex d-md-none">
<v-card
      class="mx-auto"
      width="100%"
    >
      <v-list>
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title class="title">
              User
            </v-list-item-title>
          </template>
          <referral-links></referral-links> 
        </v-list-group>
      </v-list>
    </v-card>
</v-col> -->

 <!-- section 2 -->

    <v-col col="12" sm="4" md="3">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
    <h3>Total Referrals</h3>
    </v-col>
    <v-col cols="12" sm="4" md="3">
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>
    <h3>Active Referrals</h3>
    </v-col>
    <v-col cols="12" sm="4" md="3">
    <v-progress-circular
      :rotate="90"
      :size="100"
      :width="15"
      :value="value"
      color="red"
    >
      {{ value }}
    </v-progress-circular>
    <h3>Completed Referrals</h3>
    </v-col>
    <v-row>
      <v-col cols="12" class="amount-row text-center mt-10">
      <span>
        <v-text>Your payable amount is <strong>£95</strong></v-text>
      </span>
      <span>
        <v-btn color='primary' to="/" class='mb-2 text-capitalize'>Claim Now</v-btn>
      </span>
    </v-col>
    </v-row>
  </v-row>
</v-container>
</template>
<script>
import ReferralLinks from "~/pages/__components/referral-links.vue";
  export default {
    components:{
      ReferralLinks,
    },
    data () {
      return {
        interval: {},
        value: 14,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      // this.interval = setInterval(() => {
      //   if (this.value === 100) {
      //     return (this.value = 0)
      //   }
      //   this.value += 10
      // }, 1000)
    },
  }
</script>
<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
v-text{
  font-size: 25px;
}
h3{
  font-weight: 600;
}
@media (min-width: 768px){
  v-text{
    margin-right: 20px;
  }
}
@media (max-width: 600px){
  .v-btn:not(.v-btn--round).v-size--default {
    margin-top: 20px;
}
}
.wrap-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
}
</style>>
