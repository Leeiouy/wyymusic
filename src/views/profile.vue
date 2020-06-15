<template>
  <div id="porfile" class="mainPage">
    <h1>{{ token }}</h1>


  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    token: function() {
      return this.$store.state.Authorization;
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>

</style>