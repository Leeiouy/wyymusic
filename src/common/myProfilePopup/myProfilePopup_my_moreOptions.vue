<template>
  <div class="more">
    <div v-for="(item, index) in options" :key="item.index" class="item">
      <i class="iconfont" :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      options: [
        {
          icon: "wyymaikefeng",
          title: "听歌识曲"
        },
        {
          icon: "wyypiao",
          title: "演出"
        },
        {
          icon: "wyygaiicon-",
          title: "商城"
        },
        {
          icon: "wyyfujin",
          title: "附近的人"
        },
        {
          icon: "wyyicon--1",
          title: "口袋彩铃"
        },
        {
          icon: "wyydingdan",
          title: "我的订单"
        },
        {
          icon: "wyynaozhong",
          title: "定时停止播放"
        },
        {
          icon: "wyysaoyisao",
          title: "扫一扫"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.more {
  text-align: left;
  width: 80%;
  margin: 0 auto;
}

.item {
  height: 50px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.9);

  &:active {
    opacity: 0.7;
  }
  i {
    width: 20px;
    display: inline-block;
    font-size: 16px;

  }
}
span {
  display: inline-block;
  margin-left: 10px;
}
</style>