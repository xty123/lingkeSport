<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus" @click="addBanner">新增</el-button>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column label="图片" align="center">
        <template slot-scope="{row}">
          <el-avatar shape="square" :size="100" fit="cover" :src="row.url" />
        </template>
      </el-table-column>
      <el-table-column prop="path" label="跳转路径" align="center" />
      <el-table-column prop="belong" label="所属" align="center" />
      <el-table-column prop="time" label="创建时间" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit blue-text" />
            <span class="blue-text" @click="modifyBanner(row, $index)">修改</span>
          </span>
          <span class="pointer-span" style="margin-left: 20px">
            <i class="el-icon-delete red-text" />
            <span class="red-text" @click="deleteBanner(row, $index)">删除</span>
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

    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd" width="750px">
      <el-form ref="bannerForm" :inline="true" :model="bannerForm" :rules="rules">
        <el-form-item label="banner标题：" prop="title">
          <el-input v-model="bannerForm.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="banner所属：" prop="belong">
          <el-select v-model="bannerForm.belong" placeholder="请选择">
            <el-option label="首页banner" value="0" />
            <el-option label="资讯banner" value="1" />
            <el-option label="专家banner" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="banner图片：" prop="url">
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
        <el-form-item label="banner内容：" prop="desc">
          <tinymce v-model="bannerForm.desc" :height="300" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveBanner('bannerForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  components: { Tinymce },
  data() {
    return {
      dialogTitle: '新增banner',
      listLoading: false,
      tableData: [
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: '凌科银行资金监管说明',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        }
      ],
      isShowAdd: false,
      bannerForm: {
        title: '',
        url: '',
        belong: '',
        desc: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入banner标题',
            trigger: 'blur'
          }
        ],
        url: [
          {
            required: true,
            message: '请选择banner图片',
            trigger: 'blur'
          }
        ],
        belong: [
          {
            required: true,
            message: '请选择banner所属',
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: '请输入banner内容',
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
      // this.bannerForm.url = URL.createObjectURL(file.raw);
    },
    modifyBanner(row, index) {
      this.isShowAdd = true
      this.bannerForm = JSON.parse(JSON.stringify(row))
      this.dialogTitle = '修改banner'
    },
    addBanner() {
      this.dialogTitle = '新增banner'
      this.isShowAdd = true
    },
    saveBanner(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShowAdd = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    deleteBanner(row, index) {
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

