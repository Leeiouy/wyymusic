<template>
  <div class="navBar">
    <van-nav-bar>
      <template #left>
        <i class="iconfont wyyicon-"></i>
      </template>

      <template #title>
        <div class="titles">
          <div
            :class="{titleActive:titleAcive==index}"
            v-for="(item,index) in titles"
            :key="item.index"
            @click="titleClick(index,item.path)"
          >{{ item.title }}</div>
        </div>
      </template>

      <template #right>
        <i class="iconfont wyysuosou"></i>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      titles: [
        {
          title: "我的",
          path: "/porfile"
        },
        {
          title: "发现",
          path: "/find"
        },
        {
          title: "云村",
          path: "/yuncun"
        },
        {
          title: "视频",
          path: "/video"
        }
      ],
      titleAcive: 1
    };
  },
  watch: {},
  computed: {},
  methods: {
    titleClick(index, path) {
      if (this.titleAcive != index) {
        //只有当前titleAcive不等于index时候才会执行切换
        this.titleAcive = index;
        this.$router.push(path);

      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.titles {
  display: flex;
  justify-content: space-between;
  div {
    margin: 0 10px;
  }
}
.titleActive {
  font-size: 17px;
  font-weight: 700;
  transition: all 0.1s;
}
</style>