<template>
  <div class="topList">
    <loading v-if="show"></loading>

    <div v-else>
      <topListNav></topListNav>
      <topListItem :topData="topData">
        <p slot="title">官方版</p>
      </topListItem>

      <topListItem :recommand="recommand">
        <p slot="title">推荐榜</p>
      </topListItem>
    </div>
  </div>
</template>

<script>
import { request } from "network/request.js";

import topListNav from "./component/topListNav";
import topListItem from "./component/topLIstItem";

import loading from "common/loading/loading.vue";
export default {
  components: {
    topListNav,
    topListItem,
    loading
  },
  props: {},
  data() {
    return {
      topData: [],
      recommand: [],
      show: true
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {
    request({
      url: "/toplist/detail"
    }).then(res => {
      console.log(typeof this.topData);
      if (res.status == 200) {
        let result = res.data.list;
        this.topData.push(result.splice(0, 4));
        this.recommand.push(result);

        this.show = false;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>