<template>
  <div class="playMusicDetails">
    <div class="bg" :style="{'background-image': 'url('+imgUrl+')'}"></div>
    <playBar></playBar>

    <disk></disk>

    <musicProgress></musicProgress>

    <playBtn></playBtn>
  </div>
</template>

<script>
import playBar from "./component/playBar";

import disk from "./component/disk";

import musicProgress from "./component/musicProgress";

import playBtn from "./component/playBtn";
export default {
  components: {
    playBar,
    disk,
    musicProgress,
    playBtn
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    // :style="{'background-image': 'url('+imgUrl+')'}"
    imgUrl: function() {
      return (
        this.$store.state.playList[this.$store.state.playSongIndex] &&
        this.$store.state.playList[this.$store.state.playSongIndex].al.picUrl
      );
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playMusicDetails {
  height: 100vh;
  position: relative;
  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -20;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(30px) brightness(60%);
  }

  // background-color: rgba(80, 80, 80, 0.9);
}
</style>