<template lang='pug'>
Flex.home(width='100%' justify='center' height='100vh' align='center')
  .logo.big Вика.
  Flex.home_chat(col width='100%')
    .msg Привет!👋
    .msg
      |Меня зовут Вика, я собрала для тебя статьи, тесты и курсы😉
      |Моя цель сделать поиск нужных матерьялов удобным, а обучение приятным😇
    button(v-if='user' @click='open("base")') База знаний
    .msg(v-if='!user') Только сначала авторизируйся.
    input.ask(v-if='!user' placeholder='Логин')
    input.ask(v-if='!user' type='password' placeholder='Пароль')
    button(v-if='!user' @click='auth') Войти
    //- input.ask(v-on:keyup.enter="search" placeholder='Спроси у Вики' v-model='query')
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      query: null,
      login: null,
      password: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    open(rout) {
      this.$router.push(rout);
    },
    search() {
      this.$router.push(`search/${this.query}`);
    },
    auth() {
      this.$store.dispatch('setLoad', true);
      // axios
      //   .post('url auth', {
      //     login: this.login,
      //     password: this.password,
      //   })
      //   .then((res) => {
      //     this.$store.dispatch('setUser', res.data)
      //     this.$store.dispatch('setLoad', false);
      //     this.$router.push('lk');
      //   });
      this.$store.dispatch('setUser', {
        id: 1,
        name: 'Батуков С.',
        specialization: 'Frontend Developer',
        // role: 'Новый сотрудник',
        role: 'Наставник',
        bal: 0,
        courses: [1, 2],
        complite: {
          articles: [1],
          courses: [],
          tests: [
            // { id: 1, bal: 5 },
          ],
        },
        medals: ['👋', '👩‍🚀', '🦸‍♂️'],
        contacts: 'sashachepuha@gmail.com',
      });
      this.$store.dispatch('setLoad', false);
      this.$router.push('lk');
    },
  },
};
</script>
<style lang="less">
.big {
  font-size: 100px;
}
.home {
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  height: 100vh;
  &_chat {
    max-width: 500px;
    margin: auto;
    height: 100vh;
  }
}
.ask {
  align-self: flex-end;
  background: var(--bg_200);
  color: var(--text_200);
  width: 80%;
  max-width: 80%;
  padding: 10px;
  border-radius: 20px;
  letter-spacing: 0px;
  font-weight: 300;
  font-size: 14px;
  color: var(--text_300);
  &::placeholder {
    color: var(--text_300);
  }
  &:focus {
    background: var(--bg_200);
  }
}
.msg {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  color: var(--text_200);
  width: max-content;
  max-width: 70%;
  padding: 10px;
  border-radius: 4px 20px 20px 20px;
  letter-spacing: 0px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text_0);

  border: 1px solid rgba(247, 214, 255, 0.8);
  background: var(--bg_500);
}
</style>
