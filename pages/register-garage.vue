<template>
    <page-layout
    title='Register Your Garage'
    heading-bg='customer-v2/static-pages/registergarages.jpg'
  >
  <div>
    <v-container class="garage-network pt-10">
      <v-row class="justify-content-center" >
            <v-col cols="12" md="6">  
           <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h3 class="register-title text-center pt-5 mb-10"
              style="font-size:1.75rem; font-weight:300;"
              >
                Register Here
              </h3>
              <v-text-field 
                label="Garage Name" 
                placeholder="Your Garage Name" 
                outlined
              >
              </v-text-field>
               <v-text-field 
                label="First Name" 
                placeholder="Your Name" 
                outlined
              >
              </v-text-field>
              <v-text-field
                type='email'
                label="E-Mail Address"
                placeholder="Your Email"
                outlined
              >
              </v-text-field>
              <v-text-field 
                label="Password" 
                placeholder="*****"
                type='password'
                outlined
              >
              </v-text-field>
                <v-text-field 
                label="Confirm Password" 
                placeholder="*****"
                type='password'
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Mobile No."
                placeholder="Your Mobile no."
                outlined
              >
              </v-text-field>
                <v-text-field
                label="Telephone"
                placeholder="Your no."
                outlined
              >
              </v-text-field>
              <v-text-field
                label="VAT No"
                placeholder="Your VAT no."
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Postal Code"
                placeholder="Postal code"
                outlined
              >
              </v-text-field>
                <div class="login text-right">
              <v-btn 
                    color="primary"
              >
                    Submit
                </v-btn>
              </div>
            </v-card-text>
           </v-card>
        </v-col>
    </v-row>
  </v-container>
  </div>
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
    title: 'Register Your Garage',

    meta: [
      {
        name: 'description', 
        content: 'Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300.'
      },
      {
        name: 'keywords', 
        content: 'MOT, MOT test, Car MOT test,vehicle MOT Test, MOT test in Reading, MOT with free collection,MOT with free delivery, MOT garage, MOT in Reading'
      },
      {
        property: "og:title", 
        content: "Register Your Garage | ManyAutos LTD"
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
        content: "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Register Your Garage | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Is your car or other vehicle need an MOT test? Are you looking for a best deal with peace of mind? You can book you MOT with us and enjoy a free collection and delivery service. You can Book you vehicle for MOT test online or by calling us at 01189 876300."
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
    .garage-network .card.register-form{
        background-color:#d7ddde; 
        margin-bottom: 20px;
        padding-bottom: 15px;
    }
    .garage-network .card.register-form label{
        padding-top: 14px;
        font-weight: 200;
    }
@media (max-width:768px){
.garage-network .card.register-form{
    margin-top: 35px;
}
}
</style>