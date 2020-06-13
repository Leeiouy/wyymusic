<template>
  <div class="playList">
    <playListNav></playListNav>
    <playListTab></playListTab>
  </div>
</template>

<script>
import playListNav from "./component/playListNav";
import playListTab from "./component/playListTab";
export default {
  components: {
    playListNav,
    playListTab
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