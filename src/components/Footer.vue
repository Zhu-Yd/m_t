<template>
  <div class="footer">
    <div class="item">
      <router-link to="/home" class="nav-bar" active-class="nav_color">
        <van-icon name="wap-home-o" size="30"/>
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link to="/cart" class="nav-bar" active-class="nav_color">
        <van-icon name="cart-o" size="30"/>
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link to="/order" class="nav-bar" active-class="nav_color">
        <van-icon name="sign" size="30"/>
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link to="/mine" class="nav-bar" active-class="nav_color">
        <van-icon name="user-o" size="30"/>
        我的
      </router-link>
    </div>
  </div>

</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: space-around;
  background: white;
  border-top: 1px solid #eee;

  .item {
    .nav_color {
      color: #ffc400;
    }

    .nav-bar {
      display: flex;
      flex-flow: column;
      align-items: center;

    }

  }
}
</style>