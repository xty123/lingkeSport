<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus" @click="addVideo">新增</el-button>
    </el-row>
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="title" label="标题" align="center" />
      <el-table-column prop="url" label="图片url" align="center" />
      <el-table-column prop="path" label="视频url" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit" />
            <span class="blue-text" @click="modifyVideo(row, $index)">修改</span>
          </span>
          <span class="pointer-span" style="margin-left: 20px">
            <i class="el-icon-circle-close" />
            <span class="gray-text" @click="deleteVideo(row, $index)">删除</span>
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
      <el-form ref="videoForm" :model="videoForm" :rules="rules">
        <el-form-item label="视频标题：" prop="title" label-width="95px">
          <el-input v-model="videoForm.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="视频所属：" prop="belong">
          <el-select v-model="videoForm.belong" placeholder="请选择">
            <el-option label="英雄联盟" value="0" />
            <el-option label="刀塔2" value="1" />
            <el-option label="王者荣耀" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="视频图片：" prop="url">
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
        <el-form-item label="视频上传：" prop="desc">
          <el-button type="primary">选择文件</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveVideo('videoForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTitle: '新增视频',
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
      videoForm: {
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
      // this.videoForm.url = URL.createObjectURL(file.raw);
    },
    modifyVideo(row, index) {
      this.isShowAdd = true
      this.videoForm = JSON.parse(JSON.stringify(row))
      this.dialogTitle = '修改视频'
    },
    addVideo() {
      this.dialogTitle = '新增视频'
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

