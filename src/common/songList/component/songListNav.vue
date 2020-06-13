<template>
  <div class="songListNav">
    <van-nav-bar
      :fixed="true"
      :border="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
      </template>

      <template #title>
        <span>歌单</span>
      </template>

      <template #right>
        <i class="iconfont wyysuosou"></i>
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
    },
    onClickRight() {
      console.log("right");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.van-nav-bar {
  background-color: transparent !important;
  i {
    color: white;
  }
  span {
    color: white;
  }
}
</style>