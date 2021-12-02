<template lang='pug'>
Flex.test_item(col width='100%')
  .test_item_title {{ num + 1 }}. {{ task.title }}
  .test_item_desc {{ task.description }}
  button(@click='openTest(task.id)') Приступить
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
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  methods: {
    openTest(id) {
      this.$router.push(`/test/${id}`);
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
