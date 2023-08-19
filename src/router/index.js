import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Mine from "../pages/mine/Mine";
import Order from "../pages/order/Order";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/cart',
            component: Cart,
        },
        {
            path: '/me',
            component: Mine,
        },
        {
            path: '/order',
            component: Order,
        },
    ],
});
export default router;