<template>
  <div class="topListNav">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
        <span>排行榜</span>
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
.topListNav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  font-weight: 600;
  span {
    margin-left: 5px;
    font-size: 16px;
  }
}
</style>