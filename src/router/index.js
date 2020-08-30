import Vue from 'vue'
import Router from 'vue-router'

import VIndex from '@components/VIndex'
import VLogin from '@components/VLogin'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'index', component: VIndex, meta:{requireAuth:true}},
        {path: '/login', name: 'login', component: VLogin},
    ],
    mode: 'history',
})
