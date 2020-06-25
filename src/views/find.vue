<template>
  <div id="find" class="mainPage">
        <findSwipe></findSwipe>

        <findNav></findNav>

        <songSheet></songSheet>

        <recommandMusic></recommandMusic>
  </div>
</template>

<script>

import findSwipe from "components/find/swipe.vue";

import findNav from "components/find/nav.vue";

import songSheet from "components/find/songSheet.vue";

import recommandMusic from "components/find/recommendMusic/recommendMusic.vue";

export default {
  components: {

    findSwipe,
    findNav,
    songSheet,
    recommandMusic
  },
  props: {},
  data() {
    return {};
  },
  watch: {
  },
  computed: {},
  methods: {
  },
  created() {},
  mounted() {

  }
};
</script>

<style lang='less' scoped>
.Bscroll {
  height: calc(100vh - 46px);
}
</style>