import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// 自定义配色方案
import "./assets/theme/index.css";
import openants from "./../packages/index";

import router from "./router";

// 引用store
import store from "./store";

Vue.use(ElementUI);
Vue.use(openants);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
