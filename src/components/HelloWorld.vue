<template>
  <div class="hello">
    <div>铂然科技</div>
    <div class="button">
      <van-button class="van" type="primary">主要按钮</van-button>
    </div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-a-20230816meishitubiao_kuaican-hanbao"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  div {
    color: red;
  }

  .button {
    width: 30%;
    height: 10px;

    .van {
      font-size: 0.1em;
      height: 100%;
    }
  }

}
</style>
