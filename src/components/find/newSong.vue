<template>
  <div class="newSong">
    <findTitle>
      <template #smallTitle>
        <p>推荐歌单</p>
      </template>
      <template #bigTitle>
        <span>为你精挑细选</span>
      </template>
    </findTitle>
  </div>
</template>

<script>
import findTitle from "components/find/common/title.vue";
export default {
  components: {
    findTitle
  },
  props: {},
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