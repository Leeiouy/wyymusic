<template>
  <div class="playBar">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
        <span>播放</span>
      </template>
    </van-nav-bar>
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
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>