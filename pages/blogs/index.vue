<template>
  <page-layout
    title="Blogs"
    heading-bg="customer-v2/static-pages/registergarages.jpg"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4" xl="3"
         v-for="(blog, i) in req.data"
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
              :to='`/blogs/${blog.slug}`'
              class="btn mb-5"
              >
              Read More
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <!-- /.col blogs -->

        <v-col cols=12>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="req.pagination.last_page"
              :total-visible="7"
              @input='handlePageChange'
            ></v-pagination>
          </div>
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
      page: 1,
    }
  },

  async asyncData({ query, $axios }) {
    const {page} = query;
    const req = (await $axios.get(
      process.env.API_URL 
      + 'customer/list/blogs?page=' 
      + (page || 1)
    )).data;
    
    return { req }
  },

  watch: {
    async $route(to) {
      const {page} = to.query;
      const req = (await this.$axios.get(
        process.env.API_URL 
        + 'customer/list/blogs?page=' 
        + (page || 1)
      )).data;
      
      this.req = req;
    }
  },

  computed: {
  },

  mounted() {
    this.page = parseInt(this.$route.query.page) || 1;
  },

  methods: {
    handlePageChange(page) {
      this.$router.push('/blogs?page='+page);
    }
  },

  head: {
    title: "Blogs",

     meta: [
      {
        hid: 'description', name: 'description', 
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
        hid: 'og:description',  property: 'og:description', 
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