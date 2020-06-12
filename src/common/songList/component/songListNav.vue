<template>
  <div class="songListNav">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
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
.songListNav{
    span{
        padding-left: 5%;
        font-size: 14px;
        font-weight: 600;
    }
}
</style>