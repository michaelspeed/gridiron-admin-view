import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_48e19a43 from 'nuxt_plugin_plugin_48e19a43' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_workbox_e93b9696 from 'nuxt_plugin_workbox_e93b9696' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_0fa2970f from 'nuxt_plugin_nuxticons_0fa2970f' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_1a06888b from 'nuxt_plugin_plugin_1a06888b' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_pluginrouting_e14ec366 from 'nuxt_plugin_pluginrouting_e14ec366' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_a2268f7c from 'nuxt_plugin_pluginmain_a2268f7c' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_apollomodule_58e2b4a5 from 'nuxt_plugin_apollomodule_58e2b4a5' // Source: ./apollo-module.js (mode: 'all')
import nuxt_plugin_axios_e4025c4e from 'nuxt_plugin_axios_e4025c4e' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_vueperfectscrollbar_4f612464 from 'nuxt_plugin_vueperfectscrollbar_4f612464' // Source: ../plugins/vue-perfect-scrollbar.ts (mode: 'all')
import nuxt_plugin_bootstrapvue_7a18cf9c from 'nuxt_plugin_bootstrapvue_7a18cf9c' // Source: ../plugins/bootstrap-vue.ts (mode: 'all')
import nuxt_plugin_portalvue_923e7e9c from 'nuxt_plugin_portalvue_923e7e9c' // Source: ../plugins/portal-vue.ts (mode: 'all')
import nuxt_plugin_inlinesvg_4f507f72 from 'nuxt_plugin_inlinesvg_4f507f72' // Source: ../plugins/inline-svg.ts (mode: 'all')
import nuxt_plugin_perfectscrollbar_61dba17d from 'nuxt_plugin_perfectscrollbar_61dba17d' // Source: ../plugins/perfect-scrollbar.ts (mode: 'all')
import nuxt_plugin_vuedesignplugin_3b16a7a8 from 'nuxt_plugin_vuedesignplugin_3b16a7a8' // Source: ../plugins/vue-design-plugin.ts (mode: 'all')
import nuxt_plugin_antdvueplugin_679d0f19 from 'nuxt_plugin_antdvueplugin_679d0f19' // Source: ../plugins/antd-vue-plugin.ts (mode: 'all')
import nuxt_plugin_tinymcevue_7ac04c4a from 'nuxt_plugin_tinymcevue_7ac04c4a' // Source: ../plugins/tinymce-vue.ts (mode: 'client')
import nuxt_plugin_aggridclient_158a82aa from 'nuxt_plugin_aggridclient_158a82aa' // Source: ../plugins/ag-grid.client.ts (mode: 'client')
import nuxt_plugin_taginputplugin_00987d24 from 'nuxt_plugin_taginputplugin_00987d24' // Source: ../plugins/tag-input-plugin.ts (mode: 'client')
import nuxt_plugin_vuenotify_ffc0b7f2 from 'nuxt_plugin_vuenotify_ffc0b7f2' // Source: ../plugins/vue-notify.ts (mode: 'client')
import nuxt_plugin_primevue_67a111f0 from 'nuxt_plugin_primevue_67a111f0' // Source: ../plugins/primevue.ts (mode: 'client')
import nuxt_plugin_apexchart_b114dfb2 from 'nuxt_plugin_apexchart_b114dfb2' // Source: ../plugins/apexchart.ts (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"gridiron-admin-view","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"## Build Setup"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"gridiron-admin-view"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"gridiron-admin-view"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"gridiron-admin-view"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## Build Setup"}],"script":[{"src":"\u002Fjs\u002FinitScript.js","body":true},{"src":"\u002Fplugins\u002Fglobal\u002Fplugins.bundle.js?v=7.0.6","body":true},{"src":"\u002Fplugins\u002Fcustom\u002Fprismjs\u002Fprismjs.bundle.js?v=7.0.6","body":true},{"src":"\u002Fplugins\u002Fcustom\u002Ffullcalendar\u002Ffullcalendar.bundle.js?v=7.0.6","body":true},{"src":"\u002Fjs\u002Fpages\u002Fwidgets.js?v=7.0.6","body":true}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro:400,400i,700,700i,900"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:300,400,500,600,700"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"},{"rel":"stylesheet","href":"\u002Fplugins\u002Fglobal\u002Fplugins.bundle.css?v=7.0.6"},{"rel":"stylesheet","href":"\u002Fplugins\u002Fcustom\u002Fprismjs\u002Fprismjs.bundle.css?v=7.0.6"},{"rel":"stylesheet","href":"\u002Fcss\u002Fstyle.bundle.css?v=7.0.6"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.c98f4fae.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png","sizes":"512x512"}],"style":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_48e19a43 === 'function') {
    await nuxt_plugin_plugin_48e19a43(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_e93b9696 === 'function') {
    await nuxt_plugin_workbox_e93b9696(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_0fa2970f === 'function') {
    await nuxt_plugin_nuxticons_0fa2970f(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_1a06888b === 'function') {
    await nuxt_plugin_plugin_1a06888b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_e14ec366 === 'function') {
    await nuxt_plugin_pluginrouting_e14ec366(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_a2268f7c === 'function') {
    await nuxt_plugin_pluginmain_a2268f7c(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_58e2b4a5 === 'function') {
    await nuxt_plugin_apollomodule_58e2b4a5(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_e4025c4e === 'function') {
    await nuxt_plugin_axios_e4025c4e(app.context, inject)
  }

  if (typeof nuxt_plugin_vueperfectscrollbar_4f612464 === 'function') {
    await nuxt_plugin_vueperfectscrollbar_4f612464(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_7a18cf9c === 'function') {
    await nuxt_plugin_bootstrapvue_7a18cf9c(app.context, inject)
  }

  if (typeof nuxt_plugin_portalvue_923e7e9c === 'function') {
    await nuxt_plugin_portalvue_923e7e9c(app.context, inject)
  }

  if (typeof nuxt_plugin_inlinesvg_4f507f72 === 'function') {
    await nuxt_plugin_inlinesvg_4f507f72(app.context, inject)
  }

  if (typeof nuxt_plugin_perfectscrollbar_61dba17d === 'function') {
    await nuxt_plugin_perfectscrollbar_61dba17d(app.context, inject)
  }

  if (typeof nuxt_plugin_vuedesignplugin_3b16a7a8 === 'function') {
    await nuxt_plugin_vuedesignplugin_3b16a7a8(app.context, inject)
  }

  if (typeof nuxt_plugin_antdvueplugin_679d0f19 === 'function') {
    await nuxt_plugin_antdvueplugin_679d0f19(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_tinymcevue_7ac04c4a === 'function') {
    await nuxt_plugin_tinymcevue_7ac04c4a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aggridclient_158a82aa === 'function') {
    await nuxt_plugin_aggridclient_158a82aa(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_taginputplugin_00987d24 === 'function') {
    await nuxt_plugin_taginputplugin_00987d24(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuenotify_ffc0b7f2 === 'function') {
    await nuxt_plugin_vuenotify_ffc0b7f2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_primevue_67a111f0 === 'function') {
    await nuxt_plugin_primevue_67a111f0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_apexchart_b114dfb2 === 'function') {
    await nuxt_plugin_apexchart_b114dfb2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
