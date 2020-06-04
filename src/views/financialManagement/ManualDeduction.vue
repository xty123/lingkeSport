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
      <el-form-item label="会员手机号" prop="telphone">
        <el-input v-model.number="ruleForm.telphone" />
      </el-form-item>
      <el-form-item label="扣减金额" prop="money">
        <el-input v-model.number="ruleForm.money" />
      </el-form-item>
      <el-form-item label="资金类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择">
          <el-option label="科豆" :value="1" />
          <el-option label="豆芽分" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="扣减理由" prop="reason">
        <el-input v-model.number="ruleForm.reason" type="textarea" :rows="2" />
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
        money: '',
        type: '',
        reason: ''
      },
      rules: {
        telphone: [
          {
            required: true,
            message: '请输入会员手机号',
            trigger: 'blur'
          },
          { type: 'number', message: '会员手机号必须为数字值' }
        ],
        money: [
          {
            required: true,
            message: '请输入扣减金额',
            trigger: 'blur'
          },
          { type: 'number', message: '扣减金额必须为数字值' }
        ],
        type: [
          {
            required: true,
            message: '请选择资金类型',
            trigger: 'blur'
          }
        ],
        reason: [
          {
            required: true,
            message: '请输入扣减理由',
            trigger: 'blur'
          }
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

