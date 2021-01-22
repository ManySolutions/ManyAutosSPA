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
        },
        {
          title:'Best Auto Repair Services Installment Plan During COVID 2021',
          excerpt:'It is a very rare sight to see the whole world experiencing something together. Covid-19 has affected all 7.8 billion lives equally. The only way to survive is if we get through this...',
          img: 'https://static.manyautosltd.com/uploads/best-auto-repair-services-installment-plan-during-covid-2021.jpg',
          url: '/blogs/best-auto-repair-services-installment-plan-during-covid-2021'  
        },
        {
          title:'6 Factors Show Why Our Garage Is The Best Option For You',
          excerpt:'It is a difficult thing to trust anyone with our valuables. It is even more when it comes to our most valuable possession, that is our cars. A lot of trusts is required to send your car...',
          img: 'https://static.manyautosltd.com/uploads/6-Factors-Show-Why-Our-Garage-Is-The-Best-Option-For-You.png',
          url: '/blogs/6-factors-show-why-our-garage-is-the-best-option-for-you'  
         },
        //  {
        //   title:'How to Find Car Repair and Maintenance Services Online',
        //   excerpt:'Purchasing a car is somewhat easy as you are aware of the features you want within it. The difficult part is to maintain your car due to the standard running costs. Buying it is...',
        //   img: 'https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online.jpg',
        //   url: '/blogs/how-to-find-car-repair-and-maintenance-services-online'  
        //  },
        //  {
        //   title:'Vehicle Parts That Require Maintenance Over Time to Run Smoothly',
        //   excerpt:'Each part of our car needs maintenance from time to time. Some parts have a shorter lifespan than the rest of the parts. They should be repaired and also replaced if...',
        //   img: 'https://static.manyautosltd.com/uploads/how-to-find-car-repair-and-maintenance-services-online.jpg',
        //   url: '/blogs/vehicle-parts-that-require-maintenance-over-time-to-run-smoothly'  
        //  },
        // {
        //   title:'Top 4 Fantastic Turn-Ups Necessary For Smooth And Safe Drive',
        //   excerpt:'We all know that the vehicle requires regular oil and filter change for it to run smoothly. But that is not the only thing it requires. Every part of your vehicle should be inspected...',
        //   img: 'https://static.manyautosltd.com/uploads/top-4-fantastic-turn-ups-necessary-for-smooth-and-safe-drive.jpg',
        //   url: '/blogs/top-4-fantastic-turn-ups-necessary-for-smooth-and-safe-drive'  
        // }
      ]
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