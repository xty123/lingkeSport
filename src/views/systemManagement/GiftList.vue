<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus" @click="addGift">新增</el-button>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="name" label="名称" align="center" />
      <el-table-column prop="type" label="类型" align="center" />
      <el-table-column prop="account" label="科豆" align="center" />
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
            <span class="blue-text" @click="modifyGift(row, $index)">修改</span>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" style="margin-top: 20px">
      <el-pagination
        background
        :current-page="pagination.currentPage"
        :page-sizes="pagination.pageSizeList"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>

    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd" width="500px">
      <el-form ref="giftForm" :model="giftForm" :rules="rules">
        <el-form-item label="名称" prop="name" :label-width="formLabelWidth">
          <el-input v-model="giftForm.name" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :limit="1"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="giftForm.type" placeholder="请选择">
            <el-option label="普通" value="普通" />
            <el-option label="动画" value="动画" />
          </el-select>
        </el-form-item>
        <el-form-item label="科豆" :label-width="formLabelWidth">
          <el-input v-model="giftForm.beans" autocomplete="off" style="width: 200px" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveGift('giftForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '新增礼品',
      listLoading: false,
      pagination: {
        currentPage: 1,
        pageSizeList: [5, 10, 20, 50],
        pageSize: 10,
        total: 0
      },
      tableData: [
        {
          type: '普通',
          name: '点赞',
          account: '支付宝',
          openingBank: '',
          status: '禁用'
        },
        {
          type: '普通',
          name: '气球',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '动画',
          name: '花',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '普通',
          name: '点赞',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '普通',
          name: '点赞',
          account: '支付宝',
          openingBank: '',
          status: '禁用'
        },
        {
          type: '普通',
          name: '气球',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '动画',
          name: '花',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '普通',
          name: '点赞',
          account: '支付宝',
          openingBank: '',
          status: '正常'
        },
        {
          type: '普通',
          name: '点赞',
          account: '支付宝',
          openingBank: '',
          status: '禁用'
        }
      ],
      isShowAdd: false,
      giftForm: {
        name: '',
        region: '',
        type: []
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }
        ]
      },
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted() {
    this.pagination.total = this.tableData.length
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
      // this.giftForm.url = URL.createObjectURL(file.raw);
    },
    modifyGift(row, index) {
      this.isShowAdd = true
      this.giftForm = JSON.parse(JSON.stringify(row))
      this.dialogTitle = '修改礼品'
    },
    addGift() {
      this.dialogTitle = '新增礼品'
      this.isShowAdd = true
    },
    saveGift(formName) {
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

