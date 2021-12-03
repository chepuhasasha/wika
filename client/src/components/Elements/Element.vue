<template lang='pug'>
Flex(col width='100%' padding='0' :style='getStyle' v-if='element')
  component(
    :is='getTag(tag)'
    v-bind='config'
  ) {{ content }}
  Flex(v-if='edit' col width='100%' gap='5px')
    span Тип:
    select(v-model='tag')
      option(
        v-for='(el, i) in getTagList'
        :key='i'
      ) {{ el }}
    span Контент:
    textarea(v-model='content')
    button(@click='deleteEl' title='Удалить') 🗑️
</template>

<script>
export default {
  name: 'Element',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Message: () => import('@/components/Elements/Message.vue'),
    Punct: () => import('@/components/Elements/Punct.vue'),
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    content: {
      type: String,
      default: null,
    },
    config: {
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
      element: null,
      map: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p: 'p',
        span: 'span',
        pre: 'pre',
        codepen: 'iframe',
        msg: 'Message',
        punct: 'Punct',
      },
    };
  },
  computed: {
    getStyle() {
      return {
        border: this.edit ? '1px solid var(--bg_100)' : 'none',
      };
    },
    getTagList() {
      return Object.keys(this.map);
    },
  },
  methods: {
    getTag(tag) {
      return this.map[tag];
    },
    deleteEl() {
      this.$emit('delete');
    },
  },
  mounted() {
    this.element = {
      tag: this.tag,
      content: this.content,
      config: this.config,
    };
  },
};
</script>
<style lang="less" scoped>
textarea {
width: 100%;
height: 100px;
resize: none;
}
span {
  color: var(--text_100);
  font-size: 12px;
}
h1 {
  letter-spacing: -4px;
  font-size: 60px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  line-height: 60px;
}
pre {
  letter-spacing: 1px;
  background: var(--bg_200);
  color: var(--text_200);
  padding: 20px;
  border-radius: 10px;
  font-weight: 400;
  overflow: auto;
}
</style>
