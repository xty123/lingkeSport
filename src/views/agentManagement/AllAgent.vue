<template>
  <div class="container">
    <el-row v-if="!isShowDetail" style="display: flex">
      <el-tree
        style="min-width: 250px;margin: 58px 20px 0 0;background: #e5e5e5;"
        :data="treeData"
        :props="defaultProps"
        :default-expand-all="true"
        @node-click="handleNodeClick"
      />
      <div style="flex:9;overflow: auto">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="代理商电话">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="日期">
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
        <el-table v-loading="listLoading" :data="tableData" :fit="true" border>
          <el-table-column fixed align="center" type="index" width="50px" />
          <el-table-column prop="agent" label="代理商" align="center" />
          <el-table-column prop="phone" label="手机号" align="center" />
          <el-table-column prop="tier" label="代理层级" align="center" />
          <el-table-column prop="createTime" label="创建时间" align="center" />
          <el-table-column prop="balance" label="余额" align="center" />
          <el-table-column prop="status" label="用户状态" align="center" />
          <el-table-column prop="availableBalance" label="可用余额" align="center" />
          <el-table-column prop="cashDeposit" label="保证金" align="center" />
          <el-table-column prop="commissionThan" label="佣金比" align="center" />
          <el-table-column prop="offlineAgent" label="线下代理商" align="center" />
          <el-table-column prop="promotedNum" label="推广客户数" align="center" />
          <el-table-column prop="totalHandle" label="直推投注总额" align="center" />
          <el-table-column prop="winningAmount" label="直推中奖总额" align="center" />
          <el-table-column prop="singleTotal" label="直推做单总额" align="center" />
          <el-table-column prop="singleTotal" label="直推投注次数" align="center" />
          <el-table-column prop="singleTotal" label="直推中奖次数" align="center" />
          <el-table-column prop="singleTotal" label="直推累计充值" align="center" />
          <el-table-column prop="singleTotal" label="直推待开奖投注" align="center" />
          <el-table-column prop="singleTotal" label="直推累计余额" align="center" />
          <el-table-column prop="singleTotal" label="直推累计出金" align="center" />
          <el-table-column fixed="right" label="操作" align="center" width="260">
            <template slot-scope="{row, $index}">
              <span class="pointer-span">
                <i class="el-icon-edit" />
                <span class="blue-text" @click="toDetail(row, $index)">直推用户详情</span>
              </span>
              <span class="pointer-span" style="margin-left: 20px">
                <i class="el-icon-edit" />
                <span class="blue-text" @click="showModifyPassword(row, $index)">修改密码</span>
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
    </el-row>

    <!-- 直推用户详情 -->
    <straight-push-users v-if="isShowDetail" :is-show-return="true" @goBack="goBack" />
    <!-- 修改密码 -->
    <modify-password ref="modifyDialog" />
  </div>
</template>

<script>
export default {
  components: {
    straightPushUsers: () =>
      import('@/views/agentManagement/components/StraightPushUsers'),
    modifyPassword: () =>
      import('@/views/agentManagement/components/ModifyPassword')
  },
  data() {
    return {
      treeData: [
        {
          label: '平台（一级代理）',
          children: [
            {
              label: '用户343254（二级代理）',
              children: [
                {
                  label: '用户343254（三级代理）'
                }
              ]
            },
            {
              label: '用户2324（二级代理）',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      listLoading: false,
      tableData: [
        {
          id: '112',
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
          id: '112',
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
          id: '112',
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
          id: '112',
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
      isShowDetail: false
    }
  },
  methods: {
    goBack() {
      this.isShowDetail = false
    },
    toDetail(row, index) {
      this.isShowDetail = true
    },
    showModifyPassword(row, index) {
      this.$refs.modifyDialog.showDialog(true, row)
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
.container {
  padding: 20px 20px 20px 0;
}
.demo-ruleForm {
  width: 40%;
  min-width: 300px;
  margin: 50px auto;
}
</style>

