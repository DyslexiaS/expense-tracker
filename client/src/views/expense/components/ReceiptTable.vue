<template>
  <div class="table">
    <el-table
      :data="dataset"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
        label="ID"
        align="center"
        width="60"
      />
      <el-table-column
        label="Item"
        align="center"
        width="160"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Unit Price"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.unitPrice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Amount"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.amount }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'ReceiptTable',
  props: {
    dataset: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    handleEdit () {

    },
    handleDelete () {

    }
  }
}
</script>

<style scoped>
</style>
