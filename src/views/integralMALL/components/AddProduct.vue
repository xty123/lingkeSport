<template>
  <div class="container">
    <el-form
      ref="ruleForm"
      :inline="true"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="productName">
        <el-input v-model="ruleForm.productName" />
      </el-form-item>
      <el-form-item label="市场价" prop="marketPrice">
        <el-input v-model.number="ruleForm.marketPrice" />
      </el-form-item>
      <el-form-item label="商品分类" prop="goodsCategory">
        <el-select v-model="ruleForm.goodsCategory" placeholder="请选择">
          <el-option label="全部" value="-1" />
          <el-option label="电器" value="1" />
          <el-option label="服饰" value="2" />
          <el-option label="时尚" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="豆苗分" prop="beanScore">
        <el-input v-model.number="ruleForm.beanScore" />
      </el-form-item>
      <el-form-item label="商品编号" prop="goodsNum">
        <el-input v-model.number="ruleForm.goodsNum" />
      </el-form-item>
      <el-form-item label="库存数" prop="storeNum">
        <el-input v-model.number="ruleForm.storeNum" />
      </el-form-item>
      <el-form-item label="图片" prop="bigUrl" class="pic-box" style="display:block">
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
      <el-form-item label="相册" prop="smallUrl" class="pic-box" style="display:block">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content" style="display:block">
        <tinymce v-model="ruleForm.content" :height="300" />
      </el-form-item>
      <div style="text-align:center">
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="returnList">返回</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  components: { Tinymce },
  data() {
    return {
      ruleForm: {
        productName: '',
        marketPrice: '',
        goodsCategory: '',
        beanScore: '',
        goodsNum: '',
        storeNum: '',
        bigUrl: '',
        smallUrl: '',
        content: ''
      },
      rules: {
        productName: [
          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }
        ],
        marketPrice: [
          {
            required: true,
            message: '请输入市场价',
            trigger: 'blur'
          },
          { type: 'number', message: '市场价必须为数字值' }
        ],
        goodsCategory: [
          {
            required: true,
            message: '请选择商品分类',
            trigger: 'blur'
          }
        ],
        beanScore: [
          {
            required: true,
            message: '请输入豆苗分',
            trigger: 'blur'
          },
          { type: 'number', message: '豆苗分必须为数字值' }
        ],
        goodsNum: [
          {
            required: true,
            message: '请输入商品编号',
            trigger: 'blur'
          },
          { type: 'number', message: '商品编号必须为数字值' }
        ],
        storeNum: [
          {
            required: true,
            message: '请输入库存数',
            trigger: 'blur'
          },
          { type: 'number', message: '库存数必须为数字值' }
        ],
        bigUrl: [
          {
            required: true,
            message: '请添加图片',
            trigger: 'blur'
          }
        ],
        smallUrl: [
          {
            required: true,
            message: '请添加相册',
            trigger: 'blur'
          }
        ],
        content: [
          {
            required: true,
            message: '请输入文章内容',
            trigger: 'blur'
          }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    handlePreview(file) {
      console.log(file)
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
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    returnList() {
      this.$emit('returnList')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";
.demo-ruleForm {
  margin: 40px auto;
  width: 80%;
}
.demo-ruleForm /deep/ .el-upload-list--picture .el-upload-list__item {
  display: inline-block;
  width: 300px;
  margin-right: 20px;
}
.pic-box /deep/ .el-form-item__content {
  width: 80%;
}
</style>

