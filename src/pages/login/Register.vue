<template>
  <div class="register">
    <Header title="注册"/>
    <div class="img">滴团</div>
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
            round
            block
            type="info"
            native-type="submit"
            color="#ffc400"
        >
          注册
        </van-button>
        <van-button
            round
            block
            type="info"
            color="#ffc400"
            class="register"
            @click="toLogin"
        >
          已有账号去登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import Header from '@/components/Header'
import {Toast} from 'vant'

export default {
  name: "Register",
  components: { Header },
  setup () {
    const router = useRouter()
    let data = reactive({
      username: '',
      password: ''
    })
    const onSubmit = (value) => {
      // console.log(value)
      localStorage.setItem('userInfo',JSON.stringify(value))
      Toast('注册成功')
      router.push('/login')
    }
    const toLogin = () => {
      router.push('/login')
    }
    return {...toRefs( data ), toLogin, onSubmit}
  }
}
</script>

<style scoped lang="less">
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}

</style>