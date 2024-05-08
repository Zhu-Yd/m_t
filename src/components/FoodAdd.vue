<template>
  <div class="content_item">
    <div class="left">
      <van-checkbox v-if="showCheckbox" :name="item.id" checked-color="#ffc400"></van-checkbox>
      <img :src="item.pic"/>
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <van-icon
            name="add-o"
            v-if="item.add && data.showAdd"
            @click="addClick(item.id)"
        />
        <van-stepper
            v-model="data.stepValue"
            v-else
            :disable-input=true
            :min="data.islock?1:0"
            :name="item.id"
            @change="onChange"
        />
      </div>
    </div>
    <div class="price">￥{{ item.price }}</div>
  </div>
</template>

<script>
import {reactive, inject, onMounted, onUnmounted} from 'vue'

export default {
  name: 'FoodAdd',
  props: {
    item: {
      type: Object,
      required: true
    },
    showCheckbox: {type: Boolean}
  },
  emits: ['changeNum', 'changeAddShow'],
  setup(props, ctx) {
    const eventBus = inject('eventBus')
    const data = reactive({
      stepValue: props.item.num,
      showAdd: true,
      islock: false
    })
    onMounted(()=>{
      eventBus.on('stepBox:lock',()=>{
        console.log('接受到计步器锁定事件')
        data.islock = true
      })
    })
    onUnmounted(()=>{
      eventBus.off('stepBox:lock')
    })
    function addClick() {
      ctx.emit('changeNum', props.item.num + 1)
      ctx.emit('changeAddShow', false)
      // props.item.num = props.item.num + 1
      // props.item.add = false
      data.stepValue = 1
      data.showAdd = false
    }

    function onChange(value, detail) {
      if (props.item.id === detail.name) {
        ctx.emit('changeNum', value)
        // props.item.num = value
        if (value == 0) {
          // console.log('计步器值为0')
          data.showAdd = true
          ctx.emit('changeAddShow', true)
          // props.item.add = true
        }
      }
    }

    // 将 props.item 和 data 转换为响应式引用并返回
    return {data, addClick, onChange}
  }
};
</script>


<style lang='less' scoped>
.content_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .price {
    font-size: 16px;
    font-weight: 600;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;

      .title {
        font-size: 16px;
      }

      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>