<template>
  <page-layout
    title="Blogs"
    heading-bg="customer-v2/static-pages/registergarages.jpg"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card class="mx-auto my-12 text-center" max-width="374">
            <div 
              v-for="(blog, i) in blogs"
              :key="i"
            >
            <v-img
              height="250"
              :src="blog.img"
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
            </div>
            <div class="online-btn text-center">
            <v-btn
            color="primary"
            large
            to="/blogs/overheating-blog"
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
          excerpt:'You get stuck in the middle of the road in the summer season, your car starts overheating and you have no clue what to do about it. That is a nightmare nobody wants',
          img: '~/static/imgs/pickup.jpg'     
        }
      ]
    }

  },

  head: {
    title: "Blogs",

    meta: [],
  },
};
</script>

<style lang="scss" scoped>
</style>