<template>
  <div class="searchSongs">
    <div class="songsItme" v-for="(item, index) in songs" :key="item.index">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    songs: {
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
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>