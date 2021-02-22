<template>
  <div>
    <service-booking :page-title-name='name'></service-booking>

    <!-- <v-dialog
      v-model="dialog"
      persistent
      width="400"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by we are verifying your referrer.
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import { verifyReferral } from '~/api/user';
import serviceBooking from '../service-booking.vue';
export default {
  components: { serviceBooking },
  data: () => ({
    id: null,
    name: '',
  }),
  computed: {
  },
  async asyncData({ params }) {
    const res = await verifyReferral(params.key);

    if (typeof res == 'undefined') {
      console.log('undefined referrer', res);
      return {};
    }

    return {
      id: res.id || null,
      name: res.name || '',
    }
  },
  mounted(){
    this.verify();
  },
  methods: {
    verify() {
      this.$store.commit('booking/SET_REFERRAL_ID', this.id);
    }
  },

  head() {
    const {name, $route} = this;
    const {key} = $route.params;

    return {
      meta: [
        {
          name: 'description', 
          content: `Book MOT, Service or any Repairs for you vehicle with ${name}. Here at ManyAutos! We also provide free collection and Delivery service from your home or place of work.`
        },
        {
          name: 'keywords', 
          content: 'many autos ltd, book MOT, book diagnostics, book car service, automotive service,car services,full car service,garage service'
        },
        {
          hid: 'og:title',
          property: "og:title", 
          content: `${name} Referred You to Book Your Car MOT, Service or Diagnostics With ManyAutos LTD`
        },
        {
          property: "og:type", 
          content: "website"
        },
        {
          hid: 'og:url',
          property: "og:url", 
          content: process.env.APP_URL + '/rf/' + key
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
          property: 'og:description', 
          content: `Book MOT, Service or any Repairs for you vehicle with ${name}. Here at ManyAutos! We also provide free collection and Delivery service from your home or place of work.`
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
          content: `Book MOT, Service or any Repairs for you vehicle with ${name}. Here at ManyAutos! We also provide free collection and Delivery service from your home or place of work.`
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
  }
}
</script>