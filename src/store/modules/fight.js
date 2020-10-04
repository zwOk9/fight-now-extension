
// import { fights } from '../../utils/fights'
import { _axios } from '../../plugins/axios'


const state = {
 fights: []
}

const mutations = {
  setFights (state, fights) {
    state.fights = fights
   },
}

const actions = {
  getFights ({ commit }) {
    _axios
      .get('getFight')
      .then(response => {
        let results = response.data.results
        commit('setFights', results)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}

const getters = {
    fights: (state) => {
        return state.fights
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}