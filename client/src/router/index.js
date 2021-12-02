import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  /* eslint-disable */
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/base',
    name: 'Base',
    component: () => import('../views/Base.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/ArticlePage.vue'),
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/ProjectPage.vue'),
  },
  {
    path: '/test/:id',
    name: 'Test',
    component: () => import('../views/TestPage.vue'),
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/UserPage.vue'),
  },
  {
    path: '/lk',
    name: 'LK',
    component: () => import('../views/LKPage.vue'),
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: () => import('../views/CoursePage.vue'),
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
