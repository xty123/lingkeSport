<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="代理手机号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="会员手机">
        <el-input placeholder />
      </el-form-item>

      <el-form-item label="开奖状态">
        <el-select v-model="queryInfo.status" placeholder="请选择">
          <el-option label="全部" :value="-1" />
          <el-option label="待开奖" :value="1" />
          <el-option label="猜中" :value="2" />
          <el-option label="未猜中" :value="3" />
          <el-option label="竞猜取消" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="queryInfo.type" placeholder="请选择">
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
      <el-table-column prop="agent" label="订单号" align="center" />
      <el-table-column prop="tier" label="用户手机号" align="center" />
      <el-table-column prop="createTime" label="姓名" align="center" />
      <el-table-column prop="balance" label="所属代理" align="center" />
      <el-table-column prop="status" label="赛事名称" align="center" />
      <el-table-column prop="availableBalance" label="竞猜名称" align="center" />
      <el-table-column prop="cashDeposit" label="比赛队伍" align="center" />
      <el-table-column prop="commissionThan" label="比分" align="center" />
      <el-table-column prop="promotedNum" label="类型" align="center" />
      <el-table-column prop="phone" label="投注名称" align="center" />
      <el-table-column prop="phone" label="开奖名称" align="center" />
      <el-table-column prop="phone" label="比赛开始时间" align="center" />
      <el-table-column prop="phone" label="投注时间" align="center" />
      <el-table-column prop="phone" label="赔率" align="center" />
      <el-table-column prop="phone" label="投注的科豆数" align="center" />
      <el-table-column prop="phone" label="竞猜结果" align="center" />
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
      formLabelWidth: '100px',
      tableData: [
        {
          agent: 'd6bba22a4e0746bc806fc47ddd50b942',
          phone: '2020-06-03 17:10:52',
          tier: '一级代理',
          createTime: '2016-05-02',
          balance: '20.00',
          status: '正常',
          availableBalance: '20.00',
          cashDeposit: 'IG : Aster',
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
          cashDeposit: 'IG : Aster',
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
          cashDeposit: 'IG : Aster',
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
          cashDeposit: 'IG : Aster',
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

