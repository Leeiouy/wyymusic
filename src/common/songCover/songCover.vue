<template>
  <div class="songCover">
    <img :src="imgUrl" alt />
    <span v-if="count" class="count">
      <i class="iconfont wyybofangsanjiaoxing"></i>
      {{ playCount }}
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
  computed: {
    playCount: function() {
      if ((this.count + "").length > 4) {
        return (this.count / 10000).toFixed(0) + "万";
      } else {
        return this.count;
      }
    }
  },
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