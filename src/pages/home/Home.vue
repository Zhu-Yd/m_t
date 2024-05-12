<template>
  <div class="home">
    <div class="content">
      <!--      头部-->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o"/>
          <span>理想家园21栋</span>
          <van-icon name="arrow"/>
        </div>
      </div>

      <!--      主要内容-->
      <div class="main">
        <div class="main_bg">
          <div class="search">
            <input type="text" class="search_text"/>
            <div class="s_button">搜索</div>
          </div>
          <div class="classify">
            <div class="big_classify">
              <div v-for="(item, index) in big_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="small_classify">
              <div v-for="(item, index) in small_classify" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs">
          <van-tabs class="van-tabs">
            <van-tab v-for="(item,index) in centent_nav_list" :title=item.tab :key="index">
              <Store :store_list="item.data"/>
            </van-tab>
          </van-tabs>
        </div>

      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Store from "@/pages/home/components/Store";

export default {
  components: {
    Footer,
    Store,
  },
  data() {
    return {
      big_classify: [
        {name: "美食", icon: "icon-apple-and-pear"},
        {name: "甜点饮品", icon: "icon-tianpin"},
        {name: "超市便利", icon: "icon-chaoshi"},
        {name: "生鲜果蔬", icon: "icon-shuiguo"},
        {name: "滴团买药", icon: "icon-yaopin"},
      ],
      small_classify: [
        {name: "午餐", icon: "icon-iconfonttubiaozhizuo-1"},
        {name: "买酒", icon: "icon-iconfonttubiaozhizuo-"},
        {name: "新鲜水果", icon: "icon-iconfonttubiaozhizuo-9"},
        {name: "汉堡披萨", icon: "icon-iconfonttubiaozhizuo-6"},
        {name: "休闲饮品", icon: "icon-iconfonttubiaozhizuo-8"},
        {name: "夜宵", icon: "icon-iconfonttubiaozhizuo-3"},
        {name: "吐司", icon: "icon-iconfonttubiaozhizuo-5"},
        {name: "跑腿", icon: "icon-paotuiAPP"},
        {name: "美人佳丽", icon: "icon-iconfonttubiaozhizuo-2"},
        {name: "全部分类", icon: "icon-fenlei"},
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 1
            },
            {
              pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
              title: "隆江猪脚饭",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 2
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 3

            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 4

            },
          ],
        },
        {
          tab: "减配送费",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 5
            },
          ],
        },
        {
          tab: "点评高分",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 6
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 3
            },
          ],
        },
        {
          tab: "会员满减",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 6
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
              shop_id: 7
            },
          ],
        },
      ],
    };
  },
}
</script>

<style lang="less" scoped>
:deep(.van-tabs__wrap){
  border-radius: 10px;
}

.home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    flex: 1;
    overflow-y: auto;

    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;

      .text {
        font-size: 20px;
        font-weight: 600;
      }

      .location {
        span {
          margin: 0px 5px;
          font-size: 14px;
        }
      }
    }

    .main {
      margin-top: -30px;

      .van-tabs {
        padding: 10px 20px;
      }

      .main_bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;

        .search {
          display: flex;
          justify-content: center;
          align-items: center;

          .search_text {
            width: 100%;
            height: 30px;
            border-radius: 20px;
            border: 1px solid #ffc400;
            font-size: 14px;
          }

          .s_button {
            margin-left: -30px;
            height: 32px;
            width: 50px;
            border-radius: 16px;
            background: #ffc400;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
            font-weight: 500;
          }
        }

        .classify {
          .big_classify {
            display: flex;
            margin-top: 20px;

            div {
              flex: 1;
              display: flex;
              justify-content: space-around;
              flex-flow: column;
              align-items: center;
              //width: 20%;

              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }

              span {
                font-size: 12px;
              }
            }
          }

          .small_classify {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;

            div {
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              width: 20%;

              .icon {
                width: 30px;
                height: 30px;
                margin: 10px;
              }

              span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}

</style>