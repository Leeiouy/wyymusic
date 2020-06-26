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

    <van-popup
      v-model="popupShow"
      get-container="#app"
      position="left"
      :style="{ height: '100%',width:'70%' }"
    >
      <myProfilePopup></myProfilePopup>
    </van-popup>
  </div>
</template>

<script>
import myProfilePopup from "common/myProfilePopup/myProfilePopup.vue";

export default {
  components: {
    myProfilePopup
  },
  props: {},
  data() {
    return {
      popupShow: false,
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
  watch: {
    "$route.path": function() {
      let path = this.$route.path;
      if (path == "/profile") {
        this.titleAcive = 0;
      } else if (path == "/find") {
        this.titleAcive = 1;
      } else if (path == "/yuncun") {
        this.titleAcive = 2;
      } else if (path == "/video") {
        this.titleAcive = 3;
      }
    }
  },
  computed: {},
  methods: {
    titleClick(index, path) {
      if (index == 0) {
        if (document.cookie) {
          this.$toast.success("登录成功，但个人数据接口无效");
        } else {
          this.$toast.fail("未登录");
        }
      } else {
        if (this.titleAcive != index) {
          //只有当前titleAcive不等于index时候才会执行切换
          this.titleAcive = index;
          this.$router.push(path);
        }
      }
    },
    onClickLeft() {
      this.popupShow = true;
    },
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
  position: fixed;
  z-index: 10;
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