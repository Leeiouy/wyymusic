<template>
  <div class="topList">
    <loading v-if="show"></loading>

    <div v-else>
      <topListNav></topListNav>

      <Bscroll class="Bscroll" ref="Bscroll">
        <div slot="content" class="pb50">
          <topListItem :topData="topData">
            <p slot="title">官方版</p>
          </topListItem>

          <topListItem :recommand="recommand">
            <p slot="title">推荐榜</p>
          </topListItem>
        </div>
      </Bscroll>
    </div>
  </div>
</template>

<script>
import Bscroll from "common/better_scroll/better_scroll.vue";

import { request } from "network/request.js";

import topListNav from "./component/topListNav";

import topListItem from "./component/topLIstItem";

import loading from "common/loading/loading.vue";
export default {
  components: {
    Bscroll,
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
  methods: {},
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
  mounted() {
    this.$nextTick(() => {
      //等待Dom更新完成刷新高度
      setTimeout(() => {
        this.$refs.Bscroll.Bscroll.refresh();
      }, 100);
    });
  }
};
</script>

<style lang='less' scoped>
.topList {
  margin-top: 50px;
  .Bscroll {
    height: calc(100vh - 46px);
  }
}
</style>