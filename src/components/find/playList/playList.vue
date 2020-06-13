<template>
  <div class="playList">
    <playListNav></playListNav>
    <playListTabS></playListTabS>
  </div>
</template>

<script>
import playListNav from "./component/playListNav";
import playListTabS from "./component/playListTabS";
export default {
  components: {
    playListNav,
    playListTabS
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playList {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(360deg, white, white, #95d0d8, #ffffc7);
}
</style>