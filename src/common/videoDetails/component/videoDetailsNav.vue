<template>
  <div class="videoDetailsNav van-hairline--bottom">
    <div class="mes" @click="backClick">
      <i class="iconfont wyyarrow-left"></i>
      <span>返回</span>
    </div>
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
    backClick() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.videoDetailsNav {
  width: 100%;
  height: 46px;

  line-height: 46px;

  .mes {
    &:active {
      opacity: 0.7;
    }
    i {
      font-size: 20px;
      padding-left: 10px;
    }
    span {
      font-size: 18px;
      padding-left: 5px;
    }
  }
}
</style>