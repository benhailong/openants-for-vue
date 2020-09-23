import datePicker from './src/datePicker.vue';

/* istanbul ignore next */
datePicker.install = function(Vue) {
    Vue.component(datePicker.name, datePicker);
};

export default datePicker;
