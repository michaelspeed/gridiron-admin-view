import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'

Vue.use(VueCompositionApi)

export enum AuthType {
    VENDOR,
    USER,
    ADMIN,
    STAFF
}
export const state = () => ({
    user: null,
    type: AuthType.VENDOR,
    token: null
})

export const mutations = {
    increment (state: any) {
        state.counter++
    },
    setUser(state, user) {
        state.user = user
    },
    setType(state, type) {
        state.type = type
    },
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {

}
