import datePicker from "./datePicker/index.js";
import AntDiy from "./diy/index.js";
import AntFormSwitch from "./form/switch/index.js";
import AntFormColorPicker from "./form/colorPicker/index.js";

const components = [datePicker, AntDiy, AntFormSwitch, AntFormColorPicker];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  datePicker,
  AntDiy,
  AntFormSwitch,
  AntFormColorPicker
};
