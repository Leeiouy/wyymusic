<template>
  <div id="playMusic" class="van-hairline--surround" @click="goMusicDetails">
    <div class="musicDetails" v-if="show">
      <div class="img">
        <img :src="playList[playSongIndex].al.picUrl" />
      </div>

      <div class="songMes">
        <p class="songTitle van-ellipsis">{{ playList[playSongIndex].name }}</p>
        <span class="artist van-ellipsis">{{ playList[playSongIndex].ar[0].name }}</span>
      </div>

      <div class="btn">
        <div class="play" @click.stop="statusChange">
          <i class="iconfont play" :class="{wyybofang2:isPlay}"></i>
          <i class="iconfont play" :class="{wyyzanting:!isPlay}"></i>
        </div>

        <div class="playList">
          <i class="iconfont wyyliebiao"></i>
        </div>
      </div>
    </div>

    <div>
      <audio id="audio" :src="SongUrl"></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { request } from "network/request";

export default {
  components: {},
  props: {},
  data() {
    return {
      audio: "",
      show: false,
      SongUrl: ""
    };
  },
  watch: {
    //判断现在处于活跃音乐index是否发生改变
    playSongIndex: function() {
      this.show = true;
      this.getSong(); //获取音乐数据
      this.getAudioEL(); //获取audio元素，并且绑定事件
      console.log(this.playList);
    }
  },
  computed: {
    ...mapState(["status", "playSongIndex", "playList", "isPlay"])
  },
  methods: {
    statusChange() {
      this.$store.commit("isPlay");
    },
    getSong() {
      request({
        url: "/song/url",
        params: {
          id: this.playList[this.playSongIndex].id
        }
      }).then(res => {
        if (res.status == 200) {
          let result = res.data.data[0];
          this.SongUrl = result.url;
          console.log(result);
        }
      });
    },
    getAudioEL() {
      let audio = document.getElementById("audio");
      this.$store.commit("setAudioEL", audio);
      this.audio = audio;
      audio.addEventListener("progress", e => {
        //!音频信息加载完成后再获取音乐总时长 激活事件
        this.$store.commit("getDuration", e.target.duration);

        //获取音乐时长后开始播放
        e.target.play();
      });
      audio.addEventListener("timeupdate", e => {
        //!当播放时间发生改变时候  激活事件 修改vueX数据
        this.$store.commit("currentTimeChange", e.target.currentTime);
      });
      audio.addEventListener("error", e => {
        //!当数据请求失败时候  激活事件
        this.$toast.fail("音乐数据请求失败");
      });
    },
    goMusicDetails() {
      this.$router.push("/playMusicDetails");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
#playMusic {
  .musicDetails {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .img {
      img {
        height: 40px;
        display: block;
        border-radius: 50%;
      }
    }
    .songMes {
      width: 60%;
      line-height: 20px;
      .songTitle {
        font-size: 16px;
      }
      .artist {
        font-size: 12px;
        color: #a4b0be;
      }
    }
    .btn {
      width: 20%;
      display: flex;
      justify-content: space-around;

      div {
        &:active {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>