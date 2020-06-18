<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="会员手机">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="queryInfo.status" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="待处理" :value="1" />
          <el-option label="审核通过" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="投注时间">
        <el-date-picker
          v-model="queryInfo.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="orderNum" label="订单号" align="center" />
      <el-table-column prop="telphone" label="会员手机" align="center" />
      <el-table-column prop="straightPushAgent" label="姓名" align="center" />
      <el-table-column prop="agentPhone" label="申请佣金" align="center" />
      <el-table-column prop="status" label="状态" align="center" min-width="90px">
        <template slot-scope="{row}">
          <el-tag
            size="small"
            :type="row.status == '待处理' ? 'warning' : row.status == '审核通过' ? 'success': '' "
          >{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="180px">
        <template slot-scope="{row, $index}">
          <span v-if="row.status === '审核通过'">
            <span class="green-text">已审核</span>
          </span>

          <span v-if="row.status === '待处理'" class="pointer-span">
            <i class="el-icon-circle-check blue-text" />
            <span class="blue-text" @click="confirmMoney(row, $index)">审核通过</span>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" style="margin-top: 20px">
      <el-pagination
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {},
      listLoading: false,
      tableData: [
        {
          orderNum: '1591323979057',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          unitPrice: '20.00',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '审核通过',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankCardNumber: '20200515145617',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        },
        {
          orderNum: '1591323979057',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          bankCardNumber: '20200515145617',
          unitPrice: '20.00',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '审核通过',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        },
        {
          orderNum: '1591323979057',
          bankCardNumber: '20200515145617',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          unitPrice: '20.00',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '待处理',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        },
        {
          orderNum: '1591323979057',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          unitPrice: '20.00',
          bankCardNumber: '20200515145617',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '待处理',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        },
        {
          orderNum: '1591323979057',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          bankCardNumber: '20200515145617',
          unitPrice: '20.00',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '审核通过',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        },
        {
          orderNum: '1591323979057',
          orderTime: '2020-06-05 10:26:19',
          telphone: '15555555555',
          straightPushAgent: '用户452376',
          agentPhone: '20.00',
          product: '正常',
          bankCardNumber: '20200515145617',
          unitPrice: '20.00',
          purchaseNum: '500.00',
          amountGoods: '0.500',
          taxAffairs: '8',
          servicCharge: '456',
          discountAmount: '44',
          repurchaseDiscount: '43',
          paymentAmount: '23',
          expectedAccount: '23',
          status: '审核通过',
          bankName: '中国建设银行',
          name: '苏建魁',
          province: '23',
          city: '23',
          bankDeposit: '23',
          transferFlow: '20200515145617'
        }
      ]
    }
  },
  methods: {
    confirmMoney(row, index) {
      this.$confirm('操作不可以逆，您确定审核通过吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消该操作'
          })
        })
    },
    cancel(row, index) {
      this.$confirm('取消后，用户豆芽分将退回，您确定要执行操作吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消该操作'
          })
        })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";
</style>

