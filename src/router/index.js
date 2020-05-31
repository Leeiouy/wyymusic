import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)


const routes = [{
    path: '',
    redirect: '/home'
},
]

const router = new vueRouter({
    routes,
    mode: 'history'
})


export default router