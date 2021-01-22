<template>
  <v-container class='home-sec-gaps'>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h2 class="forgot-pass text-center pt-5 mb-10">
                Forgot Your Password?
              </h2>
               <v-text-field
                label="Your Email"
                placeholder="example@gmail.com"
                type="email"
                outlined
              >
              </v-text-field>         
              <div class="update text-center">
                <v-btn 
                  color="secondary" 
                  large 
                  block
                > 
                Reset my Password
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// export default {
//       head: {
//     title: 'Forgot Your Password?',

//     meta: [
//       {
//         hid: 'description', name: 'description', 
//         content: 'Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300.'
//       },
//       {
//         name: 'keywords', 
//         content: 'many autos ltd automotive service,car services,full car service,garage service'
//       },
//       {
//         property: "og:title", 
//         content: "Forgot Your Password? | ManyAutos LTD"
//       },
//       {
//         property: "og:type", 
//         content: "website"
//       },
//       {
//         property: "og:url", 
//         content: URL
//       },
//       {
//         property: "og:image", 
//         content: "logo-default.png"
//       },
//       {
//         property: "og:site_name", 
//         content: "ManyAutos LTD"
//       },
//       {
//         hid: 'og:description',  property: 'og:description', 
//         content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
//       },
//       {
//         name: "twitter:card", 
//         content: "summary"
//       },
//       {
//         name: "twitter:title", 
//         content: "Forgot Your Password? | ManyAutos LTD"
//       },
//       {
//         name: "twitter:description", 
//         content: "Many Autos LTD, we took over Many Autos in 2001 and the business has developed and grown since then. Call us right now 01189 876300."
//       },
//       {
//         name: "twitter:image", 
//         content: "logo-default.png"
//       },
//       {
//         itemprop: "image", 
//         content: "logo-default.png"
//       },
//       {
//         property: "og:type", 
//         content: "business.business"
//       },
//     ]
//   }
// }
  
// </script>

<style lang="scss" scoped>

</style>