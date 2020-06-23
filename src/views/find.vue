<template>
  <div id="find" class="mainPage">
    <Bscroll class="Bscroll" ref="Bscroll">
      <div slot="content">
        <findSwipe></findSwipe>

        <findNav></findNav>

        <songSheet></songSheet>

        <recommandMusic></recommandMusic>
      </div>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from "common/better_scroll/better_scroll.vue";

import findSwipe from "components/find/swipe.vue";

import findNav from "components/find/nav.vue";

import songSheet from "components/find/songSheet.vue";

import recommandMusic from "components/find/recommendMusic/recommendMusic.vue";

export default {
  components: {
    Bscroll,
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
    "$route.path": function() {
      this.resetHeight();
    }
  },
  computed: {},
  methods: {
    resetHeight() {
      this.$refs.Bscroll.Bscroll.refresh();
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      //等待Dom更新完成刷新高度
      this.resetHeight();
    });
  }
};
</script>

<style lang='less' scoped>
.Bscroll {
  height: calc(100vh - 46px);
}
</style>