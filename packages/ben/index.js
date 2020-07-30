import ben from './src/main.vue';

/* istanbul ignore next */
ben.install = function(Vue) {
    Vue.component(ben.name, ben);
};

export default ben;
