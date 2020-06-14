<template>
  <div class="commentContent">
    <div class="commentHot" v-for="(item, index) in commentHot" :key="item.index">
      <commentList
        :imgUrl="item.user.avatarUrl"
        :userName="item.user.nickname"
        :content="item.content"
        :likedCount="item.likedCount"
        :commentTime="item.time"
      ></commentList>
    </div>

    <div class="commentS" v-for="(item, index) in commentS" :key="item.index">
      <commentList
        :imgUrl="item.user.avatarUrl"
        :userName="item.user.nickname"
        :content="item.content"
        :likedCount="item.likedCount"
        :commentTime="item.time"
      ></commentList>
    </div>
  </div>
</template>

<script>
import commentList from "./commentList";

export default {
  components: {
    commentList
  },
  props: {
    commentHot: {
      type: Array,
      default() {
        return [];
      }
    },
    commentS: {
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
.commentContent {
  padding-top: 46px;
}
</style>