<template lang='pug'>
.msg
  slot
</template>

<script>
export default {
  name: 'Message',
};
</script>

<style lang='less' scoped>
.msg {
  max-width: 100%;
}
</style>
