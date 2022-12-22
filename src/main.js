import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
