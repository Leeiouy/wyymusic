<template>
  <div class="my">
    <my-log></my-log>
    <my-options></my-options>
    <more-options></more-options>
  </div>
</template>

<script>
// 登录
import myLog from "common/myProfilePopup/myProfilePopup_my_log.vue";

// 选项
import myOptions from "common/myProfilePopup/myProfilePopup_my_options.vue";

//更多选项
import moreOptions from "common/myProfilePopup/myProfilePopup_my_moreOptions.vue";
export default {
  components: {
    myLog,
    myOptions,
    moreOptions
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
.my {
  position: relative;
  top: -25px;
  padding-top: 20px;
  width: 100%;
  border-radius: 20px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  text-align: center;
}
</style>