<template lang='pug'>
a.link(:href='url' target="_blank")
  slot
</template>

<script>
export default {
  name: 'Link',
  props: {
    url: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang='less' scoped>
.link {
  cursor: pointer;
  background: var(--bg_200);
  color: var(--text_300);
  padding: 10px 15px;
  border-radius: 20px;
  width: max-content;
  height: max-content;
  font-size: 12px;
  text-transform: uppercase;
  font-family: Montserrat;
  line-height: 12px;
  &:hover {
    background: var(--primary_0);
  }
}
</style>
