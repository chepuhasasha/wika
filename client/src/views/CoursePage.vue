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
      button(v-if='isAdmin' @click='edit = !edit') {{ edit ? 'Отмена ❌' : 'Редактировать ✨' }}
      button(v-if='edit' @click='save' title='Сохранить') 💾
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
    v-if='getTasks'
    col
    width='100%'
    padding='20px'
    gap='10px'
  )
    Task(
      v-for='(task, i) in getTasks'
      :key='i'
      :task='task'
      :num='i'
      :edit='edit'
    )
    button(v-if='edit' @click='add' title='Добавить задачу') add +
</template>

<script>
import data from '@/data/courses.json';

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
      edit: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isAdmin() {
      if (this.$store.state.user.role === 'Наставник') {
        return true;
      }
      return false;
    },
    getTasks() {
      console.log(this.cours.tasks);
      return this.cours.tasks;
    },
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      // axios
      //   .get('url course')
      //   .then((res) => {
      //     this.course = res.data;
      //   });
      const cours = data.filter(item => +item.id === +this.$route.params.id)[0];
      // const tasks= tasksData.tasks.filter(item => cours.tasks.includes(item.id));
      this.cours = {
        ...cours,
      };
      // this.tasks = tasks
    },
    openProject() {
      this.$router.push(`/project/${this.cours.project}`);
    },
    add() {
      console.log(this.cours.tasks);
      this.cours.tasks.push({
        id: 5,
        title: null,
        description: null,
        status: 'в работе',
        article: null,
        test: null,
        course: this.cours.id,
      });
    },
    save() {
      navigator.clipboard.writeText(JSON.stringify(this.cours))
      alert('Конфиг сохранен в буфер обмена')
      this.edit = false;
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
