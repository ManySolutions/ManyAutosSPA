<template>
  <div class="social-links text-center mt-7">
    <ShareNetwork
      v-for='(network, k) in networks'
      :key='k'
      :network="network.network" 
      :url="url"
      :title='network.text'
    >
      <v-btn 
        class="mr-2 mb-2" 
        :color="network.color" 
        target="_blank" 
        dark 
        @click.prevent="''"
      >
        <v-icon
          v-if='network.icon' 
          class="mr-1" 
          dark left
        >
          {{ network.icon }}
        </v-icon>
        {{ network.text }}
      </v-btn>
    </ShareNetwork>
  </div>
</template>
<script>
export default {
  props: {
    shareUrl: {
      type: Array,
      required: false
    },
  },

  data: () => ({
    networks: [
      {
        network: "facebook",
        color: 'blue',
        icon: 'mdi-facebook',
        text: 'Share on Facebook'
      },
      {
        network: "Pinterest",
        color: '#BD081C',
        icon: 'mdi-pinterest',
        text: 'Share on Pinterest'
      },
      {
        network: "Reddit",
        color: '#FF5700',
        icon: 'mdi-reddit',
        text: 'Share on Reddit'
      },
      {
        network: "WhatsApp",
        color: '#25D366',
        icon: 'mdi-whatsapp',
        text: 'Share on whatsapp'
      },
      {
        network: "twitter",
        color: '#00acee',
        icon: 'mdi-twitter',
        text: 'Share on twitter'
      },
       {
        network: "Tumblr",
        color: '#34526f',
        icon: 'mdi-tumblr',
        text: 'Share on tumblr'
      },
    ]
  }),

  computed: {
    url() {
        if (this.shareUrl) return this.shareUrl;
        
        if (!process.client) return process.env.APP_URL

        return window.location.href;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-application a {
  cursor: pointer;
  text-decoration: none;
}
@media (min-width: 960px){
  .social-links {
    max-width: 900px;
    margin: auto;
}
}

</style>