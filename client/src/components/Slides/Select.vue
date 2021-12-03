<template lang='pug'>
Flex.card(col width='100%' v-if='slide')
  h2 {{ slide.task }}
  Flex.minicard(
    v-for='(item, key) in slide.variants'
    :key='key'
    align='center'
    v-if='!flag'
  )
    input.checkbox(
      type="checkbox"
      v-model='answer[key]'
    )
    label {{ key }}
  Flex.minicard(
    v-for='(item, key) in slide.variants'
    :key='key'
    align='center'
    v-if='flag && item'
  ) {{ key }}
  Flex(width='100%' justify='space-between' padding='0')
    button(@click='comment = !comment') 🤷‍♀️
    button(@click='check' v-if='!flag') Проверить
  .mssg(v-if='comment') {{ slide.comment  }}
  .mssg(v-if='flag != null') {{ flag ? 'Верно!🎉' : '💆Подумай еще...'  }}
  Flex.card(col v-if='edit' width='100%')
    input(placeholder='Задача' v-model='slide.task')
    input(placeholder='Описание')
</template>

<script>
export default {
  name: 'Select',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  props: {
    slide: {
      type: Object,
      default: null,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      answer: {},
      flag: null,
      comment: false,
    };
  },
  computed: {
    getAnsver() {
      return this.answer;
    },
  },
  methods: {
    check() {
      this.flag = false;
      const keys = Object.keys(this.slide.variants);
      keys.forEach((key) => {
        if (!this.answer[key]) {
          this.answer[key] = false;
        }
      });
      const answer = {};
      const variants = {};
      keys.forEach((key) => {
        answer[key] = this.answer[key];
        variants[key] = this.slide.variants[key];
      });
      if (JSON.stringify(answer) === JSON.stringify(variants)) {
        this.flag = true;
      }
      this.$emit('check', this.flag);
    },
  },
};
</script>
<style lang="less" scoped>
.mssg {
  max-width: 100%;
  width: max-content;
  background: var(--bg_200);
  padding: 10px;
  color: var(--text_200);
  font-size: 14px;
  font-weight: 300;
  border-radius: 4px 20px 20px 20px;
}
</style>
