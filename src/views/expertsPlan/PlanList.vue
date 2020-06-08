<template>
  <div class="container">
    <el-row type="flex" justify="space-between" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="标题">
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
      <el-table-column prop="title" label="推荐标题" align="center" />
      <el-table-column prop="url" label="比赛信息" align="center" />
      <el-table-column prop="path" label="联赛信息" align="center" />
      <el-table-column prop="time" label="比赛队伍" align="center" />
      <el-table-column prop="time" label="比赛时间" align="center" />
      <el-table-column prop="time" label="竞猜内容" align="center" />
      <el-table-column prop="time" label="预猜结果" align="center" />
      <el-table-column prop="time" label="竞猜结果" align="center" />
      <el-table-column prop="time" label="是否可查看" align="center" />
      <el-table-column prop="time" label="可查看等级" align="center" />
      <el-table-column prop="time" label="时间" align="center" />
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span class="pointer-span" style="margin-left: 20px">
            <i class="el-icon-delete red-text" />
            <span class="red-text" @click="deleteVideo(row, $index)">删除</span>
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

    <el-dialog :title="dialogTitle" :visible.sync="isShowAdd">
      <el-form
        ref="articalForm"
        :inline="true"
        :model="articalForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="推荐标题：" prop="title">
          <el-input v-model="articalForm.title" autocomplete="off" style="width: 300px" />
        </el-form-item>
        <el-form-item label="获取佣金：" prop="brokerage">
          <el-input v-model.number="articalForm.brokerage" autocomplete="off" style="width: 300px" />
        </el-form-item>
        <el-form-item label="是否可看：" prop="canSee">
          <el-radio-group v-model="articalForm.canSee">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1">否</el-radio>
          </el-radio-group>
          <el-select
            v-if="articalForm.canSee === 1"
            v-model="articalForm.free"
            style="width: 200px;margin-left: 30px"
          >
            <el-option label="青铜以上会员免费" :value="0" />
            <el-option label="白银以上会员免费" :value="1" />
            <el-option label="黄金以上会员免费" :value="2" />
            <el-option label="白金以上会员免费" :value="3" />
            <el-option label="钻石以上会员免费" :value="4" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择比赛：" border prop="competition">
          <el-table :data="gameList" border style="width: 800px">
            <!-- <el-table-column type="expand">
              <template slot-scope="props">

              </template>
            </el-table-column>-->
            <el-table-column label="联赛名称" prop="name" />
            <el-table-column label="对阵队伍" prop="team" />
            <el-table-column label="开始时间" prop="beginTime" />
            <el-table-column label="竞猜内容" prop="content" />
            <el-table-column label="选项">
              <template slot-scope="{row}">
                <el-radio-group v-model="row.selectedGame">
                  <el-radio
                    v-for="(item, key) in row.options"
                    :key="key"
                    :label="key"
                  >{{ item.name }}</el-radio>
                </el-radio-group>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="margin-top: 20px"
            background
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-form-item>
        <el-form-item label="推荐原因：" prop="reason">
          <tinymce v-model="articalForm.reason" :height="200" />
        </el-form-item>
        <el-form-item label="专家观点：" prop="opinion">
          <tinymce v-model="articalForm.opinion" :height="200" />
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
      dialogTitle: '新增方案',
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
      gameList: [
        {
          name: '英雄联盟LPL',
          team: '	伦敦喷火战斗机队c VS',
          beginTime: '2020-06-04 10:00:07',
          content: '获得比赛胜利',
          selectedGame: '',
          options: [{ name: '伦敦喷火战斗机' }, { name: '上海龙之队c' }]
        }
      ],
      isShowAdd: false,
      articalForm: {
        title: '',
        brokerage: '',
        canSee: 0,
        free: 2,
        competition: '',
        reason: '',
        opinion: ''
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入推荐标题',
            trigger: 'blur'
          }
        ],
        brokerage: [
          {
            required: true,
            message: '请输入获得佣金',
            trigger: 'blur'
          },
          { type: 'number', message: '获得佣金必须为数字值' }
        ],
        competition: [
          {
            required: true,
            message: '请选择比赛',
            trigger: 'blur'
          }
        ],
        reason: [
          {
            required: true,
            message: '请输入推荐原因',
            trigger: 'blur'
          }
        ],
        opinion: [
          {
            required: true,
            message: '请输入专家观点',
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
      this.dialogTitle = '修改文章'
    },
    addArtical() {
      this.dialogTitle = '新增方案'
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

