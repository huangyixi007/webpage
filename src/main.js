import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './registerServiceWorker'
import './permission';
import vueScrollwatch from "vue-scrollwatch"

import './styles/index.scss'

Vue.config.productionTip = false;
// 监听滚动条滚动
Vue.use(vueScrollwatch)

// import '../mock/mock';

import { mockXHR } from '../mock'
mockXHR()

// if (process.env.NODE_ENV === 'development') {
//   mockXHR()
// }

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
