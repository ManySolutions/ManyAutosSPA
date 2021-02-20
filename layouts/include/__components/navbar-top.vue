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
        md=7
        align-self="center"
      >
        <!-- <v-btn
          text 
          color='teal lighten-6'
          class='pl-0 d-md-none'
          href='tel:01189876300'
        >
          <v-icon 
            dark
            class='mr-1'
          >
            mdi-cellphone-basic
          </v-icon>
          <span class="text-large">
            01189 876300
          </span>
        </v-btn> -->
        <v-btn
          text 
          color='primary lighten-6'
          class=' d-md-none px-2'
          to="/refer-a-friend"
          elevation="0"
          rounded
          small
        >
          <v-icon
            dark
            class='mr-1'
            small
          >
           mdi-alert-decagram-outline
          </v-icon>
          <span class="text-small font-weight-600">
            {{ isAuth ? 'Refer & Earn £10 Now' : 'Refer a Friend & Earn £10' }} 
          </span>
        </v-btn>
        <span class='d-none d-md-block'>
          <strong>COVID-19:</strong> Open for service, We are unaffected by lockdown
        </span>
      </v-col>
      <v-col
        class='text-right top-social'
      >
        <v-btn
          text 
          color='teal lighten-6'
          class='pl-0 d-none d-md-inline-flex'
          href='tel:01189876300'
        >
          <v-icon 
            dark
            class='mr-1'
          >
            mdi-cellphone-basic
          </v-icon>
          <span class="text-large">
            01189 876300
          </span>
        </v-btn>
        <v-btn
          text
          style='min-width: 0px'
          class='px-1 d-md-none'
          href='tel:01189876300'
        >
          <v-icon color='teal lighten-6'>
            mdi-cellphone-basic
          </v-icon>
        </v-btn>
        <!-- <v-btn
          text
          elevation='0'
          style='min-width: 0px'
          class='px-1'
          href='https://wa.me/+4401189876300'
          target="_blank"
        >
          <v-icon color='teal lighten-6'>
            mdi-whatsapp
          </v-icon>
        </v-btn> -->
        <v-btn
          text
          elevation='0'
          style='min-width: 0px'
          class='px-1'
          href='https://www.facebook.com/manyautos.co.uk'
          target="_blank"
        >
          <v-icon color='blue darken-1'>
            mdi-facebook-messenger
          </v-icon>
        </v-btn>
        <!-- <v-btn
          text
          elevation='0'
          style='min-width: 0px'
          class='px-1'
          href='https://www.instagram.com/manyauto/'
          target="_blank"
        >
          <v-icon color='red darken-1'>
            mdi-instagram
          </v-icon>
        </v-btn> -->
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