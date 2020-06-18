<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="二级代理">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="上级推广人">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="会员手机">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="开奖状态">
        <el-select v-model="queryInfo.operate" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="待开奖" :value="1" />
          <el-option label="猜中" :value="2" />
          <el-option label="未猜中" :value="3" />
          <el-option label="竞猜取消" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="queryInfo.operate" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="早盘" :value="1" />
          <el-option label="滚盘" :value="2" />
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
      <el-table-column prop="telphone" label="用户手机号" align="center" />
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="straightPushAgent" label="代理姓名" align="center" />
      <el-table-column prop="agentPhone" label="代理手机" align="center" />
      <el-table-column label="上级推广人" align="center" width="110px">
        <template slot-scope="{row}">
          <span>{{ row.product }}</span>
          <div class="blue-text">（全名推广）</div>
        </template>
      </el-table-column>
      <el-table-column prop="unitPrice" label="赛事名称" align="center" />
      <el-table-column prop="purchaseNum" label="竞猜名称" align="center" />
      <el-table-column prop="taxAffairs" label="比赛队伍" align="center" />
      <el-table-column prop="amountGoods" label="比分" align="center" />
      <el-table-column prop="servicCharge" label="类型" align="center" />
      <el-table-column prop="discountAmount" label="投注名称" align="center" />
      <el-table-column prop="repurchaseDiscount" label="开奖名称" align="center" />
      <el-table-column prop="paymentAmount" label="比赛开始名称" align="center" />
      <el-table-column prop="orderTime" label="投注时间" align="center" />
      <el-table-column prop="expectedAccount" label="赔率" align="center" />

      <el-table-column prop="bankCardNumber" label="投注科豆" align="center" />
      <el-table-column prop="bankName" label="竞猜结果" align="center" />
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
          status: '待打款',
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
          status: '待打款',
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
          status: '回购成功',
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
          status: '回购成功',
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
          status: '待打款',
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
          status: '待打款',
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
      this.$confirm('您确定已经打过款给用户了吗？', '提示', {
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

