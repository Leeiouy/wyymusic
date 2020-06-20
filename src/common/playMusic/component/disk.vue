<template>
  <div class="disk">
    <div class="song_disc">
      <img src="~assets/img/song-disc.png" />
    </div>
    <div class="disc_bg">
      <img src="~assets/img/song-Background.png" />
    </div>
    <div class="needle" :class="{play,stop}">
      <img src="~assets/img/song-needle.png" />
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
    play: function() {
      return !this.$store.state.playStatus
    },
    stop: function() {
      return this.$store.state.playStatus
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.disk {
  position: relative;
  height: 50%;
  img {
    width: 70%;
    display: block;
    margin: 0 auto;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .needle {
    left: 40px;

    img {
      display: inline-block;
      width: 20%;
    }
  }

  .play {
    animation-name: playMusic;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes playMusic {
      0% {
        transform: translateX(-30px);
        opacity: 0;
      }
      25% {
        opacity: 0;
        transform: translateX(-30px);
      }
      50% {
        opacity: 0.5;
      }
      75% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
  .stop {
    animation-name: stopMusic;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    @keyframes stopMusic {
      0% {
        opacity: 1;
        transform: translateX(0px);
      }
      25% {
        opacity: 1;
        transform: translateX(0px);
      }
      50% {
        opacity: 0.5;
      }
      75% {
        opacity: 0;
        transform: translateX(-30px);
      }
      100% {
        opacity: 0;
        transform: translateX(-30px);
      }
    }
  }
}
</style>