<template>
  <div id="yuncun" v-if="show">
    <div class="title">热评墙</div>

    <div class="page">
      <span>{{ indexPage }}</span>
      <span>/</span>
      <span>{{ hotComment.length }}</span>
    </div>

    <div class="input">
      <input v-on="{focus:inputFocus,blur:inputBlur}" type="text" placeholder="说点什么吧~" />
      <van-icon
        v-if="!commit"
        name="chat-o"
        color="white"
        :badge="hotComment[indexPage].replyCount"
      />

      <span class="a4b" @click="submit" v-else>发送</span>
    </div>

    <scrollRecommand class="hotScroll" :indexPage='indexPage' :hotComment='hotComment'></scrollRecommand>

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

          <div class="content">
            <h2>{{ item.content }}</h2>

            <div class="info">
              <span class="a4b">{{ item.simpleResourceInfo.name }}</span>
              <span class="a4b">-</span>
              <span class="a4b">{{ item.simpleResourceInfo.artists[0].name }}</span>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { request } from "network/request.js";

import scrollRecommand from "components/yuncun/scrollRecommand.vue";
export default {
  components: {
    scrollRecommand
  },
  props: {},
  data() {
    return {
      show: false,
      hotComment: null, //热评数据
      indexPage: 1,
      commit: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    onChange(index) {
      this.indexPage = index + 1;
      this.commit = false;
    },
    inputFocus() {
      this.commit = true;
    },
    inputBlur() {},
    submit() {
      this.$toast.fail("未登录！");
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

  .title {
    position: absolute;
    width: 70px;
    text-align: center;
    top: 60px;
    left: calc(50% - 35px);
    color: white;
    font-size: 16px;
    font-weight: 600;
    z-index: 2;
  }
  .input {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgb(63, 55, 55);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    input {
      width: 70%;
      height: 25px;
      border: none;
      padding: 10px;
      background-color: transparent;
    }
    i {
      font-size: 25px;
    }
    span {
      &:active {
        opacity: 0.7;
      }
    }
  }

  .hotScroll {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    z-index: 2;
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
      .content {
        width: 85%;
        margin: 0 auto;
        line-height: 25px;
        color: white;
        .info {
          &:active {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>