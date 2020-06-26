<template>
  <div class="scrollRecommand">
    <div class="Scroll" v-show="show">
      <div
        class="recommand deactive"
        :class="{active:now==index}"
        v-for="(item, index) in recommandData"
        :key="index"
      >
        <img :src="item.user.avatarUrl" alt />
        <span class="van-ellipsis">{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "network/request.js";

export default {
  components: {},
  props: {
    indexPage: {
      type: Number,
      default: 0
    },
    hotComment: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      show: false,
      scroll: "", //存储滚动元素
      now: 0,
      Interval: null,
      recommandData: []
    };
  },
  watch: {
    indexPage: function() {
      this.show = false;
      this.resetPosition();
      this.now = 0;
      this.getRecommand();
      console.log(this.hotComment);
    }
  },
  computed: {},
  methods: {
    getRecommand() {
      let index = this.indexPage - 1;
      request({
        url: "/comment/event",
        params: {
          threadId: this.hotComment[index].threadId
        }
      }).then(res => {
        if ((res.status = 200)) {
          let result = res.data.hotComments;
          this.recommandData = result;

          setTimeout(() => {
            this.show = true;
          }, 500);
        }
      });
    },
    resetPosition() {
      this.scroll.style.cssText = "top:0rem";
    },
    Scroll() {
      this.Interval = setInterval(() => {
        if (this.recommandData.length == this.now) {
        } else {
          this.now += 1;
          this.scroll.style.cssText = "top:" + "-" + this.now + "rem";
        }
      }, 3000);
    }
  },
  created() {},
  mounted() {
    this.getRecommand();
    this.$nextTick(() => {
      this.scroll = document.getElementsByClassName("Scroll")[0];
      this.resetPosition();
      this.Scroll();
    });
  }
};
</script>

<style lang='less' scoped>
.scrollRecommand {
  height: 80px;
  box-sizing: content-box;
  overflow: hidden;
  padding: 0 15px;
  position: relative;
  .Scroll {
    width: 90%;
    margin: 0 auto;
    transition: all 0.5s;
    position: absolute;
    top: 10rem;
  }
}

.recommand {
  display: flex;
  align-items: center;
  background-color: rgba(70, 70, 70, 0.795);
  margin: 10px 0;
  border-radius: 20px;
  line-height: 25px;
  transition: all 2s;
  img {
    width: 8%;
    display: block;
    border-radius: 50%;
  }
  span {
    display: inline-block;
    padding-left: 10px;
    color: white;
    font-size: 14px;
  }
}

.active {
  opacity: 1 !important;
}
.deactive {
  opacity: 0.3;
}
</style>