import datePicker from './datePicker/index.js';
import ben from './ben/index.js';

const components = [
	datePicker,
	ben
]

const install = function (Vue) {

    if(install.installed) return
    components.map(component => Vue.component(component.name, component))

}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    datePicker,
	ben
}
