<template>
  <div class="company-service-sec w-100 pt-16 pb-16">
    <v-container>
      <v-row>
        <v-col cols="12" class="both-service-sec text-center">
          <h2 
            class="index-heading" 
            v-html='title || "Our Services"'
          ></h2>
          <p class='pb-8'>
            We are capable of fixing both foreign and domestic vehicles.<br />
            We offer MOT, car services and repairs all at one place.
          </p>
        </v-col>
      </v-row>
      <v-row class="inner-text-row" justify="center">
        <v-col 
          cols="12" sm="6" lg=6 order-sm='2' 
          class='p-0'
        >
          <v-card 
            class='full-card px-sm-8'
            color='green lighten-5'
            tile
            elevation=0
          >
            <v-list-item-title class="headline mb-1 px-3 pt-10 text-left">
              <!-- <i class="text-primary ico-ma-breakdown"></i> -->
              <h3 class="pb-3">
                Full Service
              </h3>
              <h5 class="pb-3">Starting from</h5>
              <p class='secondary--text pricing'>
                <small v-html='currencySymbol'></small>79.99
              </p>
            </v-list-item-title>
            <v-list-item three-line class='pb-7'>
              <v-list-item-content>
                <div class="inner-text">
                  <ul class='list-style-none'>
                    <li>
                      <v-icon color="secondary"> mdi-check-bold </v-icon>
                      <span>70 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon color="secondary"> mdi-check-bold </v-icon>
                      <span>Drive and Test</span>
                    </li>
                    <li>
                      <v-icon color="secondary"> mdi-check-bold </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions class='px-3 pb-10 text-center'>
              <v-btn
                color='secondary'
                title='Full Service'
                large
                @click='handleClick(`FULL_SERVICE`)'
                class='px-10'
              >
                Get Your Quote
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
          cols="12" sm="6" lg=6 order-sm='1' 
          class='p-0'
        >
          <v-card 
            class='full-card px-sm-8'
            color='#f5f5f5'
            tile
            elevation=0
          >
            <v-list-item-title class="headline mb-1 px-3 pt-10 text-left">
              <!-- <i class="text-primary ico-ma-breakdown"></i> -->
              <h3 class="pb-3">
                Interim Service
              </h3>
              <h5 class="pb-3">Starting from</h5>
              <p class='primary--text pricing'>
                <small v-html='currencySymbol'></small>59.99
              </p>
            </v-list-item-title>
            <v-list-item three-line class='pb-7'>
              <v-list-item-content>
                <div class="inner-text">
                  <ul class='list-style-none'>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>50 point vehicle checks</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span> Oil and Oil Filter</span>
                    </li>
                    <li>
                      <v-icon color="primary"> mdi-check-bold </v-icon>
                      <span>Collection and Delivery</span>
                    </li>
                  </ul>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions class='px-3 pb-10 text-center'>
              <v-btn
                color='primary'
                title='Full Service'
                large
                @click='handleClick(`INTERIM_SERVICE`)'
                class='px-10'
              >
                Get Your Quote
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols=12 class='text-center'>
          <nuxt-link class='d-inline-block mt-10' to='/car-service'>
            Read More »
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import BtnAddService from '~/components/func-components/btn-add-service.vue';
export default {
  props: {
    title: String,
  },
  components: {
    BtnAddService,
  },

  methods: {
    handleClick(param) {
      this.$store.commit('booking/TOGGLE_REG_DIALOG', true);
      
      this.$store.commit('settings/SET_REDIRECT', {
        to: '/booking/create/mot-and-servicing#' + param,
        referrer: 'car-reg'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.company-service-sec .both-service-sec p {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 32px;
  margin-top: 34px;
  color: #777;
}
.company-service-sec h5 {
  color: #333;
  font-weight: 500;
}
.company-service-sec .inner-text-row .inner-text {
  font-size: 14px;
  line-height: 24px;
  color: #777;
  // text-align: center;
}
@media (max-width: 768px) {
  .company-service-sec .interim-sec {
    margin-top: 55px;
    text-align: center;
  }
}
.company-service-sec ul {
  list-style-type: none;
  max-width: 295px;
  // margin: auto;
  padding-top: 15px;
  display: block;
  text-align: left;
  padding-left: 0;
}

.inner-text-row .v-card {
  // max-width: 320px;
  margin: auto;
}

.headline i.text-primary {
    font-size: 44px;
}
.headline > h3 {
    font-size: 32px;
    text-transform: uppercase;
}
// .full-card {
//   transform: scale(1.1);
// }
p.pricing {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 42px;
}
</style>
