<template>
  <div>
    <div class="owl-carousel">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css'
      },
    ]
  },

  props: {
    options: {}
  },

  mounted() {
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dot: true,
        autoheight: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        ...this.options
      });
    });
  }
}
</script>
