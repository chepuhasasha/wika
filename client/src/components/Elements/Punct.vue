<template lang='pug'>
.msg
  slot
</template>

<script>
export default {
  name: 'Punct',
};
</script>

<style lang='less' scoped>
.msg {
  max-width: calc(100% - 40px);
  margin-left: 40px;
}
</style>
