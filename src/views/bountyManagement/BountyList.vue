<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="手机号">
            <el-input placeholder />
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="queryInfo.tool" placeholder="请选择">
              <el-option label="全部" :value="-1" />
              <el-option label="未使用" :value="1" />
              <el-option label="已使用" :value="2" />
              <el-option label="已过期" :value="3" />
            </el-select>
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
      <el-table-column prop="name" label="用户名" align="center" />
      <el-table-column prop="telphone" label="手机号" align="center" />
      <el-table-column prop="realName" label="真实姓名" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="{row}">{{ row.status }}</template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center">
        <template slot-scope="{row}">{{ row.createTime }}</template>
      </el-table-column>
      <el-table-column prop="pastTime" label="过期时间" align="center">
        <template slot-scope="{row}">{{ row.createTime }}</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span" @click="deleteTool(row, $index)">
            <i class="el-icon-delete red-text" />
            <span class="red-text">删除</span>
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
        <el-form-item label="手机号" prop="telphone" :label-width="formLabelWidth">
          <el-input v-model="toolForm.username" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="金额" prop="amount" :label-width="formLabelWidth">
          <el-input v-model="toolForm.account" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="过期时间" prop="pastTime" :label-width="formLabelWidth">
          <el-date-picker v-model="toolForm.pastTime" type="date" placeholder="选择日期" />
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
      dialogTitle: '新增奖励金',
      queryInfo: {},
      formLabelWidth: '100px',
      listLoading: false,
      tableData: [
        {
          name: 'qw2',
          telphone: '13585697913',
          realName: 'qwewr',
          amount: '200',
          status: '未使用',
          createTime: '2020-06-13 15:31:19',
          pastTime: '2020-06-13 15:31:19'
        },
        {
          name: 'qw2',
          telphone: '13585697913',
          realName: 'qwewr',
          amount: '200',
          status: '已使用',
          createTime: '2020-06-13 15:31:19',
          pastTime: '2020-06-13 15:31:19'
        },
        {
          name: 'qw2',
          telphone: '13585697913',
          realName: 'qwewr',
          amount: '200',
          status: '未使用',
          createTime: '2020-06-13 15:31:19',
          pastTime: '2020-06-13 15:31:19'
        },
        {
          name: 'qw2',
          telphone: '13585697913',
          realName: 'qwewr',
          amount: '200',
          status: '已过期',
          createTime: '2020-06-13 15:31:19',
          pastTime: '2020-06-13 15:31:19'
        },
        {
          name: 'qw2',
          telphone: '13585697913',
          realName: 'qwewr',
          amount: '200',
          status: '未使用',
          createTime: '2020-06-13 15:31:19',
          pastTime: '2020-06-13 15:31:19'
        }
      ],
      isShowAdd: false,
      toolForm: {
        telphone: '',
        amount: '',
        pastTime: ''
      },
      rules: {
        telphone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }
        ],
        amount: [
          {
            required: true,
            message: '请输入金额',
            trigger: 'blur'
          }
        ],
        pastTime: [
          {
            required: true,
            message: '请选择过期时间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    deleteTool(row, index) {
      this.$confirm('您确定要执行此操作吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
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
      this.dialogTitle = '修改奖励金'
      this.isShowAdd = true
    },
    addTool() {
      this.isShowAdd = true
      this.dialogTitle = '新增奖励金'
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

