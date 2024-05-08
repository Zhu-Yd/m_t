<template>
  <div class="order">
    <div class="content">{{ orderList }}</div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import { useStore} from 'vuex'
import {reactive, toRefs} from "vue";

export default {
  name: 'order',
  components: {
    Footer,
  },
  setup () {
    const store = useStore()
    let data = reactive({
      orderList : store.state.orderList
    })
    return { ...toRefs( data )}
  }
}
</script>

<style lang="less" scoped>
.order{
  display: flex;
  flex-flow: column;
  height: 100%;
  .content{
    flex: 1;
    overflow-y:auto;
  }
}

</style>