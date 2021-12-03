<template lang='pug'>
Flex(
  v-if='article'
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
      button(v-if='!isRead' @click='read') Прочитано
      p(v-if='isRead') ✔️
    Flex.minicard(col gap='5px')
      .minicard_name 🙋‍♂️ {{ article.owner.name  }}
      span {{ article.owner.specialization  }}
  Flex.card(
    col gap='10px'
    width='100%'
    padding='20px'
    maxWidth='1000px'
    maxHeight='100%'
    margin='0 auto'
  )
    h1 {{ article.title }}
    Element(
      v-for='(el, i) in elements'
      :key='i'
      :tag='el.type'
      :config='el.props'
      :content='el.content'
      :edit='edit'
      @update='articleUpdate(el)'
      @delete='deleteEl(el)'
    )
</template>

<script>
import data from '@/data/articles';
import users from '@/data/users';

export default {
  name: 'ArticlePage',
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
    Element: () => import('@/components/Elements/Element.vue'),
  },
  data() {
    return {
      article: null,
      edit: false,
    };
  },
  watch: {
    $route: 'getData',
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isRead() {
      if (this.user.complite.articles.includes(this.article.id)) {
        return true;
      }
      return false;
    },
    elements() {
      return this.article ? this.article.elements : [];
    },
    isAdmin() {
      if (this.$store.state.user.role === 'Наставник') {
        return true;
      }
      return false;
    },
  },
  methods: {
    getData() {
      /* eslint-disable */
      const article = data.articles.filter(item => +item.id === +this.$route.params.id)[0]
      this.article = {
        ...article
      };
      this.article.owner = users.users.filter(user => +user.id === +this.article.owner)[0]
    },
    openProject() {
      this.$router.push(`/project/${this.article.project}`);
    },
    deleteEl(el) {
      const i = this.article.elements.indexOf(el)
      this.article.elements.splice(i, 1);
    },
    addEl() {
      this.article.elements.push({
        type: 'p',
        content: 'Текст',
      });
    },
    save() {
    },
    read() {
      this.$store.dispatch('readArticle', this.article.id);
    }
  },
  mounted() {
    this.getData()
  },
};
</script>
