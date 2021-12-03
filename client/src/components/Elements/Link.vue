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
  max-width: 100%;
  margin-left: 40px;
}
</style>
