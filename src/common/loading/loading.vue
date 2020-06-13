<template>
  <div id="loading">
    <van-loading size="24px" vertical color="#c4342f">加载中...</van-loading>
  </div>
</template>

<script>
export default {
  components: {},
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
#loading {
  position: relative;
  width: 100%;
  z-index: 10;
  top: 30vh;
}
</style>