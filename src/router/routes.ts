export const routes = [
    {
        path: '/',
        component: () => import('@/Layout/index.vue'),
        name: 'Layout',
        meta: {
            title: '',
            hidden: false,
            icon: '',
        },
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },
        ],
    },
    {
        //登录
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
            hidden: true, 
            icon: 'Promotion',
        },
    },
    {
        //404
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DocumentDelete',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
            title: '404',
            hidden: true,
            icon: 'DataLine',
        },
    }
]