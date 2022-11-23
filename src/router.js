// 0. 使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Layout from './views/Layout.vue';
import Home from './views/Home.vue';
import CourseAll from './views/CourseAll.vue';
import CourseDetail from './views/CourseDetail.vue';
import NotFound from './views/NotFound.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/layout',
    alias: '/',
    // 重定向到 /home
    redirect: '/home',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'courseall', component: CourseAll },
      { path: 'coursedetail/:courseId', component: CourseDetail }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
});

// 4. 在 main.js 中创建和挂载根实例
