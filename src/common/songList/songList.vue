<template>
  <div class="songList" v-if="show">
    <songListNav :title="title" :show="titleShow"></songListNav>

    <songDetails
      :imgUrl="coverImgUrl"
      :playCount="playCount"
      :title="songTitle"
      :description="description"
      :avatarUrl="avatarUrl"
      :nickname="nickname"
      :commentCount="commentCount"
      :shareCount="shareCount"
    ></songDetails>

    <van-sticky :offset-top="46" @scroll="stickyScroll">
      <allPlay :songCount="playList.length" :subscribedCount="subscribedCount"></allPlay>
    </van-sticky>

    <list :playList="playList"></list>
  </div>
</template>

<script>
import { request } from "network/request.js";

import songListNav from "./component/songListNav";

import songDetails from "./component/datelis";

import allPlay from "common/songList/component/allPlay.vue";

import list from "common/songList/component/list.vue";

export default {
  name: "songList",
  components: {
    songListNav,
    songDetails,
    allPlay,
    list
  },
  props: {},
  data() {
    return {
      data: null,
      show: true,
      title: "",
      titleShow: false,
      songTitle: null,
      playList: [],
      coverImgUrl: "",
      playCount: 0,
      subscribedCount: 0,
      description: "",
      avatarUrl: "",
      nickname: "",
      commentCount: 0,
      shareCount: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    stickyScroll(position) {
      if (position.scrollTop > 30) {
        this.titleShow = true;
      } else {
        this.titleShow = false;
      }
      console.log(position);
    }
  },
  created() {
    let songListId = this.$route.params.id;
    request({
      url: "/playlist/detail",
      params: {
        id: songListId
      }
    }).then(res => {
      if (res.status == "200") {
        let result = res.data.playlist;
        console.log(result);
        this.title = result.name;

        this.data = result;
        this.songTitle = result.name; //歌单标题
        this.playList = result.tracks; //歌单列表
        this.subscribedCount = result.subscribedCount; //收藏数
        this.coverImgUrl = result.coverImgUrl; //歌单封面图片
        this.playCount = result.playCount; //播放次数
        this.description = result.description; //歌单描述
        this.nickname = result.creator.nickname; //歌单创建者name
        this.avatarUrl = result.creator.avatarUrl; //歌单创建者头像
        this.commentCount = result.commentCount; //评论数
        this.shareCount = result.shareCount; //分享数
        this.show = true;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>