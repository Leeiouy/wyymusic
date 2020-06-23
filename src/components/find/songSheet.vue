<template>
  <div class="findSongList" v-if="show">
    <findTitle>
      <template #smallTitle>
        <p>推荐歌单</p>
      </template>
      <template #bigTitle>
        <span>为你精挑细选</span>
      </template>
      <template #btn>
        <span @click="clickMore">查看更多</span>
      </template>
    </findTitle>

    <Bscroll ref="Bscroll" class="Bscroll" :scrollX="true">
      <template #content>
        <div class="content">
          <div
            v-for="(item, index) in songListData"
            :key="index"
            class="item"
            @click="itemClick(item.id)"
          >
            <songCover :imgUrl="item.picUrl" :count="item.playCount"></songCover>
            <p class="van-multi-ellipsis--l2">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </Bscroll>
  </div>
</template>

<script>
import { request } from "network/request.js";

import songCover from "common/songCover/songCover.vue";

import Bscroll from "common/better_scroll/better_scroll.vue";

import findTitle from "components/find/common/title.vue";

import { debounce } from "common/debounce/debounce.js";
export default {
  components: {
    songCover,
    Bscroll,
    findTitle
  },
  props: {},
  data() {
    return {
      show: false,
      songListData: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    clickMore() {
      this.$router.push("/playList");
    },
    itemClick: debounce(function(id) {
      //  有可能是滚动插件派送事件问题会触发两次，使用节流函数防止触发两次
      this.$router.push("/songList/" + id);
    }, 200)
  },
  created() {
    request({
      url: "/personalized",
      params: {
        limit: 6
      }
    })
      .then(res => {
        let result = res.data.result;
        this.songListData = result;
        this.show = true;
      })
      .then(res => {
        this.$nextTick(() => {
          this.$refs.Bscroll.Bscroll.refresh();
        });
      });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.findSongList {
  .Bscroll {
    width: 100%;
    overflow: hidden;
    .content {
      width: 220%;
      display: flex;
    }
  }
  .item {
    width: 33vw;
    margin-right: 7px;
    border-radius: 5px 5px 5px 5px;
    overflow: hidden;
    .van-multi-ellipsis--l2 {
      font-size: 13px;
    }
  }
}
</style>