<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="开奖时间">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item label="代理手机">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input placeholder />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col v-if="isShowReturn" :span="4" style="text-align:right">
        <el-button @click="goBack">返回</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column fixed align="center" type="index" width="50px" />
      <el-table-column prop="id" label="ID" align="center" />
      <el-table-column prop="agent" label="用户名" align="center" />
      <el-table-column prop="phone" label="手机号" align="center" />
      <el-table-column prop="tier" label="真实姓名" align="center" />
      <el-table-column prop="createTime" label="直推代理" align="center" />
      <el-table-column prop="balance" label="代理手机" align="center" />
      <el-table-column prop="status" label="已开奖投注" align="center" />
      <el-table-column prop="availableBalance" label="已开奖次数" align="center" />
      <el-table-column prop="cashDeposit" label="中奖总额" align="center" />
      <el-table-column prop="commissionThan" label="中奖次数" align="center" />
      <el-table-column prop="offlineAgent" label="总收益" align="center" />
      <el-table-column prop="promotedNum" label="待开奖投注" align="center" />
      <el-table-column prop="totalHandle" label="待开奖次数" align="center" />
      <el-table-column prop="winningAmount" label="累计充值" align="center" />
      <el-table-column prop="singleTotal" label="科豆余额" align="center" />
      <el-table-column prop="singleTotal" label="豆芽分余额" align="center" />
      <el-table-column prop="singleTotal" label="注册时间" align="center" />
      <el-table-column fixed="right" label="操作" align="center" width="210px">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <svg-icon icon-class="douzi" />
            <span class="yellow-text" @click="toBeansDetail(row, $index)">科豆明细</span>
          </span>
          <span class="pointer-span" style="margin-left: 20px">
            <svg-icon icon-class="douyafen" />
            <span class="green-text" @click="toBeanSproutDetail(row, $index)">豆芽分明细</span>
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

    <!-- 科豆明细 -->
    <beans-detail ref="beansDialog" />
    <!-- 豆芽分明细 -->
    <bean-Sprout-detail ref="beanSproutDialog" />
  </div>
</template>

<script>
export default {
  components: {
    beansDetail: () => import('@/views/agentManagement/components/BeansDetail'),
    beanSproutDetail: () =>
      import('@/views/agentManagement/components/BeanSproutDetail')
  },
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
    toBeansDetail(row, index) {
      this.$refs.beansDialog.showDialog(true, row)
    },
    toBeanSproutDetail(row, index) {
      this.$refs.beanSproutDialog.showDialog(true, row)
    },
    goBack() {
      this.$emit('goBack')
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
.demo-ruleForm {
  width: 40%;
  min-width: 300px;
  margin: 50px auto;
}
</style>

