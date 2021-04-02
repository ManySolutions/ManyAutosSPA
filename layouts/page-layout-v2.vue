<template>
  <div class="page static-page home-sec-gaps pt-0 pb-0" :class="cls">
    <div class="static-page-heading" style="">
      <template v-if="headingBg || headingBgStatic">
        <div
          class="bg-heading-overlay"
          :style="`background-image: url(&quot;${
            headingBgStatic || assets(headingBg)
          }&quot;);`"
        ></div>
        <img :src="headingBgStatic" :alt="title" class="d-none" />
      </template>

      <v-container>
        <v-row justify="center" align='center'>
          <v-col cols=12 lg=6 xl=4>
            <h1>{{ subTitle || title }}</h1>
            <h4 v-if="subHeading" class='page-sub-heading'>{{ subHeading }}</h4>
            <div v-if='headingImg' class='text-center d-none d-lg-block'>
              <img :src="headingImg" :alt="title" class='page-heading-img'>
            </div>
            <div class='d-lg-block d-none'>
              <base-info-icons></base-info-icons>
            </div>
          </v-col>
          <v-col cols=12 lg=5 xl=4>
            <car-reg-form-card :title='boxTitle || "Book with us now"'></car-reg-form-card>
            <div class='d-lg-none'>
              <base-info-icons></base-info-icons>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div class="slantdiv"></div>
    </div>
    <!-- /top landing section -->


    <v-container>
      <v-row>
        <v-col cols=12 lg=11 xl=9>
          
          <slot name='overview'></slot>
          <!-- /page overview -->

          <v-row v-if='faqs' justify="center" align='center'>
            <v-col cols=12 v-if='faqTopic'>
              <h2 class='page-h2 text-center' style="text-transform:capitalize;">
                {{ faqTopic }}
              </h2>
            </v-col>
            <v-col cols=12 md=6>
              <div 
                v-for='(faq, faqI) in faqs' :key='faqI'
                class='page-faq'
              >
                <h4 class='text-primary'>{{ faq.title }}</h4>
                <p v-html='faq.content'></p>
              </div>
              <!-- <NuxtLink v-if='moreFaqUrl' :url='moreFaqUrl'>
                <strong>View More</strong>
              </NuxtLink> -->
            </v-col>
            <v-col cols=12 md=6>
              <v-card elevation="2" class='faq-right-reg'>
                <v-card-text>
                  <v-card-title class='text-center d-block'>
                    <strong v-html='boxTitle'></strong>
                  </v-card-title>
                  <car-reg-form large has-no-bg fullwidth></car-reg-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- /page faqs -->

          <v-row class='page-default-sec'>
            <v-col>
              <slot></slot>
            </v-col>
          </v-row>
          <!-- /default slot -->

          <v-row class='page-blog'>
            <v-col 
              v-if="hasSlot('blog')"
              cols=12 lg=8
              class=''
              order-lg='2'
            >
              <h2 
                v-if='blogTopic' 
                class='page-h2  mt-0 pt-0' 
                style="text-transform:capitalize;"
              >
                {{ blogTopic }}
              </h2>
              
              <slot name='blog'></slot>
            </v-col>
            <v-col cols=12 lg=4 class='' order-lg="1">
              <v-card v-if='listMenu' outlined class='list-fixed-height d-none d-lg-block'>
                <v-card-text>
                  <div>
                    <ul class="list-group list-inline list-group-flush">
                      <li 
                        v-for='(item, itemI) in listMenu' :key='itemI'
                        class="list-group-item"
                      >
                        <NuxtLink :to="item.url" v-html='item.title'></NuxtLink>
                      </li>
                    </ul>
                  </div>
                </v-card-text>
              </v-card>
              <v-card class='page-reg-sticky'>
                <v-card-text>
                  <v-card-title class='text-center d-block'>
                    <strong v-html='boxTitle'></strong>
                  </v-card-title>
                  <car-reg-form large has-no-bg fullwidth></car-reg-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- /page blog -->

          <div class="mt-15" v-if='hasServicePages'>
            <h4 class='mb-3'>Popular Services</h4>
            <v-card outlined>
              <v-card-text>
                <v-row>
                  <v-col 
                    v-for='(service, serviceI) in carServicePages' 
                    :key='serviceI'
                    cols=12 sm=6 md=4 lg=3
                    class='py-1'
                  >
                    <NuxtLink 
                      :to='service.url'
                      class='p-0'
                    >
                      {{ service.title }}
                    </NuxtLink>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <!-- /service pages list -->

          <div class="mt-10" v-if='hasLocationPages'>
            <h4 class='mb-3'>Popular Locations</h4>
            <v-card outlined>
              <v-card-text>
                <v-row>
                  <v-col 
                    v-for='(location, locationI) in serviceLocationPages' 
                    :key='locationI'
                    cols=12 sm=6 md=4 lg=3
                    class='py-1'
                  >
                    <NuxtLink 
                      :to='location.url'
                      class='p-0'
                    >
                      {{ location.title }}
                    </NuxtLink>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <!-- /location pages list -->

          <div class="mt-10" v-if='hasRepairPages'>
            <h4 class='mb-3'>Popular Car Repairs</h4>
            <v-card outlined>
              <v-card-text>
                <v-row>
                  <v-col 
                    v-for='(repair, repairI) in carRepairPages' 
                    :key='repairI'
                    cols=12 sm=6 md=4 lg=3
                    class='py-1'
                  >
                    <NuxtLink 
                      :to='repair.url'
                      class='p-0'
                    >
                      {{ repair.title }}
                    </NuxtLink>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <!-- /repair pages repair list -->

        </v-col>
      </v-row>
    </v-container>

    <div class='mt-15 page-bottom-reg'>
      <car-reg-form has-bg-image large :title='boxTitle'></car-reg-form>
    </div>

    <client-only>
      <cart-bar></cart-bar>
    </client-only>

  </div>
</template>

<script>
import $ from 'jquery';
import BaseInfoIcons from '~/components/base-components/base-info-icons.vue'
import blogSocialLinks from "~/components/func-components/blog-social-links.vue"
import CarRegFormCard from '~/components/func-components/car-reg-form-card.vue'
import CarRegForm from '~/components/func-components/car-reg-form.vue'
import { carServicePages, serviceLocationPages, carRepairPages } from '@/utils/vars';
import CartBar from '~/components/func-components/cart-bar.vue';

export default {
  
  data: () => ({
    carServicePages, serviceLocationPages, carRepairPages
  }),
  components: { blogSocialLinks, CarRegFormCard, BaseInfoIcons, CarRegForm, CartBar },
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
    subHeading: String,
    headingImg: String,
    boxTitle: String,
    listMenu: [Array, Object],
    faqs: [Array, Object],
    moreFaqUrl: String,
    faqTopic: String,
    blogTopic: String,
    redirectTo: String,
    hasLocationPages: {
      type: Boolean,
      default: true,
    },
    hasServicePages: {
      type: Boolean,
      default: true,
    },
    hasRepairPages: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    this.$store.commit('settings/SET_REDIRECT', {
      referrer: 'car-reg',
      to: this.redirectTo
    });
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

    .static-page-heading {
      padding: 30px 15px;
      background: rgb(69 90 100);
      color: white;
      padding-top: 90px;

      h1 {
        // font-size: 28px;
        text-align: center;
        position: relative;
        font-size: 28px;
        font-weight: 600;
        @media (min-width: 960px) {
          font-size: 38px;
        }
      }

      & + div {
        padding-top: 30px;
        position: relative;
      }
    }
  }
}

.page.static-page {
  .static-page-heading {
    position: relative;
    padding-bottom: 80px;
    padding-top: 20px;
    @media (min-width: 960px) {
      padding-bottom: 140px;
      padding-top: 100px;
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
  .page-sub-heading {
    color: white;
    position: relative;
    font-weight: 300;
    font-size: 21px;
    text-align: center;
  }
  .page-heading-img {
    position: relative;
    max-height: 260px;
    text-align: center;
    margin: 30px auto;
  }
}

.page-h2 {
  font-weight: 300;
  font-family: 'Open Sans';
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 50px;
}

.page-blog h2:not(.page-h2) {
  margin-top: 40px;
  margin-bottom: 17px;
  font-size: 27px;
  font-family: 'Open Sans', sans-serif;
  color: #00b4d8;
}

.page-faq {
    margin-bottom: 40px;
}

::v-deep {
  .reg-form-sec {
    padding-top: 0px;
  }
  .page-bottom-reg .reg-form-sec {
    padding-top: 40px;
  }
  .v-card__title {
    color: #2f2f2f;
    margin-bottom: 5px;
    padding-bottom: 0px;
    word-break: break-word;
  }
}

.page-blog {
  padding-top: 60px;
  position: relative;
}

.page-reg-sticky{
  position: sticky;
  top: 30px;
  margin-top: 30px;
}

.list-fixed-height {
    // height: calc(100vh);
    max-height: 700px;
    overflow: auto;
}

.faq-right-reg {
    max-width: 530px;
    margin: auto;
}
</style>