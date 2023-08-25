<template>
  <div class="store_list">
    <div v-for="(item,index) in store_list" :key="index">
      <Store_item class='items' :s_item="item" @click="go_shop(item.shop_id)"></Store_item>
    </div>
  </div>
</template>

<script>
import Store_item from "@/pages/home/components/Store_item";
import {useRouter} from "vue-router"

export default {
  name: "Store",
  components: {Store_item},
  props: ['store_list'],

  // vue2路由跳转的方法
  // methods: {
  //   go_shop(shop_id) {
  //     console.log("进入店铺:" + shop_id);
  //     this.$router.push({path: '/shop', query: {shop_id: shop_id}});
  //   }
  // }

  //vue3进行路由跳转的方法
  setup() {
    const router = useRouter();

    const go_shop = (shop_id) => {
      //带参数的路由跳转
      router.push({ path: '/shop', query: {shop_id:shop_id} }); // 注意路径的写法
    };

    return {
      go_shop
    };
  }
}
</script>

<style lang="less" scoped>

.items:not(:first-child) {
  background: white;
  margin-top: 15px;
  border-radius: 15px;
}
</style>