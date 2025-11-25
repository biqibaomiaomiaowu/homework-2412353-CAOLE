import Vue from 'vue'
import App from './App.vue'
import DeleteButton from './components/DeleteButton.vue'

Vue.component('DeleteButton', DeleteButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
