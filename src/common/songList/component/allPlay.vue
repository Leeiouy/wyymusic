<template>
  <div class="allPlay">
    <div class="play">
      <i class="iconfont wyybofang"></i>
      <p>
        播放全部
        <span>(共{{ songCount }}首)</span>
      </p>
    </div>
    <div class="Favorite">
      <span>+</span>
      <span>收藏({{ subscribedCount }})</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    songCount: {
      type: Number,
      default: 0
    },
    subscribedCount: {
      type: Number,
      default: 0
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
.allPlay {
  width: 92%;
  padding: 0 4%;
  height: 50px;
  line-height: 35px;
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  .play {
    width: 60%;
    display: flex;
    p {
      font-size: 14px;
      margin-left: 5%;
    }
    span {
      font-size: 12px;
      color: #a4b0be;
    }
  }
  .Favorite {
    padding: 0 3%;
    height: 35px;
    border-radius: 100px;
    background-color: #e60026;
    color: white;
    line-height: 35px;
    text-align: center;
  }
}
</style>