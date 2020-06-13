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
  font-weight: 600;
  span {
    margin-left: 5px;
    font-size: 16px;
  }
}
</style>