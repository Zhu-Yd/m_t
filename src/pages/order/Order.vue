<template>
  <div class="order">
    <Header title="订单"></Header>
    <van-contact-card v-if="isShowContact" type="edit" :tel="contact.tel" :name="contact.name" @click="toAddress"/>
    <van-contact-card v-else type="add" @click="toAddress" add-text="添加地址"/>
    <div class="content">
      <template v-for="item in store.state.orderList" :key="item.id">
        <van-card
            :num="item.num"
            :price="item.price"
            :title="item.title"
            :thumb="item.pic"
        />
      </template>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {onMounted, reactive, toRefs} from 'vue'
import Header from '@/components/Header'

export default {
  name: 'order',
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    let data = reactive({
      orderList: store.state.orderList,
      isShowContact: false,
      contact: {
        name: '',
        tel: ''
      }
    })
    onMounted(() => {
      init()
    })
    const init = () => {
      store.state.addressList.map(item => {
        if (item.isSelected || item.isDefault ) {
          data.isShowContact = true
          data.contact.name = item.name
          data.contact.tel = item.tel
        }
      })
    }
    const toAddress = () => {
      router.push('/toAddress')
    }

    return {...toRefs(data), store, toAddress}
  }
}
</script>

<style lang="less" scoped>
.order {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    overflow-y: auto;
  }
}

</style>