<template>
  <div class="playListTab">
    <Bscroll class="Bscroll" ref="BScroll">
      <div slot="content" class="content">
        <div
          class="list"
          v-for="(item, index) in listData"
          :key="item.index"
          @click="listClick(item)"
        >
          <songCover :imgUrl="item.coverImgUrl" :count='item.playCount'></songCover>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </Bscroll>
  </div>
</template>

<script>
import songCover from "common/songCover/songCover.vue";

import Bscroll from "common/better_scroll/better_scroll.vue";
export default {
  components: { songCover, Bscroll },
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    listClick(data) {
      this.$router.push("/songLIst/" + data.id);
    },
    resetHeight() {
      console.log(123);
      
      this.$refs.BScroll.Bscroll.refresh();
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.resetHeight();
    });
  }
};
</script>

<style lang='less' scoped>
.playListTab {
  .Bscroll {
    width: 100%;
    height: calc(100vh - 90px);
    .content {
      display: flex;
      flex-wrap: wrap;
      .list {
        width: 32%;
        padding: 10px 0;
        padding-right: 1%;
      }
    }
  }
}
</style>