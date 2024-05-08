import {createStore} from "vuex";

export default createStore({
    state: {
        cartList: [],
        orderList: []
    },
    mutations: {
        addCart(state, value) {
            this.state.cartList = value
            // console.log(this.state.cartList.length)
        },
        addOrderList(state, value) {
            this.state.orderList = value
        }
    },
    actions: {}
})