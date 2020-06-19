<template>
  <div class="phone">
    <van-nav-bar @click-left="onClickLeft">
      <template #left>
        <i class="iconfont wyyarrow-left"></i>
        <span>手机号登录</span>
      </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" color="#d43c33" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { request } from "network/request.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      request({
        method: "post",
        url: "/login/cellphone",
        params: {
          phone: values.phone,
          password: values.password
        }
      })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            let result = res.data;


          console.log(result);
          

            // this.$store.commit("setToken", result.token);
            // this.$store.commit("setProfile", result.profile);
            // this.$toast.success("登录成功");

            // this.$router.replace("/find");

            
          } else if (res.statue == 502) {
            this.$toast.fail("密码错误，请重试！");
          }
        })
        .catch(err => {
          this.$toast.fail("出错，请重试！");
        });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.phone {
  span {
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>