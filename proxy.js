const host = 'localhost'

const proxyArray = {
    '/admin-api': `http://megatron.oihelp.net`,
    '/shop-api': `http://optimus.oihelp.net`,
    '/controllers': `http://bumble.oihelp.net`,
    '/images': `http://jazz.oihelp.net*`
}

const nuxtProdConfig = {
    host: '0.0.0.0',
    port: 8080,
    proxy: proxyArray
}

module.exports = nuxtProdConfig;
