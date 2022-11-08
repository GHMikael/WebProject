<template>
  <div class="page-courseall">
    <div class="page-title">全部课程页</div>
    <Tabs />
    <div class="course-list">
      <CourseCard
        v-for="course in courseList"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';
import Tabs from '@/components/Tabs.vue';

export default {
  name: 'CourseAll',
  components: {
    CourseCard,
    Tabs
  },
  computed: {
    courseList() {
      return this.courseMap[this.$route.query.courseType || 'JAVA'] || [];
    }
  },
  data: function() {
    return {
      courseMap: {
        JAVA: [
          {
            id: 'j1',
            title: 'Java语言入门',
            author: '焦哥',
            price: 999,
            desc:
              '本课程将会讲解Java的基础知识。 带你了解Java的基础语法，能够写简单的Java程序，进入学习Java的大门'
          }
        ],
        FONTEND: [
          {
            id: 'f1',
            title: 'Web前端基础',
            author: '焦哥',
            price: 899,
            desc:
              '本课程通过HTML、CSS基础的学习，结合实战QQ注册页的开发，带领大家掌握Web前端基础。'
          },
          {
            id: 'f2',
            title: 'Web前端进阶',
            author: '焦哥',
            price: 1099,
            desc:
              '本课程是对基础课程的补充和提升，补充了一些CSS进阶知识，另外你还会学到当前最流行的布局方式----Flex布局，以及CSS扩展语句SASS，课程以微博主页为目标导向，结合丰富的小练习来夯实基础。'
          }
        ],
        PYTHON: [
          {
            id: 'py1',
            title: 'Python语言入门',
            author: '焦哥',
            price: 899,
            desc:
              '本课程是Python入门课程，整个课程由9个知识点章节，2个实战章节，几十个练习题配合体验、技巧、思维学习组成。学完本课程，你可以掌握Python的基础语法，复杂的数据结构，常用工具库的使用。利用这些工具完成人工智能产品，如：图灵机器人，语音合成，图云合成，人脸识别等。'
          }
        ],
        BIGDATA: [
          {
            id: 'd1',
            title: 'MYSQL',
            author: '焦哥',
            price: 899,
            desc:
              '本课程不仅介绍mysql数据库开发所需的基本知识点外，我们还根据实战项目来教大家如何在实际项目中集成使用，让大家在以后的学习和工作中更加游刃有余。'
          },
          {
            id: 'd2',
            title: 'Redis',
            author: '焦哥',
            price: 899,
            desc:
              '本课程会教会大家企业中对redis基本要求的知识点，可以独立的搭建一个redis，可以使用redis进行进行基本的数据或对象的操作。了解redis基础语法和数据结构以及在spring框架中如何集成redis。通过实际项目中来教会大家基本的redis操作能力。'
          },
          {
            id: 'd3',
            title: 'MongoDB',
            author: '焦哥',
            price: 1399,
            desc:
              'MongoDB 是一个基于分布式文件存储的数据库。本课程结合实战案例，学习 MongoDB 的核心技术。在理论与实战相结合的授课过程中，不仅学习了技术知识，更重要的是提升大家的技术能力。'
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.page-courseall {
  height: 100vh;
  background: #30415d;
  padding-top: 80px;
  box-sizing: border-box;
  .page-title {
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    color: #f8f5f5;
  }
  .course-list {
    width: 335px;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<style lang="scss">
.page-courseall {
  .course-list {
    .course-card {
      margin-right: 15px;
      margin-bottom: 15px;
      &:nth-child(2n) {
        margin: 0;
      }
    }
  }
}
</style>
