<template>
  <div class="songListNav">
    <van-nav-bar
      :fixed="true"
      :border="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :class="{titleShow:show}"
    >
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
      </template>

      <template #title>
        <div :class=" {titles:title}">
          <span  v-show="show">{{ title }}</span>
        </div>
      </template>

    </van-nav-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("right");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.van-nav-bar {
  background-color: transparent;
  i {
    color: white;
  }
  span {
    color: white;
  }
}

.titleShow {
  transition: all 2s;
  background-color: rgb(58, 57, 57);
}
</style>