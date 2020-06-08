<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&& sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="fixed-header" :class="{'fixed-header':fixedHeader}">
      <navbar @showModifyPassword="isShow = true" />
    </div>
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <app-main />
      <tags-view v-if="needTagsView" class="tags-router" />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>

    <!-- 修改密码弹出框 -->
    <el-dialog title="密码修改" :visible.sync="isShow" width="500px" style="z-index: 99999">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户账号：">
          <span>13500000002</span>
        </el-form-item>
        <el-form-item label="输入当前密码：" prop="currentPass">
          <el-input v-model="ruleForm.currentPass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="输入新密码：" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="重复新密码：" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="isShow = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  data() {
    var validateCurrentPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入当前密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('currentPass')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isShow: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        currentPass: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        currentPass: [{ validator: validateCurrentPass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
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
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.main-container {
  position: relative;
}
.tags-router {
  position: fixed;
  top: 50px;
  right: 0;
  width: 100%;
  padding-left: $sideBarWidth;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  // width: calc(100% - #{$sideBarWidth});
  width: 100vw;
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  // width: calc(100% - 54px);
  width: 100vw;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
