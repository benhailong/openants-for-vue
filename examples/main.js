import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import openants from "./../packages/index"

// import VueTinymce from "@packy-tang/vue-tinymce"

Vue.use(ElementUI)
Vue.use(openants)
// Vue.use(VueTinymce)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
