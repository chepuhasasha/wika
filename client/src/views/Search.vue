<template lang="pug">
h1 Ввод: {{ getQuery }}
</template>

<script>
export default {
  name: 'Search',
  // components: {
  //   Flex: () => import('@/components/Utils/Flex.vue'),
  // },
  computed: {
    getQuery() {
      return this.$route.params.query;
    },
  },
};
</script>

<style lang="less" scoped></style>
