import Vue from 'vue';

import 'vx-easyui/dist/themes/gray/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
import locale from 'vx-easyui/dist/locale/easyui-lang-zh_CN'

import app from './app.vue';
import './styles/common.less';

Vue.use(EasyUI, {
    locale: locale
});

new Vue({
    el : "#MYAPP",
	data : () => {
        return {
        }
	},
	render: (h) => h(app)
});

if(process.env.NODE_ENV == "development"){
    console.log("当前是开发模式！");
}else if(process.env.NODE_ENV == "production"){
    console.log("当前是生产模式！");
}