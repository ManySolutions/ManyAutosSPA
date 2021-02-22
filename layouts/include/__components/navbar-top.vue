<template>
  <v-container 
    fluid
    class='py-0'
  >
    <v-row
      class=''
    >
      <v-col 
        cols=5
        sm=9
        align-self="center"
      >
        <v-btn
          text
          color='primary'
          class='text-capitalize mr-3'
          :to="isAuth ? '/my/referral' : '/refer-a-friend'"
          elevation="0"
        >
          <v-icon
            dark
            class='mr-2'
            color='primary darken-1'
          >
            mdi-account-cash-outline
          </v-icon>
          <span class="text-small font-weight-600">
            {{ isAuth ? 'Refer & Earn £10 Now' : 'Refer a Friend & Earn £10' }} 
          </span>
        </v-btn>
        <v-btn
          text 
          color='primary'
          class='text-capitalize d-none d-md-inline-flex'
          to="/car-repair-during-covid-19"
          elevation="0"
        >
          <v-icon
            dark
            class='mr-2'
            color='primary darken-1'
          >
            mdi-virus-outline
          </v-icon>
          <span class="text-small font-weight-600">
            {{ 'Covid19 Installment Plan' }} 
          </span>
        </v-btn>
      </v-col>
      <v-col
        cols=5
        sm=3
        class='text-right top-social'
      >
        <v-btn
          text 
          color='teal'
          class='px-0'
          href='tel:01189876300'
        >
          <v-icon 
            dark
            class='mr-sm-2'
            color='teal darken-1'
          >
            mdi-phone-classic
          </v-icon>
          <span class="text-large d-none d-sm-inline-block">
            01189 876300
          </span>
        </v-btn>
      </v-col>
    </v-row>
    <!-- /navbar top -->
  </v-container>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['isAuth']),
  }  
}
</script>

<style lang="scss" scoped>
.text-large {
  font-size: 18px;
}
.instagram {
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
.top-social {
  .v-icon.v-icon {
    font-size: 29px;
  }
}

</style>