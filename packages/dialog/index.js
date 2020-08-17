import AntUrlDialog from "./src/main";

/* istanbul ignore next */
AntUrlDialog.install = function(Vue) {
  Vue.component(AntUrlDialog.name, AntUrlDialog);
};

export default AntUrlDialog;
