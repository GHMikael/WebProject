<template>
  <div class="page-home">
    <div class="page-title">首页</div>
    <button class="btn-goto" @click="toCourseAll">跳转全部课程页</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toCourseAll() {
      this.$router.push(`courseall`);
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  height: 100vh;
  background: hsl(218, 16%, 36%);
  padding-top: 80px;
  box-sizing: border-box;
  .page-title {
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    color: #F8F5F5;
  }
  .btn-goto {
    border: none;
    background: none;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #F8F5F5;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
</style>
