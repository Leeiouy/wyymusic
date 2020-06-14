<template>
  <div class="comment" v-if="show">
    <commentNav></commentNav>
    <conmentContent :commentS="comments"></conmentContent>
  </div>
</template>

<script>
import { request } from "network/request.js";
import commentNav from "./component/commentNav";
import conmentContent from "./component/commentContent";
export default {
  name: "comment",
  components: {
    commentNav,
    conmentContent
  },
  props: {},
  data() {
    return {
      show: false,
      topComment: [],
      comments: []
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    let songid = this.$route.params.id;
    request({
      url: "/comment/playlist",
      params: {
        id: songid
      }
    })
      .then(res => {
        if (res.status == 200) {
          let result = res.data;
          this.topComment = result.topComment;
          this.comments = result.comments;
          console.log(result);
          this.show = true;
        }
      })
      .catch(err => {
        this.$toast.fail("网络发生错误~");
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>