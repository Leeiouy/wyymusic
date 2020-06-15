<template>
  <div class="topList">
    <topListNav></topListNav>
    <topListItem :topData="topData">
      <p slot="title">官方版</p>
    </topListItem>

    <topListItem :recommand="recommand">
      <p slot="title">推荐榜</p>
    </topListItem>
  </div>
</template>

<script>
import { request } from "network/request.js";

import topListNav from "./component/topListNav";
import topListItem from "./component/topLIstItem";
export default {
  components: {
    topListNav,
    topListItem
  },
  props: {},
  data() {
    return {
      topData: [],
      recommand: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {}
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
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>