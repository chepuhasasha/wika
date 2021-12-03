<template lang='pug'>
  #app
    .bg
      img.rotate#circle1(:src='require("@/assets/circle.svg")')
      img.rotate#circle2(:src='require("@/assets/circle2.svg")')
    Flex.nav(width='100%' padding='20px' align='center' justify='space-between' wrap)
      a.logo(@click='open("/")') Вика
      Flex.links(width='max-content' gap='10px' padding='0' align='center' wrap)
        button(v-if='getUser' @click='open("/base")') База знаний
        button(v-if='getUser' @click='open("/lk")') {{ getUser.name }}
    router-view.content
    .load(v-if='load')
      .msg Секундочку, нужно сбегать на сервер... 🏃‍♀️
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
    load() {
      return this.$store.state.load;
    },
  },
};
</script>

<style lang="less">
.user {}
.load {
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  // background: rgba(0,0,0,0.5);
}
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
  border: 1px solid rgba(255,255,255,0.4);
  background: var(--bg_500);
}
#app {
  max-height: 100vh;
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
