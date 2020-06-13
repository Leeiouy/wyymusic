<template>
  <div class="songCover">
    <img :src="imgUrl" alt />
    <span v-if="count" class="count">
      <i class="iconfont wyybofangsanjiaoxing"></i>
      {{ count }}
    </span>

    <span class="mes" v-if="mes">{{ mes }}</span>
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
    },
    mes: {
      type: String,
      default: ""
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
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 3px;
  img {
    width: 100%;
    display: block;
  }
  .count {
    color: white;
    position: absolute;
    top: 5%;
    right: 10%;
    font-size: 12px;
    .iconfont {
      font-size: 12px;
    }
  }
  .mes {
    position: absolute;
    left: 5%;
    bottom: 5px;
    color: white;
  }
}
</style>