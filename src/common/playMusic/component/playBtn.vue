<template>
  <div class="playBtn">
    <div class="btn">
      <div>
        <i class="iconfont wyyxunhuan"></i>
      </div>

      <div class="Previous" @click="PreviousClick">
        <i class="iconfont wyyshangyishoushangyige"></i>
      </div>

      <div class="play" @click="statusChange">
        <!-- 开始暂停歌曲 -->
        <i class="iconfont play" :class="{wyybofang2:!isPlay}"></i>
        <i class="iconfont play" :class="{wyyzanting:isPlay}"></i>
      </div>

      <div class="next" @click="nextClick">
        <i class="iconfont wyyxiayigexiayishou"></i>
      </div>

      <div class="List" @click="PopupClick">
        <i class="iconfont wyyliebiao"></i>
      </div>
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
    },
    PopupClick() {
      console.log(123);
    },
    nextClick() {
      this.$store.commit("nextPlay");
    },
    PreviousClick() {
      this.$store.commit("PreviouPlay");
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
  .btn {
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
}
</style>