<template>
  <page-layout
    title='Sitemap'
    heading-bg='customer-v2/static-pages/allpics/sitemap1.jpg'
  >
    your code here
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = 'window.location.href';

export default {
  components: {
    PageLayout
  },

  head: {
    title: 'Sitemap',

    meta: [
      {
        name: 'description', 
        content: 'Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300'
      },
      {
        name: 'keywords', 
        content: 'how it works, free collection and delivery, car service, repair, MOT, free collection, free delivery, collection and delivery, sitemap'
      },
      {
        property: "og:title", 
        content: "Sitemap | ManyAutos LTD"
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
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Sitemap | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
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