<template lang="pug">
component.flex(
  :is='tag'
  :style='getStyle'
  )
  slot
</template>

<script>
export default {
  name: 'Flex',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    align: {
      type: String,
      default: 'none',
    },
    width: {
      type: String,
      default: 'max-content',
    },
    maxWidth: {
      type: String,
      default: null,
    },
    maxHeight: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: 'max-content',
    },
    justify: {
      type: String,
      default: 'none',
    },
    col: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: String,
      default: '10px',
    },
    padding: {
      type: String,
      default: '10px',
    },
    margin: {
      type: String,
      default: null,
    },
    overflow: {
      type: String,
      default: null,
    },
  },
  computed: {
    getStyle() {
      return {
        flexDirection: this.col ? 'column' : 'row',
        gap: this.gap,
        padding: this.padding,
        margin: this.margin,
        alignItems: this.align,
        justifyContent: this.justify,
        width: this.width,
        height: this.height,
        flexWrap: this.wrap ? 'wrap' : 'no-wrap',
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        overflow: this.overflow,
      };
    },
  },
};
</script>

<style lang="less">
.flex {
  display: flex;
}
</style>
