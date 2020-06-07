<template>
  <div class="findSongList" v-if="show">
    <findTitle></findTitle>

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

import findTitle from "components/find/title.vue";
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
    itemClick(id) {
      console.log(id);
    }
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
        this.$refs.Bscroll.Bscroll.refresh();
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
  }
}
</style>