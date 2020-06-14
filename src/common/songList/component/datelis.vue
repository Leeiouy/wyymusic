<template>
  <div class="details">
    <div class="bg" :style="{'background-image': 'url('+imgUrl+')'}"></div>
    <div class="content">
      <songCover class="songCover" :imgUrl="imgUrl" :count="playCount"></songCover>

      <div class="title">
        <h2>{{ title }}</h2>

        <div class="creator">
          <img :src="avatarUrl" alt />
          <span>{{ nickname }}</span>
        </div>

        <p class="van-multi-ellipsis--l2">{{ description }}</p>
      </div>

      <div class="options">
        <div class="comment" @click="comment">
          <i class="iconfont wyypinglun"></i>
          <p>{{ commentCount }}</p>
        </div>
        <div>
          <i class="iconfont wyyfenxiang"></i>
          <p>{{ shareCount }}</p>
        </div>
        <div @click="clickDownload('网页端不支持下载')">
          <i class="iconfont wyyxiazai"></i>
          <p>下载</p>
        </div>
        <div>
          <i class="iconfont wyyduoxuankuang"></i>
          <p>多选</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import songCover from "common/songCover/songCover.vue";

export default {
  components: {
    songCover
  },
  props: {
    imgUrl: {
      //图片链接
      type: String,
      default: ""
    },
    playCount: {
      //播放次数
      type: Number,
      default: 0
    },
    title: {
      //标题
      type: String,
      default: ""
    },
    description: {
      //描述
      type: String,
      default: ""
    },
    avatarUrl: {
      //创建歌单者头像图片
      type: String,
      default: ""
    },
    nickname: {
      //创建歌单者名字
      type: String,
      default: ""
    },
    commentCount: {
      //评论数量
      type: Number,
      default: 0
    },
    shareCount: {
      //收藏数量
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    clickDownload(mes) {
      this.$toast.fail(mes);
    },
    comment() {
      let songId = this.$route.params.id;

      this.$router.push({
        path: "/comment/" + songId,
        
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.details {
  width: 100%;
  height: 260px;
  position: relative;
  .bg {
    height: 50vh;
    filter: blur(30px) brightness(70%);
    background: center;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .songCover {
      width: 120px;
    }
    .creator {
      padding: 10px 0;
      height: 30px;
      display: flex;
      align-items: center;
      img {
        height: 30px;
        border-radius: 50%;
        display: block;
      }
      span {
        padding-left: 10px;
      }
    }
    .title {
      padding-left: 5%;
      width: 50%;
      height: 50px;
      color: white;
    }
    .options {
      width: 100%;
      padding-top: 20px;
      display: flex;
      justify-content: space-around;
      div {
        width: 22%;
        text-align: center;
        color: white;
        &:active {
          opacity: 0.5;
        }
        p {
          padding-top: 7px;
        }
      }
    }
  }
}
</style>