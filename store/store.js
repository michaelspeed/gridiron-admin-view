import {Administrator, GetAdministratorDataDocument, GetDefaultStoreDocument, Store} from "../gql";

export const state = () => ({
    store: null,
    loaded: false
})

export const mutations = {
    setStore(state, store) {
        state.store = store
    },
    setLoading(state, payload) {
        state.loaded = payload
    },
    resetStore(state) {
        state.store = null
    }
}

export const actions = {
    // @ts-ignore
    async getDefaultStore({commit}) {
        // @ts-ignore
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetDefaultStoreDocument
            // @ts-ignore
        }).then(value => {
            commit('setStore', value.data.GetDefaultStore)
            commit('setLoading', true)
            // @ts-ignore
        }).catch(error => {
            console.log(error)
            commit('setLoading', true)
        })
    },
    async removeStore({commit}) {
        commit('removeStore')
    }
}
