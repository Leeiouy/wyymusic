<template>
  <div id="yuncun" v-if="show">
    <div class="page">
      <span>{{ indexPage }}</span>
      <span>/</span>
      <span>{{ hotComment.length }}</span>
    </div>

    <van-swipe
      class="my-swipe"
      :show-indicators="false"
      :loop="false"
      @change="onChange"
      :duration="1000"
    >
      <van-swipe-item v-for="(item, index) in hotComment" :key="item.index">
        <div class="bg" :style="{'background-image': 'url('+item.simpleUserInfo.avatar+')'}"></div>
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
  .page {
    position: absolute;
    top: 60px;
    right: 8%;
    z-index: 2;
    color: rgba(255, 255, 255, 0.7);
  }

  .van-swipe-item {
    position: relative;
    width: 100vw;
    height: calc(100vh - 46px);
    padding-top: 46px;
    .bg {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: 0.1s;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      filter: blur(30px) brightness(60%);
    }

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