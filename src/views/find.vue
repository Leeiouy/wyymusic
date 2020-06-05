<template>
  <div id="find" class="mainPage">
    <findSwipe></findSwipe>

    <findNav></findNav>
  </div>
</template>

<script>
import findSwipe from "components/find/swipe.vue";

import findNav from "components/find/nav.vue";
export default {
  components: {
    findSwipe,
    findNav
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