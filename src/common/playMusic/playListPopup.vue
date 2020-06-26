<template>
  <div class="playListPopup">
    <div class="nowPlay">
      <h3>当前播放({{ playList.length }})</h3>
    </div>

    <div class="playListSong">
      <div
        class="song"
        v-for="(item, index) in playList"
        :key="item.index"
        @click="songClick(index)"
      >
        <div :class="{SongActive:index==playSongIndex}">
          <i v-show="index==playSongIndex" class="iconfont wyyshengyin"></i>
          <span>{{ item.name }}</span>
          <span>-</span>
          <span class="a4b">{{ item.ar[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState(["playSongIndex", "playList"])
  },
  methods: {
    songClick(index) {
      this.$store.commit("songPlay", index);
      console.log(index);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playListPopup {
  padding: 15px;
  .nowPlay {
  }

  .playListSong {
    padding-top: 20px;

    .song {
      padding: 5px 0;

      &:active {
        opacity: 0.7;
      }

      span,
      i {
        font-size: 14px;
        display: inline-block;
        padding: 5px 5px 5px 0;
      }
    }
  }

  .SongActive {
    /deep/ span,
    i {
      color: #d43c33 !important;
    }
  }
}
</style>