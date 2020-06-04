<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="代理用户名">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="代理手机号">
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
      <el-form-item label="操作" :label-width="formLabelWidth">
        <el-select v-model="queryInfo.operate" placeholder="请选择">
          <el-option
            v-for="item in operateList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="收支" :label-width="formLabelWidth">
        <el-select v-model="queryInfo.inAndOut" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="收入" :value="1" />
          <el-option label="支出" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="备注">
        <el-input placeholder />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="success">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="agent" label="订单号" align="center" />
      <el-table-column prop="phone" label="时间" align="center" />
      <el-table-column prop="tier" label="用户名" align="center" />
      <el-table-column prop="createTime" label="手机号" align="center" />
      <el-table-column prop="balance" label="直推代理" align="center" />
      <el-table-column prop="status" label="代理手机" align="center" />
      <el-table-column prop="availableBalance" label="操作" align="center" />
      <el-table-column prop="cashDeposit" label="收支" align="center" />
      <el-table-column prop="commissionThan" label="操作金额" align="center" />
      <el-table-column prop="offlineAgent" label="当前余额" align="center" />
      <el-table-column prop="promotedNum" label="备注" align="center" />
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
      formLabelWidth: '50px',
      tableData: [
        {
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
      value1: '',
      operateList: [
        {
          value: '-1',
          label: '全部'
        },
        {
          value: '0',
          label: '充值'
        },
        {
          value: '1',
          label: '提现'
        },
        {
          value: '2',
          label: '兑换礼品'
        },
        {
          value: '3',
          label: '用户亏损'
        },
        {
          value: '4',
          label: '用户盈利'
        }
      ]
    }
  },
  methods: {
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

