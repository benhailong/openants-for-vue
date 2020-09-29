import AntImageDialog from "./src/main";

/* istanbul ignore next */
AntImageDialog.install = function(Vue) {
  Vue.component(AntImageDialog.name, AntImageDialog);
};

export default AntImageDialog;
