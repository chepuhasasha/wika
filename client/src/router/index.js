import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

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
    meta: { auth: true },
    component: () => import('../views/Base.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    meta: { auth: true },
    component: () => import('../views/ArticlePage.vue'),
  },
  {
    path: '/project/:id',
    name: 'Project',
    meta: { auth: true },
    component: () => import('../views/ProjectPage.vue'),
  },
  {
    path: '/test/:id',
    name: 'Test',
    meta: { auth: true },
    component: () => import('../views/TestPage.vue'),
  },
  {
    path: '/user/:id',
    name: 'User',
    meta: { auth: true },
    component: () => import('../views/UserPage.vue'),
  },
  {
    path: '/lk',
    name: 'LK',
    meta: { auth: true },
    component: () => import('../views/LKPage.vue'),
  },
  {
    path: '/course/:id',
    name: 'Course',
    meta: { auth: true },
    component: () => import('../views/CoursePage.vue'),
  },
  {
    path: '/search/:query',
    name: 'Search',
    meta: { auth: true },
    component: () => import('../views/Search.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.state.user;
  // const requireAuth = to.matched.some(record => record.meta.auth);

  if (to.meta.auth && !user) {
    next('/');
  } else {
    next();
  }
})

export default router;
