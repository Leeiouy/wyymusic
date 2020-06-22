<template>
  <div id="playMusic" @click="goMusicDetails">
    <div class="musicDetails van-hairline--surround" v-if="show">
      <div class="img">
        <img :src="playList[playSongIndex].al.picUrl" />
      </div>

      <div class="songMes">
        <p class="songTitle van-ellipsis">{{ playList[playSongIndex].name }}</p>
        <span class="artist van-ellipsis">{{ playList[playSongIndex].ar[0].name }}</span>
      </div>

      <div class="btn">
        <div class="play" @click.stop="statusChange">
          <i class="iconfont play" :class="{wyybofang2:!isPlay}"></i>
          <i class="iconfont play" :class="{wyyzanting:isPlay}"></i>
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

          if (!result.url) {
            this.$toast.fail("音乐数据请求失败");
            return;
          }

          this.SongUrl = result.url;
          console.log(result);
        }
      });
    },
    getAudioEL() {
      let audio = document.getElementById("audio");
      this.$store.commit("setAudioEL", audio);
      this.audio = audio;

      audio.addEventListener("timeupdate", e => {
        //当播放时间发生改变时候  激活事件 修改vueX数据
        this.$store.commit("currentTimeChange", e.target.currentTime);
      });

      //当浏览器能够开始播放指定的音频/视频时，发生 canplay 事件
      audio.addEventListener(
        "canplay",
        e => {
          //获取音乐总时长提交给vueX
          this.$store.commit("getDuration", e.target.duration);
          //开始播放
          e.target.play();
          this.$store.commit("isPlay", true);
        },
        { once: true }
      );

      audio.addEventListener(
        "error",
        e => {
          //当数据请求失败时候  激活事件
          this.$toast.fail("音乐数据请求失败");
        },
        { once: true }
      );
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
  position: absolute;
  z-index: 10000;
  .musicDetails {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
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