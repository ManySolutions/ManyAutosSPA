<template>
  <div class="page static-page home-sec-gaps pt-0" :class='cls'>  
    <div class="static-page-heading" style=''>
      <template v-if='headingBg || headingBgStatic'>
        <div 
          class="bg-heading-overlay" 
          :style='`background-image: url("${headingBgStatic || assets(headingBg)}");`'
        > 
          </div>
        <img :src="headingBgStatic" :alt="title" class='d-none'>
      </template>
      
      <h1>{{ subTitle || title }}</h1>
      <div class="slantdiv"></div>
  
      <template v-if='hasQuoteButton'>
        <div class="heading-button-container">
          <v-btn
            color='secondary'
            large
            to='/service-booking'
          >
            <span class="">{{ 'Get an instant Quote' }}</span>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </template>
    </div>

    <slot></slot>

    <client-only v-if='hasShareButton'>
      <blog-social-links></blog-social-links>
    </client-only>
    
  </div>
</template>

<script>
import blogSocialLinks from "~/components/func-components/blog-social-links.vue"

export default {
  
   data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'MOT Check',
          disabled: false,
          to: {name: 'mot-car-check'},
        },
        {
          text: 'FORD Details',
          disabled: true,
          to: {name: 'car-mot-details'},
        },
      ],
    }),

  components: { blogSocialLinks },
  props: {
    headingBg: String,
    headingBgStatic: String,
    hasQuoteButton: {
      default: true,
      type: Boolean,
    },
    title: String,
    subTitle: String,
    cls: String,
    hasShareButton: Boolean,
  },
  
  head: {
    titleTemplate: '%s | ManyAutos LTD',
  },
}
</script>

<style lang="scss" scoped>
.page {
  &.static-page {
    > .container > .row {
      justify-content: center;
    }
    .panel-heading {
      background: whitesmoke;
      border: 1px solid #ececec;
      padding: 10px 20px;
    }
    
    .panel-heading a {
      font-size: 15px;
    }
    
    .panel-collapse {
      padding: 20px 20px;
      background: #fbfbfb;
    }
    
    .panel-group {
      padding-bottom: 40px;
    }

    .ma-page-right-side .cms-card-section:not(:last-child) {
      margin-bottom: 30px;
    }

    // .card-body.cms-card-image.blog-sidebar-cta {
    //   color: #fff;
    //   background-color: #0068ac;
    //   background-image: url('/assets/customer-v2/brake-banner.png');
    //   display: block;
    //   max-width: 100%;
    //   height: auto;
    // }

    .static-page-heading {
      padding: 30px 15px;
      background: rgb(69 90 100);
      color: white;
      padding-top: 90px;

      h1 {
        font-size: 28px;
        text-align: center;
        position: relative;
        @media (min-width: 960px) {
          font-size: 38px;
        }
      }

      & + div {
        padding-top: 30px;
      }
    }
  }
}


.page.static-page {
  .static-page-heading {
    position: relative;
    padding-bottom: 120px;
    padding-top: 50px;
    @media (min-width: 960px) {
      padding-bottom: 200px;
      padding-top: 110px;
    }
    
    .slantdiv {
      background: #ffffff;
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: skew(0deg, -2deg) translate(0px, 46px);
    }
  }
  .heading-button-container {
    bottom: 35px;
    position: absolute;
    width: 100%;
    text-align: center;
    .btn {
      border-radius: 30px;
    }
  }
  .bg-heading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #455a64de;
    }
  }
}
</style>