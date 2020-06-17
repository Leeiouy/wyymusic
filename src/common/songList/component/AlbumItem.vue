<template>
  <div class="Album van-hairline--bottom">
    <songCover class="songCover" :imgUrl="imgUrl"></songCover>
    <div class="details">
      <p class="songName">歌曲: {{ title }}</p>
      <p class="artist">{{ artist }}</p>
    </div>
  </div>
</template>

<script>
import songCover from "common/songCover/songCover.vue";
export default {
  components: {
    songCover
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    artist: {
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
.Album {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  .songCover {
    width: 20%;
  }
  .details {
    width: 75%;
    line-height: 20px;
    .songName {
      font-size: 14px;
    }
    .artist {
      color: #a4b0be;
    }
  }
}
</style>