<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="商品分类">
            <el-select v-model="queryInfo.type" placeholder="请选择">
              <el-option label="全部" value="-1" />
              <el-option label="公告" value="1" />
              <el-option label="资金相关" value="2" />
              <el-option label="竞猜相关" value="3" />
              <el-option label="领奖规则" value="4" />
              <el-option label="领奖攻略" value="5" />
            </el-select>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input placeholder />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button type="primary" icon="el-icon-plus" @click="addArtical">新增</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column prop="url" label="分类" align="center" />
      <el-table-column prop="time" label="时间" align="center" />
      <el-table-column prop="path" label="排序号" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit blue-text" />
            <span class="blue-text" @click="modifyVideo(row, $index)">修改</span>
          </span>
          <span class="pointer-span" style="margin-left: 20px">
            <i class="el-icon-delete red-text" />
            <span class="red-text" @click="deleteVideo(row, $index)">删除</span>
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
      <el-form ref="articalForm" :model="articalForm" :rules="rules">
        <el-form-item label="标题名称：" prop="title" :label-width="formLabelWidth">
          <el-input v-model="articalForm.title" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="商品分类" prop="classify" :label-width="formLabelWidth">
          <el-select v-model="queryInfo.classify" placeholder="请选择">
            <el-option label="公告" value="1" />
            <el-option label="资金相关" value="2" />
            <el-option label="竞猜相关" value="3" />
            <el-option label="领奖规则" value="4" />
            <el-option label="领奖攻略" value="5" />
          </el-select>
        </el-form-item>
        <el-form-item label="图片：" :label-width="formLabelWidth">
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
        <el-form-item label="文章内容：" prop="desc" :label-width="formLabelWidth">
          <tinymce v-model="articalForm.desc" :height="300" />
        </el-form-item>
        <el-form-item label="排序号：" prop="sortNum" :label-width="formLabelWidth">
          <el-input v-model.number="articalForm.sortNum" autocomplete="off" style="width: 200px" />
        </el-form-item>
        <el-form-item label="发布日期：" prop="publicDate" :label-width="formLabelWidth">
          <el-date-picker v-model="articalForm.publicDate" type="date" placeholder="选择日期" />
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
import Tinymce from '@/components/Tinymce'
export default {
  components: { Tinymce },
  data() {
    return {
      formLabelWidth: '120px',
      queryInfo: {},
      dialogTitle: '新增',
      listLoading: false,
      tableData: [
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        },
        {
          title: 'T1赛后采访：离拿下春季赛冠军只剩最后一步！',
          url:
            'http://cdn.lingke.com.cn/431783a0-a1fc-44e0-ba62-9f4bea46e6fd.png',
          path: 'http://h5.lingke.com.cn/yqRewardsWeb/h5/banner?id=19',
          belong: '专家banner',
          time: '202005184232'
        }
      ],
      isShowAdd: false,
      articalForm: {
        title: '',
        classify: '',
        url: '',
        desc: '',
        sortNum: '',
        publicDate: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          }
        ],
        classify: [
          {
            required: true,
            message: '请选择内容分类',
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: '请输入文章内容',
            trigger: 'blur'
          }
        ],
        sortNum: [
          {
            required: true,
            message: '请输入排序号',
            trigger: 'blur'
          },
          { type: 'number', message: '排序号必须为数字值' }
        ],
        publicDate: [
          {
            required: true,
            message: '请选择发布日期',
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
      this.dialogTitle = '修改'
    },
    addArtical() {
      this.dialogTitle = '新增'
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

