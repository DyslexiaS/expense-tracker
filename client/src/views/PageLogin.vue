<template>
  <div class="page-layout login">
    <form
      action="https://httpbin.org/post"
      method="POST"
      class="form"
    >
      <div class="form__field">
        <label for="login__username">
          <font-awesome-icon
            class="login__icon"
            icon="user-circle"
          />
        </label>
        <input
          id="login__username"
          autocomplete="username"
          type="text"
          name="username"
          class="form__input"
          placeholder="Username"
          required
        >
      </div>

      <div class="form__field">
        <label for="login__password">
          <font-awesome-icon
            class="login__icon"
            icon="lock"
          />
        </label>
        <input
          id="login__password"
          type="password"
          name="password"
          class="form__input"
          placeholder="Password"
          required
        >
      </div>

      <div class="form__field">
        <input
          type="submit"
          value="Sign In"
        >
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'PageLogin'
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
