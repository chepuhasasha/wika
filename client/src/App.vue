<template lang='pug'>
  #app
    .bg
      img.rotate#circle1(:src='require("@/assets/circle.svg")')
      img.rotate#circle2(:src='require("@/assets/circle2.svg")')
    Flex.nav(width='100%' padding='20px' align='center' justify='space-between')
      a.logo(@click='open("/")') Вика
      Flex.links(width='max-content' gap='20px' padding='0' align='center')
        a(@click='open("/base")') База знаний
        button(v-if='getUser' @click='open("/lk")') {{ getUser.name }}
    router-view.content
</template>

<script>
export default {
  name: 'App',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  methods: {
    open(path) {
      this.$router.replace(path);
    },
  },
  computed: {
    getUser() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch('setUser', {
      id: 1,
      name: 'Батуков С.',
      specialization: 'Frontend Developer',
      role: 'Новый сотрудник',
      courses: [1, 2],
      tasks: [1],
      medals: ['👋', '👩‍🚀', '🦸‍♂️'],
      contacts: 'sashachepuha@gmail.com',
    });
  },
};
</script>

<style lang="less">
.user {}
.bg {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.logo {
  font-family: Montserrat;
  font-weight: 900;
  font-size: 20px;
}
.nav {
  max-width: 1000px;
  margin: 0 auto;
  // border-radius: 0 0 20px 20px;
  // box-shadow: 0 -10px 50px -25px black;
  border: 1px solid rgba(255,255,255,0.4);
  background: var(--bg_500);
}
#app {
  max-height: 100vh;
  // gap: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.content {
  max-height: 100%;
  overflow: auto;
}
.rotate {
  position: absolute;
  animation: 20s infinite alternate rotate linear;
}
#circle1 {
  bottom: 5%;
  left: -10%;
}
#circle2 {
  top: 5%;
  right: -10%;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1) translateY(0%);
  }

  100% {
    transform: rotate(360deg) scale(1.2) translateY(40%);
  }
}

</style>
