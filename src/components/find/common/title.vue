<template>
  <div class="findTitle">

    <div class="smallTitle">
      <slot name="smallTitle"></slot>
    </div>

    <div class="clear-fix">

      <div class="left bigTitle">
        <slot name="bigTitle"></slot>
      </div>
      
      <button class="right btn">查看更多</button>
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
    padding: 1.5px 5px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: transparent;
  }
}
</style>