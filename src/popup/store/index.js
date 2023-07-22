
import { createStore } from 'vuex'
import { fights } from '../utils/fights'

const state = () => {
  return {
    fight: []
  }
}

const mutations = {
  setFights (state  , fights) {
    state.fight = fights
  }
}
const actions = {
  getFights ({commit}) {
    commit('setFights', fights.results)
    return
  }
}

const getters = {
  fights: (state) => {
    return state.fight
  }
}

export default createStore({
  getters,
  actions,
  mutations,
  state
})