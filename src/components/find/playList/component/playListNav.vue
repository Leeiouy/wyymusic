<template>
  <div class="playListNav">
    <van-nav-bar @click-left="onClickLeft" :border="false">
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
        <span>歌单广场</span>
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
.playListNav {
  .van-nav-bar {
    background-color: transparent !important;
  }
  font-weight: 600;
  span {
    margin-left: 5px;
    font-size: 16px;
  }
}
</style>