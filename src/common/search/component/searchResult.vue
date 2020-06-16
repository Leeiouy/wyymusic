<template>
  <div class="searchResult">
    <loading v-if="!show"></loading>
    <div v-else></div>
  </div>
</template>

<script>
import { request } from "network/request.js";

import loading from "common/loading/loading.vue";
export default {
  components: { loading },
  props: {},
  data() {
    return {
      show: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    getData: function(key, type, limit) {
      request({
        url: "/search",
        params: {
          keywords: key,
          type: type,
          limit: limit
        }
      }).then(res => {
        if (res.status == 200) {
          console.log(res);
        }
      });
    }
  },
  created() {
    let keywork = this.$route.params.id;
    this.getData(keywork, 1018);
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>