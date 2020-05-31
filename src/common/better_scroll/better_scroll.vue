<template>
  <div class="wrapper" ref="Bscroll">
    <slot name="content"></slot>
  </div>
</template>

<script>
import betterBscroll from "better-scroll";
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
  mounted() {
    this.Bscroll = new betterBscroll(this.$refs.Bscroll, {
      click: true
    });
  }
};
</script>

<style lang='less' scoped>
.wrapper {
  overflow: hidden;
}
</style>