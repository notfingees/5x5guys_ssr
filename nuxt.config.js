export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '5X5GUYS NFTs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "The first on chain, text-based NFT collection. Mint your 5X5GUY today!" },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'inwriting, NFT, in writing, ethereum, text NFT, NFTs, text NFTs, text art, text as NFT, NFT collection, 5x5guys, 5x5guy, 5x5' },
    
      {
        hid: 'og:title',
        property: 'og:title',
        content: '5X5GUYS NFTs'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'The first on chain, text-based NFT collection.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'static/logo.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://5x5guys.com/'
      },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', '@nuxtjs/sitemap'
  ],

  plugins: [
    {src: '~/plugins/vue-gtag'},
    {src: '~/plugins/vue-analytics'},

  ],

  sitemap: {
    gzip: true,
    hostname: 'https://www.5x5guys.com'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
