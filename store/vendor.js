import {GetVendorInfoDocument} from "../gql";
import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

export const state = () => ({
    vendor: null
})

export const mutations = {
    setVendor(state, vendor) {
        state.vendor = vendor
    }
}

export const actions = {
    getVendor({commit}) {
        let client = this.app.apolloProvider.defaultClient
        client.query({
            query: GetVendorInfoDocument
        }).then(value => {
            commit('setVendor', value.data.GetVendorInfo)
        }).catch(error => {
            commit('setVendor', null)
        })
    }
}
