<template lang='pug'>
Flex.base(col width='100%' padding='40px 20px')
  h1 База знаний
  button(@click='makeProject') Создать проект 👶
  input(placeholder='Название проекта' v-model='search')
  Flex.projects(col padding='0' width='100%')
    Project(
      v-for='project in getProjects'
      :key='project.id'
      :project='project'
    )
</template>

<script>
import data from '@/data/projects';
import users from '@/data/users';

export default {
  name: 'Base',
  data() {
    return {
      search: null,
      projects: [],
      users: [],
    };
  },
  components: {
    Project: () => import('@/components/Project.vue'),
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  computed: {
    getProjects() {
      /* eslint-disable */
      console.log('update data');
      const result = this.projects
      result.map(project => {
        const update = project;
        update.team = this.users.filter(user => project.team.includes(user.id))
        return update;
      });
      if (this.search) {
        return result.filter(item => item.title.toUpperCase().includes(this.search.toUpperCase()))
      }
      return result;
    },
  },
  methods: {
    getData() {
      this.users = users.users
      this.projects = data.projects
    },
    makeProject() {
      console.log('make project');
    },
  },
  mounted() {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 10000)
  },
};
</script>

<style lang='less'>
.base {
  margin: 0 auto;
  max-width: 1000px;
}
.projects {
}
</style>
