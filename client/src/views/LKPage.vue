<template lang="pug">
Flex(
  v-if='getUser'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    v-if='getUser'
    width='100%'
    padding='20px'
    justify='space-between'
    gap='20px'
    wrap
  )
    Flex.minicard(
      v-if='getUser'
      col
      padding='20px'
      gap='0'
    )
      h2 {{ getUser.name }}
      p {{ getUser.specialization }}
      span {{ getUser.role }}
      Flex(
        v-if='getUser'
        padding='0'
        gap='20px'
      )
    Flex.minicard(
      v-if='getUser'
      height='100%'
      width='auto'
      padding='10px'
      gap='20px'
    )
      Flex.medal(padding='0' gap='0' col) {{ getUser.bal }}🌟
        span средний бал
      Flex.medal(padding='0' gap='0' col) {{ getMedal.val }}
        span {{ getMedal.text }}
      //- .medal(
      //-   v-for='(medal, i) in getUser.medals'
      //-   :key='i'
      //- ) {{ medal }}
  Flex.card(
    v-if='courses'
    col
    width='100%'
    padding='20px'
    gap='10px'
  )
    h2 Курсы
    Course(
      v-for='course in getCourses'
      :key='course.id'
      :course='course'
      :complite='getCourseComplite(course.id)'
    )
</template>

<script>
import data from '@/data/courses.json';

export default {
  name: 'UserPage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Course: () => import('@/components/Course.vue'),
  },
  data() {
    return {
      courses: null,
    };
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
    getCourses() {
      /* eslint-disable */
      return this.courses.sort((a, b) => a.priority - b.priority);
    },
    getMedal() {
      let result = {};
      if (this.getUser.bal >= 0) {
        result = {val: '👶', text: 'Ученик'};
      }
      if (this.getUser.bal >= 1) {
        result = {val: '👶', text: 'Ученик'};
      }
      if (this.getUser.bal >= 2) {
        result = {val: '👶', text: 'Ученик'};
      }
      if (this.getUser.bal >= 3) {
        result = {val: '👶', text: 'Ученик'};
      }
      if (this.getUser.bal >= 4) {
        result = {val: '👨‍🎓', text: 'Професор!'};
      }
      if (this.getUser.bal >= 5) {
        result = {val: '🦸‍♂️', text: 'Супер герой!'};
      }
      return result;
    },
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      const courses = data.filter(item => this.getUser.courses.includes(item.id));
      this.courses = courses
    },
    openCourse(id) {
      this.$router.push(`/course/${id}`);
    },
    getCourseComplite(id) {
      if (this.getUser.complite.courses.includes(id)) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.medal {
  font-size: 50px;
}
</style>
