<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus" @click="addApp">新增</el-button>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="versions" label="客户端版本号" align="center" />
      <el-table-column prop="telType" label="手机类型" align="center" />
      <el-table-column prop="upgrade" label="升级号" align="center" />
      <el-table-column prop="log" label="升级日志" align="center" />
      <el-table-column prop="url" label="升级下载网址" align="center" />
      <el-table-column prop="isUpdated" label="是否强制更新" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit blue-text" />
            <span class="blue-text" @click="modifyApp(row, $index)">修改</span>
          </span>
          <span class="pointer-span" style="margin-left: 20px">
            <svg-icon icon-class="ban" />
            <span class="gray-text">禁用</span>
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

    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd" width="500px">
      <el-form ref="appForm" :model="appForm" :rules="rules">
        <el-form-item label="客户端版本号" prop="versions" :label-width="formLabelWidth">
          <el-input v-model="appForm.versions" autocomplete="off" style="width: 250px" />
        </el-form-item>
        <el-form-item label="手机类型" prop="telType" :label-width="formLabelWidth">
          <el-select v-model="appForm.telType" placeholder="请选择">
            <el-option label="安卓" value="安卓" />
            <el-option label="IOS" value="IOS" />
          </el-select>
        </el-form-item>
        <el-form-item label="升级号" prop="upgrade" :label-width="formLabelWidth">
          <el-input v-model="appForm.upgrade" autocomplete="off" style="width: 250px" />
        </el-form-item>
        <el-form-item label="升级日志" prop="log" :label-width="formLabelWidth">
          <el-input v-model="appForm.log" autocomplete="off" style="width: 250px" />
        </el-form-item>
        <el-form-item label="升级下载网址" prop="url" :label-width="formLabelWidth">
          <el-input v-model="appForm.url" autocomplete="off" style="width: 250px" />
        </el-form-item>
        <el-form-item label="是否强制更新" prop="isUpdated" :label-width="formLabelWidth">
          <el-select v-model="appForm.isUpdated" placeholder="请选择">
            <el-option label="是" value="1" />
            <el-option label="否" value="0" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveApp('appForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '新增App版本',
      listLoading: false,
      tableData: [
        {
          versions: '2.1',
          telType: '3423',
          upgrade: '2432',
          log: '3432',
          url: '23423',
          isUpdated: '是'
        },
        {
          versions: '2.1',
          telType: '3423',
          upgrade: '2432',
          log: '3432',
          url: '23423',
          isUpdated: '是'
        },
        {
          versions: '2.1',
          telType: '3423',
          upgrade: '2432',
          log: '3432',
          url: '23423',
          isUpdated: '是'
        },
        {
          versions: '2.1',
          telType: '3423',
          upgrade: '2432',
          log: '3432',
          url: '23423',
          isUpdated: '是'
        },
        {
          versions: '2.1',
          telType: '3423',
          upgrade: '2432',
          log: '3432',
          url: '23423',
          isUpdated: '是'
        }
      ],
      isShowAdd: false,
      appForm: {
        versions: '',
        telType: '安卓',
        upgrade: '',
        log: '',
        url: '',
        isUpdated: '是'
      },
      rules: {
        versions: [
          {
            required: true,
            message: '请输入客户端版本号',
            trigger: 'blur'
          }
        ],
        telType: [
          {
            required: true,
            message: '请选择手机类型',
            trigger: 'blur'
          }
        ],
        upgrade: [
          {
            required: true,
            message: '请输入升级号',
            trigger: 'blur'
          }
        ],
        log: [
          {
            required: true,
            message: '请输入升级日志',
            trigger: 'blur'
          }
        ],
        url: [
          {
            required: true,
            message: '请输入升级下载网址',
            trigger: 'blur'
          }
        ],
        isUpdated: [
          {
            required: true,
            message: '请选择是否强制更新',
            trigger: 'blur'
          }
        ]
      },
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlePic(resp, file, fileList) {
      console.log(resp, file, fileList)
      // this.appForm.url = URL.createObjectURL(file.raw);
    },
    modifyApp(row, index) {
      this.isShowAdd = true
      this.dialogTitle = '修改App版本'
    },
    addApp() {
      this.dialogTitle = '新增App版本'
      this.isShowAdd = true
    },
    saveApp(formName) {
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

