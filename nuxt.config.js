export default {
  //默认元信息
  head: {
    title: '呼博士',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:  '呼博士 ' },
      { name: "keywords", content: "呼博士" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: 'cyan' },
  css: [
    '~/assets/style/common.less',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/style/animate.min.css',
    'swiper/dist/css/swiper.css',
    '~/assets/font/font.css',
  ],
  router: {
    middleware: ['i18n',],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  plugins: [
    '@/plugins/route',
    '@/plugins/element-ui',
    '@/plugins/filters',
    '@/plugins/methods',
    { src: '~/plugins/swiper.js', ssr: false },
    {
      src: "~plugins/axios.js",
      ssr: true
    },
    '~/plugins/i18n.js',
    {src: '@/plugins/animate.js',ssr: false},
    
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: '/api/',
    withCredentials: true,
    debug: process.env.NODE_ENV == "production" ? false : true,
  },
  proxy: {
    //开启代理
    "/api/": {
      target: process.env.NODE_ENV == "production" ? "http://xxxxxx.com/api" : "http://yyyyy.com/api",
      // target: "http://xxxxxx.com/api",
      pathRewrite: {
        "^/api/": "",
        changeOrigin: true
      }
    }
  },
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
