<template>
  <div class="playBar">
    <i class="iconfont wyyarrow-left" @click.stop="goback"></i>

    <div class="mes">
      <p>{{ title }}</p>

      <span>{{artist }}</span>
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
  computed: {
    title: function() {
      return (
        this.$store.state.playList[this.$store.state.playSongIndex] &&
        this.$store.state.playList[this.$store.state.playSongIndex].al.name
      );
    },
    artist: function() {
      return (
        this.$store.state.playList[this.$store.state.playSongIndex] &&
        this.$store.state.playList[this.$store.state.playSongIndex].ar[0].name
      );
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goback() {
      this.$router.go(-1);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playBar {
  width: 100%;
  height: 46px;
  color: white;
  display: flex;
  align-items: center;
  i {
    font-size: 24px;
    margin: 0 15px;
    &:active {
      opacity: 0.7;
    }
  }
  .mes {
    p {
      font-size: 18px;
    }
  }
}
</style>