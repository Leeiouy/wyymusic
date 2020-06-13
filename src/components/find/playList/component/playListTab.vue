<template>
  <div class="playListTab">
    <div class="list" v-for="(item, index) in listData" :key="item.index" @click="listClick(item)">
      <songCover :imgUrl="item.coverImgUrl"></songCover>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import songCover from "common/songCover/songCover.vue";
export default {
  components: { songCover },
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
      console.log(data);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.playListTab {
  display: flex;
  flex-wrap: wrap;
  .list {
    width: 32%;
    padding: 10px 0;
    padding-right: 1%;
  }
}
</style>