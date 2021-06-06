import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store'
import App from './App.vue'
import Element from 'element-ui'
import '../element-variables.scss'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)



Vue.use(Vuex)


Vue.use(Element)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
