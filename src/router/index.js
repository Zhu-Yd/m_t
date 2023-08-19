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
            path: '/me',
            component: () => import('../pages/mine/Mine'),
        },
        {
            path: '/order',
            component: () => import('../pages/order/Order'),
        },
    ],
});
export default router;