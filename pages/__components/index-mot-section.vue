<template>
  <div class="w-100 mot-section pt-15 pb-15">
    <div class="mot-section-img">
      <v-container>
        <v-row>
          <v-col cols="12" class="mot-service-sec text-center">
            <h2 class="mot-service-heading">
              Get your MOT done with us
            </h2>
            <div class="text-center m-auto">
              <v-img
                src="https://static.manyautosltd.com/uploads/mot-01.png"
                max-width="150px"
                class="m-auto"
              >
              </v-img>
            </div>
            <div class="mot_price mt-8">
              Book your MOT now only for 
              <strong class='primary--text'>
                {{ currencySymbol }}<strong>34.44</strong>
              </strong>
            </div>
            <div class="free_col_del mt-2 mb-8">
              Free collection and delivery nationwide.
            </div>
            <div class="text-center">
              <v-btn color="secondary" x-large class="mt-5 mr-4 px-5" @click='handleClick'>
                Book&nbsp;<strong>MOT</strong>&nbsp;Now
              </v-btn>
              <br>
              <nuxt-link to='/check-mot-history' class='mt-2 d-inline-block'>
                Want to check your MOT history?
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit('settings/SET_REDIRECT', {
        to: '/booking/create/mot-and-servicing',
        referrer: 'car-reg'
      });

      this.$store.commit('booking/TOGGLE_REG_DIALOG', true);
    }
  }
};
</script>
<style lang="scss" scoped>
.mot-section {
  background: #fff8f8db;
}
.mot-section .mot-service-sec .mot-service-heading {
  text-transform: capitalize;
  font-size: 45px;
  line-height: 54px;
  font-weight: 500;
  color: #333;
}
.mot-section .mot-service-sec-two .mot-service-heading-two {
  text-transform: capitalize;
  font-size: 45px;
  line-height: 54px;
  font-weight: 500;
  color: #333;
  margin-top: 70px;
}

.mot-section .mot-service-sec .mot-service-heading::after {
  display: block;
  content: "";
  background: #00b4d8;
  width: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 2px;
}
.mot-section .mot-service-sec .mot_price {
  font-size: 36px;
  text-align: center;
  font-weight: 300;
  line-height: 1.5;
}
.mot-section .mot-service-sec .mot_test {
  font-size: 34px;
  text-align: center;
  font-weight: 300;
  line-height: 1.5;
}
.mot-section .mot-service-sec .free_col_del {
  font-size: 30px;
  text-align: center;
  font-weight: 300;
  margin: 0;
  line-height: 1.5;
}
</style>