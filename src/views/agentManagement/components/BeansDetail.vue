<template>
  <el-dialog title="科豆明细" :visible.sync="isShowDetail">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker
          v-model="queryInfo.time"
          style="width: 250px"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="操作">
        <el-select v-model="queryInfo.operate" placeholder="请选择" style="width: 120px">
          <el-option label="全部" value="-1" />
          <el-option label="转入" value="1" />
          <el-option label="转出" value="2" />
          <el-option label="兑换" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="收支">
        <el-select v-model="queryInfo.inAndOut" placeholder="请选择" style="width: 120px">
          <el-option label="全部" value="-1" />
          <el-option label="收入" value="1" />
          <el-option label="支出" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="订单号">
        <el-input placeholder style="width: 150px" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input placeholder style="width: 150px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column align="center" type="index" width="50px" />
      <el-table-column prop="orderNum" label="订单号" align="center" />
      <el-table-column prop="operate" label="操作" align="center" />
      <el-table-column prop="inAndOut" label="收支" align="center" />
      <el-table-column prop="money" label="操作金额" align="center" />
      <el-table-column prop="balance" label="当前余额" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column prop="time" label="时间" align="center" />
    </el-table>
    <div slot="footer" class="dialog-footer" />
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShowDetail: false,
      queryInfo: {},
      tableData: [
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        },
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        },
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        },
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        },
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        },
        {
          orderNum: '1591008130_126',
          operate: '消费',
          inAndOut: '支出',
          money: '2.00',
          balance: '68.00',
          remark: '直播打赏消费',
          time: '2020-06-01 18:42:10'
        }
      ]
    }
  },
  methods: {
    showDialog(isShow, data) {
      this.isShowDetail = isShow
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

