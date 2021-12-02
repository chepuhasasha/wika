<template lang='pug'>
Flex.article_item(col width='100%')
  .article_item_title {{ article.title }}
  .article_item_desc {{ article.description }}
  button(@click='openArticle(article.id)') Читать
</template>

<script>
export default {
  name: 'Project',
  props: {
    article: {
      type: Object,
      require: true,
    },
  },
  components: {
    Flex: () => import('@/components/Utils/Flex.vue'),
  },
  methods: {
    openArticle(id) {
      this.$router.push(`/article/${id}`);
    },
  },
};
</script>

<style lang='less'>
.article_item {
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.4);
  background: var(--bg_500);
  &:hover {
    border: 1px solid var(--bg_100);
  }
  &_title {
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 500;
  }
  &_desc {
    font-size: 14px;
  }
  &_user {
    background: var(--bg_100);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 12px;
  }
  &_btn {
    align-self: flex-end;
  }
}
</style>
