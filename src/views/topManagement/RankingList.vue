<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true">
          <el-form-item label="排行榜类型">
            <el-select v-model="queryInfo.type" placeholder="请选择">
              <el-option label="全部" value="-1" />
              <el-option label="回报率榜" value="1" />
              <el-option label="财富榜" value="2" />
              <el-option label="流水榜" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="queryInfo.userName" placeholder="请输入用户名" />
          </el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button type="primary" icon="el-icon-plus" @click="addArtical">新增</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="id" label="用户名" align="center" />
      <el-table-column prop="title" label="数值" align="center" />
      <el-table-column prop="url" label="排行榜类型" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span" @click="modifyVideo(row, $index)">
            <i class="el-icon-edit blue-text" />
            <span class="blue-text">修改</span>
          </span>
          <span class="pointer-span" style="margin-left: 10px" @click="deleteVideo(row, $index)">
            <i class="el-icon-delete red-text" />
            <span class="red-text">删除</span>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" style="margin-top: 20px">
      <el-pagination
        :current-page="1"
        background
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>

    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd" width="500px">
      <el-form ref="articalForm" :model="articalForm" :rules="rules">
        <el-form-item label="用户名称" prop="title" :label-width="formLabelWidth">
          <el-input v-model="articalForm.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="数值" prop="desc" :label-width="formLabelWidth">
          <el-input v-model="articalForm.desc" />
        </el-form-item>
        <el-form-item label="排行榜类型" prop="anchor" :label-width="formLabelWidth">
          <el-select v-model="articalForm.anchor" placeholder="请选择">
            <el-option label="回报率榜" value="1" />
            <el-option label="财富榜" value="2" />
            <el-option label="流水榜" value="3" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveVideo('articalForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {},
      formLabelWidth: '100px',
      dialogTitle: '新增排行榜',
      listLoading: false,
      tableData: [
        {
          id: 'b9c81ac3-214c-4fec-b7e5-46d41ed44513',
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          type: '0',
          time: '202005184232'
        },
        {
          id: 'b9c81ac3-214c-4fec-b7e5-46d41ed44513',
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          type: '0',
          time: '202005184232'
        },
        {
          id: 'b9c81ac3-214c-4fec-b7e5-46d41ed44513',
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          type: '1',
          time: '202005184232'
        },
        {
          id: 'b9c81ac3-214c-4fec-b7e5-46d41ed44513',
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          type: '1',
          time: '202005184232'
        },
        {
          id: 'b9c81ac3-214c-4fec-b7e5-46d41ed44513',
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          type: '0',
          time: '202005184232'
        }
      ],
      isShowAdd: false,
      articalForm: {
        title: '',
        url: '',
        anchor: '',
        desc: ''
      },
      rules: {
        anchor: [
          {
            required: true,
            message: '请选择排行榜类型',
            trigger: 'blur'
          }
        ],
        title: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: '请输入数值',
            trigger: 'blur'
          }
        ]
      },
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
      // this.articalForm.url = URL.createObjectURL(file.raw);
    },
    modifyVideo(row, index) {
      this.isShowAdd = true
      this.articalForm = JSON.parse(JSON.stringify(row))
      this.dialogTitle = '修改排行榜'
    },
    addArtical() {
      this.dialogTitle = '新增排行榜'
      this.isShowAdd = true
    },
    saveVideo(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShowAdd = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    deleteVideo(row, index) {
      this.$confirm('确定想要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
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

