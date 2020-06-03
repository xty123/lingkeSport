<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus">新增</el-button>
    </el-row>
    <el-table :data="tableData" v-loading="listLoading" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px"></el-table-column>
      <el-table-column prop="tool" label="收款工具" align="center"></el-table-column>
      <el-table-column prop="name" label="户名" align="center"></el-table-column>
      <el-table-column prop="account" label="账号" align="center"></el-table-column>
      <el-table-column prop="openingBank " label="开户行" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span>
            <i class="el-icon-edit"></i>
            <span>修改</span>
          </span>
          <span style="margin-left: 20px">
            <i class="el-icon-circle-close"></i>
            <span>禁用</span>
          </span>
          <!-- <el-button v-if="row.status!='deleted'" size="mini" type="info">禁用</el-button> -->
        </template>
      </el-table-column>
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
</template>

<script>
export default {
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          tool: "2016-05-02",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          tool: "2016-05-02",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          tool: "2016-05-02",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          tool: "2016-05-02",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        }
      ]
    };
  },
  methods: {
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
  min-height: 800px;
}
</style>

