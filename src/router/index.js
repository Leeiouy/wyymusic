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
    }
]

const router = new vueRouter({
    routes,
    mode: 'history'
})


export default router