<template>
  <div id="app">
    <navBar v-show="navBarShow"></navBar>

    <playMusic></playMusic>

    <keep-alive exclude="songList,comment,videoDetalis">
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import navBar from "common/navBar/navBar.vue";

import playMusic from "common/playMusic/playMusic.vue";

export default {
  name: "App",
  components: {
    navBar,
    playMusic
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    navBarShow() {
      // 判断path
      let path = this.$route.path;
      if (
        path == "/profile" ||
        path == "/find" ||
        path == "/yuncun" ||
        path == "/video"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less'>
#app {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@import url("assets/css/base.css");
@import url("assets/css/common.css");
</style>
