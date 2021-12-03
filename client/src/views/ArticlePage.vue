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
      button(v-if='getQuery.taskID' @click='read') Прочитано
      p(v-if='isRead') ✔️
    //- Flex.minicard(col gap='5px')
    //-   .minicard_name 🙋‍♂️ {{ article.owner.name  }}
    //-   span {{ article.owner.specialization  }}
  Flex.card(
    v-if='article.elements'
    col gap='10px'
    width='100%'
    padding='20px'
    maxWidth='1000px'
    maxHeight='100%'
    margin='0 auto'
  )
    h1 {{ article.title }}

    Flex(
      v-for='(el, i) in elements'
      :key='i'
      col
      width='100%'
      gap='5px'
      padding='0'
    )
      Element(
        :tag='el.type'
        :config='el.props'
        :content='el.content'
        :edit='edit'
        @update='articleUpdate(el)'
        @delete='deleteEl(el)'
      )
      Flex(v-if='edit' col width='100%' gap='5px')
        span Тип:
        select(v-model='el.type')
          option(
            v-for='(el, i) in getTagList'
            :key='i'
          ) {{ el }}
        span Контент:
        textarea(v-model='el.content')
        span(v-if='el.config') Пораметры:
        Props(v-if='el.config' :tag='el.type' :config='el.config')
        button(@click='deleteEl(el)' title='Удалить') 🗑️

    button(v-if='edit' @click='addEl' title='Добавить блок') add +
</template>

<script>
import data from '@/data/articles.json';
// import axios from 'axios';

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
      map: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p: 'p',
        span: 'span',
        pre: 'pre',
        // codepen: 'iframe',
        msg: 'Message',
        punct: 'Punct',
        link: 'Link',
      },
      configMap: {
        link: {
          url: 'http://',
        },
      },
    };
  },
  watch: {
    $route: 'getData',
  },
  computed: {
    getTagList() {
      return Object.keys(this.map);
    },
    getQuery() {
      return this.$route.query;
    },
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
      // axios
      //   .get('url article')
      //   .then((res) => {
      //     this.article = res.data;
      //   });
      const article = data.filter(item => +item.id === +this.$route.params.id)[0]
      this.article = {
        ...article
      };
    },
    openProject() {
      this.$router.push(`/project/${this.article.project}`);
    },
    deleteEl(el) {
      const i = this.article.elements.indexOf(el)
      this.article.elements.splice(i, 1);
    },
    addEl() {
      const str = JSON.stringify(this.article.elements)
      const old = JSON.parse(str)
      console.log(old.elements)
      old.push({
        type: 'p',
        content: 'Текст',
      });
      this.$delete(this.article, 'elements')
      this.$set(this.article, 'elements', old)
    },
    save() {
      navigator.clipboard.writeText(JSON.stringify(this.article))
      alert('Конфиг сохранен в буфер обмена')
      this.edit = false;
    },
    read() {
      this.$store.dispatch('readArticle', this.article.id);
      this.$store.dispatch('setLoad', true);
      // axios
      //   .post('url user update', this.$store.state.user)
      //   .then((res) => {
      //     this.$store.dispatch('setUser', res.data)
      //     this.$store.dispatch('setLoad', false);
      //     this.$router.push({
      //       path: `/course/${this.getQuery.courseID}`,
      //     });
      // });
      this.$store.dispatch('setLoad', false);
      this.$router.push({
        path: `/course/${this.getQuery.courseID}`,
      });
    }
  },
  mounted() {
    this.getData()
  },
};
</script>
