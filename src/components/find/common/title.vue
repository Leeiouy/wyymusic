<template>
  <div class="findTitle">
    <div class="smallTitle">
      <slot name="smallTitle"></slot>
    </div>

    <div class="clear-fix">
      <div class="left bigTitle">
        <slot name="bigTitle"></slot>
      </div>

      <div class="right btn van-hairline--surround">
        <slot name="btn"></slot>
      </div>
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
.findTitle {
  padding-top: 10px;
  .bigTitle {
    font-size: 14px;
    font-weight: 800;
    line-height: 22px;
  }
  .btn {
    padding: 2px 5px;
    border-radius: 20px;
    overflow: hidden;
    &:active {
      opacity: 0.7;
    }
  }
}
</style>