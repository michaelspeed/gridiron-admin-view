import {GetAdministratorDataDocument, GetDefaultStoreDocument, GetVendorInfoDocument} from "../gql";
import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

export const state = () => ({
    administrator: null,
    vendor: null,
    store: null,
    vendorStore: null
})

export const mutations = {
    setAdministrator(state, administrator) {
        state.administrator = administrator
    },
    removeAdministrator(state) {
        state.administrator = null
    },
    setVendor(state, vendor) {
        state.vendor = vendor
    },
    removeVendor(state) {
        state.vendor = null
    },
    setStore(state, store) {
        state.store = store
    },
    resetStore(state) {
        state.store = null
    },
    setVendorStore(state, store) {
        state.vendorStore = store
    },
    resetVendorStore(state) {
        state.vendorStore = null
    }
}

export const actions = {
    async getAdministrator({commit, dispatch}) {
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetAdministratorDataDocument
        }).then(value => {
            commit('setAdministrator', value.data.GetAdministratorData)
            dispatch('getMainStore')
        }).catch(error => {
            client.query({
                query: GetVendorInfoDocument
            }).then(value1 => {
                dispatch('getMainStore')
                dispatch('getVendorStore')
                commit('setVendor', value1.data.GetVendorInfo)
            }).catch(error1 => {
                console.log(error1)
                commit('removeVendor')
                this.$router.replace({path: '/'})
            })
        })
    },
    async getMainStore({commit}) {
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetDefaultStoreDocument
        }).then(value => {
            commit('setStore', value.data.GetDefaultStore)
        }).catch(error => {
            commit('resetStore')
        })
    },
    async getVendorStore({commit}) {
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetVendorInfoDocument,
        }).then(value => {
            commit('setVendorStore', value.data.GetVendorInfo.store)
        }).catch(error => {
            commit('resetVendorStore')
        })
    },
    async resetAllStore({commit}) {
        console.log('reset')
        commit('removeAdministrator')
        commit('removeVendor')
        commit('resetVendorStore')
        commit('resetStore')
    }
}
