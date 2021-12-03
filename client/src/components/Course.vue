<template lang='pug'>
Flex.test_item(col width='100%' :class='getClass')
  .test_item_title {{ course.title }}
  .test_item_desc {{ course.description }}
  Flex(width='100%' padding='0' justify='space-between' wrap)
    button(@click='openTest(course.id)') Открыть
    .msg(v-if='getPriority === 1') ❗️ Это супер важно пройти 🤯 ❗️
</template>

<script>
export default {
  name: 'Course',
  props: {
    course: {
      type: Object,
      require: true,
    },
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      classMap: {
        1: 'priority_1',
        2: 'priority_2',
        3: 'priority_2',
      },
    };
  },
  computed: {
    getClass() {
      const c = this.classMap[this.getPriority];
      return { [c]: true };
    },
    getPriority() {
      return this.course.priority;
    },
  },
  methods: {
    openTest(id) {
      this.$router.push(`/course/${id}`);
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

.priority {
  &_1 {
    // background: #000 !important;
    animation: 1s infinite alternate important ease-in-out;
    border: 2px solid rgb(255, 59, 24);
    &:hover {
      border: 2px solid rgb(255, 59, 24);
    }
    // box-shadow: 0 0 50px -20px red;
  }
}
@keyframes important {
  0% {
    box-shadow: 0 0 50px -20px red;
    transform: translateY(0px);
  }

  100% {
    transform: translateY(5px);
    box-shadow: 0 0 50px -40px red;
  }
}
</style>
