<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="生产数量" prop="account">
        <el-input v-model.number="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="充值金额" prop="money">
        <el-input v-model.number="ruleForm.money"></el-input>
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
        account: "",
        money: ""
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入生产数量",
            trigger: "blur"
          },
          { type: "number", message: "生产数量必须为数字值" }
        ],
        money: [
          {
            required: true,
            message: "请输入充值金额",
            trigger: "blur"
          },
          { type: "number", message: "充值金额必须为数字值" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.demo-ruleForm {
  width: 40%;
  min-width: 300px;
  margin: 50px auto;
}
</style>

