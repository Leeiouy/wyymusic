<template>
  <div class="videoDetalis" v-if="show">
    <videoNav></videoNav>

    <div class="video">
      <video controls :src="videoUrl"></video>
    </div>

    <div class="mv">
      <van-collapse v-model="activeName" :border="false" accordion>
        <van-collapse-item :title="mvTitle" name="1">{{ mvData.desc }}</van-collapse-item>
      </van-collapse>

      <div class="detail">
        <h3>{{ mvData.playCount }}次播放</h3>
        <div class="info">
          <div>
            <i class="iconfont wyydianzan1"></i>
            <p class="a4b">{{ info.likeCount||info.likedCount }}</p>
          </div>
          <div>
            <i class="iconfont wyyshoucang"></i>
            <p class="a4b">{{ mvData.subCount }}</p>
          </div>
          <div>
            <i class="iconfont wyypinglun"></i>
            <p class="a4b">{{ info.commentCount }}</p>
          </div>
          <div>
            <i class="iconfont wyyfenxiang"></i>
            <p class="a4b">{{ info.shareCount }}</p>
          </div>
        </div>

        <similarMv></similarMv>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "network/request";

import videoNav from "./component/videoDetailsNav";

import similarMv from "./component/videoDetailsSimilar";

export default {
  name: "videoDetalis",
  components: {
    videoNav,
    similarMv
  },
  props: {},
  data() {
    return {
      activeName: "0",
      show: false,
      mvData: {},
      videoUrl: "",
      info: {}
    };
  },
  watch: {},
  computed: {
    mvTitle: function() {
      return this.mvData.name + "-" + this.mvData.artistName;
    }
  },
  methods: {},
  created() {
    let mvId = this.$route.params.id;

    request({
      // 请求mv详情数据
      url: "/mv/detail",
      params: {
        mvid: mvId
      }
    })
      .then(res => {
        if (res.status == 200) {
          let result = res.data.data;
          this.mvData = result;
          // 这个promise返回值是下一个promise的第一个参数
          return result;
        }
      })
      .then(res => {
        //请求mv播放地址
        request({
          url: "/mv/url",
          params: {
            id: res.id
          }
        }).then(res => {
          if ((res.status = 200)) {
            let videoUrl = res.data.data.url;
            this.videoUrl = res.data.data.url;
          }
        });

        //请求mv 点赞转发评论数数据
        request({
          url: "/mv/detail/info",
          params: {
            mvid: mvId
          }
        }).then(res => {
          if ((res.status = 200)) {
            let info = res.data.data || res.data;
            this.info = info;

            //等待数据全部请求完成再 将show改为ture 渲染这个页面
            this.show = true;
          }
        });
      });
  },
  mounted() {},
  beforeRouteUpdate(to, from, next) {
    //复用此组件会触发这个函数

    
    next();
  }
};
</script>

<style lang='less' scoped>
.videoDetalis {
  video {
    width: 100%;
  }
  .detail {
    width: 95%;
    margin: 0 auto;
    h3 {
      padding-left: 7px;
    }
    .info {
      padding: 15px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      div {
        &:active {
          opacity: 0.7;
        }
        i {
          font-size: 26px;
        }
      }
    }
  }
}
</style>