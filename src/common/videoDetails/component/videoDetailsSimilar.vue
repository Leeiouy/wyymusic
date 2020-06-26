<template>
  <div class="videoDetailsSimilar" v-if="show">
    <h2>相关视频</h2>
    <div v-for="(item, index) in similarMv" :key="index">
      <videoItem :videoData="item"></videoItem>
    </div>
  </div>
</template>

<script>
import { request } from "network/request";

import videoItem from "common/videoItem/videoItem.vue";

export default {
  components: {
    videoItem
  },
  props: {},
  data() {
    return {
      show: false,
      similarMv: []
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {
    let id = this.$route.params.id;
    request({
      url: "/simi/mv",
      params: {
        mvid: id
      }
    }).then(res => {
      if ((res.status = 200)) {
        let result = res.data.mvs;
        this.similarMv = result;
        console.log(result);

        this.show = true;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>