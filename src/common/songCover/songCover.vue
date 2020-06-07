<template>
  <div class="songCover">
    <img :src="imgUrl" alt />
    <span>
      <i class="iconfont wyybofangsanjiaoxing"></i>
      {{ count }}
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    imgUrl: {
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
  position: relative;
  img {
    width: 100%;
  }
  span {
    color: white;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size: 12px;
    .iconfont {
      font-size: 12px;
    }
  }
}
</style>