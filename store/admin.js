import {GetAdministratorDataDocument} from "../gql";
import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

export const state = () => ({
    administrator: null
})

export const mutations = {
    setAdministrator(state, administrator) {
        state.administrator = administrator
    },
    removeAdministrator(state) {
        state.administrator = null
    }
}

export const actions = {
    async getAdministrator({commit}) {
        let client = await this.app.apolloProvider.defaultClient
        await client.query({
            query: GetAdministratorDataDocument
        }).then(value => {
            commit('setAdministrator', value.data.GetAdministratorData)
        }).catch(error => console.log(error))
    }
}
