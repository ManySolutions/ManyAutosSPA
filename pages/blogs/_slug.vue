<template>
  <page-layout
    :title='req.title'
    :headingBgStatic='req.img'
    has-share-button
  >
    <div class="container" style="padding-top: 70px;" v-html='req.description'></div>
  </page-layout>
</template>

<script>
import pageLayout from '~/layouts/page-layout.vue'
export default {
  components: { pageLayout },
  
  async asyncData({$axios, params}) {
    const req = (await $axios.get(`${process.env.API_URL}customer/list/blog/${params.slug}`)).data;

    return { req }
  },

  head() {
    const {req} = this;

    return {
      title: req.title,

      meta: [
        {
          hid: 'description', name: 'description', 
          content: req.meta_description
        },
        {
          name: 'keywords', 
          content: req.meta_keywords
        },
        {
          hid: 'og:title',
          property: "og:title", 
          content: req.title
        },
        {
          hid: 'og:type',
          property: "og:type", 
          content: "website"
        },
        {
          hid: 'og:url',
          property: "og:url", 
          content: process.env.APP_URL + '/blogs/' + this.$route.params.slug
        },
        {
          hid: 'og:image',
          property: "og:image", 
          content: req.img
        },
        {
          hid: 'og:site_name',
          property: "og:site_name", 
          content: "ManyAutos LTD"
        },
        {
          hid: 'og:description',  property: 'og:description', 
          content: req.meta_description
        },
        {
          name: "twitter:card", 
          content: "summary"
        },
        {
          name: "twitter:title", 
          content: req.title
        },
        {
          name: "twitter:description", 
          content: req.meta_description
        },
        {
          name: "twitter:image", 
          content: req.img
        },
        {
          itemprop: "image", 
          content: req.img
        },
        {
          hid:'og:type',
          property: "og:type", 
          content: "business.business"
        },
      ]
    }
  }
}
</script>