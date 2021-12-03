<template lang='pug'>
Flex(col width='100%' gap='5px' padding='0')
  input(
    v-for='(p, i) in getProps'
    :key='i'
    v-model='config[p]'
  )
</template>

<script>
export default {
  name: 'Props',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    config: {
      type: Object,
      default: null,
    },
  },
  computed: {
    getProps() {
      return Object.keys(this.config);
    },
  },
};
</script>

<style lang='less' scoped>
.msg {
  max-width: calc(100% - 20px);
  margin-left: 20px;
}
</style>
