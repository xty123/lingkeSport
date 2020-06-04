<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="状态">
        <el-select v-model="queryInfo.status" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="正常" :value="1" />
          <el-option label="禁用" :value="2" />
          <el-option label="已实名" :value="3" />
          <el-option label="未实名" :value="3" />
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
      <el-table-column prop="agent" label="用户名" align="center" />
      <el-table-column prop="createTime" label="手机号" align="center" />
      <el-table-column prop="tier" label="真实姓名" align="center" />
      <el-table-column prop="balance" label="科豆余额" align="center" />
      <el-table-column prop="status" label="豆苗分余额" align="center" />
      <el-table-column prop="availableBalance" label="冻结科豆" align="center" />
      <el-table-column prop="cashDeposit" label="冻结豆苗" align="center" />
      <el-table-column prop="commissionThan" label="充值总额" align="center" />
      <el-table-column prop="promotedNum" label="状态" align="center" />
      <el-table-column label="操作" align="center">
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
          agent: 'd6bba22a4e0746bc806fc47ddd50b942',
          phone: '2020-06-03 17:10:52',
          tier: '一级代理',
          createTime: '2016-05-02',
          balance: '20.00',
          status: '正常',
          availableBalance: '20.00',
          cashDeposit: '500.00',
          commissionThan: '0.500',
          offlineAgent: '8',
          promotedNum: '456',
          totalHandle: '44',
          winningAmount: '43',
          singleTotal: '23'
        },
        {
          agent: 'd6bba22a4e0746bc806fc47ddd50b942',
          phone: '2020-06-03 17:10:52',
          tier: '一级代理',
          createTime: '2016-05-02',
          balance: '20.00',
          status: '正常',
          availableBalance: '20.00',
          cashDeposit: '500.00',
          commissionThan: '0.500',
          offlineAgent: '8',
          promotedNum: '456',
          totalHandle: '44',
          winningAmount: '43',
          singleTotal: '23'
        },
        {
          agent: 'd6bba22a4e0746bc806fc47ddd50b942',
          phone: '2020-06-03 17:10:52',
          tier: '一级代理',
          createTime: '2016-05-02',
          balance: '20.00',
          status: '正常',
          availableBalance: '20.00',
          cashDeposit: '500.00',
          commissionThan: '0.500',
          offlineAgent: '8',
          promotedNum: '456',
          totalHandle: '44',
          winningAmount: '43',
          singleTotal: '23'
        },
        {
          agent: 'd6bba22a4e0746bc806fc47ddd50b942',
          phone: '2020-06-03 17:10:52',
          tier: '一级代理',
          createTime: '2016-05-02',
          balance: '20.00',
          status: '正常',
          availableBalance: '20.00',
          cashDeposit: '500.00',
          commissionThan: '0.500',
          offlineAgent: '8',
          promotedNum: '456',
          totalHandle: '44',
          winningAmount: '43',
          singleTotal: '23'
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

