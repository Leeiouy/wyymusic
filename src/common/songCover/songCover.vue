<template>
  <div class="songCover">
    <img :src="imgUrl" alt @click="imgPreview" />
    <span v-if="count" class="count">
      <i class="iconfont wyybofangsanjiaoxing"></i>
      {{ playCount }}
    </span>

    <i v-show="playBtn" class="iconfont wyyjiediankaishi playBtn"></i>

    <span class="mes" v-if="mes">{{ mes }}</span>

    <span class="times" v-if="times">{{ times }}</span>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
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
    },
    times: {
      type: String,
      default: ""
    },
    Preview: {
      type: Boolean,
      default: false
    },
    playBtn: {
      type: Boolean,
      default: false
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
  methods: {
    imgPreview() {
      if (this.Preview) {
        console.log(1);

        ImagePreview({
          images: [this.imgUrl],
          showIndex: false
        });
      }
    }
  },
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

  .times {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
  }

  .playBtn {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    font-size: 30px;
    color: white;
    opacity: 0.7;
  }
}
</style>