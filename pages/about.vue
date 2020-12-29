<template>
  <page-layout
    title='About Us'
    heading-bg='customer-v2/static-pages/allpics/about1.jpg'
  >
    <div class="container">
  <div class="row margin-top-20">
      <div class="col-12">
        <div>
          <p class="margin-bottom-10 text-justify text-teal" style="padding-top: 40px;">Many Autos ltd is an independent car repair business and has been serving the community since 2001. We deal with all vehicle makes and models, so whatever the issue, Many Autos can get you back on the road. We also offer a free collection and delivery service from your home or work address.</p>
          <p class="margin-bottom-10 text-justify text-teal">You may need anything from just a bulb to a full engine change or the common repairs such as brakes, clutch, exhausts or new tyre. We can help with all kind of repairs and regular maintenance.</p>
          <p class="margin-bottom-10 text-justify text-teal">We offer exceptionally competitive prices for our service plans and ensure your car is serviced in accordance to (or even better than) your manufacturer’s guidelines. In addition you can rest assured that our servicing does not affect the manufacturer warranty as we make sure our work and parts meet the stringent standards required. How do we do this? All our service, repair and diagnostic work is carried out to the highest of standards using only OE (original equipment) parts and engine oil.</p>
          <p class="margin-bottom-10 text-justify text-teal">We maintain a strict standard of work that means we can carry out service and repair work even if your vehicle is within its manufacturer warranty. This saves you a trip to the manufacturer for the service and also saves you a lot of money.</p>
          <p class="margin-bottom-10 text-justify text-teal">Not only do we have highly skilled technicians in the workshop, we also have all the latest servicing, wheel alignment, diagnostic and hybrid car servicing equipment.</p>
          <p class="margin-bottom-10 text-justify text-teal">There are several car maintenance measures that you must do to keep your car at its best, it is important to bring your car to the nearest Many Autos Centre and have it checked.</p>
      </div>
      </div>
  </div>
</div>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

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