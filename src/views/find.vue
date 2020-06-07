<template>
  <div id="find" class="mainPage">
    <findSwipe></findSwipe>

    <findNav></findNav>

    <songList></songList>

    <newSong></newSong>
  </div>
</template>

<script>
import findSwipe from "components/find/swipe.vue";

import findNav from "components/find/nav.vue";

import songList from "components/find/songList.vue";

import newSong from "components/find/newSong.vue";
export default {
  components: {
    findSwipe,
    findNav,
    songList,
    newSong
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
</style>