export default {
  data: () => ({
    assetsURL: 'https://manyautosltd.com/assets/',
    appTitle: 'Many Autos LTD'
  }),

  methods: {
    assets(url) {
      return this.assetsURL + url;
    }
  }
}