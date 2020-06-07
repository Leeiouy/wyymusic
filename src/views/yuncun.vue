<template>
  <div id="yuncun" v-if="show">
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
      :lazy-render="true"
      :loop="false"
      @change="onChange"
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
      indexPage: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    onChange(index) {
      this.indexPage = index + 1;
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
    width: 100vw;
    transition: all 0.3s;
    height: calc(100vh - 46px);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(40px) brightness(70%);
  }
  .page {
    position: absolute;
    z-index: 1;
    top: 2%; 
    right: 8%;
    color: rgba(255, 255, 255, 0.7);
  }
  .my-swipe {
    position: absolute;
    z-index: 1;
    top: 0;
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