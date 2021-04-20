<template>
  <div>
    <index-landing-new></index-landing-new>

    <v-sheet fluid color='#f5f5f5' class='py-3'>
      <base-info-icons dark></base-info-icons>
    </v-sheet>
    
    <index-both-services></index-both-services>
    <index-mot-section></index-mot-section>

  </div>
</template>

<script>
import $ from 'jquery';
import BaseTextSlider from '~/components/base-components/base-text-slider.vue';
import CarRegForm from '~/components/func-components/car-reg-form.vue';
import CarRegFormCard from '~/components/func-components/car-reg-form-card.vue';
import BaseInfoIcons from '~/components/base-components/base-info-icons.vue';
import IndexBothServices from './__components/index-both-services.vue';
import IndexLandingNew from './__components/index-landing-new.vue';
import IndexMotSection from './__components/index-mot-section.vue';

const URL = process.env.APP_URL;

export default {
  components: {
    BaseTextSlider,
    CarRegForm,
    CarRegFormCard,
    BaseInfoIcons,
    IndexBothServices,
    IndexLandingNew,
    IndexMotSection
  },

  data: () => ({}),

  watch: {
    
  },

  methods: {
  },

  head: {
    title: "Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",

    meta: [
      {
        hid: 'description', name: 'description',
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "keywords",
        content:
          "Car servicing, car mechanic, vehicle repair, car repair, car mechanic, car garage in UK, online repair centre, MOT centre",
      },
      {
        hid: 'og:title',
        property: "og:title",
        content:
          " Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "website",
      },
      {
        hid: 'og:url',
        property: "og:url",
        content: process.env.APP_URL,
      },
      {
        hid: 'og:image',
        property: "og:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        hid: 'og:site_name',
        property: "og:site_name",
        content: "ManyAutos LTD",
      },
      {
        hid: 'og:description',  property: 'og:description',
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content:
          " Car Servicing, MOT Centre & Car Repair Garages | ManyAutos LTD",
      },
      {
        name: "twitter:description",
        content:
          "The most trusted car repair and mot centre, with best car servicing and professional car mechanic near your area. We’ll pick your car, service it and deliver it back for free. Book car service online now",
      },
      {
        name: "twitter:image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        itemprop: "image",
        content:
          "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
      },
      {
        hid: 'og:type',
        property: "og:type",
        content: "business.business",
      },
    ],
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.manyautosltd.com/#organization",
          name: "ManyAutos",
          url: "https://www.manyautosltd.com/",
          sameAs: [
            "https://www.facebook.com/manyautos.co.uk",
            "https://twitter.com/manyautos",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Reading",
          },
          // "aggregateRating": {
          //   "@type": "AggregateRating",
          //   "ratingValue": "4.5",
          //   "reviewCount": "1521"
          // },
          description:
            "The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!",
          telephone: "+44 118 987 6300",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+44 118 987 6300",
            contactType: "Customer Support",
            areaServed: "UK",
            availableLanguage: "English",
          },
          publisher: {
            "@type": "Organization",
            name: "ManyAutos",
            "@id": "https://www.manyautosltd.com/",
            logo:
              "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
            url: "https://www.manyautosltd.com/",
            description:
              "Do you need  Car servicing, MOT or Repair Work? Compare our prices with other garages.",
            sameAs: [
              "https://www.facebook.com/manyautos.co.uk",
              "https://twitter.com/manyautos",
            ],
          },
          logo: {
            "@type": "ImageObject",
            "@id": "https://www.manyautosltd.com/#logo",
            url:
              "https://app.manyautosltd.com/assets/customer-v2/logo-default.png",
            caption: "ManyAutos",
          },
          image: {
            "@id": "https://www.manyautosltd.com/#logo",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.manyautosltd.com/#website",
          publisher: {
            "@id": "https://www.manyautosltd.com/#organization",
          },
          name: "ManyAutos",
          url: "https://www.manyautosltd.com/",
          description:
            "The most trusted car repair and mot center, with best services and professional mechanics. We’ll pick your car, service it and deliver it back for free. Book services online now!",
          inLanguage: "en-US",
        },
        {
          "@type": "WebPage",
          "@id": "https://www.manyautosltd.com//#webpage",
          url: "https://www.manyautosltd.com/",
          inLanguage: "en-US",
          name:
            "Best Car Servicing | MOT & Repair Centre | Vehicle Maintenance",
          isPartOf: {
            "@id": "https://www.manyautosltd.com/#website",
          },
          about: {
            "@id": "https://www.manyautosltd.com/#organization",
          },
          breadcrumb: {
            "@id": "https://www.manyautosltd.com//#breadcrumb",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
