<template>
  <div class="searchResult">
    <loading v-if="!show"></loading>
    <div v-else>
      <van-tabs v-model="active" >
        <van-tab title="单曲">
          <songList :playList="songs" :isIndex="true"></songList>
        </van-tab>

        <!-- <van-tab title="单曲">
          <searchSong :songs="songs"></searchSong>
        </van-tab>



        <van-tab title="单曲">
          <searchSong :songs="songs"></searchSong>
        </van-tab>
        -->
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { request } from "network/request.js";

import loading from "common/loading/loading.vue";

import songList from "common/songList/component/list.vue";

export default {
  components: { loading, songList },
  props: {},
  data() {
    return {
      active: 0,
      show: false,
      songs: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    getData: function(key, type, limit) {
      request({
        url: "/search",
        params: {
          keywords: key,
          type: type,
          limit: limit
        }
      }).then(res => {
        if (res.status == 200) {
          let result = res.data.result.songs;

          this.songs = result;
          this.show = true;

        }
      });
    }
  },
  created() {
    let keywork = this.$route.params.id;
    this.getData(keywork, 1);
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.searchResult {
  padding-top: 50px;
}
</style>