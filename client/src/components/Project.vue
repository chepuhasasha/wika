<template lang='pug'>
Flex.project(col width='100%' gap='0')
  .project_title {{ project.title }}
  .project_desc {{ project.description }}
  Flex(justify='space-between' width='100%' padding='0' align='center')
    Flex(padding='0' gap='5px' wrap)
      span.project_user Статей: {{ project.articles.length }}
      span.project_user Тестов: {{ project.tests.length }}
      span.project_user Курсов: {{ project.courses.length }}
    Flex(padding='0' gap='5px' wrap justify='space-between')
      button.project_btn(@click='openProject(project.id)') открыть
      button(v-if='isAdmin' @click='remove') Удалить
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
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
  },
  methods: {
    openProject(id) {
      this.$router.push(`/project/${id}`);
    },
    remove() {
      console.log(this.project.id);
    },
  },
};
</script>

<style lang='less'>
.project {
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.4);
  background: var(--bg_500);
  &:hover {
    border: 1px solid var(--bg_100);
  }
  &_title {
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 500;
  }
  &_desc {
    font-size: 14px;
  }
  &_team {
    flex-wrap: wrap;
  }
  &_user {
    background: var(--bg_400);
    border: 1px solid rgba(247, 214, 255, 0.8);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 12px;
  }
  &_btn {
    align-self: flex-end;
  }
}
</style>
