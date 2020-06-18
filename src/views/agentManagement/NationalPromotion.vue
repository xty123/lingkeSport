<template>
  <div class="container">
    <div v-if="!isShowDetail">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="代理手机号">
          <el-input placeholder />
        </el-form-item>
        <el-form-item label="上级推广人">
          <el-input placeholder />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input placeholder />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
        <el-table-column align="center" type="index" width="50px" />
        <el-table-column prop="phone" label="ID" align="center" />
        <el-table-column prop="tier" label="姓名" align="center" />
        <el-table-column prop="createTime" label="手机号" align="center" />
        <el-table-column prop="balance" label="代理名称" align="center" />
        <el-table-column prop="status" label="代理手机" align="center" />
        <el-table-column prop="availableBalance" label="上级推广人" align="center" />
        <el-table-column prop="cashDeposit" label="累计订单数" align="center" />
        <el-table-column prop="commissionThan" label="累计佣金" align="center" />
        <el-table-column prop="offlineAgent" label="佣金余额" align="center" />
        <el-table-column prop="agent" label="已提取佣金" align="center" />
        <el-table-column prop="promotedNum" label="一级推广人数" align="center" />
        <el-table-column prop="promotedNumTwo" label="二级推广人数" align="center" />
        <el-table-column fixed="right" label="操作" align="center">
          <template slot-scope="{row, $index}">
            <span class="pointer-span">
              <span class="blue-text" @click="toDetail(row, $index)">我的推广</span>
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
    <!-- 我的推广 -->

    <straight-push-users v-if="isShowDetail" :is-show-return="true" @goBack="goBack" />
  </div>
</template>

<script>
export default {
  components: {
    straightPushUsers: () =>
      import('@/views/agentManagement/components/StraightPushUsers')
  },
  data() {
    return {
      isShowDetail: false,
      queryInfo: {},
      listLoading: false,
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
      ]
    }
  },
  methods: {
    goBack() {
      this.isShowDetail = false
    },
    toDetail(row, index) {
      this.isShowDetail = true
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

