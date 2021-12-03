<template lang="pug">
Flex.project_page(col width='100%' padding='40px 20px' v-if='project')
  h1 {{ getProject.title }}
  p {{ getProject.description }}
  Flex(padding='0' wrap width='100%' align='center')
    .project_page_nav(
      @click='flag = "Статья"'
      :class='{active: flag === "Статья"}'
    ) Статьи {{ getArticles.length }}
    span.project_page_nav(
      @click='flag = "Тест"'
      :class='{active: flag === "Тест"}'
    ) Тесты {{ getTests.length }}
    span.project_page_nav(
      @click='flag = "Курс"'
      :class='{active: flag === "Курс"}'
    ) Курсы {{ getCourses.length }}
    button(v-if='isAdmin && !edit' @click='make') Создать ➕
  Flex.card(col v-if='edit' width='100%')
    h1 {{ flag }}
    input.header(placeholder='Название' v-model='name')
    input(placeholder='Описание' v-model='desc')
    Flex(width='100%' justify='space-between' padding='0')
      button(@click='edit = false') Отмена ❌
      button(@click='make("course")') Создать ➕
  input(placeholder='Начните вводить' v-model='search')
  Article(
    v-if='flag === "Статья"'
    v-for='article in getArticles'
    :key='article.id'
    :article='article'
  )
  Test(
    v-if='flag === "Тест"'
    v-for='test in getTests'
    :key='test.id'
    :test='test'
  )
  Course(
    v-if='flag === "Курс"'
    v-for='course in getCourses'
    :key='course.id'
    :course='course'
    :complite='getCourseComplite(course.id)'
  )
</template>

<script>
import data from '@/data/projects.json';
import articles from '@/data/articles.json';
import tests from '@/data/tests.json';
import courses from '@/data/courses.json';
// import axios from 'axios';

export default {
  name: 'ProjectPage',
  data() {
    return {
      project: null,
      articles: null,
      tests: null,
      courses: null,
      flag: 'Статья',
      search: null,
      edit: false,
      name: null,
      desc: null,
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
    make() {
      this.edit = true;
      console.log(this.flag);
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
    this.project = data.filter(project => +project.id === +this.$route.params.id)[0];
    this.articles = articles.filter(article => this.project.articles.includes(+article.id))
    this.tests = tests.filter(test => this.project.tests.includes(+test.id))
    this.courses = courses.filter(item => this.project.courses.includes(+item.id))
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
