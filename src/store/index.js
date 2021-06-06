
import Vue from 'vue'
import Vuex from 'vuex'
import fight from './modules/fight'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fight
  }
})
