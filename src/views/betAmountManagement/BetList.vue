<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="用户名">
            <el-input placeholder />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <!-- <el-button type="primary" icon="el-icon-plus" @click="addTool">新增</el-button> -->
      </el-col>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="id" label="用户名ID" align="center" />
      <el-table-column prop="name" label="用户名" align="center" />
      <el-table-column prop="telphone" label="手机号" align="center" />
      <el-table-column prop="noBet" label="单笔投注上限科豆" align="center" />
      <el-table-column prop="beted" label="总未开奖投注上限科豆" align="center" />
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
        <el-form-item label="单笔投注上限科豆" :label-width="formLabelWidth">
          <el-input v-model="toolForm.noBet" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="总未开奖投注上限科豆" :label-width="formLabelWidth">
          <el-input v-model="toolForm.beted" autocomplete="off" style="width: 200px" />
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
      dialogTitle: '新增投注金额',
      queryInfo: {},
      formLabelWidth: '180px',
      listLoading: false,
      tableData: [
        {
          id: '124',
          name: '平台',
          telphone: '13500000002',
          noBet: '1844',
          beted: '32432'
        },
        {
          id: '124',
          name: '平台',
          telphone: '13500000002',
          noBet: '1844',
          beted: '32432'
        },
        {
          id: '124',
          name: '平台',
          telphone: '13500000002',
          noBet: '1844',
          beted: '32432'
        },
        {
          id: '124',
          name: '平台',
          telphone: '13500000002',
          noBet: '1844',
          beted: '32432'
        },
        {
          id: '124',
          name: '平台',
          telphone: '13500000002',
          noBet: '1844',
          beted: '32432'
        }
      ],
      isShowAdd: false,
      toolForm: {
        noBet: '',
        beted: ''
      }
    }
  },
  methods: {
    modifyTool(row, index) {
      this.dialogTitle = '修改投注金额'
      this.isShowAdd = true
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

