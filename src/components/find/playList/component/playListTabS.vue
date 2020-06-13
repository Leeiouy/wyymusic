<template>
  <div class="playListTabS">
    <van-tabs v-model="active" background="transparent" @click="onClick">
      <van-tab v-for="(item, index) in titles" :key="item.index" :title="item.title" class="tab">
        <loading v-if="!titles[index].show"></loading>
        <playListTab v-else :listData="titles[index].listData"></playListTab>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { request } from "network/request.js";

import loading from "common/loading/loading.vue";

import playListTab from "./playListTab";
export default {
  components: {
    playListTab,
    loading
  },
  props: {},
  data() {
    return {
      active: 0,
      titles: [
        {
          title: "全部",
          listData: null,
          show: false
        },
        {
          title: "华语",
          listData: null,
          show: false
        },
        {
          title: "欧美",
          listData: null,
          show: false
        },
        {
          title: "流行",
          listData: null,
          show: false
        },
        {
          title: "古风",
          listData: null,
          show: false
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    listClick(data) {
      this.$router.push("/songLIst/" + data.id);
    },
    onClick(index, title) {
      if (this.titles[index].listData == null) {
        request({
          url: "/top/playlist/highquality",
          params: {
            cat: this.titles[index].title
          }
        }).then(res => {
          if (res.status == 200) {
            let result = res.data.playlists;
            this.titles[index].listData = result;
            this.titles[index].show = true;
          }
        });
      }
    }
  },
  created() {
    request({
      url: "/top/playlist/highquality",
      params: {
        cat: this.titles[0].title
      }
    }).then(res => {
      if (res.status == 200) {
        let result = res.data.playlists;
        this.titles[0].listData = result;
        this.titles[0].show = true;
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
}
</style>