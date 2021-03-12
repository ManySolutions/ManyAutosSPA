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
      title: `Book Your Car MOT, car service booking ${isWith}| ManyAutos LTD`,

      meta: [
        {
          hid: 'description', name: 'description', 
          content: 'Book MOT, car Service booking or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work so Book Diagnostic services and Get Free Quote for Full car servicing.'
        },
        {
          name: 'keywords', 
          content: 'many autos ltd, book MOT, book diagnostics, book car service, automotive service,car services, full car service ,garage service'
        },
        {
          hid: 'og:title',
          property: "og:title", 
          content: "Book Your Car MOT, car service booking | ManyAutos LTD"
        },
        {
          hid: 'og:type',
          property: "og:type", 
          content: "website"
        },
        {
          hid: 'og:url',
          property: "og:url", 
          content: process.env.APP_URL + '/service-booking'
        },
        {
          hid: 'og:image',
          property: "og:image", 
          content: "https://static.manyautosltd.com/uploads/masked-mechanic-checks-car-service-station.jpg"
        },
        {
          hid: 'og:site_name',
          property: "og:site_name", 
          content: "ManyAutos LTD"
        },
        {
          hid: 'og:description',  property: 'og:description', 
          content: "Book MOT, car Service booking or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work so Book Diagnostic services and Get Free Quote for Full car servicing."
        },
        {
          name: "twitter:card", 
          content: "summary"
        },
        {
          name: "twitter:title", 
          content: "Book Your Car MOT, car service booking | ManyAutos LTD"
        },
        {
          name: "twitter:description", 
          content: "Book MOT, car Service booking or any Repairs for you vehicle. We also provide free collection and Delivery service from your home or place of work so Book Diagnostic services and Get Free Quote for Full car servicing."
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
          hid: 'og:type',
          property: "og:type", 
          content: "business.business"
        },
      ]
    }
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