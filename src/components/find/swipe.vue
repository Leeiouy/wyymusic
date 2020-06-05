<template>
  <div class="find-swipe">
    <van-swipe
      v-if="banners"
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :loop="true"
    >
      <van-swipe-item v-for="(item, index) in banners" :key="item.index">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { request } from "network/request.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      banners: null
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    request({
      url: "/banner",
      params: {
        type: 1
      }
    }).then(res => {
      this.banners = res.data.banners;
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.my-swipe {
  border-radius: 5px;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>