<template>
  <div class="videoItem" @click="videoItem">
    <songCover class="songCover" :imgUrl="videoData.cover" :count="videoData.playCount"></songCover>

    <div class="title">
      <p class="name van-ellipsis">{{ videoData.name }}</p>
      <span class="a4b">{{ videoData.duration | fromTime }}</span>
      <span class="a4b">{{ videoData.artistName }}</span>
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
    videoData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    videoItem() {
      let id = this.videoData.id;
      console.log(id);

      this.$router.replace("/video/details/" + id);

    this.$router.go(0)
    }
  },
  created() {},
  mounted() {},
  filters: {
    fromTime(s) {
      //时间戳除以1000就等于秒
      s = s / 1000;
      let Minute = Math.floor(s / 60);
      let seconds = Math.floor(s % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return Minute + ":" + seconds;
    }
  }
};
</script>

<style lang='less' scoped>
.videoItem {
  display: flex;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
  &:active {
    opacity: 0.7;
  }
  .songCover {
    width: 30%;
  }
  .title {
    width: 65%;
    .name {
      font-size: 14px;
    }
    span {
      display: inline-block;
      padding-right: 5px;
      line-height: 20px;
    }
  }
}
</style>