<template>
  <div class="playMusicDetails">

    <playBar></playBar>
    <disk></disk>

    <musicProgress></musicProgress>

    <playBtn></playBtn>
  </div>
</template>

<script>
import { request } from "network/request.js";
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
  computed: {},
  methods: {},
  created() {
    request({
      url: "/song/detail",
      params: {
        ids: "347230"
      }
    }).then(res => {
      console.log(res);
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.playMusicDetails {
  height: 100vh;
  background-color: rgba(80, 80, 80, 0.9);
}
</style>