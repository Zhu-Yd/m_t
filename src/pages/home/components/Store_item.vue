<template>
  <div class="item">
    <img :src=s_item.pic>
    <div class="r_content">
      <span class="name">{{ s_item.title }}</span>
      <span class="sales">月售 {{ s_item.sales }}</span>
      <span class="price">起送¥ {{ s_item.price }} 免配送费</span>
      <div class="label">
        <div v-for="(item,index) in s_item.label" :key="index">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store_item",
  props: ['s_item'],
}
</script>

<style lang="less" scoped>
.item {
  display: flex;

  img {
    width: 35%;
    height: 120px;
    border-radius: 15px;
    margin: 5px;
  }

  .r_content {
    margin: 5px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    .name {
      font-size: 18px;
      font-weight: 400;
    }

    .sales {
      font-size: 12px;
    }

    .price {
      font-size: 12px;
    }

    .label {
      font-size: 10px;
      display: flex;
      flex-direction: row;
      div{
        background: #ffc400;
        padding: 2px;
        margin: 2px;
        border-radius: 5px;
      }

    }
  }
}
</style>