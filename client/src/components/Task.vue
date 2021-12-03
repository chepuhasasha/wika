<template lang='pug'>
Flex.test_item(col width='100%' :class='{complite: status}')
  .test_item_title {{ status ? '✔️' : '' }} {{ num + 1 }}. {{ task.title }}
  input(v-if='edit' placeholder='Заголовок' v-model='task.title')
  .test_item_desc(v-if='!status') {{ task.description }}
  input(v-if='edit' placeholder='Описание' v-model='task.description')
  button(v-if='!status && !edit' @click='open') Приступить
  span Укажите ID статьи ИЛИ теста
  Flex.minicard(
    align='center'
    width='100%'
    v-if='edit'
  )
    input(v-if='edit' placeholder='Тест' v-model='task.test')
    input(v-if='edit' placeholder='Статья' v-model='task.article')
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      require: true,
    },
    num: {
      type: Number,
      default: null,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isTest: false,
    };
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    status() {
      let result = false;
      this.user.complite.tests.forEach((test) => {
        if (test.id === this.task.test) {
          result = true;
        }
      });
      if (this.user.complite.articles.includes(this.task.article)) {
        result = true;
      }
      return result;
    },
  },
  methods: {
    open() {
      if (this.task.article) {
        this.$router.push({
          path: `/article/${this.task.article}`,
          query: { taskID: this.task.id, courseID: this.task.course },
        });
      }
      if (this.task.test) {
        this.$router.push({
          path: `/test/${this.task.test}`,
          query: { taskID: this.task.id, courseID: this.task.course },
        });
      }
    },
  },
};
</script>

<style lang='less'>
.test_item {
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.5);
  &:hover {
    border: 1px solid var(--bg_100);
  }
  &_title {
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 500;
  }
  &_desc {
    font-size: 14px;
  }
  &_user {
    background: var(--bg_100);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 12px;
  }
  &_btn {
    align-self: flex-end;
  }
}
</style>
