import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery');

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
