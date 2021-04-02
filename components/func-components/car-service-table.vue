<template>
  <v-card 
    class='table-pricing-car p-0'
    elevation="2"
  >
    <v-sheet color="#f6faff" class='tbp-heading px-3 px-md-7'>
      <v-row class='' align-content="center">
        <v-col cols=4 md=6 class='text-primary py-6 px-2 px-md-3'>
          <h3 class='heading__title m-0 line-height-none'>
            <span class='font-weight-300'>What's <span class='d-none d-md-inline-block'>Included</span> in</span> 
            <span class='d-md-block'>Car Servicing?</span>
          </h3>
        </v-col>
        <v-col cols=4 md=3 class='text-center tbp-imp py-6 px-2 px-md-3'>
          Full <br class='d-sm-none'> Service
          <br>
          <v-chip color='primary darken-2 px-1 px-md-3 font-weight-600' small>
            <v-icon small class='mr-md-2' color='yellow'>mdi-star</v-icon>
            Popular <span class='d-none d-md-inline-block'>Service</span>
          </v-chip>
        </v-col>
        <v-col cols=4 md=3 class='text-center py-6 px-2 px-md-3'>
          Interim <br class='d-sm-none'> Service
        </v-col>
      </v-row>
    </v-sheet>
    <template
      v-for='(item, itemI) in items'
    >
      <v-sheet 
        class='tbp-row px-3 px-md-7'
        :key='itemI'
        :color='itemI % 2 == 0 ? `#fbfcfd` : `white`'
      >
        <v-row>
          <v-col cols=4 md=6 class=' py-6 px-2 px-md-3 tbp-name'>
            {{item.text}}
          </v-col>
          <v-col cols=4 md=3 class='text-center py-6 px-2 px-md-3 tbp-imp-row'>
            <v-img src='/logo-icon.png' max-height=30 contain v-if='item.full'></v-img>
          </v-col>
          <v-col cols=4 md=3 class='text-center py-6 px-2 px-md-3'>
            <v-img src='/logo-icon.png' max-height=30 contain v-if='item.interim'></v-img>
          </v-col>
        </v-row>
      </v-sheet>
    </template>
    <v-sheet 
      class='tbp-footer px-3 px-md-7'
      color='#f7fbff'
    >
      <v-row class='btn-content-font-small'>
        <v-col cols=4 md=6 class=' py-6 px-2 px-md-3'></v-col>
        <v-col cols=4 md=3 class='text-center py-6 px-2 px-md-3 tbp-imp-foot-row'>
          <span class='d-block tbp-price'>
            <item-price 
              id='FULL_SERVICE'
              @see-pricing='handleInvalidReg(`FULL_SERVICE`)'
            ></item-price>
          </span>
          <btn-add-service
            color='secondary'
            :small='isDevice.xs'
            id='FULL_SERVICE'
            :price='``'
            title='Full Service'
            @invalid-reg='handleInvalidReg(`FULL_SERVICE`)'
            :openRegForm="false"
            ref='FULL_SERVICE'
            @added='handleAdded'
            cls='px-0 px-sm-3'
          >
            Book <span class='d-none d-md-block'>&nbsp;Full Service</span>
            <template #added>Added</template>
          </btn-add-service>
          <full-details-popup></full-details-popup>
        </v-col>
        <v-col cols=4 md=3 class='text-center py-6 px-2 px-md-3'>
          <span class='d-block tbp-price'>
            <item-price 
              id='INTERIM_SERVICE'
              @see-pricing='handleInvalidReg(`INTERIM_SERVICE`)'
            ></item-price>
          </span>
          <btn-add-service
            color='secondary'
            :small='isDevice.xs'
            id='INTERIM_SERVICE'
            :price='``'
            title='Interim Service'
            @invalid-reg='handleInvalidReg(`INTERIM_SERVICE`)'
            :openRegForm="false"
            ref='INTERIM_SERVICE'
            @added='handleAdded'
            cls='px-0 px-sm-3'
          >
            Book <span class='d-none d-md-block'>&nbsp;Interim Service</span>
            <template #added>Added</template>
          </btn-add-service>
          <interim-details-popup></interim-details-popup>
        </v-col>
      </v-row>
    </v-sheet>

    <reg-dialog
      :active='regDialog'
      has-no-redirect
      @success='handleSuccessReg'
      @close='regDialog = false'
    ></reg-dialog>

    <v-dialog
      v-model='cartDialog'
      max-width="400px"
    >
      <client-only>
        <desktop-cart></desktop-cart>
      </client-only>
    </v-dialog>
  </v-card>
</template>
<script>
import RegDialog from '~/layouts/include/reg-dialog.vue'
import BtnAddService from './btn-add-service.vue'
import DesktopCart from './desktop-cart.vue'
import ItemPrice from './item-price.vue'
import FullDetailsPopup from '~/components/func-components/full-details-popup.vue'
import InterimDetailsPopup from '~/components/func-components/interim-details-popup.vue'
export default {
  components: { BtnAddService, ItemPrice, RegDialog, DesktopCart, FullDetailsPopup, InterimDetailsPopup },
  data: () => ({
    items : [
      {text: 'Maintenance Check', interim: true, full: true},
      {text: 'Engine oil and oil filter', interim: true, full: true},
      {text: 'Brake fluid and power steering fluids (top up)', interim: true, full: true},
      {text: 'Air filter', interim: false, full: true},
      {text: 'Visually inspect condition of HT leads', interim: false, full: true},
      {text: 'Check coolant systems', interim: false, full: true},
      {text: 'Check engine cooling fan', interim: false, full: true},
      {text: 'Visually inspect radiator and coolant pipes', interim: false, full: true},
    ],
    regDialog: false,
    cartDialog: false,
    clicked: null,
  }),
  methods: {
    handleInvalidReg(clicked) {
      this.regDialog = true;
      this.clicked = clicked;
    },

    handleSuccessReg() {
      this.regDialog = false;
      
      if (this.clicked == 'FULL_SERVICE') {
        this.$refs.FULL_SERVICE.$el.click();
      } else {
        this.$refs.INTERIM_SERVICE.$el.click();
      }
    },

    handleAdded() {
      this.cartDialog = true;
    }
  },
}
</script>

<style lang="scss" scoped>
.tbp-imp {
    background: #00b4d8;
    border-radius: 10px 10px 0px 0px;
    color: white;
    font-weight: bold;
    margin-top: -10px;
}
.tbp-imp-row {
    border-left: 3px solid #00b4d8;
    border-right: 3px solid #00b4d8;
}
.tbp-heading {
  font-weight: 600;
}
.tbp-imp-foot-row {
    border-left: 3px solid #00b4d8;
    border-right: 3px solid #00b4d8;
    border-bottom: 3px solid #00b4d8;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: -4px;
}

.tbp-price {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;

    ~ a {
        font-size: 10px;
    }

    @media (min-width:768px) {
      font-size: 30px;
      ~ a {
        font-size: 17px;
      }
    }
}

@media (max-width: 550px) {
  .heading__title {
    font-size: 17px;
  }
}
@media (max-width: 340px) {
  .heading__title {
    font-size: 15px;
  }
  .tbp-name {
    font-size: 13px;
  }
  .btn-content-font-small ::v-deep {
    .v-btn__content {
      font-size: 11px;
    }
    .primary--text {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
</style>