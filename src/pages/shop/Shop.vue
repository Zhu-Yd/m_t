<template>
  <div class="storeDetails">
    <Header title="店铺"/>
    <div class="content">
      <div class="img"/>
      <div class="foodClassify">
        <div class="name">
          {{ title }}{{ shop_id }}
          <img :src="img" class="store_img" alt=""/>
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab v-for="(i, index) in storeData" :title="i.name" :key="index">
              <FoodList :s_index="index" :foodData="i.data"/>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="service"/>
      <van-action-bar-icon
          icon="cart-o"
          text="购物车"
          :badge="cart_num"
          @click="toCart"
      />
      <van-action-bar-button
          type="warning"
          text="加入购物车"
          @click="handleAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="clickBuy"/>
    </van-action-bar>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import FoodList from '@/pages/shop/components/FoodList'
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {Toast} from 'vant'
import {useStore} from 'vuex'

export default {
  components: {
    Header,
    FoodList,
  },

  setup() {
    //使用路由，取得Store页面传过来的路由值
    const router = useRouter();
    const route = router.currentRoute;
    //使用vuex
    const store = useStore();
    const service = () => {
      Toast.fail("敬请期待...");
    }
    const toCart = () => {
      router.push('./cart')
      // console.log("toCart")
    }
    const handleAddCart = (type) => {
      let dataList = []
      data.storeData[0].data.items.forEach((item) => {
        item.children.forEach((innerItem) => {
          if (innerItem.num > 0) {
            dataList.push(innerItem)
            // console.log("加入购物车：", innerItem)
          }
        })
      })
      data.cart_num = dataList.length;

      // console.log("当前购物车：", dataList)
      store.commit("addCart", dataList)

      if(dataList.length===0){
        Toast("请选择商品")
        return
      }
      if (type=='buy'){
        toCart()
      }
      // console.log("购物车数量：",store.state.cartList.length)
    }
    const clickBuy = () => {
      handleAddCart('buy')
    }
    let data = reactive({
      //路由参数值的接收
      shop_id: route.value.query.shop_id || null,
      cart_num:store.state.cartList.length,
      title: "鱼拿酸菜鱼",
      img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
      storeData: [
        {
          name: "点菜",
          data: {
            content: "点菜",
            items: [
              {
                text: "热销套餐",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "招牌酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 0,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "藤椒酸菜鱼",
                    num: 0,
                    price: 25.0,
                    id: 1,
                    add: true,
                  },
                ],
              },
              {
                text: "澳洲肥牛",
                children: [
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "酸汤肥牛",
                    num: 0,
                    price: 25.0,
                    id: 3,
                    add: true,
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                    title: "香辣肥牛",
                    num: 0,
                    price: 25.0,
                    id: 4,
                    add: true,
                  },
                ],
              },
              {
                text: "超级折扣",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "无骨酸菜鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "香辣水煮鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                ],
              },
            ],
          },
        },
        {name: "评价", data: {content: "评价"}},
        {name: "商家", data: {content: "商家"}},
      ],
    })
    return {
      ...toRefs(data),
      service, toCart, handleAddCart, clickBuy,
    }
  },
};
</script>

<style lang='less' scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;

    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }

    .foodClassify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }

      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;

        .store_img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>