import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import leftMenu from "./modules/leftMenu";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    leftMenu
  },
  getters
});
