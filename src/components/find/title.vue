<template>
  <div class="findTitle">
    <p class="smallTitle">推荐歌单</p>
    <div class="clear-fix">
      <span class="left bigTitle">为你精挑细选</span>
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
  margin: 3px 0;
  .bigTitle {
    font-size: 14px;
    font-weight: 600;
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