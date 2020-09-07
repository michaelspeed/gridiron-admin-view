import {NuxtConfig} from "@nuxt/types/config";

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
    server: {
        host: '0.0.0.0',
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
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        script: [
            {src: '/js/initScript.js', body: true},
            {src: '/plugins/global/plugins.bundle.js?v=7.0.6', body: true},
            {src: '/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.6', body: true},
            {src: '/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.6', body: true},
            {src: '/js/pages/widgets.js?v=7.0.6', body: true},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i,900'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            },
            {rel: 'stylesheet', href: '/plugins/global/plugins.bundle.css?v=7.0.6'},
            {rel: 'stylesheet', href: '/plugins/custom/prismjs/prismjs.bundle.css?v=7.0.6'},
            {rel: 'stylesheet', href: '/css/style.bundle.css?v=7.0.6'},
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
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        {src: 'ant-design-vue/dist/antd.less', lang: 'less'},
        {src: 'primevue/resources/primevue.min.css'},
        {src: 'primevue/resources/themes/md-light-indigo/theme.css'},
        {src: 'primeicons/primeicons.css'},
        {src: 'ag-grid-community/dist/styles/ag-grid.css'},
        {src: 'ag-grid-community/dist/styles/ag-theme-material.css'},
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        '~/plugins/vue-perfect-scrollbar.ts',
        '~/plugins/bootstrap-vue.ts',
        '~/plugins/portal-vue.ts',
        '~/plugins/inline-svg.ts',
        '~/plugins/perfect-scrollbar.ts',
        '~/plugins/vue-design-plugin.ts',
        '~/plugins/antd-vue-plugin.ts',
        {src: '~/plugins/tinymce-vue.ts', mode: 'client'},
        {src: '~/plugins/ag-grid.client.ts', mode: 'client'},
        {src: '~/plugins/tag-input-plugin.ts', ssr: false},
        {src: '~/plugins/vue-notify.ts', ssr: false},
        {src: '~/plugins/primevue.ts', mode: 'client'},
        {src: '~/plugins/apexchart.ts', mode: 'client'},
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
                    primary: '#8950FC', // #E53935
                    secondary: '#F64E60',
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
                httpEndpoint: 'http://45.118.132.119:5588/admin-api'
                /*httpEndpoint: 'http://localhost:5588/admin-api',*/
            }
        },
        defaultOptions: {
            $query: {
                loadingKey: 'loading'
            },
        },
    },
    axios: {},
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
        extend(config, ctx) {

        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                    memoryLimit: 4096
                }
            })
        ],
        loaders: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: {
                        'primary-color': '#8950FC',
                        'component-background': '#ffffff'
                    }
                }
            }
        }
    },
    vendor: ['@johmun/vue-tags-input']
}

export default config
