<template>
  <div id="find" class="mainPage">
    <findSwipe></findSwipe>

    <findNav></findNav>

    <songSheet></songSheet>

    <newSong></newSong>
  </div>
</template>

<script>
import findSwipe from "components/find/swipe.vue";

import findNav from "components/find/nav.vue";

import songSheet from "components/find/songSheet.vue";

import newSong from "components/find/newSong.vue";
export default {
  components: {
    findSwipe,
    findNav,
    songSheet,
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