<template lang="pug">
Flex(
  v-if='cours'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    v-if='cours'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    Flex.minicard(gap='5px' wrap)
      button(@click='openProject') к проекту
  Flex.card(
    v-if='cours'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    h1 {{ cours.title }}
  Flex.card(
    v-if='tasks'
    col
    width='100%'
    padding='20px'
    gap='10px'
  )
    h2 Задачи
    //- pre {{ tasks }}
    Task(
      v-for='(task, i) in tasks'
      :key='i'
      :task='task'
      :num='i'
    )
</template>

<script>
import coursesData from '@/data/courses';
import tasksData from '@/data/tasks';

export default {
  name: 'CoursePage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Task: () => import('@/components/Task.vue'),
  },
  data() {
    return {
      cours: null,
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
      const cours = coursesData.courses.filter(item => +item.id === +this.$route.params.id)[0];
      const tasks = tasksData.tasks.filter(item => cours.tasks.includes(item.id));

      this.cours = {
        ...cours,
      };
      this.tasks = tasks
    },
    openProject() {
      this.$router.push(`/project/${this.cours.project}`);
    },
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
