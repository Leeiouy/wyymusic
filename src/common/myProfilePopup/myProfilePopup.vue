<template>
  <div class="myProfilePopup">
    <vip></vip>
    <my></my>
  </div>
</template>

<script>
import vip from "common/myProfilePopup/myProfilePopup_vip.vue";
import my from "common/myProfilePopup/myProfilePopup_my.vue";
export default {
  components: {
    vip,
    my
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

<style scoped>
.myProfilePopup {
  position: relative;
}
</style>