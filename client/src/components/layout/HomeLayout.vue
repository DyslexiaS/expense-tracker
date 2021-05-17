<template>
  <div class="page-layout">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout'
}
</script>

<style scoped>
.page-layout {
  width: 100%;
  height: 100%;
}
</style>
