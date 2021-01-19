<template>
  <page-layout
    title='Test'
    heading-bg='customer-v2/static-pages/registergarages.jpg'
  >
    <subscribe-popup></subscribe-popup>
    <request-quote-popup></request-quote-popup>
     <v-btn
            class="ma-2 mt-7"
            color="purple"
            target="_blank"
            @click="openWin();"
            dark
            x-large
            block
        > 
        <v-icon
        class="fb-btn mr-2"
            dark
            left
            large
        >
            mdi-facebook

        </v-icon>
            Share on faceBook
      </v-btn>
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
            window.open("https://www.facebook.com/sharer/sharer.php?u=https://manyautosltd.com/blogs/basic-causes-of-overheating-and-how-they-should-be-handled", "myWindow", "width=200,height=100");
        },
        openWinTwo() {
            window.open("https://twitter.com/intent/tweet?url=https://www.manyautosltd.com&text=", "myWindow", "width=200,height=100");
        }
      },
  head: {
    title: 'Test',

    meta: [
      {
        name: 'description', 
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
        property: "og:description", 
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

</style>