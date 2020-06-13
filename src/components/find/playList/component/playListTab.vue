<template>
  <div class="playListTab">
    <van-tabs v-model="active" background="transparent" v-if="show">
      <van-tab title="推荐" class="tab">
        <div class="list" v-for="(item, index) in listData" :key="index" @click="listClick(item)">
          <songCover class="songCover" :imgUrl="item.coverImgUrl"></songCover>

          <p class="van-multi-ellipsis--l2">{{ item.name }}</p>
        </div>
      </van-tab>
      <van-tab title="推荐">内容 1</van-tab>
      <van-tab title="推荐">内容 1</van-tab>
      <van-tab title="推荐">内容 1</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { request } from "network/request.js";

import songCover from "common/songCover/songCover.vue";

export default {
  components: {
    songCover
  },
  props: {},
  data() {
    return {
      show: false,
      active: 0,
      title: [
        {
          mes: "推荐",
          url: "/top/playlist"
        },
        {
          mes: "官方",
          url: "/top/playlist"
        },
        {
          mes: "精品",
          url: "/top/playlist"
        },
        {
          mes: "欧美",
          url: "/top/playlist"
        }
      ],
      listData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    listClick(data) {
      this.$router.push("/songLIst/" + data.id);
    }
  },
  created() {
    request({
      url: this.title[0].url
    }).then(res => {
      if (res.status == 200) {
        let result = res.data.playlists;
        this.listData = result;
        this.show = true;
        console.log(result);
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.tab {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .list {
    width: 32%;
    padding: 5px 0;
    margin-right: 1%;
    .songCover {
      width: 100%;
    }
  }
}
</style>