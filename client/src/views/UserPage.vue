<template lang="pug">
Flex(
  v-if='user'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    v-if='user'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    Flex.minicard(
      v-if='user'
      col
      padding='20px'
      gap='0'
    )
      h2 {{ user.name }}
      p {{ user.specialization }}
      span {{ user.role }}
      Flex(
        v-if='user'
        padding='0'
        gap='20px'
      )
        .medal(
          v-for='(medal, i) in user.medals'
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
import users from '@/data/users';
import coursesData from '@/data/courses';
import tasksData from '@/data/tasks';

export default {
  name: 'UserPage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      user: null,
      courses: null,
      tasks: null,
    };
  },
  computed: {
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      const user = users.users.filter(item => +item.id === +this.$route.params.id)[0];
      const courses = coursesData.courses.filter(item => user.courses.includes(item.id));
      console.log(courses)
      const tasks = tasksData.tasks.filter(item => user.tasks.includes(item.id));

      this.user = {
        ...user,
      };
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
