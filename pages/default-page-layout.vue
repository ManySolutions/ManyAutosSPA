<template>
  <page-layout
    title='Default Page Layout'
    heading-bg='customer-v2/static-pages/service.jpg'
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
    title: 'About Us',

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
        content: "About Us | ManyAutos LTD"
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
        content: "About Us | ManyAutos LTD"
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