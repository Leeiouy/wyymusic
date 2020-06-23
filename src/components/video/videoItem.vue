<template>
  <div class="videoItem" @click="videoItem">
    <songCover :playBtn="play" :imgUrl="videoData.cover||videoData.picUrl"></songCover>
    <p class="info van-hairline--bottom">{{ videoData.name }}</p>
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
    return {
      play: true,
      videoSrc: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    videoItem() {
      console.log("打印了");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.info {
  padding: 10px 0;
  font-size: 16px;
}
video {
  width: 100%;
}
</style>