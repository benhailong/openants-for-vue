<br>

<p align="center">
  <img width="280px" src="examples/assets/logo.png" alt="logo" />
</p>
<br>

<br>

<br>

## 介绍

- 基于VUE和Element
- 自定义小程序功能
- 商品SKU

<br>

## 截图

<p align="center">
  <img width="100%" src="examples/assets/diy.jpg"/>
</p>

<br>

## 安装

```shell
npm install openants -S
or
yarn add openants
```

## 快速开始
OpenAnts组件是基于Element开发，所以在你安装安装OpenAnts我们将自动帮你安装ElementUI，而无需你自己安装，我们建议elementUI全局引入！

### 全局使用OpenAnts
main.js中的配置
```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';   // 需要引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';  // 需要引入 element-ui 的主题文件
import OpenAnts from 'openants';   // 需要引入 OpenAnts
import App from './App.vue';

Vue.use(ElementUI);  // 将 ElementUI 组件注册到VUE
Vue.use(OpenAnts);  // 将 ElementUI OpenAnts

new Vue({
  el: '#app',
  render: h => h(App)
});
```
### 按需使用OpenAnts
main.js中的配置
```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';   // 需要引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';  // 需要引入 element-ui 的主题文件
import {btn,xxx} from 'openants';   // 需要引入 OpenAnts
import App from './App.vue';

Vue.use(ElementUI);  // 将 ElementUI 组件注册到VUE
Vue.component(btn.name, btn);
Vue.component(xxx.name, xxx);
/* 或写为
 * Vue.use(btn)
 * Vue.use(xxx)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 教程
http://docs.unpor.com/docs/openants_for_vue/openants_for_vue-1c9f9qf36cnl9
