<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="代理商电话">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker
              v-model="value1"
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
      </el-col>
      <el-col v-if="isShowReturn" :span="4" style="text-align:right">
        <el-button @click="agentGoBack">返回</el-button>
      </el-col>
    </el-row>

    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="agent" label="代理商" align="center" />
      <el-table-column prop="phone" label="手机号" align="center" />
      <el-table-column prop="tier" label="代理层级" align="center" />
      <el-table-column prop="createTime" label="创建时间" align="center" />
      <el-table-column prop="balance" label="余额" align="center" />
      <el-table-column prop="status" label="用户状态" align="center" />
      <el-table-column prop="availableBalance" label="保证金" align="center" />
      <el-table-column prop="cashDeposit" label="出入金金额" align="center" />
      <el-table-column prop="alarmValue " label="警戒值" align="center" />
      <el-table-column prop="commissionThan" label="佣金比" align="center" />
      <el-table-column label="下线代理数" align="center">
        <template slot-scope="{row, $index}">
          <div>{{ row.offlineAgent }}</div>
          <el-tag size="mini" class="pointer-span" @click="agentDetail(row, $index)">查看详情</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="promotedNum" label="推广客户数" align="center" />
      <el-table-column prop="totalHandle" label="投注总额" align="center" />
      <el-table-column prop="winningAmount" label="中奖总额" align="center" />
      <el-table-column prop="singleTotal" label="做单总额" align="center" />
      <el-table-column prop="betsNumber" label="投注次数" align="center" />
      <el-table-column prop="winningNumber" label="中奖次数" align="center" />
      <el-table-column prop="accumulatedTopUp" label="累计充值" align="center" />
      <el-table-column prop="lotteryBetsPending" label="待开奖投注" align="center" />
      <el-table-column prop="cumulativeBalances" label="累计余额" align="center" />
      <el-table-column fixed="right" label="操作" align="center" width="150px">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit" />
            <span class="blue-text" @click="toDetail(row, $index)">直推用户详情</span>
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
  props: {
    isShowReturn: {
      type: Boolean
    }
  },
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          id: '113',
          agent: '平台',
          phone: '15956709877',
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
          id: '113',
          agent: '平台',
          phone: '15956709877',
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
          id: '113',
          agent: '平台',
          phone: '15956709877',
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
          id: '113',
          agent: '平台',
          phone: '15956709877',
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
      ],
      value1: ''
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    agentDetail() {},
    toDetail(row, index) {
      this.$emit('toUserList', row)
    },
    toBeansDetail(row, index) {
      this.$refs.beansDialog.showDialog(true, row)
    },
    toBeanSproutDetail(row, index) {
      this.$refs.beanSproutDialog.showDialog(true, row)
    },
    agentGoBack() {
      this.$emit('agentGoBack')
    },
    handleNodeClick(data) {
      console.log(data)
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
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

