<template>
  <div class="container">
    <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px" />
      <el-table-column prop="id" label="比赛ID" align="center" />
      <el-table-column prop="title" label="比赛队伍" align="center" />
      <el-table-column prop="path" label="比赛直播流" align="center" />
      <el-table-column label="图片" align="center">
        <template slot-scope="{row}">
          <el-avatar shape="square" :size="100" fit="cover" :src="row.url" />
        </template>
      </el-table-column>
      <el-table-column prop="path" label="比赛状态" align="center" />
      <el-table-column prop="time" label="比赛开始时间" align="center" />
      <el-table-column prop="title" label="比赛名称" align="center" />
      <!-- <el-table-column label="直播类型" align="center">
        <template slot-scope="{row}">
          <el-tag
            size="small"
            :type="row.type == 0 ? 'warning': 'success'"
          >{{row.type == 0 ? '未直播': '已直播'}}</el-tag>
        </template>
      </el-table-column>-->
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span">
            <i class="el-icon-edit" />
            <span class="blue-text" @click="modifyVideo(row, $index)">修改</span>
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
      <el-form ref="articalForm" :model="articalForm" :rules="rules">
        <el-form-item label="直播图片：" :label-width="formLabelWidth">
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
      formLabelWidth: '120px',
      dialogTitle: '新增直播',
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
            message: '请选择主播',
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
      this.dialogTitle = '修改直播'
    },
    addArtical() {
      this.dialogTitle = '新增直播'
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

