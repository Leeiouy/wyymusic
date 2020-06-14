<template>
  <div class="CommentList clear-fix">
    <div class="img left">
      <img :src="imgUrl" />
    </div>

    <div class="user right van-hairline--top-bottom">
      <div class="userName">
        <p class="name">{{ userName }}</p>
        <p class="time">{{ time }}</p>
      </div>
      <div class="likeCount">
          {{ likedCount }}
           <i class="iconfont wyydianzan1"></i>
      </div>
      <div class="content">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    userName: {
      type: String,
      default: ""
    },
    likedCount: {
      type: Number,
      default: 0
    },
    commentTime: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    time: function() {
      let TIME = new Date(this.commentTime);
      //   评论时间为2020就忽略
      let year = TIME.getFullYear() == 2020 ? "" : 2020 + "年";
      let month = TIME.getMonth() + 1 + "月";
      let day = TIME.getDate() + "日";
      let hours = "" + TIME.getHours() + ":";
      let Minutes = TIME.getMinutes();
      return year + month + day + hours + Minutes;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.CommentList {
  padding-bottom: 15px;
  .img {
    width: 15%;
    text-align: center;
    img {
      height: 30px;
      border-radius: 50%;
    }
  }
  .user {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    .userName {
      width: 70%;
      height: 32px;
      line-height: 16px;
      .name {
        font-size: 14px;
        opacity: 0.8;
      }
      .time {
        color: #a4b0be;
      }
    }
    .likeCount {
      width: 30%;
      text-align: center;
    }
    .content {
      width: 100%;
      padding: 5px 0;
      padding-right: 20px;
      font-size: 15px;
    }
  }
}
</style>