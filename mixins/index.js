export default {
  data: () => ({
    assetsURL: 'https://manyautosltd.com/assets/',
    appTitle: 'Many Autos LTD',
    currencySymbol: process.env.CURRENCY_SYMBOL
  }),

  methods: {
    assets(url) {
      return this.assetsURL + url;
    }
  }
}