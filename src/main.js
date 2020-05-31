import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'lib-flexible'//网页缩放
import './vant/index' //vant UI库


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')