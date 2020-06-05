<template>
  <div class="findNav">
    <div v-for="(item, index) in navs" :key="item.index" @click="navClick(item)">
      <div class="navItem">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      navs: [
        { icon: "wyyrili", title: "每日推荐" },
        { icon: "wyyliebiao", title: "歌单" },
        { icon: "wyyicon-1", title: "排行榜" },
        { icon: "wyydiantai", title: "电台" },
        { icon: "wyyzhibo", title: "直播" }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    navClick(item){

      
      console.log(item.title);

    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.findNav {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  .navItem {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background-color: #c4342f;
    color: white;
  }
  p {
    margin-top: 10px;
  }
}
</style>