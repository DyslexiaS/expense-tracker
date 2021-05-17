<template>
  <div class="item-card">
    <div class="input__field">
      <label class="input__field--label">
        Item
      </label>
      <input-block
        v-model.trim="itemInfo.name"
        v-validate="'required'"
        placeholder="Name"
        class="input__field--input"
        :name="'item-' + index"
      />
    </div>
    <div class="input__field">
      <label class="input__field--label">
        Unit Price
      </label>
      <input-block
        v-model.trim="itemInfo.unitPrice"
        v-validate="'required|min_value:1'"
        type="number"
        placeholder="Price"
        class="input__field--input"
        :name="'price-' + index"
      />
    </div>
    <div class="input__field">
      <label class="input__field--label">
        Amount
      </label>
      <input-block
        v-model.trim="itemInfo.amount"
        v-validate="'required|min_value:1'"
        type="number"
        placeholder="Amount"
        class="input__field--input"
        :name="'amount-' + index"
      />
    </div>
    <el-button
      plain
      type="warning"
      class="icon"
      icon="el-icon-delete"
      @click="removeItem"
    />
  </div>
</template>

<script>
import InputBlock from '@/components/InputBlock'

export default {
  inject: ['$validator'],
  name: 'ReceiptItemCard',
  components: {
    InputBlock
  },
  props: {
    itemInfo: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeItem () {
      this.$emit('remove', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fdeff2;
  border-radius: 5px;

  .input__field {
    display: flex;
    flex-direction: column;
    margin: 5px 0;

    &--label {
      margin-bottom: 5px;
    }

    &--input {
      width: 120px
    }
  }

  .icon {
    margin: auto 0;
    padding: 5px;
    width: 30px;
    height: 30px;
  }
}
</style>
