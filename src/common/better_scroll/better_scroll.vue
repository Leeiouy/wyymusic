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
      scrollX: this.scrollX
    });
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  overflow: hidden;
}
</style>