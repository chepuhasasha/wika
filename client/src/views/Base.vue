<template lang='pug'>
Flex.base(col width='100%' padding='40px 20px')
  h1 База знаний
  button(v-if='isAdmin && !edit' @click='edit = true') Создать проект 👶
  Flex.card(col v-if='edit' width='100%')
    h1 Новый проект
    input.header(placeholder='Название' v-model='name')
    input(placeholder='Описание' v-model='desc')
    Flex(width='100%' justify='space-between' padding='0')
      button(@click='edit = false') Отмена ❌
      button(@click='make') Создать ➕
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
      edit: false,
      name: null,
      desc: null,
    };
  },
  components: {
    Project: () => import('@/components/Project.vue'),
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  computed: {
    isAdmin() {
      if (this.$store.state.user.role === 'Наставник') {
        return true;
      }
      return false;
    },
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
    make() {
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
