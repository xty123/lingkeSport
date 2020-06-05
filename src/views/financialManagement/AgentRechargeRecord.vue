<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="代理账号/手机号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="订单号">
        <el-input placeholder />
      </el-form-item>
      <el-form-item label="收款账号">
        <el-select v-model="queryInfo.status" placeholder="请选择">
          <el-option label="请选择" :value="-1" />
          <el-option label="「支付宝」14321435" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
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
      <el-table-column label="申请信息">
        <template slot-scope="{row}">
          <div>代理商：{{ row.applicationInfo.agent }}</div>
          <div>申请时间：{{ row.applicationInfo.time }}</div>
          <div>订单号：{{ row.applicationInfo.orderNum }}</div>
        </template>
      </el-table-column>
      <el-table-column label="充值信息">
        <template slot-scope="{row}">
          <div v-if="row.rechargeInfo.agent === '等待充值'">等待充值</div>
          <div v-else>「支付宝」「{{ row.rechargeInfo.agent }}」</div>
        </template>
      </el-table-column>
      <el-table-column prop="tier" label="充值金额/实际充值">
        <template slot-scope="{row}">
          <div>
            充值金额：
            <span class="red-text">{{ row.amountInfo.rechargeNum }}</span>
          </div>
          <div>
            实际上分金额：
            <span class="yellow-text">{{ row.amountInfo.pointsNum }}</span>
          </div>
          <div>处理时间：{{ row.amountInfo.time }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row}">
          <span v-if="row.rechargeInfo.agent !== '等待充值'">已充值</span>
          <span v-else class="pointer-span">
            <span class="blue-text">确认充值</span>
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
          applicationInfo: {
            agent: '143232443',
            time: '2020-05-27 13:24:23',
            orderNum: '2432153465436'
          },
          rechargeInfo: {
            agent: '214132545'
          },
          amountInfo: {
            rechargeNum: '1000.00',
            pointsNum: '10024.00',
            time: '2020-05-27 13:24:23'
          }
        },
        {
          applicationInfo: {
            agent: '143232443',
            time: '2020-05-27 13:24:23',
            orderNum: '2432153465436'
          },
          rechargeInfo: {
            agent: '等待充值'
          },
          amountInfo: {
            rechargeNum: '1000.00',
            pointsNum: '10024.00',
            time: '2020-05-27 13:24:23'
          }
        },
        {
          applicationInfo: {
            agent: '143232443',
            time: '2020-05-27 13:24:23',
            orderNum: '2432153465436'
          },
          rechargeInfo: {
            agent: '等待充值'
          },
          amountInfo: {
            rechargeNum: '1000.00',
            pointsNum: '10024.00',
            time: '2020-05-27 13:24:23'
          }
        },
        {
          applicationInfo: {
            agent: '143232443',
            time: '2020-05-27 13:24:23',
            orderNum: '2432153465436'
          },
          rechargeInfo: {
            agent: '214132545'
          },
          amountInfo: {
            rechargeNum: '1000.00',
            pointsNum: '10024.00',
            time: '2020-05-27 13:24:23'
          }
        },
        {
          applicationInfo: {
            agent: '143232443',
            time: '2020-05-27 13:24:23',
            orderNum: '2432153465436'
          },
          rechargeInfo: {
            agent: '214132545'
          },
          amountInfo: {
            rechargeNum: '1000.00',
            pointsNum: '10024.00',
            time: '2020-05-27 13:24:23'
          }
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

