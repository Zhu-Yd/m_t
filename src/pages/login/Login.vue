<template>
  <div class="login">
    <Header title="登录"/>
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
          登录
        </van-button>
        <van-button
            round
            block
            type="info"
            color="#ffc400"
            class="register"
            @click="toRegister"
        >
          去注册
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {Toast} from 'vant'

export default {
  name: "Login",
  setup() {
    const router = useRouter()
    let data = reactive({
      username: '',
      password: ''
    })
    const toRegister = () => {
      router.push('/register')
    }
    const onSubmit = (value) => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (value.name == userInfo.name && value.password == userInfo.password) {
        Toast('登录成功')
        localStorage.setItem('isLogin', 1)
        router.push('/')
      } else {
        Toast('用户名或密码错误')
      }
    }
    return {...toRefs(data), toRegister, onSubmit}
  }
}
</script>

<style scoped lang="less">
.login {
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