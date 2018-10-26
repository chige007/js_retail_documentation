import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import directives from './components/directives'
import filters from './components/filters'
import app from './app.vue'
import './styles/common.less'
import './styles/animation.less'

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes
});
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(directives);
Vue.use(filters);

new Vue({
    el : "#MYAPP",
	router: router,
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