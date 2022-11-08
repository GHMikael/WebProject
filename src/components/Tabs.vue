<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="tab"
        :class="{ active: tab.active }"
        @click="changeTab(tab.type)"
      >
        <div class="txt">{{ tab.title }}</div>
        <div class="line"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data: function() {
    return {
      tabList: [
        {
          title: 'Java',
          type: 'JAVA',
          active: true
        },
        {
          title: '前端',
          type: 'FONTEND',
          active: false
        },
        {
          title: 'Python',
          type: 'PYTHON',
          active: false
        },
        {
          title: '大数据',
          type: 'BIGDATA',
          active: false
        }
      ]
    };
  },
  // watch: {
  //   $route(to, from) {
  //     this.updateTab()
  //     console.log(to, from);
  //   }
  // },

  watch: {
    $route(to, from) {
      // 路由变化了就执行更新样式的方法
      this.updateTab();
      console.log(to, from);
    }
  },
  methods: {
    updateTab() {
      if (!this.$route.query.courseType) {
        return;
      }
      this.tabList.map(menu => {
        menu.active = menu.type === this.$route.query.courseType
      })
    },
    changeTab(type) {

      this.$router.push({ query: { courseType: type } })
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tabs {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  padding: 0 20px;
  background: #16181d;
  .tab {
    color: rgba(#fff, 0.4);
    position: relative;
    &.active {
      color: #fff;
      .txt {
        position: relative;
        z-index: 2;
      }
      .line {
        position: absolute;
        bottom: 3px;
        left: 50%;
        width: 1.45rem;
        height: 0.3rem;
        margin-left: -0.75rem;
        background: #e68344;
        border-radius: 0.15rem;
        z-index: 0;
      }
    }
  }
}
</style>
