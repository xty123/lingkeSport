<template>
  <div class="container">
    <el-row style="display: flex">
      <el-tree
        style="min-width: 250px;"
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
      <div style="flex:9">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="代理商电话">
            <el-input placeholder></el-input>
          </el-form-item>
          <el-form-item label="日期">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" v-loading="listLoading" border style="width: 100%">
          <el-table-column align="center" type="index" width="50px"></el-table-column>
          <el-table-column prop="agent" label="代理商" align="center"></el-table-column>
          <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
          <el-table-column prop="tier" label="代理层级" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="balance" label="余额" align="center"></el-table-column>
          <el-table-column prop="status" label="用户状态" align="center"></el-table-column>
          <el-table-column prop="availableBalance" label="可用余额" align="center"></el-table-column>
          <el-table-column prop="cashDeposit" label="保证金" align="center"></el-table-column>
          <el-table-column prop="commissionThan" label="佣金比" align="center"></el-table-column>
          <el-table-column prop="offlineAgent" label="线下代理商" align="center"></el-table-column>
          <el-table-column prop="promotedNum" label="推广客户数" align="center"></el-table-column>
          <el-table-column prop="totalHandle" label="直推投注总额" align="center"></el-table-column>
          <el-table-column prop="winningAmount" label="直推中奖总额" align="center"></el-table-column>
          <el-table-column prop="singleTotal" label="直推做单总额" align="center"></el-table-column>
        </el-table>
        <el-row type="flex" justify="end" style="margin-top: 20px">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          label: "平台（一级代理）",
          children: [
            {
              label: "用户343254（二级代理）",
              children: [
                {
                  label: "用户343254（三级代理）"
                }
              ]
            },
            {
              label: "用户2324（二级代理）",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      listLoading: false,
      tableData: [
        {
          agent: "平台",
          phone: "15956709877",
          tier: "一级代理",
          createTime: "2016-05-02",
          balance: "20.00",
          status: "正常",
          availableBalance: "20.00",
          cashDeposit: "500.00",
          commissionThan: "0.500",
          offlineAgent: "8",
          promotedNum: "456",
          totalHandle: "44",
          winningAmount: "43",
          singleTotal: "23"
        },
        {
          agent: "平台",
          phone: "15956709877",
          tier: "一级代理",
          createTime: "2016-05-02",
          balance: "20.00",
          status: "正常",
          availableBalance: "20.00",
          cashDeposit: "500.00",
          commissionThan: "0.500",
          offlineAgent: "8",
          promotedNum: "456",
          totalHandle: "44",
          winningAmount: "43",
          singleTotal: "23"
        },
        {
          agent: "平台",
          phone: "15956709877",
          tier: "一级代理",
          createTime: "2016-05-02",
          balance: "20.00",
          status: "正常",
          availableBalance: "20.00",
          cashDeposit: "500.00",
          commissionThan: "0.500",
          offlineAgent: "8",
          promotedNum: "456",
          totalHandle: "44",
          winningAmount: "43",
          singleTotal: "23"
        },
        {
          agent: "平台",
          phone: "15956709877",
          tier: "一级代理",
          createTime: "2016-05-02",
          balance: "20.00",
          status: "正常",
          availableBalance: "20.00",
          cashDeposit: "500.00",
          commissionThan: "0.500",
          offlineAgent: "8",
          promotedNum: "456",
          totalHandle: "44",
          winningAmount: "43",
          singleTotal: "23"
        }
      ],
      value1: ""
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  background: #ffffff;
}
.demo-ruleForm {
  width: 40%;
  min-width: 300px;
  margin: 50px auto;
}
</style>

