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
    async getVendor({commit}) {
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetVendorInfoDocument
        }).then(value => {
            commit('setVendor', value.data.GetVendorInfo)
        }).catch(error => commit('setVendor', null))
    }
}
