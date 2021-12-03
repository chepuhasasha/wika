<template lang="pug">
Flex.project_page(col width='100%' padding='40px 20px' v-if='project')
  h1 {{ getProject.title }}
  p {{ getProject.description }}
  Flex(padding='0' wrap width='100%')
    .project_page_nav(
      @click='flag = "articles"'
      :class='{active: flag === "articles"}'
    ) Статьи {{ getArticles.length }}
      button(v-if='isAdmin' @click='make("article")') Создать ➕
    span.project_page_nav(
      @click='flag = "tests"'
      :class='{active: flag === "tests"}'
    ) Тесты {{ getTests.length }}
      button(v-if='isAdmin' @click='make("test")') Создать ➕
    span.project_page_nav(
      @click='flag = "courses"'
      :class='{active: flag === "courses"}'
    ) Курсы {{ getCourses.length }}
      button(v-if='isAdmin' @click='make("course")') Создать ➕
  Flex.card(col v-if='edit' width='100%')
    input.header(placeholder='Название' v-model='search')
    input(placeholder='Описание' v-model='search')
    Flex(width='100%' justify='space-between' padding='0')
      button(@click='edit = false') Отмена ❌
      button(@click='make("course")') Создать ➕
  input(placeholder='Начните вводить' v-model='search')
  Article(
    v-if='flag === "articles"'
    v-for='article in getArticles'
    :key='article.id'
    :article='article'
  )
  Test(
    v-if='flag === "tests"'
    v-for='test in getTests'
    :key='test.id'
    :test='test'
  )
  Course(
    v-if='flag === "courses"'
    v-for='course in getCourses'
    :key='course.id'
    :course='course'
    :complite='getCourseComplite(course.id)'
  )
</template>

<script>
import data from '@/data/projects';
import articles from '@/data/articles';
import tests from '@/data/tests';
import courses from '@/data/courses';
// import axios from 'axios';

export default {
  name: 'ProjectPage',
  data() {
    return {
      project: null,
      articles: null,
      tests: null,
      courses: null,
      flag: 'articles',
      search: null,
      edit: false,
    };
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Article: () => import('@/components/Article.vue'),
    Test: () => import('@/components/Test.vue'),
    Course: () => import('@/components/Course.vue'),
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    isAdmin() {
      if (this.getUser.role === 'Наставник') {
        return true;
      }
      return false;
    },
    /* eslint-disable */
    getProject() {
      return this.project;
    },
    getArticles() {
      if (this.search) {
        return this.articles.filter(item => item.title.toUpperCase().includes(this.search.toUpperCase()));
      };
      return this.articles;
    },
    getTests() {
      if (this.search) {
        return this.tests.filter(item => item.title.toUpperCase().includes(this.search.toUpperCase()));
      };
      return this.tests;
    },
    getCourses() {
      if (this.search) {
        return this.courses.filter(item => item.title.toUpperCase().includes(this.search.toUpperCase()));
      };
      return this.courses.sort((a, b) => a.priority - b.priority);
    },
  },
  methods: {
    make(type) {
      this.edit = true;
      console.log(type);
    },

    getCourseComplite(id) {
      if (this.getUser.complite.courses.includes(id)) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    /* eslint-disable */
    this.project = data.projects.filter(project => +project.id === +this.$route.params.id)[0];
    this.articles = articles.articles.filter(article => this.project.articles.includes(+article.id))
    this.tests = tests.tests.filter(test => this.project.tests.includes(+test.id))
    this.courses = courses.courses.filter(item => this.project.courses.includes(+item.id))
  },
};
</script>

<style lang="less" scoped>
.header {
  font-size: 30px;
}
.project_page {
  max-width: 1000px;
  margin: 0 auto;
  &_nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    background: var(--bg_400);
    padding: 10px;
    border-radius: 10px;
  }
}
.active {
  background: var(--primary_0);
  color: var(--text_300);
}
</style>
