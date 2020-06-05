<template>
  <div id="app">
    <navBar></navBar>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import navBar from "common/navBar/navBar.vue";

import loading from "common/loading/loading.vue";
export default {
  name: "App",
  components: {
    navBar,
    loading
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

<style lang='less'>

@import url("assets/css/base.css");

</style>
