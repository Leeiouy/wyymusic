<template>
  <div class="videoItems">
    <Bscroll class="Bscroll" ref="Bscroll">
      <div slot="content">
        <div class="item" v-for="(item, index) in data" :key="index">
          <videoItem :videoData="item"></videoItem>
        </div>
      </div>
    </Bscroll>
  </div>
</template>

<script>
import videoItem from "./videoItem";

import Bscroll from "common/better_scroll/better_scroll.vue";
export default {
  components: {
    videoItem,
    Bscroll
  },
  props: {
    data: Array,
    default() {
      return [];
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 监听上拉加载
      this.$refs.Bscroll.Bscroll.on("pullingUp", e => {
        this.$emit("pullUp");

        // 刷新一次 两秒内不允许刷新
        setTimeout(() => {
          //告诉插件上拉成功触发，允许触发下一次上拉
          this.$refs.Bscroll.Bscroll.finishPullUp();
        }, 2000);

        //每次更新数据 等待DOM更新完成 都要重新计算高度

        this.$nextTick(() => {
          this.$refs.Bscroll.Bscroll.refresh();
        });
      });
    });
  }
};
</script>

<style lang='less' scoped>
.Bscroll {
  height: calc(100vh - 90px);
}
</style>