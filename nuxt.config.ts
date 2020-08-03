
export default {
  server: {
    port: 8080, // default: 3000
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: '/vendors/jquery/dist/jquery.min.js' },
      { src: '/vendors/popper.js/dist/umd/popper.js' },
      { src: '/vendors/bootstrap/dist/js/bootstrap.js' },
      { src: '/vendors/jquery-mousewheel/jquery.mousewheel.min.js' },
      { src: '/vendors/perfect-scrollbar/js/perfect-scrollbar.jquery.js' },
      { src: '/vendors/chartist/dist/chartist.min.js' },
      { src: '/vendors/chart.js/dist/Chart.min.js' },
      { src: '/vendors/jqvmap/dist/jquery.vmap.min.js' },
      { src: '/vendors/jqvmap/dist/maps/jquery.vmap.usa.js' },
      { src: '/vendors/chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min.js' },
      { src: '/vendors/d3/d3.min.js' },
      { src: '/vendors/d3-dsv/dist/d3-dsv.js' },
      { src: '/vendors/d3-time-format/dist/d3-time-format.js' },
      { src: '/vendors/c3/c3.min.js' },
      { src: '/vendors/peity/jquery.peity.min.js' },
      { src: '/vendors/editable-table/mindmup-editabletable.js' },
      { src: '/vendors/moment/min/moment.min.js' },
      { src: '/vendors/tempus-dominus-bs4/build/js/tempusdominus-bootstrap-4.min.js' },
      { src: '/vendors/fullcalendar/dist/fullcalendar.min.js' },
      { src: '/vendors/owl.carousel/dist/owl.carousel.min.js' },
      { src: '/vendors/ionrangeslider/js/ion.rangeSlider.min.js' },
      { src: '/vendors/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js' },
      { src: '/vendors/bootstrap-sweetalert/dist/sweetalert.min.js' },
      { src: '/vendors/nprogress/nprogress.js' },
      { src: '/vendors/summernote/dist/summernote.min.js' },
      { src: '/vendors/nestable/jquery.nestable.js' },
      { src: '/vendors/jquery-typeahead/dist/jquery.typeahead.min.js' },
      { src: '/vendors/autosize/dist/autosize.min.js' },
      { src: '/vendors/bootstrap-show-password/dist/bootstrap-show-password.min.js' },
      { src: '/vendors/dropify/dist/js/dropify.min.js' },
      { src: '/vendors/html5-form-validation/dist/jquery.validation.min.js' },
      { src: '/vendors/jquery-steps/build/jquery.steps.min.js' },
      { src: '/vendors/jquery-mask-plugin/dist/jquery.mask.min.js' },
      { src: '/vendors/select2/dist/js/select2.full.min.js' },
      { src: '/vendors/bootstrap-select/dist/js/bootstrap-select.min.js' },
      { src: '/vendors/d3-dsv/dist/d3-dsv.js' },
      { src: '/vendors/d3-time-format/dist/d3-time-format.js' },
      { src: '/vendors/techan/dist/techan.min.js' },
      { src: '/vendors/Stickyfill/dist/stickyfill.min.js' },
      { src: 'https://cdn.datatables.net/v/bs4/dt-1.10.18/fc-3.2.5/r-2.2.2/datatables.min.js' },
      { src: '/components/core/index.js' },
      { src: '/components/menu-left/index.js' },
      { src: '/components/menu-top/index.js' },
      { src: '/components/sidebar/index.js' },
      { src: '/components/topbar/index.js' },
      { src: '/components/topbar/index.js' },
      { src: '/components/chat/index.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i,900'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'},
      { rel: 'stylesheet', href: '/vendors/bootstrap/dist/css/bootstrap.css'},
      { rel: 'stylesheet', href: '/vendors/font-feathericons/dist/feather.css'},
      { rel: 'stylesheet', href: '/vendors/font-awesome/css/font-awesome.min.css'},
      { rel: 'stylesheet', href: '/vendors/font-linearicons/style.css'},
      { rel: 'stylesheet', href: '/vendors/font-icomoon/style.css'},
      { rel: 'stylesheet', href: '/vendors/perfect-scrollbar/css/perfect-scrollbar.css'},
      { rel: 'stylesheet', href: '/vendors/chart.js/dist/Chart.min.css'},
      { rel: 'stylesheet', href: '/vendors/jqvmap/dist/jqvmap.min.css'},
      { rel: 'stylesheet', href: '/vendors/c3/c3.min.css'},
      { rel: 'stylesheet', href: '/vendors/tempus-dominus-bs4/build/css/tempusdominus-bootstrap-4.min.css'},
      { rel: 'stylesheet', href: '/vendors/fullcalendar/dist/fullcalendar.min.css'},
      { rel: 'stylesheet', href: '/vendors/owl.carousel/dist/assets/owl.carousel.min.css'},
      { rel: 'stylesheet', href: '/vendors/ionrangeslider/css/ion.rangeSlider.css'},
      { rel: 'stylesheet', href: '/vendors/bootstrap-sweetalert/dist/sweetalert.css'},
      { rel: 'stylesheet', href: '/vendors/nprogress/nprogress.css'},
      { rel: 'stylesheet', href: '/vendors/summernote/dist/summernote.css'},
      { rel: 'stylesheet', href: '/vendors/dropify/dist/css/dropify.min.css'},
      { rel: 'stylesheet', href: '/vendors/jquery-steps/demo/css/jquery.steps.css'},
      { rel: 'stylesheet', href: '/vendors/select2/dist/css/select2.min.css'},
      { rel: 'stylesheet', href: '/vendors/bootstrap-select/dist/css/bootstrap-select.min.css'},
      { rel: 'stylesheet', href: '/components/vendors/style.css'},
      { rel: 'stylesheet', href: '/components/core/style.css'},
      { rel: 'stylesheet', href: '/components/widgets/style.css'},
      { rel: 'stylesheet', href: '/components/system/style.css'},
      { rel: 'stylesheet', href: '/components/menu-left/style.css'},
      { rel: 'stylesheet', href: '/components/menu-top/style.css'},
      { rel: 'stylesheet', href: '/components/footer/style.css'},
      { rel: 'stylesheet', href: '/components/footer-dark/style.css'},
      { rel: 'stylesheet', href: '/components/topbar/style.css'},
      { rel: 'stylesheet', href: '/components/topbar-dark/style.css'},
      { rel: 'stylesheet', href: '/components/subbar/style.css'},
      { rel: 'stylesheet', href: '/components/sidebar/style.css'},
      { rel: 'stylesheet', href: '/components/chat/style.css'},
      { rel: 'stylesheet', href: '/components/apps/style.css'},
      { rel: 'stylesheet', href: '/components/extra-apps/style.css'},
      { rel: 'stylesheet', href: '/components/ecommerce/style.css'},
      { rel: 'stylesheet', href: '/components/dashboards/crypto-terminal/style.css'},
      { rel: 'stylesheet', href: 'https://cdn.datatables.net/v/bs4/dt-1.10.18/fc-3.2.5/r-2.2.2/datatables.min.css'}
    ]
  },
  vue: {
    config: {
      devtools: true
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
    {src: 'primevue/resources/primevue.min.css'},
    {src: 'primevue/resources/themes/md-light-indigo/theme.css'},
    {src: 'primeicons/primeicons.css'},
    {src: '@/assets/agGridStyleOverride.scss', lang: 'scss'},
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
      '~/plugins/vue-perfect-scrollbar.ts',
      '~/plugins/vue-design-plugin.ts',
      '~/plugins/antd-vue-plugin.ts',
    {src: '~/plugins/tinymce-vue.ts', mode: 'client'},
    {src: '~/plugins/ag-grid.client.ts', mode: 'client'},
    { src: '~/plugins/tag-input-plugin.ts', ssr: false },
    { src: '~/plugins/vue-notify.ts', ssr: false },
    {src:'~/plugins/primevue.ts', mode: 'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/vuetify', {}]
  ],
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#161537', // #E53935
          secondary: '#F44336',
          accent: '#FF5722', // #3F51B5
        },
      },
    },
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    [
      'nuxt-i18n',
      {
        lazy: true,
        locales: [
          {
            code: 'en',
            name: 'English',
            file: 'en.js',
            iso: 'en-US'
          },
        ],
        defaultLocale: 'en',
        langDir: '/locales/',
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  apollo: {
    tokenName: 'gridiron-key',
    cookieAttributes: {
      secure: false,
    },
    authenticationType: 'Basic',
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:5588/admin-api',
      }
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading'
      },
    },
  },
  axios: {
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      'ag-grid-vue',
      'tinymce',
      '@tinymce/tinymce-vue'
    ],
    /*babel: {
      plugins: [
            ['import', { libraryName: 'ant-design-vue', style: 'css' } ]
          ]
    },*/
    extend (config, ctx) {
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#161537',
            'component-background': '#ffffff'
          }
        }
      }
    }
  },
  vendor: ['@johmun/vue-tags-input']
}
