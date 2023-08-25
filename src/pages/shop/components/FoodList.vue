<template>
  <div class="food_list" v-if="s_index===0">

    <van-tree-select
        height="88vw"
        :items="items"
        :main-active-index.sync="active"
        @click-nav="navClick">
      <template #content>
        <div v-for="(i, index) in subItem" class="item_bg">
          <FoodAdd
              :item="i"
              :showAdd="true"
              :addClick="addClick"
              :onChange="onChange"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodData.content }}</div>
</template>

<script>
import {reactive, toRefs} from 'vue';
import FoodAdd from "@/components/FoodAdd";
import {useStore} from "vuex";

export default {
  props: ['foodData', 's_index'],
  components: {
    FoodAdd
  },
  setup(props) {
    const store = useStore();
    // console.log(props)
    let data = reactive(
        {
          active: 0,
          items: [],
          subItem: [],
          cart: store.state.cartList
        }
    )
    const init = () => {
      let tab_list = [];
      props.foodData?.items?.map((i, index) => {
        tab_list.push({text: i.text});
        if (data.active === index) {
          data.subItem = i.children;
          data.subItem.forEach((item) => {
            data.cart.forEach((innerItem) => {
              // console.log("购物车数据：", innerItem)
              // console.log("页面数据：", item)
              if (innerItem.id == item.id) {
                console.log("数据id相等")
                item.num = innerItem.num
                item.add=false
              }
            })
          })
          console.log(data.subItem)

        }
      });
      data.items = tab_list
    }
    init()

    // 点击左侧的导航
    const navClick = (i) => {
      data.active = i;
      init()
    };
    // 切换步进器
    const addClick = (i) => {
      data.subItem.forEach((item) => {
        if (item.id === i) {
          item.add = false;
          item.num += 1;
        }
      });
    };

    // 步进器增加触发事件
    const onChange = (value, detail) => {
      data.subItem.forEach((item) => {
        if (item.id === detail.name) {
          item.num = value;
          if (value == 0) {
            item.add = true //为0时，显示+号按钮
            // console.log(item.add)
          }

        }
      });
    };
    return {...toRefs(data), navClick, addClick, onChange}
  }
};
</script>

<style lang='less' scoped>
.food_list {
  margin-top: 20px;

  .item_bg {
    padding: 10px;
  }
}

/deep/ .van-tree-select__item--active {
  color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>