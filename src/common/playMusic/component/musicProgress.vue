<template>
  <div class="progress">
    <div class="bar">
      <div class="start Time">{{ currentTime | fromTime }}</div>
      <van-slider
        v-model="value"
        bar-height="2px"
        button-size="15px"
        active-color="white"
        inactive-color="#747d8c"
        @change="sliderChange"
      />
      <div class="end Time">{{ duration | fromTime }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  props: {
    songUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: 0 //进度条位置
    };
  },
  watch: {
    currentTime: function() {
      let position = Math.ceil((this.currentTime / this.duration) * 100);
      //根据现在播放时间移动 slider 按钮
      if (this.value !== position) {
        this.value = position;
      }
    }
  },
  computed: {
    ...mapState(["currentTime", "duration", "audioEl"]),
    
  },
  methods: {
    sliderChange(value) {
      // 进度条百分比
      let percentage = value / 100;

      this.audioEl.currentTime = Math.floor(this.duration * percentage);
    }
  },
  filters: {
    fromTime(s) {
      let Minute = Math.floor(s / 60);
      let seconds = Math.floor(s % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return Minute + ":" + seconds;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.progress {
  position: fixed;
  bottom: 90px;
  left: 0;
  right: 0;
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