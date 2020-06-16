<template>
  <div class="searchBar">
    <!-- 返回箭头 -->

    <div class="searchLeft" @click="searchLeft">
      <i class="iconfont wyyarrow-left"></i>
    </div>

    <!-- input框 -->
    <div class="searchInput">
      <input type="text" v-model="inputVal" :placeholder="searchDefulat" @input="inputChange" />

      <div class="suggest" v-if="inputVal!==''&&suggestList">
        <div class="suggestItem van-hairline--bottom van-ellipsis" @click="searchMesClick">
          <span class="searchMes">搜索 ‘ {{ inputVal }}’</span>
        </div>

        <div
          class="suggestItem van-hairline--bottom"
          v-for="(item, index) in suggestList"
          :key="item.index"
          @click="suggestItemClick(item.keyword)"
        >
          <i class="iconfont wyysuosou"></i>
          <span>{{ item.keyword }}</span>
        </div>
      </div>
    </div>

    <!-- 取消 -->

    <div class="searchRight" @click="searchright">
      <p>取消</p>
    </div>
  </div>
</template>

<script>
import { request } from "network/request.js";
import { debounce } from "common/debounce/debounce.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      searchDefulat: "输入搜索关键词",
      inputVal: "",
      suggestList: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    searchLeft() {
      this.$router.go(-1);
    },
    searchright() {
      // 点击取消 将input值清空，搜索建议数据清空
      this.inputVal = null;
      this.suggestList = null;
    },
    searchMesClick() {
      //将搜索词发送给父级
      this.$emit("search", this.inputVal);

      this.suggestList = null;
    },
    suggestItemClick(val) {
      //将搜索词发送给父级
      this.$emit("search", val);
      this.suggestList = null;
    },
    inputChange: debounce(function(e) {
      //防抖函数
      let val = e.target.value;
      //input有值才会请求数据
      if (val) {
        request({
          url: "/search/suggest",
          params: {
            keywords: val,
            type: "mobile"
          }
        }).then(res => {
          if (res.status == 200) {
            let result = res.data.result.allMatch;
            this.suggestList = result;
          }
        });
      } else {
        //input值为空就删除请求的数据，防止下次渲染还有上次的数据
        this.suggestList = null;
      }
    }, 300)
  },
  created() {
    request({
      url: "/search/default"
    }).then(res => {
      if (res.status == 200) {
        let result = res.data.data;
        // 搜索默认关键词
        this.searchDefulat = result.realkeyword;
      }
    });
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.searchBar {
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px 0 0 0;
  .searchInput {
    width: 78%;
    height: 40px;
    box-sizing: border-box;
    position: relative;
    input {
      position: absolute;
      top: 3px;
      left: 0;
      right: 0;
      width: 90%;
      height: 25px;
      border: none;
      padding: 5px 8px 1px 8px;
      border-bottom: 1px solid;
    }
    .suggest {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      width: 95%;
      background-color: white;
      box-shadow: 0px 2px 7px 1px rgb(165, 165, 165);
      transition: all 1s;
      .suggestItem {
        padding: 8px;
        line-height: 20px;
        font-size: 14px;
        &:active {
          opacity: 0.7;
        }
        i {
          font-size: 14px;
        }
      }
    }
  }

  .searchRight,
  .searchLeft {
    text-align: center;
    width: 10%;
    height: 30px;
    line-height: 30px;
    &:active {
      opacity: 0.7;
    }
  }
  .searchMes {
    color: #3498db;
  }
}
</style>