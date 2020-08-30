// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import store from './store/store.js'
import '../static/global/index.css'

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'leaflet/dist/leaflet';
import 'leaflet-ajax/dist/leaflet.ajax.min.js';
import 'jquery/dist/jquery.min.js';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    el: '#app',
    router, // 加入路由
    store, // 加入 Vuex
    render: h => h(App)
}).$mount(root);


// 制定进入连接前检查登录状态
router.beforeEach(function (to, from, next) {
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next()
        } else {
            next({name: 'login'})
        }
    } else {
        next()
    }
});
