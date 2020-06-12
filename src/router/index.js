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
        path: '/porfile',
        component: () => import('views/porfile.vue')
    }, {
        path: "/songLIst/:id",
        name: 'songList',
        component: () => import('common/songList/songList.vue')
    }

]

const router = new vueRouter({
    routes,
    mode: 'history'
})


export default router