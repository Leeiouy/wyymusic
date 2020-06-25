<template>
  <div id="video" class="mainPage">
    <van-tabs v-model="active" animated :lazy-render="false">
      <van-tab v-for="(item,index) in sort" :title="item.title">
        <videoItems :data="item.videoData" @pullUp="pullUp(index)"></videoItems>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { request } from "network/request";

import videoItems from "components/video/videoItems.vue";


export default {
  components: {
    videoItems,

  },
  props: {},
  data() {
    return {
      titles: ["全部", "推荐", "最新", "网易出品"],
      sort: [
        { title: "全部", path: "/mv/all", limit: 15, count: 1, videoData: [] },
        {
          title: "推荐",
          path: "/personalized/mv",
          limit: 15,
          count: 1,
          videoData: []
        },
        {
          title: "最新",
          path: "/mv/first",
          limit: 15,
          count: 1,
          videoData: []
        },
        {
          title: "网易出品",
          path: "/mv/exclusive/rcmd",
          limit: 15,
          count: 1,
          videoData: []
        }
      ],
      active: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    pullUp(index) {
      let arr = this.sort[index];
      //页数加一
      let count = (arr.count += 1);
      // 请求数据条数等于 页数乘以单页条数 15 * count
      let limits = arr.limit * count;
      request({
        url: arr.path,
        params: {
          limit: limits
        }
      }).then(res => {
        arr.videoData = res.data.data || res.data.result;
      });
    }
  },
  created() {
    // 循环数组将数据保存在数组里
    this.sort.forEach((arr, index) => {
      request({
        url: arr.path,
        params: {
          limit: arr.limit
        }
      }).then(res => {
        //数据有些不一样
        arr.videoData = res.data.data || res.data.result;
      });
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>