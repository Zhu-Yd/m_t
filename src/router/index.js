import { createRouter, createWebHashHistory } from 'vue-router';


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
        },
        {
            path: '/order',
            component: () => import('../pages/order/Order'),
        },
        {
            path: '/shop',
            component: () => import('../pages/shop/Shop'),
        },
        {
            path: '/toAddress',
            component: () => import('../pages/address/index'),
        },
        {
            path: '/address',
            component: () => import('../pages/address/components/Address'),
        }
    ],
});
export default router;