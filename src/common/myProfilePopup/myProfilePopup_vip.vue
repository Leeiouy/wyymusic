<template>
  <div class="vip">
    <div class="vip_details">
      <div class="clear-fix">
        <div class="left">
          <!-- <img src="assets\img\common\vip2.png" /> -->
          <!-- <p class="f12 fw van-ellipsis">加入黑胶vip，立享超12项专属特权</p> -->
        </div>
        <div class="right f10">
          <!-- <p>会员中心</p> -->
        </div>
      </div>
      <div class="info">
        <!-- <p>15个月黑胶vip限时6折</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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

.vip {
  width: 100%;
  height: 18vh;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 0.4),
    rgba(55, 55, 55, 0.4)
  );
}
.vip_details {
  width: 90%;
  height: 12vh;
  border-radius: 2vw 2vw 0vw 0vw;
  box-shadow: 0px -1px 4px 2px rgba(55, 55, 55, 0.6);
  position: absolute;
  bottom: 3vh;
  left: 50%;
  margin-left: -45%;
  background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 0.7),
    rgba(55, 55, 55, 0.7)
  );
}

</style>