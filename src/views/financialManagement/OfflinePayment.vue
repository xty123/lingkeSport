<template>
  <div class="container">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="充值手机号" prop="telphone">
        <el-input v-model.number="ruleForm.telphone" />
      </el-form-item>
      <el-form-item label="充值金额" prop="money">
        <el-input v-model.number="ruleForm.money" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        telphone: '',
        money: ''
      },
      rules: {
        telphone: [
          {
            required: true,
            message: '请输入充值手机号',
            trigger: 'blur'
          },
          { type: 'number', message: '生产数量必须为数字值' }
        ],
        money: [
          {
            required: true,
            message: '请输入充值金额',
            trigger: 'blur'
          },
          { type: 'number', message: '充值金额必须为数字值' }
        ]
      }
    }
  },
  methods: {
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";
.demo-ruleForm {
  width: 40%;
  min-width: 300px;
  margin: 50px auto;
}
</style>

