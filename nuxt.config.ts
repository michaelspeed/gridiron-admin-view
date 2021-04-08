const config = require('./proxy')

export default {
    server: {
        host: '0.0.0.0',
        port: 3000, // default: 3000
    },
    target: 'server',
    ssr: true,
    head: {
        title: 'admin' || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        script: [
            { src: '/js/initScript.js', body: true },
            { src: '/plugins/global/plugins.bundle.js?v=7.0.6', body: true },
            { src: '/plugins/custom/prismjs/prismjs.bundle.js?v=7.0.6', body: true },
            {
                src: '/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.6',
                body: true,
            },
            { src: '/js/pages/widgets.js?v=7.0.6', body: true },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i,900',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
            },
            { rel: 'stylesheet', href: '/plugins/global/plugins.bundle.css?v=7.0.6' },
            {
                rel: 'stylesheet',
                href: '/plugins/custom/prismjs/prismjs.bundle.css?v=7.0.6',
            },
            { rel: 'stylesheet', href: '/css/style.bundle.css?v=7.0.6' },
        ],
    },
    css: [
        { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
        { src: 'primevue/resources/primevue.min.css' },
        { src: 'primevue/resources/themes/md-light-indigo/theme.css' },
        { src: 'primeicons/primeicons.css' },
        { src: 'ag-grid-community/dist/styles/ag-grid.css' },
        { src: 'ag-grid-community/dist/styles/ag-theme-material.css' },
    ],
    plugins: [
        '~/plugins/vue-perfect-scrollbar.ts',
        '~/plugins/bootstrap-vue.ts',
        '~/plugins/portal-vue.ts',
        '~/plugins/inline-svg.ts',
        '~/plugins/perfect-scrollbar.ts',
        '~/plugins/vue-design-plugin.ts',
        '~/plugins/antd-vue-plugin.ts',
        { src: '~/plugins/tinymce-vue.ts', mode: 'client' },
        { src: '~/plugins/ag-grid.client.ts', mode: 'client' },
        { src: '~/plugins/tag-input-plugin.ts', ssr: false },
        { src: '~/plugins/vue-notify.ts', ssr: false },
        { src: '~/plugins/primevue.ts', mode: 'client' },
        { src: '~/plugins/apexchart.ts', mode: 'client' },
    ],
    components: true,
    buildModules: ['@nuxt/typescript-build', ['@nuxtjs/vuetify', {}]],
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
    modules: [
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
                        iso: 'en-US',
                    },
                ],
                defaultLocale: 'en',
                langDir: '/locales/',
            },
        ],
        ['@nuxtjs/proxy', {
            pathRewrite: config.proxy
        }]
    ],
    apollo: {
        tokenName: 'gridiron-key',
        cookieAttributes: {
            secure: false,
        },
        authenticationType: 'Basic',
        clientConfigs: {
            default: {
                httpEndpoint: 'https://megatron.oihelp.net',
                /*httpEndpoint: 'http://localhost:5588/admin-api',*/
            },
        },
        defaultOptions: {
            $query: {
                loadingKey: 'loading',
            },
        },
    },
    axios: {},
    build: {
        transpile: ['ag-grid-vue', 'tinymce', '@tinymce/tinymce-vue'],
        extend(config, ctx) {},
        plugins: [

        ],
        loaders: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    modifyVars: {
                        'primary-color': '#8950FC',
                        'component-background': '#ffffff',
                    },
                },
            },
        },
        babel: {
            presets({ isServer }) {
                return [
                    [
                        require.resolve('@nuxt/babel-preset-app'),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: { version: 3 },
                        },
                    ],
                ];
            },
        },
    },
    vendor: ['@johmun/vue-tags-input']
};
