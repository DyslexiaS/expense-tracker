<template>
  <div class="full-page-dialog">
    <div class="dialog-title">
      New Expense
      <a
        href="javascript:void(0)"
        class="close-btn"
        @click="closeDialog"
      ><font-awesome-icon icon="times" /></a>
    </div>
    <div class="dialog-container">
      <div class="input__field">
        <label class="input__field--label">
          Date：
        </label>
        <el-date-picker
          v-model="receiptInfo.date"
          type="date"
          format="yyyy-MM-dd"
          placeholder="Pick a day"
          :default-value="new Date()"
        />
      </div>
      <div class="input__field">
        <label class="input__field--label">
          Store：
        </label>
        <input-block
          v-model.trim="receiptInfo.store"
          v-validate="'required'"
          placeholder="Store name"
          class="input__field--input"
          :name="'store'"
        />
      </div>
      <div class="input__field">
        <label class="input__field--label">
          Tel：
        </label>
        <input-block
          v-model.trim="receiptInfo.tel"
          v-validate="'required|numeric'"
          placeholder="Store Tel"
          class="input__field--input"
          :name="'telephone'"
        />
      </div>
      <div class="input__field">
        <label class="input__field--label">
          GSTReg：
        </label>
        <input-block
          v-model.trim="receiptInfo.GSTReg"
          v-validate="'required|numeric'"
          placeholder="GST Reg"
          class="input__field--input"
          :name="'GSTReg'"
        />
      </div>
      <div class="input__field">
        <label class="input__field--label">
          Receipt ID：
        </label>
        <input-block
          v-model.trim="receiptInfo.receiptId"
          v-validate="'required|numeric'"
          placeholder="Receipt ID"
          class="input__field--input"
          :name="'GSTReg'"
        />
      </div>
    </div>
    <div class="dialog-container">
      <receipt-item-card
        v-for="(item, index) in receiptInfo.descriptions"
        :key="index"
        :index="index"
        :item-info="item"
        @remove="removeItem"
      />
      <el-button
        plain
        icon="el-icon-plus"
        @click="addNewItem"
      />
    </div>
    <div class="dialog-footer">
      <el-button
        plain
        class="button"
        icon="el-icon-coin"
        @click="isCreateMode ? createNewReceipt() : editReceipt()"
      >
        {{ isCreateMode ? 'Create': 'Save' }}
      </el-button>
    </div>
  </div>
</template>

<script>
import InputBlock from '@/components/InputBlock'
import ReceiptItemCard from './ReceiptItemCard'
import { createReceipt, editReceiptById } from '@/API/receipt'

export default {
  inject: ['$validator'],
  name: 'CreateReciptDialog',
  components: {
    InputBlock,
    ReceiptItemCard
  },
  props: {
    mode: {
      type: String,
      default: 'CREATE'
    },
    editedReceiptInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      receiptInfo: {
        store: null,
        tel: null,
        GSTReg: null,
        date: null,
        descriptions: [
          {
            amount: 1,
            name: '',
            unitPrice: 1
          }
        ],
        receiptId: null,
        total: 0
      }
    }
  },
  computed: {
    isCreateMode () {
      return this.mode === 'CREATE'
    }
  },
  mounted () {
    if (!this.isCreateMode) { this.receiptInfo = JSON.parse(JSON.stringify(this.editedReceiptInfo)) }
  },
  methods: {
    closeDialog () {
      this.$emit('close')
    },
    addNewItem () {
      this.receiptInfo.descriptions.push({
        amount: 1,
        name: '',
        unitPrice: 1
      })
    },
    removeItem (index) {
      this.receiptInfo.descriptions.splice(index, 1)
    },
    countTotalPrice () {
      return this.receiptInfo.descriptions.reduce((acc, cur) => {
        return Number(cur.unitPrice) * Number(cur.amount)
      }, 0)
    },
    createNewReceipt () {
      this.$validator.validateAll().then(result => {
        if (!result) return
        this.receiptInfo.total = this.countTotalPrice()
        createReceipt(this.receiptInfo)
          .then(() => {
            this.$emit('done')
          })
      })
    },
    editReceipt () {
      this.$validator.validateAll().then(result => {
        if (!result) return
        this.receiptInfo.total = this.countTotalPrice()
        editReceiptById(this.receiptInfo._id, this.receiptInfo)
          .then(() => {
            this.$emit('done')
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.full-page-dialog {
  position: fixed;
  padding: 40px 20%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1020;
  overflow: auto;
  color: #3B341F;

  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    opacity: 0.95;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.2);
    overflow: auto;
    z-index: -1;
  }

  .dialog-title {
    position: relative;
    margin: 0 auto;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 32px;
    color: #d2d2d2;

    .close-btn {
      float: right;
      color: #fff;
      font-size: 14px;
    }
  }

  .dialog-container {
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 32px;
    border-radius: 5px;
    background-color: rgba(178, 203, 206, .7);

    .input__field {
      display: flex;
      margin: 10px 0;

      &--label {
        width: 100px;
        font-weight: 600;
        line-height: 40px;
      }

      &--input {
        width: 200px;

        /deep/ .input-verify-text {
          margin-bottom: 15px;
        }

        /deep/ .error.text {
          color: #b41818;
        }
      }
    }
  }

  .dialog-footer {
    height: 50px;
    margin: 10px 0;
    .button {
      float: right;
    }
  }
}
</style>
