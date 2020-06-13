<template>
  <div class="topListItem">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="topList" v-if="topData.length!==0">
      <div
        class="item"
        v-for="(item, index) in topData[0]"
        :key="item.index"
        @click="itemClick(item)"
      >
        <songCover class="topList_songCover" :imgUrl="item.coverImgUrl" :mes="item.updateFrequency"></songCover>

        <div class="song">
          <p class="van-ellipsis">1.{{ item.tracks[0].first }} - {{ item.tracks[0].second}}</p>
          <p class="van-ellipsis">2.{{ item.tracks[1].first }} - {{ item.tracks[1].second}}</p>
          <p class="van-ellipsis">3.{{ item.tracks[2].first }} - {{ item.tracks[2].second}}</p>
        </div>
      </div>
    </div>

    <div class="recommand" v-if="recommand.length!==0">
      <div v-for="(item, index) in recommand[0]" :key="item.index" @click="itemClick(item)">
        <songCover
          class="recommand_songCover"
          :imgUrl="item.coverImgUrl"
          :mes="item.updateFrequency"
        ></songCover>

        <span class="van-ellipsis">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import songCover from "common/songCover/songCover.vue";

export default {
  components: { songCover },
  props: {
    topData: {
      type: Array,
      default() {
        return [];
      }
    },
    recommand: {
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
    itemClick(data) {
      this.$router.push("/songLIst/" + data.id);
      console.log(data.id);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.topListItem {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
  .title {
    font-size: 16px;
    font-weight: 600;
    padding: 5px 0;
  }
  .item {
    display: flex;
    justify-content: space-between;
    .topList_songCover {
      width: 30%;
    }
    .song {
      width: 65%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      p {
        width: 100%;
        color: #a4b0be;
      }
    }
  }
  .recommand {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    div {
      width: 32%;
      margin-right: 1%;
      margin-bottom: 5px;
      overflow: hidden;
      .recommand_songCover {
        width: 100%;
      }
    }
  }
}
</style>