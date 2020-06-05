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

export default {
  name: "App",
  components: {
    navBar
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
