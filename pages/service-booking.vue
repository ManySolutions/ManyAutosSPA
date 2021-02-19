<template>
  <div class='home-sec-gaps servicing-page-sec'
    :style='`background-image: url(${assets("frontend/bg-overlay.png")})`'
  >
    <h1 class='heading__title font-weight-300 text-center pb-10'>
      Book 
      <strong class='text-primary font-weight-700'>
        Servicing, Repairs, 
        <br>
        Diagnostic
      </strong>
      <span style='text-transform: initial'>or</span>
      <strong class='text-primary font-weight-700'>MOT</strong>
      With {{ pageTitleName || 'Us Now' }}
    </h1>
    <car-reg-form-card id='servie-reg-form'></car-reg-form-card>
  </div>
</template>

<script>
import CarRegFormCard from '~/components/func-components/car-reg-form-card.vue';
import $ from 'jquery';

export default {
 components: {
    CarRegFormCard,
  },

  props: {
    pageTitleName: String,
  },

  mounted() {
    $(document).ready(() => {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#servie-reg-form").offset().top - 300
      }, 1000);

      $('#servie-reg-form').find('input').focus()
    })
  },

  head() {
    const {pageTitleName} = this;
    const isWith = pageTitleName ? `With ${pageTitleName} ` : '';
    
    return {
      title: `Book Your Car MOT, Service or Diagnostics ${isWith}| ManyAutos LTD`,

<<<<<<< HEAD
    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'We repair and replace ABS Controllers for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work.'
      },
      {
        name: 'keywords', 
        content: 'abs controllers, new abs Controllers, abs controllers repair, abs sensor replace, abs controllers replacement'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "ABS Controllers | ManyAutos LTD"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: URL
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:site_name',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "We repair and replace ABS Controllers for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "ABS Controllers | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "We repair and replace ABS Controllers for all makes and models in Reading, United Kingdom. We also provide free collection and Delivery service from your home or place of work."
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
        hid: 'og:type',
        property: "og:type", 
        content: "business.business"
      },
    ]
=======
      meta: [
        {
          hid: 'description', name: 'description', 
          content: 'Book MOT, Service or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work.'
        },
        {
          name: 'keywords', 
          content: 'many autos ltd, book MOT, book diagnostics, book car service, automotive service,car services,full car service,garage service'
        },
        {
          property: "og:title", 
          content: "Book Your Car MOT, Service or Diagnostics | ManyAutos LTD"
        },
        {
          property: "og:type", 
          content: "website"
        },
        {
          property: "og:url", 
          content: process.env.APP_URL + '/service-booking'
        },
        {
          property: "og:image", 
          content: "https://static.manyautosltd.com/uploads/masked-mechanic-checks-car-service-station.jpg"
        },
        {
          property: "og:site_name", 
          content: "ManyAutos LTD"
        },
        {
          hid: 'og:description',  property: 'og:description', 
          content: "Book MOT, Service or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work."
        },
        {
          name: "twitter:card", 
          content: "summary"
        },
        {
          name: "twitter:title", 
          content: "Book Your Car MOT, Service or Diagnostics | ManyAutos LTD"
        },
        {
          name: "twitter:description", 
          content: "Book MOT, Service or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work."
        },
        {
          name: "twitter:image", 
          content: "https://static.manyautosltd.com/uploads/masked-mechanic-checks-car-service-station.jpg"
        },
        {
          itemprop: "image", 
          content: "https://static.manyautosltd.com/uploads/masked-mechanic-checks-car-service-station.jpg"
        },
        {
          property: "og:type", 
          content: "business.business"
        },
      ]
    }
>>>>>>> 6e323a917f0a8be4509e76d4cb530d9ca9275b87
  }
}
</script>

<style lang="scss" scoped>
.servicing-page-sec {
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>