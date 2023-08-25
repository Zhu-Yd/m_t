import {createStore} from "vuex";

export default createStore({
    state: {
        cartList: [],
    },
    mutations: {
        addCart(state, value) {
            this.state.cartList = value
            console.log(this.state.cartList.length)
        }
    },
    actions: {}
})