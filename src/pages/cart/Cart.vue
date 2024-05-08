<template>
  <div class="cart">
    <Header :title = "'购物车'" v-model:isEdit="isEdit"></Header>
    <div class="content">
      <blank v-if="isShowBlank"></blank>
      <cart-items v-else @isEmpty="isShowBlank = true"></cart-items>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {reactive, toRefs} from 'vue'
import Blank from '@/components/Blank'
import CartItems from '@/pages/cart/components/CartItems'
import {useStore} from "vuex";
export default {
  name: 'cart',
  components: {
    Blank,
    CartItems,
    Footer, Header
  },
  setup() {
    const store = useStore()
    let data = reactive({
      isEdit: false,
      isShowBlank: true
    })
    function init () {
      if(store.state.cartList.length === 0){
        data.isShowBlank = true
      }else{
        data.isShowBlank = false
      }
    }
    init()
    return { ...toRefs(data)}
  }
}
</script>

<style lang="less" scoped>
.cart{
  display: flex;
  flex-flow: column;
  height: 100%;
  .content{
    flex: 1;
    overflow-y:auto;
  }
}

</style>