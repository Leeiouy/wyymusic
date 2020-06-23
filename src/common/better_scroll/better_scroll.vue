<template>
  <div class="wrapper" ref="Bscroll">
    <slot name="content"></slot>
  </div>
</template>

<script>
import betterBscroll from "better-scroll";
export default {
  components: {},
  props: {
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.Bscroll = new betterBscroll(this.$refs.Bscroll, {
      click: true,
      scrollX: this.scrollX,
      pullUpLoad: {
        threshold: -30
      },
      bounce: {
        //当滚动超过边缘的时候会有一小段回弹动画
        top: false,
        bottom: true,
        left: true,
        right: true
      }
    });

 
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  overflow: hidden;
}
</style>