const rem = '!function(e){var t,n=document,i=window,o=n.documentElement;function u(){var t=o.getBoundingClientRect().width/e*100;o.style.fontSize=t+"px"}u(),i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(u,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(u,300))},!1)}(750);';

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '法智易-智能合同管理系统-慧点科技法务领域专业品牌',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: "法智易，以合同管理为核心，用智能化的手段，保证合同管理过程的合规、高效，实现合同审批、履约监控、合同评价的全生命周期管理，未来会扩展到法律事务领域的一体化智能管理" },
      { name: 'Keywords', content: "法智易,法智易合同管理系统,法务管理系统,智能合同系统,全生命周期合同系统,Saas合同系统,合同的风险防控" },
      { name: 'viewport', content: "width=device-width, initial-scale=1.0, viewport-fit=cover" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
		  { innerHTML: rem, type: 'text/javascript', charset: 'utf-8'}
	  ],
	  __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    "~/assets/scss/reset.scss",
    "swiper/dist/css/swiper.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui',
    // '~/plugins/axios',
    // "~/plugins/vue-swiper.js"
    { src: '~/plugins/vue-swiper.js', ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  render:{
    resourceHints: false,
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor:['axios'],  //配置防止多次打包
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
