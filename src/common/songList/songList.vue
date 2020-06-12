<template>
  <div class="songList" v-if="show">
    <songListNav></songListNav>
    <list :playList="playList"></list>
  </div>
</template>

<script>
import { songList } from "network/songLIst/songList.js";
import songListNav from "./component/songListNav";

import list from "common/songList/component/list.vue";

export default {
  name: "songList",
  components: {
    songListNav,
    list
  },
  props: {},
  data() {
    return {
      show: false,
      title: null,
      playList: []
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    let id = this.$route.params.id;
    console.log();

    songList(id)
      .then(res => {
        this.playList = res.data.songs;
        this.show = true;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>