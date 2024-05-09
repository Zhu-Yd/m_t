<template>
  <div>
    <van-address-list
        v-model="chosenAddressId"
        :list="addressList"
        default-tag-text="默认"
        @add="onHandler($event,'add')"
        @edit="onHandler($event,'edit')"
        @select="onSelected"
    />
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  name: 'AddressIndex',
  setup() {
    const store = useStore()
    const router = useRouter()
    let data = reactive({
      addressList: [],
      chosenAddressId: 0,
    })
    onMounted(() => {
      init()
    })
    const init = () => {
      data.addressList = store.state.addressList.map(item => {
        if (item.isSelected || item.isDefault) {
          data.chosenAddressId = item.id
        }
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          address: `${item.province}${item.city}${item.county} ${item.addressDetail}`,
          isDefault: item.isDefault
        }
      })
    }
    const onHandler = (eventValue,...args) => {
      let id = 0
      if(eventValue){
        id=eventValue.id
      }
      router.push({
        path: '/address',
        query:{
          id: id,
          type: args[0]
        }
      })
    }

    const onSelected = (item, index) =>{
      let tempList = [...store.state.addressList]
      tempList.forEach(item => {
        item.isSelected = false
      })
      tempList[index].isSelected=true
      store.commit('addAddressList',tempList)
      router.push("/order")
    }

    return {...toRefs(data), onHandler, onSelected}
  }
}
</script>

<style scoped>

</style>