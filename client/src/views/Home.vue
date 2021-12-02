<template lang='pug'>
Flex.home(width='100%' justify='center' height='100vh' align='center')
  .logo.big Вика.
  Flex.home_chat(col width='100%')
    .msg Привет!👋
    .msg
      |Меня зовут Вика, я собрала для тебя статьи, тесты и курсы😉
      |Моя цель сделать поиск нужных матерьялов удобным, а обучение приятным😇
      |Все нужные тебе матерьялы в 👇
    button(@click='openBase') Базе знаний
    .msg Давай авторизируемся?
    input.ask(placeholder='Логин')
    input.ask(type='password' placeholder='Пароль')
    button(@click='openBase') Войти
    //- input.ask(v-on:keyup.enter="search" placeholder='Спроси у Вики' v-model='query')
</template>

<script>
export default {
  name: 'Home',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  data() {
    return {
      query: null,
    };
  },
  methods: {
    openBase() {
      this.$router.push('base');
    },
    search() {
      this.$router.push(`search/${this.query}`);
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
