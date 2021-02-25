<template>
  <page-layout
    title='Test'
    heading-bg='customer-v2/static-pages/registergarages.jpg'
  >
  <section class="intro-mot bg-light"
    style="background-image: url('https://static.manyautosltd.com/uploads/Final MOT status.png');">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="search-area">
            <header class="section-head">
              <h1>Check a car's <strong>MOT status </strong>&amp; <strong>MOT history</strong></h1>
              <h4></h4>
              <p>Wondering when your MOT due date is? Keen to check the MOT history of a car you’re buying? We’ve got
                you covered.</p>
            </header>
             <v-form class="myinput">
            <v-text-field label="Enter your Car reg" outlined></v-text-field>
            <div class="text-center button">
              <v-btn class="subscribe-btn" color="primary" dark x-large block>
                Check Mot & Details
              </v-btn>
            </div>
          </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
    <subscribe-popup></subscribe-popup>
    <request-quote-popup></request-quote-popup>
     <v-btn
            class="ma-2 mt-7"
            color="purple"
            target="_blank"
            @click="openWin();"
            dark
            small
            
        > 
        <v-icon
        class="fb-btn mr-2"
            dark
            left
            small
        >
            mdi-facebook

        </v-icon>
            Share on faceBook
      </v-btn>
  <ShareNetwork
    network="facebook"
    url="https://manyautosltd.com/blogs/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing"
  >
    Share on Facebook
</ShareNetwork>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';
import SubscribePopup from '~/components/func-components/subscribe-popup.vue';
import RequestQuotePopup from '~/components/func-components/request-quote-popup.vue';

const URL = 'window.location.href';

export default {
  components: {
    PageLayout,
    SubscribePopup,
    RequestQuotePopup,
  },
 methods: {
        
        openWin() {
            window.open("https://www.facebook.com/sharer/sharer.php?u=https://manyautosltd.com/blogs/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing", "myWindow", "width=200,height=100");
        },
        openWinTwo() {
            window.open("https://twitter.com/intent/tweet?url=https://www.manyautosltd.com&text=", "myWindow", "width=200,height=100");
        }
      },
  head: {
    title: 'Test',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.'
      },
      {
        name: 'keywords', 
        content: 'many autos ltd automotive service,car services,full car service,garage service'
      },
      {
        property: "og:title", 
        content: "Test | ManyAutos LTD"
      },
      {
        property: "og:type", 
        content: "website"
      },
      {
        property: "og:url", 
        content: URL
      },
      {
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Test | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
      },
      {
        name: "twitter:image", 
        content: "logo-default.png"
      },
      {
        itemprop: "image", 
        content: "logo-default.png"
      },
      {
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.intro-mot {
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #dddee0!important;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>