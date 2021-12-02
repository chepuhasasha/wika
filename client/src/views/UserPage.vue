<template lang="pug">
Flex(
  v-if='user'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    v-if='user'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    Flex.minicard(
      v-if='user'
      col
      width='100%'
      padding='20px'
      gap='0'
    )
      h2 {{ user.name }}
      a(:href='`mailto:${user.contacts }`') {{ user.contacts }}
      p {{ user.specialization }}
      span {{ user.role }}
      Flex(
        v-if='user'
        padding='0'
        gap='20px'
      )
        .medal(
          v-for='(medal, i) in user.medals'
          :key='i'
        ) {{ medal }}
  //- Flex.card(
  //-   v-if='courses'
  //-   col
  //-   width='100%'
  //-   padding='20px'
  //-   gap='10px'
  //- )
</template>

<script>
import users from '@/data/users';

export default {
  name: 'UserPage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      user: null,
    };
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      const user = users.users.filter(item => +item.id === +this.$route.params.id)[0];
      this.user = {
        ...user,
      };
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.medal {
  font-size: 30px;
}
</style>
