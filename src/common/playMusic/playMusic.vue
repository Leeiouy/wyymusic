<template>
  <div id="playMusic" @click="goMusicDetails" v-show="playMusicShow">
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

        <div class="playList" @click.stop="isPopupShow">
          <i class="iconfont wyyliebiao"></i>
        </div>
      </div>
    </div>

    <div>
      <audio id="audio" :src="SongUrl"></audio>
    </div>

    <van-popup
      v-model="listShow"
      position="bottom"
      round
      get-container="body"
      @click-overlay="closePopup"
      :style="{ height: '40%' }"
    >
      <playListPopup></playListPopup>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { request } from "network/request";

import playListPopup from "common/playMusic/playListPopup.vue";
export default {
  components: {
    playListPopup
  },
  props: {},
  data() {
    return {
      audio: "",
      show: false,
      SongUrl: "",
      playMusicShow: true
    };
  },
  watch: {
    //判断现在处于活跃音乐index是否发生改变
    playSongIndex: function() {
      this.show = true;
      this.getSong(); //获取音乐数据
      this.getAudioEL(); //获取audio元素，并且绑定事件
    },
    "$route.path": function() {
      let path = this.$route.path;

      if (
        path == "/video" ||
        path == "/yuncun" ||
        path == "/video/details"
      ) {
        this.playMusicShow = false;
      } else {
        this.playMusicShow = true;
      }
    }
  },
  computed: {
    ...mapState(["status", "playSongIndex", "playList", "isPlay"]),
    listShow: {
      get() {
        return this.$store.state.listShow;
      },
      set() {}
    }
  },
  methods: {
    statusChange() {
      this.$store.commit("isPlay");
    },
    //点击弹出层遮罩发生事件
    isPopupShow() {
      this.$store.commit("isListShow");
    },
    //点击弹出层遮罩发生事件
    closePopup() {
      this.$store.commit("isListShow");
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
            this.SongUrl = "";
            this.audio.pause();

            this.$store.commit("isPlay");

            this.$toast.fail("音乐数据请求失败");
            return;
          }
          this.SongUrl = result.url;
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

      audio.addEventListener("ended", e => {
        this.$store.commit("nextPlay");
      });

      audio.addEventListener(
        "error",
        e => {
          //当数据请求失败时候  激活事件
          console.log(e.target);

          this.$toast.fail("音乐数据请求失败");
        },
        { once: true }
      );
    },
    goMusicDetails() {
      this.$router.push({
        path: "/playMusicDetails"
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
#playMusic {
  position: absolute;
  z-index: 1000;
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