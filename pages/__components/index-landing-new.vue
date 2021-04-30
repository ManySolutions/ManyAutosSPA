<template>
  <v-sheet :color='sheetBg' class='h-section-outer'>
    <v-container fluid class='h-section'>
      <div class='hs--text'>
        <h1 
          v-html='headingText' 
          class='white--text'
          :class='$route.query.offer ? `has-offer` : ``'
        ></h1>
        <h4 class='white--text'>
          Free collection and delivery <br> on your next
          <base-text-slider :options="[
            'MOT', 'Full Service', 'Interim Service',
            'Car Repair', 'Diagnostics'
          ]"></base-text-slider>
        </h4>
        <div>
          <car-reg-form-card title=''></car-reg-form-card>
        </div>
      </div>
      <v-img 
        src='https://static.manyautosltd.com/uploads/car-service-img.png' 
        contain
        class='hs--img'
      ></v-img>
    </v-container>
  </v-sheet>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: () => ({
    rendered: false,
  }),
  computed: {
    ...mapState('settings', ['motPrice']),

    headingText() {
      const {offer} = this.$route.query;
      let redirect = null;
      let text = 'Save up to 60%, book your car repair now';

      if (offer == 'mot') {
        redirect = '/booking/create/mot-and-servicing';

        text = `Book your MOT <br /> for only 
          <span class='price secondary--text'>
            ${this.currencySymbol}
            <span>${this.motPrice}</span>
          </span>`;
      }
      if (offer == 'car-service') {
        redirect = '/booking/create/mot-and-servicing#FULL_SERVICE';

        text = `Book your car service, starting from 
          <span class='price secondary--text'>${this.currencySymbol}<span>59.99</span></span>`;
      }
      if (offer == 'car-repair') {
        redirect = '/booking/create/parts';

        text = `Book your next car repair with us now`;
      }

      if (redirect && !this.rendered) {
        this.$store.commit('settings/SET_REDIRECT', {
          referrer: 'car-reg',
          to: redirect
        });
      }
      
      this.rendered = true;

      return text;
    },

    sheetBg() {
      return 'primary darken-2';
      return this.isDevice.md 
        ? 'primary lighten-2' 
        : 'transparent'
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .text-sliding.text-slideshow {display: inline-block;}

  .text-sliding.text-slideshow li {
    font-weight: 700;
    font-size: 24px !important;
  }

  ul#sentence {
      padding: 0px !important;
      padding-top: 6px !important;
      position: relative;
      top: 12px;
      left: 5px;
  }

  .reg-card {
    width: 100% !important;
    padding: 20px 10px;
    @media (min-width: 768px) {
      padding: 20px 30px;
    }
    @media (min-width: 992px) {
      border: 1px solid #00b4d8;
    }
  }

  span.price span {
    font-size: 50px;
    @media (min-width: 768px) {
      font-size: 60px;
    }
    @media (min-width: 1250px) {
      font-size: 70px;
    }
  }

  .top-h-icons {
    max-width: 930px;
    .top-hi span {
      max-width: 180px;
    }
  }

  #textSlider li {
    color: #06d6a0;
  }
}

.container.h-section {
    min-height: 550px;
    height: calc(100vh - 120px);
    position: relative;
    // max-width: 1700px;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (min-width: 992px) {
      // height: auto;
    }
    @media (max-height: 720px) {
      min-height: 630px;
      height: auto;
    }
}

.hs--text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    padding: 0px 20px;
    z-index: 2;
    max-width: 420px;
    width: 100%;
    @media (min-width: 768px) {
      padding: 0px 30px;
      max-width: 540px;
    }
    @media (min-width: 992px) {
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      text-align: center;
      max-width: 1060px;
    }
    @media (max-height: 720px) {
      transform: none;
      top: 0;
      left: 0;
      position: relative;
      margin: auto;
    }
}

.hs--text h1 {
    line-height: initial;
    margin-bottom: 30px;
    font-size: 35px;
    @media (min-width: 768px) {
      font-size: 42px;
    }
    @media (min-width: 1250px) {
      font-size: 53px;
    }
}

.hs--text h4 {
    line-height: initial;
    margin-bottom: 30px;
    font-weight: 600;
    color: #565656;
    @media (min-width: 768px) {
      font-size:  20px;
    }
}
.hs--img {
  position: absolute;
  z-index: 1;
  top: 31%;
  width: 100%;
  opacity: 0.2;
  transform: translateY(-50%);
  max-height: 100%;
  @media (min-width: 992px) {
    // opacity: 0.3;
    // max-width: 670px;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  @media (min-width: 1250px) {
    max-width: 890px;
  }
  @media (min-width: 1400px) {
    max-width: 1090px;
  }
}

h1.has-offer {
  position: relative;
  font-weight: 700;

  // ::v-deep .price {
  //   // position: absolute;
  //   // text-shadow: 0px -1px 9px white;
  // }
}
</style>