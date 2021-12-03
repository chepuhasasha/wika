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
  max-width: calc(100% - 20px);
  margin-left: 20px;
}
</style>
