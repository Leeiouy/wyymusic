<template>
  <div class="findSongList">
    <div></div>
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
    return { };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    request({
      url: "/personalized",
      params: {
        limit: 5
      }
    }).then(res => {
      let result = res.data.result;
      this.songList = result;
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>