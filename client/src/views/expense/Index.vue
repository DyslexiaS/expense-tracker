<template>
  <div class="expense-management expense">
    <div class="expense__title">
      <font-awesome-icon
        icon="search-dollar"
      />
      Expense Tarcker
    </div>
    <el-button
      type="primary"
      class="expense__button"
      icon="el-icon-plus"
      @click="createRecipt"
    >
      New Expense
    </el-button>
    <div class="expense__content">
      <spinner
        v-if="isLoading"
        :title="'Loading...'"
      />
      <template v-else>
        <receipt-card
          v-for="card in receiptList"
          :key="card._id"
          :receipt-info="card"
          @edit="editReceipt"
          @delete="deleteReceipt"
        />
      </template>
    </div>
    <create-receipt-dialog
      v-if="isShowReciptDialog"
      :mode="operationMode"
      :edited-receipt-info="editedReceiptInfo"
      @done="actionSucceed"
      @close="triggerReciptDialog"
    />
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import ReceiptCard from './components/ReceiptCard'
import CreateReceiptDialog from './components/CreateReceiptDialog'
import { getReceiptList, deleteReceiptById } from '@/API/receipt'

export default {
  name: 'Expense',
  components: {
    Spinner,
    ReceiptCard,
    CreateReceiptDialog
  },
  data () {
    return {
      isLoading: false,
      isShowReciptDialog: false,
      operationMode: 'CREATE',
      editedReceiptInfo: {},
      receiptList: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.isLoading = true
      getReceiptList()
        .then(res => {
          this.receiptList = res
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    triggerReciptDialog () {
      this.isShowReciptDialog = !this.isShowReciptDialog
    },
    createRecipt () {
      this.operationMode = 'CREATE'
      this.triggerReciptDialog()
    },
    editReceipt (id) {
      this.operationMode = 'Edit'
      this.editedReceiptInfo = this.receiptList.filter(receipt => receipt._id === id)[0]
      this.triggerReciptDialog()
    },
    deleteReceipt (id) {
      deleteReceiptById(id)
        .then(() => {
          this.fetchData()
        })
    },
    actionSucceed () {
      this.isShowReciptDialog = false
      this.fetchData()
    }
  }
}
</script>

<style lang="scss" scoped>
.expense-management {
  padding: 24px;
  width: 100%;
  height: 100%;

  .expense {
    &__title {
      font-size: 24px;
      margin-bottom: 20px;
    }

    &__button {
      margin-left: 10px;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
