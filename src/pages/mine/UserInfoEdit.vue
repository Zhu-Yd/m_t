<template>
  <div class="userEdit">
    <Header title="账号管理"/>
    <div class="input-item">
      <van-field v-model="nickName" label="昵称" placeholder="请输入昵称"/>
      <van-field
          v-model="describe"
          label="个性签名"
          placeholder="请输入签名"
      />
      <van-field v-model="password" label="密码" placeholder="请输入密码"/>
    </div>
    <van-button
        type="primary"
        round
        color="#ffc400"
        class="save-btn"
        block
        @click="save"
    >
      保存
    </van-button>
    <van-button
        type="primary"
        round
        color="#ffc400"
        class="save-btn"
        block
        @click="logout"
    >退出登录
    </van-button
    >
  </div>

</template>

<script>
import Header from '@/components/Header'
import {reactive, toRefs} from 'vue'
import {Toast} from 'vant'
import router from "@/router";

export default {
  name: "UserInfoEdit",
  components: {Header},
  setup() {
    let data = reactive({
      nickName: '',
      password: '',
      describe: ''
    })
    const save = () => {
      let userInfo = {
        name: data.nickName,
        password: data.password,
        describe: data.describe
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      Toast('用户信息修改成功')
      router.push('/mine')
    }
    const logout = () => {
      localStorage.setItem('isLogin', 0)
      router.push('/login')
    }
    return {...toRefs(data), save, logout}
  }
}
</script>

<style scoped lang="less">
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}

.save-btn {
  width: 80%;
  margin: 20px auto;
}

</style>