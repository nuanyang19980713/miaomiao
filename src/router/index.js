import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from '@/router/MovieRouter'
import MineRouter from '@/router/MineRouter'
import CinemaRouter from '@/router/CinemaRouter'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        MovieRouter,
        MineRouter,
        CinemaRouter,
        // 如果找不到路由重定向到movie
        {path: '/*',redirect: '/movie'}
    ],
    linkActiveClass: 'linkActive'
})

export default router
