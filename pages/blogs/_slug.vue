<template>
  <page-layout
    :title='req.title'
    :headingBgStatic='req.img'
    has-share-button
    :hasQuoteButton="false"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols=12 md="8" xl=6>
          <div v-html='req.description'></div>
        </v-col>
        <v-col cols=12 md=4 xl=3>
          <div>
            <div class="taggbox-container" style=" width:100%;height:100%;overflow: auto;margin-bottom:30px;">
              <div class="taggbox-socialwall" data-wall-id="52496" view-url="https://widget.taggbox.com/52496"> </div>
              <script src="https://widget.taggbox.com/embed.min.js" type="text/javascript"></script>
            </div>
          </div>
          <v-card elevation="2" class='card-sticky'>
            <v-card-title>
              Book your service now
              <small>
                {{ req.box_tagline || 'Book your car MOT, service, repair or diagnostics.' }}
              </small>
            </v-card-title>
            <v-card-text>
              <car-reg-form large has-no-bg fullwidth></car-reg-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>

<script>
import CarRegForm from '~/components/func-components/car-reg-form.vue';
import pageLayout from '~/layouts/page-layout.vue'
export default {
  components: { pageLayout, CarRegForm },
  
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

<style lang="scss" scoped>
::v-deep {
  h2 {
    font-size: 31px;
    font-weight: 500;
    margin-bottom: 15px;
    margin-top: 45px;
    font-family: 'Open Sans', sans-serif;
  }
  .reg-form-sec {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    .col-12 {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
  .card-sticky {
    position: sticky;
    top: 30px;
    max-width: 90%;
    margin: auto;
    .v-card__title {
      font-weight: 600;
      small {
        font-weight: 400;
        font-size: 15px;
        line-height: initial;
      }
    }
  }
}
</style>