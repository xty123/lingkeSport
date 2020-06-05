<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="订单状态">
        <el-select v-model="queryInfo.inAndOut" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="待审核" :value="1" />
          <el-option label="待发货" :value="2" />
          <el-option label="已发货" :value="3" />
          <el-option label="已收货" :value="4" />
          <el-option label="已取消" :value="5" />
        </el-select>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="收货人电话">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="收货人姓名">
        <el-input placeholder />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="order" label="订单号" align="center" />
      <el-table-column prop="product" label="商品" align="center" />
      <el-table-column prop="vip" label="下单会员" align="center" />
      <el-table-column prop="phone" label="手机号" align="center" />
      <el-table-column prop="realName" label="真实姓名" align="center" />
      <el-table-column prop="agent" label="直推代理" align="center" />
      <el-table-column prop="agentTel" label="代理手机" align="center" />
      <el-table-column prop="orderTime" label="下单时间" align="center" />
      <el-table-column prop="recipients" label="收件人" align="center" width="200px" />
      <el-table-column prop="amount" label="数量" align="center" />
      <el-table-column prop="paymentBean" label="支付豆苗" align="center" />
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="{row}">
          <el-tag
            size="small"
            :type="row.status == '待审核' ? 'warning' : row.status == '已收货' ? 'success': '' "
          >{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="180px">
        <template slot-scope="{row}">
          <span v-if="row.status == '待审核'" class="pointer-span">
            <span class="blue-text" @click="approve(row)">审核通过</span>
          </span>
          <span v-if="row.status == '待审核'" class="pointer-span" style="margin-left: 20px">
            <span class="blue-text" @click="cancel(row)">取消订单</span>
          </span>
          <span v-if="row.status == '已发货'" class="pointer-span" style="margin-left: 20px">
            <span class="blue-text" @click="confirmReceipt(row)">确认收货</span>
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
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '已收货'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '待审核'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '已发货'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '已取消'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '已收货'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '待审核'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '待审核'
        }
      ]
    }
  },
  methods: {
    approve(row) {
      this.$confirm('您确定要执行此操作吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '审核通过成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
    },
    cancel(row) {
      this.$prompt('取消原因', '取消订单', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '取消成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '操作取消'
          })
        })
    },
    confirmReceipt(row) {
      this.$confirm('您确定要执行此操作吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '确认收货成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
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

