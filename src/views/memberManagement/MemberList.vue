<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="状态">
        <el-select v-model="queryInfo.status" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="正常" :value="1" />
          <el-option label="禁用" :value="2" />
          <el-option label="已实名" :value="3" />
          <el-option label="未实名" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input placeholder />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="order" label="用户名" align="center" />
      <el-table-column prop="agentTel" label="手机号" align="center" />
      <el-table-column prop="vip" label="真实姓名" align="center" />
      <el-table-column prop="phone" label="科豆余额" align="center" />
      <el-table-column prop="realName" label="豆苗分余额" align="center" />
      <el-table-column prop="agent" label="冻结科豆" align="center" />
      <el-table-column prop="agentTel" label="冻结豆苗" align="center" />
      <el-table-column prop="orderTime" label="充值总额" align="center" />
      <el-table-column label="状态" align="center">
        <template slot-scope="{row}">{{ row.status }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100px">
        <template />
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

