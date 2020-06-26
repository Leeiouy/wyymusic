import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)


const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('common/login/login.vue')
    },
    {
        path: '/login/phone',
        component: () => import('common/login/phone.vue')
    },
    {
        path: '/find',
        name: 'find',
        component: () => import('views/find.vue')
    },
    {
        path: '/yuncun',
        component: () => import('views/yuncun.vue')
    },
    {
        path: '/profile',
        component: () => import('views/profile.vue')
    },
    {
        path: '/video',
        component: () => import('views/video.vue')
    },

    {
        path: '/video/details/:id',
        name: 'videoDetalis',
        component: () => import('common/videoDetails/videoDetails.vue')
    },
    {
        path: '/playMusicDetails',

        component: () => import('common/playMusic/playMusicDetails.vue')

    }, {
        path: "/songLIst/:id",
        name: 'songList',
        component: () => import('common/songList/songList.vue')
    },
    {
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
    },
    {
        path: "/search",
        name: 'search',
        component: () => import('common/search/search.vue'),
        children: [{
                path: '',
                redirect: "hot"
            },
            {
                path: 'hot',
                component: () => import('common/search/component/searchHot.vue')
            },
            {
                path: 'result/:id',
                component: () => import('common/search/component/searchResult.vue')
            }
        ]
    }
]

const router = new vueRouter({
    routes,
    mode: 'history',

})

router.beforeEach((to, from, next) => {

    if (to.path == '/profile') {
        //需要登入才能进入 我的  界面
        return

    } else {
        next()
    }





})

export default router