<template>
  <div class="recommend_music pb50" v-if="show">
    <findTitle>
      <template #smallTitle>
        <p>推荐新歌</p>
      </template>
      <template #bigTitle>
        <span>{{ nowTimes }}</span>
      </template>

      <template #btn>
        <i class="iconfont wyyjiediankaishi"></i>
        <span @click="playAllMusic">播放全部</span>
      </template>
    </findTitle>

    <van-swipe :loop="false" :width="320" :show-indicators="false" :stop-propagation="false">
      <!-- 阻止滑动触发click -->
      <van-swipe-item v-for="(item, index) in recommendedMusic" :key="item.index">
        <div class="list" v-for="(items, index) in item" :key="index" @click="listClick(items)">
          <songcover class="songcover" :imgUrl="items.picUrl"></songcover>

          <div class="info">
            <span class="songName van-ellipsis">{{ items.name }}</span>
            <span class="artist a4b van-ellipsis">- {{items.song.artists[0].name }}</span>
            <p class="a4b van-ellipsis">{{ items.song.alias[0] }}</p>
          </div>

          <div class="play">
            <i class="iconfont wyybofang1 d43"></i>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { request } from "network/request.js";

import { getSongData, getAllData } from "network/getSongData/getSongData.js";

import findTitle from "components/find/common/title.vue";

import songcover from "common/songCover/songCover.vue";

export default {
  components: {
    findTitle,
    songcover
  },
  props: {},
  data() {
    return {
      show: false,
      songData: [],
      recommendedMusic: []
    };
  },
  watch: {},
  computed: {
    nowTimes() {
      let time = new Date();
      let month = time.getMonth() + 1;
      let date = time.getDate();
      return month + "月" + date + "日";
    }
  },
  methods: {
    listClick(data) {
      getSongData(data.id).then(res => {
        if (res.status == 200) {
          let result = res.data.songs[0];
          this.$store.commit("setPlayList", result);
        }
      });
    },
    playAllMusic() {
      getAllData.call(this, this.songData);

      console.log(this.songData);
    }
  },
  created() {
    request({
      url: "/personalized/newsong"
    }).then(res => {
      if (res.status == 200) {
        let result = res.data.result;
        this.songData = result;

        // 拆分成数组
        for (let i = 0; i < result.length; i += 3) {
          this.recommendedMusic.push(result.slice(i, i + 3));
        }
        this.show = true;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.recommend_music {
  .wyyjiediankaishi {
    font-size: 12px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    &:active {
      opacity: 0.7;
    }
    .songcover {
      width: 20%;
    }
    .info {
      width: 50%;
      line-height: 20px;
      overflow: hidden;
      .songName {
        font-size: 14px;
      }
    }
    .play {
      width: 18%;

      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>