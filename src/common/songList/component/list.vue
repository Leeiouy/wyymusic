<template>
  <div class="list">
    <div class="content">
      <div
        class="item"
        v-for="(item, index) in playList"
        :key="item.index"
        @click="itemClick(item)"
      >
        <div class="index" v-if="!isIndex">{{ index+1 }}</div>
        <div class="detali van-ellipsis">
          <p class="songName">{{ item.name }}</p>
          <p class="Creation">
            <span class="singer" v-if="item.artists">{{ item.artists[0].name }}</span>
            <span class="Album" v-if="item.al">{{item.al.name}}</span>

            <span>-</span>

            <span class="singer" v-if="item.album">{{ item.album.name }}</span>

            <span class="singer" v-if="item.ar">{{ item.ar[0].name}}</span>
          </p>
        </div>

        <div class="options" @click.stop="optionClick(item.id)">
          <i class="iconfont wyyicon"></i>
        </div>
      </div>
    </div>

    <div class="Popup">
      <van-popup
        v-model="show"
        position="bottom"
        round
        :style="{ height: '40%' }"
        @close="closePopup"
      >
        <popupList :songId="songId"></popupList>
      </van-popup>
    </div>
  </div>
</template>

<script>
import popupList from "./popupList";

import { request } from "network/request.js";
export default {
  components: {
    popupList
  },
  props: {
    playList: {
      type: Array,
      default() {
        return [];
      }
    },
    isIndex: {
      type: Boolean,
      defualt: true
    }
  },
  data() {
    return {
      show: false,
      songId: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemClick: function(data) {
      this.$store.commit("setPlayList", data);
      console.log(data);
      
    },
    optionClick(id) {
      this.songId = id;
      this.show = true;
    },
    closePopup() {
      // 等待动画结束再重置显示状态
      setTimeout(() => {
        this.$children[0].$children[0].show = false;
      }, 300);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.list {
  background-color: white;
  .item {
    width: 96%;
    padding: 0 2%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:active {
      transition: all 0.5s;
      opacity: 0.7;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .index {
      width: 10%;
      text-align: center;
      line-height: 44px;
      font-size: 12px;
      color: #a4b0be;
    }
    .detali {
      width: 70%;
      overflow: hidden;
      .songName {
        line-height: 30px;
        font-size: 14px;
      }
      .Creation {
        color: #a4b0be;
      }
    }

    .options {
      width: 10%;
      height: 100%;
      line-height: 44px;
      text-align: center;
      &:active {
        opacity: 0.5;
        transition: all 1s;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>