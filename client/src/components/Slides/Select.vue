<template lang='pug'>
Flex.card(col width='100%' v-if='slide')
  h2 {{ slide.task }}
  input(v-if='edit' placeholder='Задача' v-model='slide.task')
  Flex.minicard(
    v-for='(item, key) in getVariants'
    :key='key'
    align='center'
    v-if='!flag'
  )
    input.checkbox(
      type="checkbox"
      v-model='answer[key]'
    )
    label {{ key }}
    button(@click='remove(key)') 🗑️
  Flex.minicard(
    align='center'
    width='100%'
    v-if='edit'
  )
    input.checkbox(
      type="checkbox"
      v-model='truth'
    )
    input(placeholder='Вариант' v-model='label')
  button(@click='add' v-if='edit') add +
  //- Flex.minicard(
  //-   v-for='(item, key) in getVariants'
  //-   :key='key'
  //-   align='center'
  //-   v-if='flag && item'
  //- ) {{ key }}
  Flex(v-if='!edit' width='100%' justify='space-between' padding='0')
    button(@click='comment = !comment') 🤷‍♀️
    button(@click='check' v-if='!flag') Проверить
  .mssg(v-if='comment') {{ slide.comment  }}
  .mssg(v-if='flag != null') {{ flag ? 'Верно!🎉' : '💆Подумай еще...'  }}
  input(v-if='edit' placeholder='Коментарий вики' v-model='slide.comment')
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
      label: 'Вариант',
      truth: false,
    };
  },
  computed: {
    getAnsver() {
      return this.answer;
    },
    getVariants() {
      return this.slide.variants;
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
    remove(key) {
      console.log(key);
    },
    add() {
      this.$set(this.slide.variants, this.label, this.truth);
      // this.slide.variants[this.label] = this.truth;
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
