<template>
  <div class="page static-page" :class='cls'>
    <div class="static-page-heading" style=''>
      <template v-if='headingBg'>
        <div 
          class="bg-heading-overlay" 
          :style='`background-image: url("${assets(headingBg)}");`'
        ></div>
      </template>
      <h1>{{ title }}</h1>
      <div class="slantdiv"></div>

      <template v-if='hasQuoteButton'>
        <div class="heading-button-container">
          <v-btn
            color='secondary'
            large
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
  </div>
</template>

<script>
export default {
  props: {
    headingBg: String,
    hasQuoteButton: {
      default: true,
      type: Boolean,
    },
    title: String,
    cls: String,
  },
}
</script>

<style lang="scss" scoped>
.page {
  &.static-page {
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
      // @media(min-width: $lg) {
      //   padding-top: 110px;
      //   padding-bottom: 60px;
      // }

      h1 {
        font-size: 28px;
        text-align: center;
        // @media(min-width: $lg) {
        //   font-size: 34px;
        // }
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
    .slantdiv {
      background: #f8fafc;
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
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>