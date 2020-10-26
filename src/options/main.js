import Vue from 'vue'
import store from '../store'
import App from './App.vue'
import Element from 'element-ui'
Vue.use(Element)




new Vue({
  el: '#app-options',
  store,
  render: h => h(App)
})
