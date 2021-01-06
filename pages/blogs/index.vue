<template>
  <page-layout
    title="Blogs"
    heading-bg="customer-v2/static-pages/registergarages.jpg"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4" xl="3"
         v-for="(blog, i) in blogs"
              :key="i">
          <v-card class="mx-auto my-12 text-center" max-width="374">           
            <v-img
              height="250"
              :src="blog.img"
              :alt='blog.title'
            >
            </v-img>
            <h2 class="online-title pt-5" style="font-weight: 400">
             {{blog.title}}
            </h2>
            <v-card-text>
              <div>
             {{blog.excerpt}}
              </div>
            </v-card-text>
            <div class="online-btn text-center">
            <v-btn
            color="primary"
            large
            :to='blog.url'
            class="btn mb-5"
            >
            Read More
            </v-btn>
            </div>          
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>

<script>
import PageLayout from "@/layouts/page-layout";
const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
  },

  data () {
    return {
      blogs: [
        {
          title:'Basic Causes of Overheating and How They Should be Handled',
          excerpt:'You get stuck in the middle of the road in the summer season, your car starts overheating and you have no clue what to do about it. That is a nightmare nobody wants...',
          img: 'https://static.manyautosltd.com/uploads/basic-causes-of-overheating-and-how-they-should-be-handled.jpg',
          url: '/blogs/basic-causes-of-overheating-and-how-they-should-be-handled'  
        },
         {
          title:'Symptoms That Indicate your Fuel or Water Pump Needs Replacing',
          excerpt:'Pumps can be a delicate part of the vehicle. Their maintenance is necessary for the car to run smoothly. You need to listen carefully for any weird sounds made by the engine...',
          img: 'https://static.manyautosltd.com/uploads/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing.jpg',
          url: '/blogs/symptoms-that-indicate-your-fuel-or-water-pump-needs-replacing'  
        }

      ]
    }

  },

  head: {
    title: "Blogs",

     meta: [
      {
        name: 'description', 
        content: 'Now you can get in depth knowledge for safe and smooth car repair services & online car garages. Browse and learn everything about vehicle diagnostics with solution.'
      },
      {
        name: 'keywords', 
        content: 'abs pump, car repair servicing, mot booking, vehicle repair service, oil filter, fuel pump, brake service, air suspension, thermostat housing, wheel cylinder'
      },
      {
        property: "og:title", 
        content: "Blogs"
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
        content: "Now you can get in depth knowledge for safe and smooth car repair services & online car garages. Browse and learn everything about vehicle diagnostics with solution."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Blogs"
      },
      {
        name: "twitter:description", 
        content: "Now you can get in depth knowledge for safe and smooth car repair services & online car garages. Browse and learn everything about vehicle diagnostics with solution."
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
  },
};
</script>

<style lang="scss" scoped>
</style>