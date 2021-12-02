<template lang="pug">
Flex(
  v-if='getUser'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    v-if='getUser'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    Flex.minicard(
      v-if='getUser'
      col
      padding='20px'
      gap='0'
    )
      h2 {{ getUser.name }}
      p {{ getUser.specialization }}
      span {{ getUser.role }}
      Flex(
        v-if='getUser'
        padding='0'
        gap='20px'
      )
        .medal(
          v-for='(medal, i) in getUser.medals'
          :key='i'
        ) {{ medal }}
  Flex.card(
    v-if='courses'
    col
    width='100%'
    padding='20px'
    gap='10px'
  )
    h2 Курсы
    Flex.minicard(
      v-for='(cours, i) in courses'
      :key='i'
      col
      width='100%'
    )
      h3 {{ cours.title }}
      p {{ cours.description }}
      button(@click='openCourse(cours.id)') Открыть
  //- Flex.card(
  //-   v-if='courses'
  //-   col
  //-   width='100%'
  //-   padding='20px'
  //-   gap='0'
  //- )
  //-   h2 Задачи
</template>

<script>
import coursesData from '@/data/courses';
import tasksData from '@/data/tasks';

export default {
  name: 'UserPage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      courses: null,
      tasks: null,
    };
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      const courses = coursesData.courses.filter(item => this.getUser.courses.includes(item.id));
      const tasks = tasksData.tasks.filter(item => this.getUser.tasks.includes(item.id));
      this.courses = courses
      this.tasks = tasks
    },
    openCourse(id) {
      this.$router.push(`/course/${id}`);
    }
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.medal {
  font-size: 30px;
}
</style>
