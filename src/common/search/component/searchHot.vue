<template>
  <div class="searchHot">
    <!-- 热搜列表数据存在就隐藏loading -->
    <loading v-if="hotList.length==0"></loading>

    <div class="hot" v-else>
      <h3>热搜榜</h3>
      <Bscroll class="Bscroll">
        <div class="pb50" slot="content">
          <div
            class="hotItem"
            v-for="(item, index) in hotList"
            :key="item.index"
            @click="hotItemClick(item)"
          >
            <div class="index" :class="{hotIndex:index<3}">
              <p>{{ index+1 }}</p>
            </div>
            <div class="content">
              <h3>
                {{ item.searchWord }}
                <img :src="item.iconUrl" />
              </h3>
              <span>{{ item.content }}</span>
            </div>
            <div class="score">{{ item.score }}</div>
          </div>
        </div>
      </Bscroll>
    </div>
  </div>
</template>

<script>
import { request } from "network/request.js";

import Bscroll from "common/better_scroll/better_scroll.vue";

import loading from "common/loading/loading.vue";
export default {
  components: {
    loading,
    Bscroll
  },
  props: {},
  data() {
    return {
      hotList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    hotItemClick(data) {
      this.$parent.serachVal(data.searchWord);
    }
  },
  created() {
    request({
      url: "/search/hot/detail"
    }).then(res => {
      if (res.status == 200) {
        let result = res.data;
        this.hotList = result.data;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.searchHot {
  padding-top: 50px;
}
.hot {
  .Bscroll {
    height: calc(100vh - 48px);
  }
  h3 {
    padding-left: 5%;
  }
}
.hotItem {
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  &:active {
    opacity: 0.7;
  }
  .content {
    width: 60%;
    text-align: left;
    h3 {
      font-size: 16px;
      img {
        height: 18px;
      }
    }
    span {
      color: #a4b0be;
    }
  }
  .index {
    width: 10%;
    color: #a4b0be;
    font-size: 14px;
  }
  .score {
    width: 20%;
    color: #a4b0be;
  }

  .hotIndex {
    color: #d43c33;
  }
}
</style>