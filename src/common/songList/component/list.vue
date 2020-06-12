<template>
  <div class="list">
    <Bscroll ref="Bscroll" class="Bscroll">
      <template #content>
        <div class="content">
          <div
            class="item"
            v-for="(item, index) in playList"
            :key="item.index"
            @click="itemClick(item)"
          >
            <div class="index">{{ index+1 }}</div>
            <div class="detali van-ellipsis">
              <p class="songName">{{ item.name }}</p>
              <p class="Creation">
                <span class="Album">{{ item.al.name }}</span>
                <span>-</span>
                <span class="singer">{{ item.ar[0].name }}</span>
              </p>
            </div>

            <div class="options">
              <i class="iconfont wyyicon"></i>
            </div>
          </div>
        </div>
      </template>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from "common/better_scroll/better_scroll.vue";

export default {
  components: {
    Bscroll
  },
  props: {
    playList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    itemClick: function(data) {
      console.log(data.name);
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$refs.Bscroll.Bscroll.refresh();
    });
    window.onresize = () => {
      this.$refs.Bscroll.Bscroll.refresh();
      console.log(1);
    };
  }
};
</script>

<style lang='less' scoped>
.list {
  .Bscroll {
    width: 100vw;
    height: calc(100vh - 46px);
  }
  .item {
    width: 96%;
    padding: 0 2%;
    height: 44px;
    display: flex;
    align-items: center;
    .index {
      width: 10%;
      text-align: center;
      line-height: 44px;
      font-size: 12px;
      color: #a4b0be;
    }
    .detali {
      width: 70%;
      margin-right: 10%;
      overflow: hidden;
      .songName {
        line-height: 30px;
        font-size: 14px;
      }
      .Creation {
        color: #a4b0be;
      }
    }
  }
  .item:active {
    transition: all 0.5s;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>