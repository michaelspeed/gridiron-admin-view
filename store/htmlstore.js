export const state = () => ({
  datascroll: null
})

export const mutations = {
  setDataScroll(state){
    state.datascroll = 'on'
  },
  removeDataScroll(state) {
    state.datascroll = null
  }
}

export const actions = {
  async setDataScroll({commit}) {
    commit('setDataScroll')
  },
  async removeDataScroll({commit}){
    commit('removeDataScroll')
  }
}
