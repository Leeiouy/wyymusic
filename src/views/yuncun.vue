<template>
  <div id="yuncun" class="mainPage" v-if="show">
    <div
      class="bg"
      :style="{'background-image': 'url('+hotComment[indexPage].simpleUserInfo.avatar+')'}"
    ></div>
    <div class="page">
      <span>{{ indexPage }}</span>
      <span>/</span>
      <span>{{ hotComment.length }}</span>
    </div>

    <!-- v-for style :style里面不能有;号键值要有''括起来 -->
    <van-swipe
      class="my-swipe"
      :show-indicators="false"
      :loop="false"
      :touchable="disableTouch"
      @change="onChange"
      :duration="1000"
    >
      <van-swipe-item v-for="(item, index) in hotComment" :key="item.index">
        <div class="details">
          <p>“</p>
          <h2>{{ item.content }}</h2>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { request } from "network/request.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
      hotComment: null,
      indexPage: 1,
      disableTouch: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    onChange(index) {
      // 防止切换过快，css动画未结束发生闪白,每次切换禁用触摸，500ms恢复触摸
      if (this.disableTouch == true) {
        this.disableTouch = false;
        this.indexPage = index + 1;
        setTimeout(() => {
          this.disableTouch = true;
        }, 1000);
      }
    }
  },
  created() {
    request({
      url: "/comment/hotwall/list"
    }).then(res => {
      if (res.status == 200) {
        let result = res.data.data;
        this.hotComment = result;
        this.show = true;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
#yuncun {
  position: relative;
  .bg {
    transition: all 0.1s;
    height: calc(100vh - 46px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(70px) brightness(30%);
  }
  .page {
    position: absolute;
    z-index: 1;
    top: 60px;
    right: 8%;
    color: rgba(255, 255, 255, 0.7);
  }
  .my-swipe {
    position: absolute;
    z-index: 1;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .van-swipe-item {
    .details {
      p {
        width: 85%;
        margin: 0 auto;
        margin-top: 35%;
        font-size: 100px;
        color: white;
        opacity: 0.5;
        margin-bottom: -50px;
      }
      h2 {
        width: 85%;
        margin: 0 auto;
        line-height: 25px;
        color: white;
      }
    }
  }
}
</style>