<template>
  <div class="PopupList">
    <loading v-if="!show"></loading>

    <div v-else>
      <album
        :imgUrl="SongDetails.al.picUrl"
        :title="SongDetails.name"
        :artist="SongDetails.ar[0].name"
      ></album>

      <div class="options">
        <div class="nextPlay van-hairline--bottom">
          <i class="iconfont wyybofang"></i>
          <span>下一首播放</span>
        </div>

        <div class="download van-hairline--bottom">
          <i class="iconfont wyyxiazai"></i>
          <span>下载</span>
        </div>

        <div class="Album van-hairline--bottom" @click="AlbumClick">
          <i class="iconfont wyyzhuanji-"></i>
          <span>专辑: {{ SongDetails.al.name }}</span>
        </div>

        <div class="comment van-hairline--bottom">
          <i class="iconfont wyypinglun"></i>
          <span>评论</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "common/loading/loading.vue";

import { request } from "network/request.js";

import album from "common/songList/component/AlbumItem.vue";
export default {
  components: {
    loading,
    album
  },
  props: {
    songId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: false,
      SongDetails: null
    };
  },
  watch: {
    songId: function() {
      this.getSongDetails(this.songId);
    }
  },
  computed: {},
  methods: {
    getSongDetails(songid) {
      request({
        url: "song/detail",
        params: { ids: songid }
      }).then(res => {
        if (res.status == 200) {
          let result = res.data.songs[0];
          this.SongDetails = result;
          console.log(result);

          this.show = true;
        }
      });
    },
    AlbumClick() {
      let songId = this.SongDetails.al.id;
      console.log(this.SongDetails);
      //   this.$router.push("/songList/" + songId);
    }
  },
  created() {
    if (this.songId !== 0) {
      this.getSongDetails(this.songId);
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.PopupList {
  padding: 15px;
  .options {
    padding-top: 5px;
    div {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      display: flex;
      &:active {
        opacity: 0.7;
      }
      i {
        width: 10%;
      }
      span {
        width: 90%;
      }
    }
  }
}
</style>