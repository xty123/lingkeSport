<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="收款工具" :label-width="formLabelWidth">
            <el-select v-model="queryInfo.tool" placeholder="请选择">
              <el-option label="全部" :value="-1" />
              <el-option label="微信" :value="1" />
              <el-option label="支付宝" :value="2" />
              <el-option label="银行卡" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="户名">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="账号">
            <el-input placeholder />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button type="primary" icon="el-icon-plus" @click="addTool">新增</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="tool" label="收款工具" align="center" />
      <el-table-column prop="name" label="户名" align="center" />
      <el-table-column prop="account" label="账号" align="center" />
      <el-table-column prop="openingBank " label="开户行" align="center" />
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="{row}">
          <el-switch
            :value="row.status"
            active-value="正常"
            inactive-value="禁用"
            @change="statusChange(row, $event)"
          />&nbsp;
          <el-tag
            size="small"
            effect="plain"
            :type="row.status == '禁用' ? 'info': 'success' "
          >{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit blue-text" />
            <span class="blue-text" @click="modifyTool(row, $index)">修改</span>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" style="margin-top: 20px">
      <el-pagination
        background
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>

    <!--新增  -->
    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd" width="500px">
      <el-form ref="toolForm" :model="toolForm" :rules="rules">
        <el-form-item label="收款工具" prop="tool" :label-width="formLabelWidth">
          <el-select v-model="toolForm.tool" placeholder="请选择">
            <el-option label="微信" value="0" />
            <el-option label="支付宝" value="1" />
            <el-option label="银行卡" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="户名" :label-width="formLabelWidth">
          <el-input v-model="toolForm.username" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="toolForm.account" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="银行" :label-width="formLabelWidth">
          <el-input v-model="toolForm.bank" autocomplete="off" style="width: 200px" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveTool('toolForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '新增收款工具',
      queryInfo: {},
      formLabelWidth: '100px',
      listLoading: false,
      tableData: [
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '正常'
        },
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '正常'
        },
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '禁用'
        },
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '正常'
        },
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '正常'
        },
        {
          tool: '支付宝',
          name: '支付宝',
          account: '1234131231',
          openingBank: '',
          status: '正常'
        }
      ],
      isShowAdd: false,
      toolForm: {
        tool: '',
        username: '',
        account: '',
        bank: ''
      },
      rules: {
        tool: [
          {
            required: true,
            message: '请选择收款工具',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    statusChange(row, event) {
      this.$confirm('您确定要执行此操作吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          row.status = event
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消该操作！'
          })
        })
    },
    modifyTool(row, index) {
      this.dialogTitle = '修改收款工具'
      this.isShowAdd = true
    },
    addTool() {
      this.isShowAdd = true
      this.dialogTitle = '新增收款工具'
    },
    saveTool(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShowAdd = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
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

