<template>
  <div class="navBar">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont wyyicon-"></i>
      </template>

      <template #title>
        <div class="titles">
          <div
            :class="{titleActive:titleAcive==index}"
            v-for="(item,index) in titles"
            :key="item.index"
            @click="titleClick(index,item.path)"
          >{{ item.title }}</div>
        </div>
      </template>

      <template #right>
        <i class="iconfont wyysuosou"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      titles: [
        {
          title: "我的",
          path: "/profile"
        },
        {
          title: "发现",
          path: "/find"
        },
        {
          title: "云村",
          path: "/yuncun"
        },
        {
          title: "视频",
          path: "/video"
        }
      ],
      titleAcive: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    titleClick(index, path) {
      if (this.titleAcive != index) {
        //只有当前titleAcive不等于index时候才会执行切换
        this.titleAcive = index;
        this.$router.push(path);
      }
    },
    onClickLeft() {},
    onClickRight() {
      this.$router.push("/search");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.navBar {
  // .van-nav-bar {
  //   background-color: transparent !important;
  // }
  .van-hairline--bottom::after {
    border: none !important;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .titles {
    display: flex;
    justify-content: space-between;
    div {
      margin: 0 10px;
    }
  }
  .titleActive {
    font-size: 17px;
    font-weight: 700;
    transition: all 0.1s;
  }
}
</style>