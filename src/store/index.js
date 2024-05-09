import {createStore} from "vuex";

export default createStore({
    state: {
        cartList: [],
        orderList: [],
        //由于没有服务器,暂时选择用vuex存储地址
        addressList: [{
        id: 1001,
        name: '李小1',
        tel: '18616528797',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: 'asd',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: '赵02',
        tel: '13239932022',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: 'asd',
        isDefault: false,
        areaCode: '110101',
      },]
    },
    mutations: {
        addCart(state, value) {
            this.state.cartList = value
            // console.log(this.state.cartList.length)
        },
        addOrderList(state, value) {
            this.state.orderList = value
        },
        addAddressList(state, value){
            this.state.addressList = value
        }
    },
    actions: {}
})