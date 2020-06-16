<template>
  <div class="search">
    <searchBar @search="serachVal"></searchBar>

    <!-- 给路由添加key可以强制刷新 -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import searchBar from "common/search/searchBar/serachBar.vue";

import { request } from "network/request.js";
export default {
  components: {
    searchBar
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    serachVal(val) {
      if (this.$route.path == "/search/hot") {
        this.$router.replace("result/" + val);
      } else {
        this.$router.replace(val);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>