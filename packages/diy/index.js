import AntDiy from './src/main';

/* istanbul ignore next */
AntDiy.install = function(Vue) {
    Vue.component(AntDiy.name, AntDiy);
};

export default AntDiy;
