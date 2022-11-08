<template>
  <div class="layout">
    <div class="topbar">
      <img src="https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/logo.png" alt="" class="logo" />
      <div class="options">
        <button class="share"></button>
        <button class="menu"></button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.layout {
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 50px;
    background: #040404;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 61px;
      height: 22px;
    }
    .options {
      display: flex;
      align-items: center;
      .share,
      .menu {
        border: none;
        background: none;
        &:focus {
          outline: none;
        }
      }
      .share {
        width: 20px;
        height: 20px;
        margin-right: 22px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/share.png)
          no-repeat center / contain;
      }
      .menu {
        width: 18px;
        height: 15px;
        background: url(https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/6/menu.png)
          no-repeat center / contain;
      }
    }
  }
}
</style>
