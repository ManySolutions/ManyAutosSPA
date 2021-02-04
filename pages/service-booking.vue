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
      With Us Now
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

  mounted() {
    $(document).ready(() => {
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#servie-reg-form").offset().top - 300
      }, 1000);

      $('#servie-reg-form').find('input').focus()
    })
  },

  head: {
    title: 'Book Your Car Service With Us Now | ManyAutos LTD',

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
        property: "og:title", 
        content: "ABS Controllers | ManyAutos LTD"
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
        property: "og:type", 
        content: "business.business"
      },
    ]
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