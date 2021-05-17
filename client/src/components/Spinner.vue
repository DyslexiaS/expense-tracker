<template>
  <div class="spinner-block">
    <i
      class="el-icon-loading"
    />
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'Spinner',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.spinner-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
</style>
