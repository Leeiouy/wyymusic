<template>
  <div id="playMusic" class="van-hairline--surround" @click="playMusic">
    <div class="img">
      <img src="http://p1.music.126.net/0el5yaTEo3KjeJjL3ZXxmg==/109951165054951989.jpg" />
    </div>
    <div class="songMes">
      <p class="songTitle">赤伶</p>
      <span class="artist">李玉刚</span>
    </div>

    <div class="btn">
      <div class="play" @click.stop="statusChange">
        <!-- 开始暂停歌曲 -->
        <i class="iconfont play" :class="{wyybofang2:status,wyyzanting:!status}"></i>
      </div>

      <div class="playList">
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
    status: function() {
      return this.$store.state.playStatus;
    }
  },
  methods: {
    statusChange() {
      this.$store.commit("playStatusChange");
    },
    playMusic() {
      this.$router.push("/playMusicDetails");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
#playMusic {
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 46px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .img {
    img {
      height: 40px;
      display: block;
      border-radius: 50%;
    }
  }
  .songMes {
    width: 60%;
    line-height: 20px;
    .songTitle {
      font-size: 16px;
    }
    .artist {
      font-size: 12px;
      color: #a4b0be;
    }
  }
  .btn {
    width: 20%;
    display: flex;
    justify-content: space-around;

    div {
      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>