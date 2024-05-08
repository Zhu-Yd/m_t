<template>
  <div class="cartDetails">
    <!-- 商品的列表 -->
    <div class="content">
      <van-checkbox-group v-model="ticks" @change="groupChange">
        <div v-for="i in store.state.cartList" :key="i.id">
          <FoodAdd :item="i" :showCheckbox="true" @changeNum="changeNumFn(i,$event)"/>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar
        :price="resultPrice * 100"
        button-text="结算"
        @submit="onSubmit"
        class="submit-all"
        button-color="#ffc400"
        v-if="!isEdit"
    >
      <van-checkbox v-model="checked" checked-color="#ffc400" @click="chooseAll">
        全选
      </van-checkbox>
    </van-submit-bar>

    <!-- 删除 -->
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox
            v-model="checked"
            checked-color="#ffc400"
            @click="chooseAll"
        >
          全选
        </van-checkbox>
      </div>
      <div class="delete" @click="deleteFn">删除</div>
    </div>
  </div>
</template>


<script>
import {useStore} from 'vuex'
import FoodAdd from '@/components/FoodAdd'
import {reactive, toRefs, inject, onMounted, onUnmounted, computed} from 'vue'
import {Toast} from 'vant'
import router from "@/router";

export default {
  name: 'CartItems',
  components: {FoodAdd},
  setup(props, ctx) {
    const eventBus = inject('eventBus');
    const store = useStore()
    let data = reactive({
      checked: true,
      isEdit: false,
      ticks: []
    })
    onMounted(() => {
      init()
      eventBus.on('header:isEdit', (payload) => {
        data.isEdit = payload
      })
    })
    onUnmounted(()=>{
      eventBus.off('header:isEdit')
    })

    const resultPrice = computed(()=>{
      // console.log('计算总价')
      let sum = 0
      store.state.cartList.map( item =>{
        if (data.ticks.includes(item.id)) {
          sum = sum + item.num*item.price}
      })
      return sum
    })
    function init(){
      store.state.cartList.map((item)=>{
        data.ticks.push(item.id)
      })
    }

    function chooseAll() {
      data.ticks = []
      if (data.checked) {
        store.state.cartList.forEach(item => {
          data.ticks.push(item.id)
        })
      }
    }

    function changeNumFn(item, value) {
      if (value != 0) {
        // console.log('修改了购物车商品数量'+ value)
        // 复制购物车列表副本
        let cartListTemp = [...store.state.cartList];
        // 找到要修改的商品在列表中的索引
        const changeIndex = cartListTemp.findIndex((storeItem) => storeItem.id === item.id);
        // 如果找到了对应的商品
        if (changeIndex !== -1) {
          // 更新商品的数量
          cartListTemp[changeIndex].num = value;
          // 提交 mutation 更新购物车列表
          store.commit('addCart', cartListTemp);
        }
      } else {
        Toast.fail('购物车中的数量不能为0')
        eventBus.emit('stepBox:lock')
      }

    }

    function groupChange (names){
      // console.log(names)
      if(names.length !== store.state.cartList.length){
        data.checked = false
      }else{
        data.checked = true
      }
    }

    function deleteFn (){
      let tempList = [...store.state.cartList]
      const result = tempList.filter(item => {
        return !data.ticks.includes(item.id)
      })
      store.commit('addCart', result)
      if (result.length==0){
        ctx.emit('isEmpty')
        eventBus.emit('header:empty')
      }
    }

    const onSubmit = () => {
      const tempList = [...store.state.cartList]
      const result = tempList.filter(item => {
        return data.ticks.includes(item.id)
      })
      store.commit('addOrderList',result)
      router.push('/order')
    }

    return {store, ...toRefs(data), chooseAll, changeNumFn, groupChange, deleteFn, resultPrice, onSubmit}
  }
}
</script>

<style lang='less' scoped>
.cartDetails {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;

  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;

    .left {
      display: flex;
      align-items: center;
    }

    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>