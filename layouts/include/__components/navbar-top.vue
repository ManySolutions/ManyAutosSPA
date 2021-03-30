<template>
  <v-sheet color='#33434a'>
    <v-container 
      fluid
      class='py-0'
    >
      <v-row
        class=''
      >   
        <v-col
          cols=6
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
              color='white'
            >
              mdi-phone-classic
            </v-icon>
            <span class="text-large">
              01189 876300
            </span>
          </v-btn>
        </v-col>
      </v-row>
      <!-- /navbar top -->
    </v-container>
  </v-sheet>
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