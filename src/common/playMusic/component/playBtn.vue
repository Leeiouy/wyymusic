<template>
  <div class="playBtn">
    <i class="iconfont wyyxunhuan"></i>

    <div class="Previous">
      <i class="iconfont wyyshangyishoushangyige"></i>
    </div>

    <div class="play" @click="statusChange">
      <!-- 开始暂停歌曲 -->
      <i class="iconfont play" :class="{wyybofang2:isPlay}"></i>
      <i class="iconfont play" :class="{wyyzanting:!isPlay}"></i>
    </div>

    <div class="next">
      <i class="iconfont wyyxiayigexiayishou"></i>
    </div>

    <div class="playList">
      <i class="iconfont wyyliebiao"></i>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    isPlay: function() {
      return this.$store.state.isPlay;
    }
  },
  methods: {
    statusChange() {
      this.$store.commit("isPlay");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playBtn {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  i {
    font-size: 22px;
    color: white;
    &:active {
      opacity: 0.6;
    }
  }
  .play {
    font-size: 35px;
  }
}
</style>