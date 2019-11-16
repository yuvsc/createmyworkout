import Vue from 'vue'
import App from './App.vue'

console.clear()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')