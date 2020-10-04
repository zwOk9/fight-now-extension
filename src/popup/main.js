import Vue from 'vue'
import Vuex from 'vuex'
import store from '../store'
import App from './App.vue'
import Element from 'element-ui'
import '../element-variables.scss'
import moment from 'moment'



Vue.use(Vuex)


Vue.use(Element)
Vue.use(moment)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
