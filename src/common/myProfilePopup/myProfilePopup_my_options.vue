<template>
  <div class="options">
    <div>
      <i class="iconfont wyyxinxi_huaban"></i>

      <p class="f12">我的消息</p>
    </div>
    <div>
      <i class="iconfont wyyhaoyou"></i>

      <p class="f12">我的好友</p>
    </div>
    <div>
      <i class="iconfont wyyzhuye"></i>

      <p class="f12">个人主页</p>
    </div>
    <div>
      <i class="iconfont wyypifugexinghuazhuti-xianxing"></i>
      <p class="f12">个性装扮</p>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>

.options {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  div {
    &:active {
      opacity: 0.7;
    }
  }
  p {
    padding-top: 1vh;
  }
}
</style>