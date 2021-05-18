
<template>
  <section class="not-found">
    <font-awesome-icon
      class="not-found__icon"
      icon="ghost"
    />
    <h1 class="not-found__description">
      Page Not Found
    </h1>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__icon {
    color: #DDDDDD;
    font-size: 24px;
  }
  &__description {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
