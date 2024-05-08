<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack"/>
    <div>{{ title }}</div>
    <div class="edit" v-if="isEdit != undefined" @click="isEditFn">{{isEdit?'完成':'编辑'}}</div>
  </div>

</template>

<script>
import {useRouter} from 'vue-router'
import {inject, onMounted, onUnmounted} from 'vue'

export default {
  props: ["title", "isEdit"],
  emits:['update:isEdit'],
  setup(props, ctx) {
    const router = useRouter()
    const eventBus = inject('eventBus')
    onMounted(()=>{
      eventBus.on('header:empty',()=>{
        ctx.emit('update:isEdit', false)
      })
    })
    onUnmounted(()=>{
      eventBus.off('header:empty')
    })
    const toBack = () => {
      router.back()
    }
    function isEditFn () {
      ctx.emit('update:isEdit', !props.isEdit)
      eventBus.emit('header:isEdit', !props.isEdit)
    }
    return {toBack , isEditFn}
  }

};
</script>


<style lang='less' scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;

  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }

  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>