<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <el-tooltip placement="top">
        <div slot="content">
          <font-awesome-icon
            icon="phone-alt"
          /> {{ receiptInfo.tel }}<br>
        </div>
        <span>{{ receiptInfo.store }}</span>
      </el-tooltip>
      <el-popconfirm
        title="Are you sure to delete this?"
        confirm-button-text="Yes"
        cancel-button-text="No"
        @confirm="deleteReceipt"
      >
        <el-button
          slot="reference"
          plain
          type="danger"
          class="icon"
          icon="el-icon-delete"
        />
      </el-popconfirm>
      <el-button
        plain
        type="primary"
        class="icon"
        icon="el-icon-edit"
        @click="editReceipt"
      />
    </div>
    <div class="info-block">
      {{ datetimeFormat(receiptInfo.date) }}
    </div>
    <div class="info-block">
      Receipt Id: {{ receiptInfo.receiptId }}
    </div>
    <div class="info-block">
      GSTReg: {{ receiptInfo.GSTReg }}
    </div>
    <receipt-table
      :dataset="receiptInfo.descriptions"
    />
    <div class="info-block">
      Total: {{ receiptInfo.total }}
    </div>
  </el-card>
</template>

<script>
import ReceiptTable from './ReceiptTable'
export default {
  name: 'ReceiptCard',
  components: {
    ReceiptTable
  },
  props: {
    receiptInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    editReceipt () {
      this.$emit('edit', this.receiptInfo._id)
    },
    deleteReceipt () {
      this.$emit('delete', this.receiptInfo._id)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
  width: calc(50% - 20px);
  min-height: 350px;

  .info-block {
    margin: 5px 0;
    color: #426579
  }

  .icon {
    float: right;
    margin-left: 5px;
    padding: 3px;
  }
}
</style>
