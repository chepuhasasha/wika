<template lang="pug">
Flex(
  v-if='test'
  col gap='0'
  width='100%'
  padding='0'
  maxWidth='1000px'
  maxHeight='100%'
  margin='0 auto'
)
  Flex.card(
    width='100%'
    padding='20px'
    align='center'
    justify='space-between'
    wrap
  )
    Flex.minicard(gap='5px' wrap align='center')
      button(@click='openProject') к проекту
      button(v-if='isAdmin' @click='edit = !edit') {{ edit ? 'Отмена ❌' : 'Редактировать ✨' }}
      button(v-if='edit' @click='save' title='Сохранить') 💾
      p(v-if='isComplite') {{ bal }}🌟
    Flex.minicard(col gap='5px')
      .minicard_name 🙋‍♂️ {{ test.owner.name  }}
      span {{ test.owner.specialization  }}
  Flex.card(
    col gap='10px'
    width='100%'
    padding='20px'
    maxWidth='1000px'
    maxHeight='100%'
    margin='0 auto'
  )
    h1 {{ isComplite ? '✔️' : ''}} {{ test.title }}
    Flex(
      v-if='!isComplite'
      width='100%'
      padding='0'
      align='center'
      wrap
    )
      Flex.minicard(col gap='5px') {{ getLife }}
        span LIFE
      Flex.minicard(col gap='5px') ⚡️X{{ combo }}
        span COMBO
      Flex.minicard(v-if='getComplite' col gap='5px') {{ getComplite }}
        span Результат
  Flex.card(
    v-if='!isComplite'
    col gap='20px'
    width='100%'
    padding='20px'
    maxWidth='1000px'
    maxHeight='100%'
    margin='0 auto'
  )
    //- overflow='auto'
    component(
      v-for='(slide, i) in test.slides'
      :key='i'
      :is='slide.type'
      :edit='edit'
      :slide='slide.props'
      @check='updateState'
    )
    button(v-if='edit' @click='add') Задача +
</template>

<script>
import data from '@/data/tests.json';

export default {
  name: 'Test',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Select: () => import('@/components/Slides/Select.vue'),
    Map: () => import('@/components/Slides/Map.vue'),
  },
  data() {
    return {
      test: null,
      edit: false,
      combo: 0,
      dead: 0,
      complite: 0,
      bal: null,
    };
  },
  computed: {
    getQuery() {
      return this.$route.query;
    },
    isComplite() {
      let result = false;
      this.$store.state.user.complite.tests.forEach((test) => {
        if (test.id === this.test.id) {
          this.bal = test.bal;
          result = true;
        }
      });
      return result;
    },
    isAdmin() {
      if (this.$store.state.user.role === 'Наставник') {
        return true;
      }
      return false;
    },
    getLife() {
      if (this.dead === this.test.life) {
        return 'YOU ARE DIE!';
      }
      const l = this.test.life - this.dead;
      const heart = l > 0 ? '❤️'.repeat(l) : '';
      const skull = this.dead > 0 ? '💀'.repeat(this.dead) : '';
      const result = skull + heart;
      return result;
    },
    getComplite() {
      if (this.complite === this.test.slides.length) {
        const c = this.test.life - this.dead;
        switch (c) {
          case 5:
            return 'Великолепно 🤯!';
          case 4:
            return 'Хорошо 😉!';
          case 3:
            return 'Нормально 😑, но можно и лучше';
          case 2:
            return 'Нормально 😑, но можно и лучше';
          case 1:
            return 'Нормально 😑, но можно и лучше';
          case 0:
            return 'Плохо... 😟';
          default:
            break;
        }
      }
      return null;
    },
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    getData() {
      /* eslint-disable */
      const test = data.filter(item => +item.id === +this.$route.params.id)[0]
      this.test = {
        ...test
      };
    },
    openProject() {
      this.$router.push(`/project/${this.test.project}`);
    },
    save() {
      navigator.clipboard.writeText(JSON.stringify(this.test))
      alert('Конфиг сохранен в буфер обмена')
      this.edit = false;
    },
    updateState(e) {
      if (e) {
        this.combo += 1;
        this.complite += 1;
      } else {
        this.combo = 0;
        this.dead += 1;
      }
      if (this.dead <= 0) {
        this.dead = 0;
      }
      if (this.dead >= this.test.life) {
        this.dead = this.test.life;
      }
      if (this.complite === this.test.slides.length) {
        this.setComplite()
      }
    },
    add() {
      this.test.slides.push({
        type: 'Select',
        props: {
          task: null,
          comment: null,
          variants: {},
        },
      });
    },
    setComplite() {
      this.$store.dispatch('setLoad', true);
      this.$store.dispatch('testComplite', {
        id: this.test.id,
        bal: this.test.life - this.dead,
      });
      // axios
      //   .post('url user update', this.$store.state.user)
      //   .then((res) => {
        //     this.$store.dispatch('setUser', res.data);
      //     this.$store.dispatch('setLoad', true);
      //     this.$router.push({
      //       path: `/course/${this.getQuery.courseID}`,
      //     });
      //   });
      this.$store.dispatch('setLoad', false);
      if(this.getQuery.courseID) {
        this.$router.push({
          path: `/course/${this.getQuery.courseID}`,
        });
      }
    },
  },
  mounted() {
    this.getData()
  },
};
</script>

<style lang="less" scoped>
</style>
