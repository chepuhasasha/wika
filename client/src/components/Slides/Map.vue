<template lang='pug'>
Flex.card(width='100%')
  h1 MAP
</template>

<script>
export default {
  name: 'Select',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  props: {
    variants: {
      type: Array,
      default: null,
    },
    map: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      userResponse: null,
    };
  },
};
</script>

<style lang='less'>
</style>
