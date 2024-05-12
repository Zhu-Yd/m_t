import { createRouter, createWebHashHistory } from 'vue-router'
import {Toast} from 'vant'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('../pages/home/Home'),
        },
        {
            path: '/cart',
            component: () => import('../pages/cart/Cart'),
        },
        {
            path: '/mine',
            component: () => import('../pages/mine/Mine'),
             meta: {
                isAuth: true
            }
        },
        {
            path: '/order',
            component: () => import('../pages/order/Order'),
             meta: {
                isAuth: true
            }
        },
        {
            path: '/shop',
            component: () => import('../pages/shop/Shop'),
        },
        {
            path: '/toAddress',
            component: () => import('../pages/address/index'),
             meta: {
                isAuth: true
            }
        },
        {
            path: '/address',
            component: () => import('../pages/address/components/Address'),
             meta: {
                isAuth: true
            }
        },
        {
            path: '/login',
            component: () => import('@/pages/login/Login'),
        },
        {
            path: '/register',
            component: () => import('@/pages/login/Register'),
        },
        {
            path: '/userinfoedit',
            component: () => import('@/pages/mine/UserInfoEdit'),
        }
    ],
});

router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.getItem('isLogin')==1){
            next()
        }else{
            Toast('请先登录')
            router.push('/login')
        }
    }else{
        next()
    }
})
export default router;