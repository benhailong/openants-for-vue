import Vue from 'vue'
import App from './App.vue'
import datePicker from "./../packages/index"

Vue.use(datePicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
