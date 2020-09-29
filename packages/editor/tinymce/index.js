import AntEditorTinymce from "./src/main";

/* istanbul ignore next */
AntEditorTinymce.install = function(Vue) {
  Vue.component(AntEditorTinymce.name, AntEditorTinymce);
};

export default AntEditorTinymce;
