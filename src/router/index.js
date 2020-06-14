import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)


const routes = [{
        path: '',
        redirect: '/find'
    },
    {
        path: '/find',
        component: () => import('views/find.vue')
    },
    {
        path: '/yuncun',
        component: () => import('views/yuncun.vue')
    }, {
        path: '/profile',
        component: () => import('views/profile.vue')
    }, {
        path: "/songLIst/:id",
        name: 'songList',
        component: () => import('common/songList/songList.vue')
    }, {
        path: '/topList',
        name: 'topList',
        component: () => import('components/find/topList/topList.vue')
    },
    {
        path: '/playList',
        name: 'playList',
        component: () => import('components/find/playList/playList.vue')
    },
    {
        path: '/comment/:id',
        name: 'comment',
        component: () => import('common/comment/comment.vue')
    }

]

const router = new vueRouter({
    routes,
    mode: 'history'
})


export default router