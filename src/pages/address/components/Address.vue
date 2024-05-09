<template>
  <div>
    <Header :title="route.query.type == 'add' ? '新增地址' : '编辑地址'"></Header>
    <van-address-edit
        :area-list="areaList"
        :show-delete="route.query.type == 'edit'"
        :address-info="addressInfo"
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
    />
  </div>
</template>

<script>
import Header from '@/components/Header'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {onMounted, reactive, toRefs} from 'vue'
import router from "@/router";

export default {
  name: "Address",
  components: {Header},
  setup() {
    const route = useRoute()
    const store = useStore()
    let data = reactive({
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        },
      },
      addressInfo: {}
    })
    onMounted(() => {
      init()
    })
    const init = () => {
      if (route.query.type == 'edit') {
        data.addressInfo = store.state.addressList.find(item => {
          return item.id == route.query.id
        })
      }
    }
    const onSave = (content) => {
      let tempList = [...store.state.addressList]
      if (content.isDefault) {
        tempList.forEach(item => {
          item.isDefault = false
        })
      }
      if (route.query.type == 'add') {
        tempList.push(content)
      } else {
        const tempId = tempList.findIndex(item => {
          return item.id == route.query.id
        })
        tempList[tempId] = content
      }

      store.commit('addAddressList', tempList)
      // console.log(content)
      router.push('/toAddress')
    }
    const onDelete = () => {
      let tempList = [...store.state.addressList]
      const tempId = tempList.findIndex(item => {
        return item.id == route.query.id
      })
      tempList.splice(tempId,1)
      store.commit('addAddressList',tempList)
      router.push('/toAddress')
    }
    return {route, ...toRefs(data), onSave,onDelete}

  }
}
</script>

<style scoped>

</style>