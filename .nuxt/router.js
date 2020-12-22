import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5422173c = () => interopDefault(import('../pages/app/dashboard/index.vue' /* webpackChunkName: "pages/app/dashboard/index" */))
const _24fc9083 = () => interopDefault(import('../pages/error/403.vue' /* webpackChunkName: "pages/error/403" */))
const _250aa804 = () => interopDefault(import('../pages/error/404.vue' /* webpackChunkName: "pages/error/404" */))
const _2008af8a = () => interopDefault(import('../pages/error/vendorpage.vue' /* webpackChunkName: "pages/error/vendorpage" */))
const _0c57e9f0 = () => interopDefault(import('../pages/start/start.vue' /* webpackChunkName: "pages/start/start" */))
const _1325ed07 = () => interopDefault(import('../pages/vendors/register/index.vue' /* webpackChunkName: "pages/vendors/register/index" */))
const _65052ba7 = () => interopDefault(import('../pages/app/catalog/assets/index.vue' /* webpackChunkName: "pages/app/catalog/assets/index" */))
const _3aafd347 = () => interopDefault(import('../pages/app/catalog/collections/index.vue' /* webpackChunkName: "pages/app/catalog/collections/index" */))
const _5d946e80 = () => interopDefault(import('../pages/app/catalog/facets/index.vue' /* webpackChunkName: "pages/app/catalog/facets/index" */))
const _13ae5608 = () => interopDefault(import('../pages/app/catalog/products/index.vue' /* webpackChunkName: "pages/app/catalog/products/index" */))
const _3518a482 = () => interopDefault(import('../pages/app/catalog/services/index.vue' /* webpackChunkName: "pages/app/catalog/services/index" */))
const _f6115718 = () => interopDefault(import('../pages/app/customers-menu/allcustomers/index.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/index" */))
const _23c0454e = () => interopDefault(import('../pages/app/customers-menu/customer-groups/index.vue' /* webpackChunkName: "pages/app/customers-menu/customer-groups/index" */))
const _0dbeefc2 = () => interopDefault(import('../pages/app/customers-menu/nowonline/index.vue' /* webpackChunkName: "pages/app/customers-menu/nowonline/index" */))
const _53d2fde6 = () => interopDefault(import('../pages/app/delivery-menu/guys/index.vue' /* webpackChunkName: "pages/app/delivery-menu/guys/index" */))
const _478c46de = () => interopDefault(import('../pages/app/delivery-menu/manager/index.vue' /* webpackChunkName: "pages/app/delivery-menu/manager/index" */))
const _441b2e97 = () => interopDefault(import('../pages/app/sales-menu/billing-agreement/index.vue' /* webpackChunkName: "pages/app/sales-menu/billing-agreement/index" */))
const _51f85c86 = () => interopDefault(import('../pages/app/sales-menu/invoices/index.vue' /* webpackChunkName: "pages/app/sales-menu/invoices/index" */))
const _5e96fdfc = () => interopDefault(import('../pages/app/sales-menu/orders/index.vue' /* webpackChunkName: "pages/app/sales-menu/orders/index" */))
const _23ae836e = () => interopDefault(import('../pages/app/sales-menu/settlements/index.vue' /* webpackChunkName: "pages/app/sales-menu/settlements/index" */))
const _e1971886 = () => interopDefault(import('../pages/app/sales-menu/transaction/index.vue' /* webpackChunkName: "pages/app/sales-menu/transaction/index" */))
const _7810dfa6 = () => interopDefault(import('../pages/app/seo-menu/url-rewrites/index.vue' /* webpackChunkName: "pages/app/seo-menu/url-rewrites/index" */))
const _5a0dd590 = () => interopDefault(import('../pages/app/stocks/stocks-backorders/index.vue' /* webpackChunkName: "pages/app/stocks/stocks-backorders/index" */))
const _467393a2 = () => interopDefault(import('../pages/app/stocks/stocks-management/index.vue' /* webpackChunkName: "pages/app/stocks/stocks-management/index" */))
const _105af85a = () => interopDefault(import('../pages/app/stores-menu/channels/index.vue' /* webpackChunkName: "pages/app/stores-menu/channels/index" */))
const _6f6045bd = () => interopDefault(import('../pages/app/stores-menu/store-configuration/index.vue' /* webpackChunkName: "pages/app/stores-menu/store-configuration/index" */))
const _3893c4e4 = () => interopDefault(import('../pages/app/stores-menu/tax-rates/index.vue' /* webpackChunkName: "pages/app/stores-menu/tax-rates/index" */))
const _69cf5148 = () => interopDefault(import('../pages/app/stores-menu/tax-rules/index.vue' /* webpackChunkName: "pages/app/stores-menu/tax-rules/index" */))
const _e07dda78 = () => interopDefault(import('../pages/app/system-menu/admins/index.vue' /* webpackChunkName: "pages/app/system-menu/admins/index" */))
const _be7ddc4e = () => interopDefault(import('../pages/app/system-menu/country-config/index.vue' /* webpackChunkName: "pages/app/system-menu/country-config/index" */))
const _274f42c0 = () => interopDefault(import('../pages/app/system-menu/plans/index.vue' /* webpackChunkName: "pages/app/system-menu/plans/index" */))
const _7b01eb53 = () => interopDefault(import('../pages/app/system-menu/roles/index.vue' /* webpackChunkName: "pages/app/system-menu/roles/index" */))
const _bf3dab14 = () => interopDefault(import('../pages/app/system-menu/system-config/index.vue' /* webpackChunkName: "pages/app/system-menu/system-config/index" */))
const _692926fe = () => interopDefault(import('../pages/app/system-menu/vendors/index.vue' /* webpackChunkName: "pages/app/system-menu/vendors/index" */))
const _00237559 = () => interopDefault(import('../pages/app/system-menu/zone-config/index.vue' /* webpackChunkName: "pages/app/system-menu/zone-config/index" */))
const _7195a5ba = () => interopDefault(import('../pages/app/catalog/collections/createnewcollection/index.vue' /* webpackChunkName: "pages/app/catalog/collections/createnewcollection/index" */))
const _9f29da28 = () => interopDefault(import('../pages/app/catalog/products/createproduct/index.vue' /* webpackChunkName: "pages/app/catalog/products/createproduct/index" */))
const _620520e8 = () => interopDefault(import('../pages/app/content-menu/design/menubuilder.vue' /* webpackChunkName: "pages/app/content-menu/design/menubuilder" */))
const _4aa216b0 = () => interopDefault(import('../pages/app/content-menu/elements/blocks/index.vue' /* webpackChunkName: "pages/app/content-menu/elements/blocks/index" */))
const _37dbf270 = () => interopDefault(import('../pages/app/content-menu/elements/pages/index.vue' /* webpackChunkName: "pages/app/content-menu/elements/pages/index" */))
const _3e85c31b = () => interopDefault(import('../pages/app/content-menu/user-content/all-reviews/index.vue' /* webpackChunkName: "pages/app/content-menu/user-content/all-reviews/index" */))
const _4246919b = () => interopDefault(import('../pages/app/marketing-menu/promotions/cat-price-rule/index.vue' /* webpackChunkName: "pages/app/marketing-menu/promotions/cat-price-rule/index" */))
const _a5c80602 = () => interopDefault(import('../pages/app/sales-menu/orders/createorder/index.vue' /* webpackChunkName: "pages/app/sales-menu/orders/createorder/index" */))
const _2f4f4dc1 = () => interopDefault(import('../pages/app/system-menu/roles/createrole.vue' /* webpackChunkName: "pages/app/system-menu/roles/createrole" */))
const _1452d600 = () => interopDefault(import('../pages/app/content-menu/elements/pages/createbuilder/index.vue' /* webpackChunkName: "pages/app/content-menu/elements/pages/createbuilder/index" */))
const _bf052488 = () => interopDefault(import('../pages/app/catalog/products/variants/specs/_id.vue' /* webpackChunkName: "pages/app/catalog/products/variants/specs/_id" */))
const _b83462bc = () => interopDefault(import('../pages/app/catalog/collections/createnewcollection/_id.vue' /* webpackChunkName: "pages/app/catalog/collections/createnewcollection/_id" */))
const _4e4ffe9e = () => interopDefault(import('../pages/app/sales-menu/orders/vendororders/_id.vue' /* webpackChunkName: "pages/app/sales-menu/orders/vendororders/_id" */))
const _4fb15cba = () => interopDefault(import('../pages/app/system-menu/roles/editrole/_id.vue' /* webpackChunkName: "pages/app/system-menu/roles/editrole/_id" */))
const _cf27de30 = () => interopDefault(import('../pages/app/catalog/facets/_id.vue' /* webpackChunkName: "pages/app/catalog/facets/_id" */))
const _d52b8b20 = () => interopDefault(import('../pages/app/catalog/products/_id.vue' /* webpackChunkName: "pages/app/catalog/products/_id" */))
const _5377e3dc = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id" */))
const _4e69155f = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id/index.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id/index" */))
const _157b837e = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id/address.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id/address" */))
const _fa1af2b0 = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id/orders.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id/orders" */))
const _ac4d9562 = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id/override.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id/override" */))
const _11a8f948 = () => interopDefault(import('../pages/app/customers-menu/allcustomers/_id/reset.vue' /* webpackChunkName: "pages/app/customers-menu/allcustomers/_id/reset" */))
const _4d01eabf = () => interopDefault(import('../pages/app/sales-menu/billing-agreement/_id.vue' /* webpackChunkName: "pages/app/sales-menu/billing-agreement/_id" */))
const _0be51f65 = () => interopDefault(import('../pages/app/sales-menu/invoices/_id.vue' /* webpackChunkName: "pages/app/sales-menu/invoices/_id" */))
const _82f76138 = () => interopDefault(import('../pages/app/sales-menu/orders/_id.vue' /* webpackChunkName: "pages/app/sales-menu/orders/_id" */))
const _3ad48c56 = () => interopDefault(import('../pages/app/seo-menu/url-rewrites/_id.vue' /* webpackChunkName: "pages/app/seo-menu/url-rewrites/_id" */))
const _8f86c9ae = () => interopDefault(import('../pages/app/system-menu/vendors/_id.vue' /* webpackChunkName: "pages/app/system-menu/vendors/_id" */))
const _9ede0bfe = () => interopDefault(import('../pages/app/system-menu/zone-config/_id.vue' /* webpackChunkName: "pages/app/system-menu/zone-config/_id" */))
const _2bf9f925 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app/dashboard",
    component: _5422173c,
    name: "app-dashboard___en"
  }, {
    path: "/error/403",
    component: _24fc9083,
    name: "error-403___en"
  }, {
    path: "/error/404",
    component: _250aa804,
    name: "error-404___en"
  }, {
    path: "/error/vendorpage",
    component: _2008af8a,
    name: "error-vendorpage___en"
  }, {
    path: "/start/start",
    component: _0c57e9f0,
    name: "start-start___en"
  }, {
    path: "/vendors/register",
    component: _1325ed07,
    name: "vendors-register___en"
  }, {
    path: "/app/catalog/assets",
    component: _65052ba7,
    name: "app-catalog-assets___en"
  }, {
    path: "/app/catalog/collections",
    component: _3aafd347,
    name: "app-catalog-collections___en"
  }, {
    path: "/app/catalog/facets",
    component: _5d946e80,
    name: "app-catalog-facets___en"
  }, {
    path: "/app/catalog/products",
    component: _13ae5608,
    name: "app-catalog-products___en"
  }, {
    path: "/app/catalog/services",
    component: _3518a482,
    name: "app-catalog-services___en"
  }, {
    path: "/app/customers-menu/allcustomers",
    component: _f6115718,
    name: "app-customers-menu-allcustomers___en"
  }, {
    path: "/app/customers-menu/customer-groups",
    component: _23c0454e,
    name: "app-customers-menu-customer-groups___en"
  }, {
    path: "/app/customers-menu/nowonline",
    component: _0dbeefc2,
    name: "app-customers-menu-nowonline___en"
  }, {
    path: "/app/delivery-menu/guys",
    component: _53d2fde6,
    name: "app-delivery-menu-guys___en"
  }, {
    path: "/app/delivery-menu/manager",
    component: _478c46de,
    name: "app-delivery-menu-manager___en"
  }, {
    path: "/app/sales-menu/billing-agreement",
    component: _441b2e97,
    name: "app-sales-menu-billing-agreement___en"
  }, {
    path: "/app/sales-menu/invoices",
    component: _51f85c86,
    name: "app-sales-menu-invoices___en"
  }, {
    path: "/app/sales-menu/orders",
    component: _5e96fdfc,
    name: "app-sales-menu-orders___en"
  }, {
    path: "/app/sales-menu/settlements",
    component: _23ae836e,
    name: "app-sales-menu-settlements___en"
  }, {
    path: "/app/sales-menu/transaction",
    component: _e1971886,
    name: "app-sales-menu-transaction___en"
  }, {
    path: "/app/seo-menu/url-rewrites",
    component: _7810dfa6,
    name: "app-seo-menu-url-rewrites___en"
  }, {
    path: "/app/stocks/stocks-backorders",
    component: _5a0dd590,
    name: "app-stocks-stocks-backorders___en"
  }, {
    path: "/app/stocks/stocks-management",
    component: _467393a2,
    name: "app-stocks-stocks-management___en"
  }, {
    path: "/app/stores-menu/channels",
    component: _105af85a,
    name: "app-stores-menu-channels___en"
  }, {
    path: "/app/stores-menu/store-configuration",
    component: _6f6045bd,
    name: "app-stores-menu-store-configuration___en"
  }, {
    path: "/app/stores-menu/tax-rates",
    component: _3893c4e4,
    name: "app-stores-menu-tax-rates___en"
  }, {
    path: "/app/stores-menu/tax-rules",
    component: _69cf5148,
    name: "app-stores-menu-tax-rules___en"
  }, {
    path: "/app/system-menu/admins",
    component: _e07dda78,
    name: "app-system-menu-admins___en"
  }, {
    path: "/app/system-menu/country-config",
    component: _be7ddc4e,
    name: "app-system-menu-country-config___en"
  }, {
    path: "/app/system-menu/plans",
    component: _274f42c0,
    name: "app-system-menu-plans___en"
  }, {
    path: "/app/system-menu/roles",
    component: _7b01eb53,
    name: "app-system-menu-roles___en"
  }, {
    path: "/app/system-menu/system-config",
    component: _bf3dab14,
    name: "app-system-menu-system-config___en"
  }, {
    path: "/app/system-menu/vendors",
    component: _692926fe,
    name: "app-system-menu-vendors___en"
  }, {
    path: "/app/system-menu/zone-config",
    component: _00237559,
    name: "app-system-menu-zone-config___en"
  }, {
    path: "/app/catalog/collections/createnewcollection",
    component: _7195a5ba,
    name: "app-catalog-collections-createnewcollection___en"
  }, {
    path: "/app/catalog/products/createproduct",
    component: _9f29da28,
    name: "app-catalog-products-createproduct___en"
  }, {
    path: "/app/content-menu/design/menubuilder",
    component: _620520e8,
    name: "app-content-menu-design-menubuilder___en"
  }, {
    path: "/app/content-menu/elements/blocks",
    component: _4aa216b0,
    name: "app-content-menu-elements-blocks___en"
  }, {
    path: "/app/content-menu/elements/pages",
    component: _37dbf270,
    name: "app-content-menu-elements-pages___en"
  }, {
    path: "/app/content-menu/user-content/all-reviews",
    component: _3e85c31b,
    name: "app-content-menu-user-content-all-reviews___en"
  }, {
    path: "/app/marketing-menu/promotions/cat-price-rule",
    component: _4246919b,
    name: "app-marketing-menu-promotions-cat-price-rule___en"
  }, {
    path: "/app/sales-menu/orders/createorder",
    component: _a5c80602,
    name: "app-sales-menu-orders-createorder___en"
  }, {
    path: "/app/system-menu/roles/createrole",
    component: _2f4f4dc1,
    name: "app-system-menu-roles-createrole___en"
  }, {
    path: "/app/content-menu/elements/pages/createbuilder",
    component: _1452d600,
    name: "app-content-menu-elements-pages-createbuilder___en"
  }, {
    path: "/app/catalog/products/variants/specs/:id?",
    component: _bf052488,
    name: "app-catalog-products-variants-specs-id___en"
  }, {
    path: "/app/catalog/collections/createnewcollection/:id",
    component: _b83462bc,
    name: "app-catalog-collections-createnewcollection-id___en"
  }, {
    path: "/app/sales-menu/orders/vendororders/:id",
    component: _4e4ffe9e,
    name: "app-sales-menu-orders-vendororders-id___en"
  }, {
    path: "/app/system-menu/roles/editrole/:id",
    component: _4fb15cba,
    name: "app-system-menu-roles-editrole-id___en"
  }, {
    path: "/app/catalog/facets/:id",
    component: _cf27de30,
    name: "app-catalog-facets-id___en"
  }, {
    path: "/app/catalog/products/:id",
    component: _d52b8b20,
    name: "app-catalog-products-id___en"
  }, {
    path: "/app/customers-menu/allcustomers/:id?",
    component: _5377e3dc,
    children: [{
      path: "",
      component: _4e69155f,
      name: "app-customers-menu-allcustomers-id___en"
    }, {
      path: "address",
      component: _157b837e,
      name: "app-customers-menu-allcustomers-id-address___en"
    }, {
      path: "orders",
      component: _fa1af2b0,
      name: "app-customers-menu-allcustomers-id-orders___en"
    }, {
      path: "override",
      component: _ac4d9562,
      name: "app-customers-menu-allcustomers-id-override___en"
    }, {
      path: "reset",
      component: _11a8f948,
      name: "app-customers-menu-allcustomers-id-reset___en"
    }]
  }, {
    path: "/app/sales-menu/billing-agreement/:id?",
    component: _4d01eabf,
    name: "app-sales-menu-billing-agreement-id___en"
  }, {
    path: "/app/sales-menu/invoices/:id?",
    component: _0be51f65,
    name: "app-sales-menu-invoices-id___en"
  }, {
    path: "/app/sales-menu/orders/:id?",
    component: _82f76138,
    name: "app-sales-menu-orders-id___en"
  }, {
    path: "/app/seo-menu/url-rewrites/:id?",
    component: _3ad48c56,
    name: "app-seo-menu-url-rewrites-id___en"
  }, {
    path: "/app/system-menu/vendors/:id?",
    component: _8f86c9ae,
    name: "app-system-menu-vendors-id___en"
  }, {
    path: "/app/system-menu/zone-config/:id?",
    component: _9ede0bfe,
    name: "app-system-menu-zone-config-id___en"
  }, {
    path: "/",
    component: _2bf9f925,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
