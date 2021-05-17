<template>
  <div class="input-verify">
    <input
      v-model.trim="inputValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      class="input-verify-text"
    >
    <div
      v-show="errors.has(validateScope ? `${validateScope}.${name}` : name)"
      class="input-error error-text"
    >
      {{ errors.first(validateScope ? `${validateScope}.${name}` : name) }}
    </div>
    <slot name="action" />
  </div>
</template>
<script>
export default {
  inject: ['$validator'],
  name: 'InputVerify',
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [Number, String],
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    validateScope: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input-verify {
  position: relative;

  .input-verify-text {
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #aaa;
    margin-bottom: 20px;
    border: 0px;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  .input-error {
    position: absolute;
    top: 45px;
    text-align: left;
    font-size: 12px;
    color: #f73737;
  }
}

</style>
