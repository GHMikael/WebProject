<template>
  <div class="course-card" @click="clickCard">
    <div class="banner"></div>
    <div class="title">{{ course && course.title }}</div>
    <div class="author">
      <span>作者：</span>
      {{ course && course.author }}
    </div>
    <div class="price">￥{{ course && course.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: ['course'],
  methods: {
    clickCard() {
      this.$router.push(`coursedetail/${this.course.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.course-card {
  width: 160px;
  height: 180px;
  border-radius: 4px;
  overflow: hidden;
  background: #2C3744;
  position: relative;
  cursor: pointer;
  .banner {
    height: 70px;
    background: #8CA1C3;
  }
  .title {
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    text-align: left;
    color: #FFFFFF;
    margin: 0 10px;
    padding-top: 6px;
  }
  .author {
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    color: #FFFFFF;
    margin: 0 10px;
    padding-top: 3px;
    > span {
      color: rgba(#FFFFFF, 0.4);
    }
  }
  .price {
    text-align: right;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #44D7B6;
    position: absolute;
    right: 15px;
    bottom: 10px;
  }
}
</style>
