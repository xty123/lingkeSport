<template>
  <div class="container">
    <el-row type="flex" justify="end" style="margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-plus" @click="addGift">新增</el-button>
    </el-row>
    <el-table :data="tableData" v-loading="listLoading" border style="width: 100%">
      <el-table-column align="center" type="index" width="80px"></el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="account" label="科豆" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row, $index}">
          <span>
            <i class="el-icon-edit"></i>
            <span>修改</span>
          </span>
          <span style="margin-left: 20px">
            <i class="el-icon-circle-close"></i>
            <span>禁用</span>
          </span>
          <!-- <el-button v-if="row.status!='deleted'" size="mini" type="info">禁用</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="end" style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-row>

    <el-dialog title="新增礼品" :visible.sync="isShowAdd" width="500px">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="科豆" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width: 200px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="isShowAdd = false">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLoading: false,
      tableData: [
        {
          type: "普通",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          type: "普通",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          type: "动画",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        },
        {
          type: "普通",
          name: "王小虎",
          account: "支付宝",
          openingBank: "",
          status: "正常"
        }
      ],
      isShowAdd: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addGift() {
      this.isShowAdd = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  background: #ffffff;
  min-height: 800px;
}
</style>
<style >
.el-dialog__header {
  border-bottom: 1px solid #e5e5e5 !important;
}
</style>

