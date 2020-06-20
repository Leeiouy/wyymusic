<template>
  <div class="progress">
    <div class="bar">
      <div class="start Time">{{ musicCurrentTime }}</div>
      <van-slider
        v-model="value"
        bar-height="2px"
        button-size="15px"
        active-color="white"
        inactive-color="#747d8c"
        @change="sliderChange"
      />
      <div class="end Time">{{ musicDuration }}</div>
    </div>

    <audio
      id="audio"
      src="http://m7.music.126.net/20200620151742/d67fb7e53ce9e8f1c124f0ce47e88a24/ymusic/e7c5/84f9/897e/a897fda63f7e9f788eac7abbc0bf8602.mp3"></audio>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      audio: "", //音频元素
      value: 0, //进度条位置
      currentTime: 0, //当前播放位置秒数
      duration: 0 //音乐总时长
    };
  },
  watch: {},
  computed: {
    musicCurrentTime: function() {
      return this.fromTime(this.currentTime);
    },
    musicDuration: function() {
      return this.fromTime(this.duration);
    }
  },
  methods: {
    sliderChange(value) {
      // 进度条百分比
      let percentage = value / 100;
      this.audio.currentTime = Math.floor(this.duration * percentage);
    },
    fromTime(s) {
      //事件格式化
      let Minute;
      let seconds;
      Minute = Math.floor(s / 60);
      seconds = Math.floor(s % 60);
      seconds = seconds > 10 ? seconds : "0" + seconds;
      return Minute + ":" + seconds;
    }
  },
  created() {},
  mounted() {
    this.audio = document.getElementById("audio");

    this.audio.addEventListener("progress", e => {
      //!音频信息加载完成后再获取音乐总时长 激活事件
      this.duration = e.target.duration;
    });
    this.audio.addEventListener("timeupdate", e => {
      //!当播放时间发生改变时候  激活事件
      this.currentTime = e.target.currentTime;
    });
    this.audio.addEventListener("error", e => {
      //!当数据请求失败时候  激活事件
      this.$toast.fail("音乐数据请求失败");
    });
  }
};
</script>

<style lang='less' scoped>
.progress {
  .bar {
    display: flex;
    align-items: center;
    .Time {
      width: 15%;
      margin: 0 3%;
      text-align: center;
      line-height: 15px;
      color: white;
    }
  }
  audio {
    margin-top: 50px;
  }
}
</style>