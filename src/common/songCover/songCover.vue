<template>
  <div class="songCover"></div>
</template>

<script>
export default {
  components: {},
  props: {
    img: {
      type: String,
      default() {
        return null;
      }
    },
    count: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
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
.songCover {
  width: 200px;
  position: relative;
  img {
    position: absolute;
    width: 100%;
  }
  span {
    position: absolute;
    top: 5px;
    right: 10%;
    color: white;
    font-size: 14px;
    .iconfont {
      font-size: 14px;
    }
  }
}
</style>