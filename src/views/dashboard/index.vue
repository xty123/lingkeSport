<template>
  <div>
    <div class="panel-group">
      <div
        class="card-panel"
        style="display:flex;justify-content: space-between;align-items: center;"
      >
        <div class="card-panel-description">
          <div class="card-panel-text">账户保证金</div>
          <span class="card-panel-num">¥</span>
          <count-to :start-val="0" :end-val="1000" :duration="600" class="card-panel-num" />
        </div>
        <div>
          <el-button type="primary" @click="isShowDialog = true">充值</el-button>
        </div>
      </div>
      <div
        class="card-panel"
        style="display:flex;justify-content: space-between;align-items: center;"
      >
        <div class="card-panel-description">
          <div class="card-panel-text">警戒值</div>
          <span class="card-panel-num">5.23</span>
          <span class="card-panel-num">%</span>
        </div>
        <div
          style="width: 200px;background:rgba(255,244,234,1);color:rgba(228,145,72,1);padding: 10px;line-height: 20px;border-radius:4px;text-align:left"
        >温馨提示： 警戒值低于5%后，您的做单数据将被划归到平台，直到您补足保证金。</div>
      </div>
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">二级代理（分期）</div>
          <count-to :start-val="0" :end-val="30" :duration="200" class="card-panel-num" />
          <span class="card-panel-num">.00%</span>
        </div>
      </div>
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">专属邀请码</div>
          <span class="card-panel-num">30812445</span>
        </div>
      </div>
    </div>
    <div style="background: #fff;padding: 30px 0 50px">
      <div style="width:80%;margin: 0 auto">
        <p class="title">订单概况（含下级代理做单数据）</p>
        <div v-for="(order,key) in orderList" :key="key" style="margin-top: 40px">
          <div style="margin-bottom: 20px">
            <span class="line" :style="{background: order.color}" />
            <span style="vertical-align: middle;font-weight:500;">{{ order.type }}</span>
          </div>

          <el-card shadow="none">
            <el-row :gutter="24">
              <el-col
                v-for="(item, index) in order.dataList"
                :key="index"
                :span="3"
                style="text-align:center"
              >
                <div class="sum-text" :style="{color: order.color}">{{ item.sum }}</div>
                <div class="name-text">{{ item.name }}</div>
                <div
                  v-if="item.name == '做单总额'"
                  class="name-text"
                  style="font-size: 12px;margin-top: 10px"
                >（含2%手续费：0.0）</div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </div>
    </div>

    <el-dialog title="充值保证金" :visible.sync="isShowDialog" width="500px">
      <div class="red-text" style="margin: 0 0 20px 20px">商户充值 请联系客服获取转账账号</div>
      <el-form ref="giftForm" :model="giftForm" :rules="rules">
        <el-form-item label="账号：" :label-width="formLabelWidth">
          <span>{{ giftForm.account }}</span>
        </el-form-item>
        <el-form-item label="充值金额：" prop="money" :label-width="formLabelWidth">
          <el-input v-model="giftForm.money" autocomplete="off" style="width: 200px" />
          <div class="red-text">最低充值金额1000元</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveGift('giftForm')">保存</el-button>
        <el-button @click="isShowAdd = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      isShowDialog: false,
      orderList: [
        {
          type: '今日做单',
          color: '#E49148',
          dataList: [
            { name: '注册人数', sum: '100' },
            { name: '入金总额', sum: '10.2w' },
            { name: '领取红包', sum: '10.2w' },
            { name: '做单总额', sum: '10.1w' },
            { name: '做单数', sum: '280' },
            { name: '用户盈利', sum: '280' },
            { name: '冻结资金', sum: '0.2w' },
            { name: '已出金总额', sum: '1.5w' }
          ]
        },
        {
          type: '本月做单',
          color: '#67C2D0',
          dataList: [
            { name: '注册人数', sum: '100' },
            { name: '入金总额', sum: '10.2w' },
            { name: '领取红包', sum: '10.2w' },
            { name: '做单总额', sum: '10.1w' },
            { name: '做单数', sum: '280' },
            { name: '用户盈利', sum: '280' },
            { name: '冻结资金', sum: '0.2w' },
            { name: '已出金总额', sum: '1.5w' }
          ]
        },
        {
          type: '全部做单',
          color: '#3775D1',
          dataList: [
            { name: '注册人数', sum: '100' },
            { name: '入金总额', sum: '10.2w' },
            { name: '领取红包', sum: '10.2w' },
            { name: '做单总额', sum: '10.1w' },
            { name: '做单数', sum: '280' },
            { name: '用户盈利', sum: '280' },
            { name: '冻结资金', sum: '0.2w' },
            { name: '已出金总额', sum: '1.5w' }
          ]
        }
      ],
      giftForm: {
        account: '15357777797',
        money: ''
      },
      rules: {
        money: [
          {
            required: true,
            message: '请输入充值金额',
            trigger: 'blur'
          },
          { type: 'number', message: '充值金额必须为数字值' }
        ]
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    saveGift(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShowAdd = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";
.title {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 23px;
  text-align: center;
}
.line {
  width: 3px;
  height: 18px;
  display: inline-block;
  border-radius: 1px;
  vertical-align: middle;
}
.sum-text {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 46px;
}
.name-text {
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
}
.panel-group .card-panel:nth-child(1) {
  margin: 0;
}
.panel-group {
  margin: 15px 0 20px;
  display: flex;

  .card-panel {
    flex: 1;
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    margin-left: 20px;
    padding: 15px 20px;
    text-align: center;

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .card-panel-description {
      font-weight: bold;

      .card-panel-text {
        line-height: 18px;
        color: #333333;
        font-size: 16px;
        margin-bottom: 12px;
        margin-top: 12px;
      }

      .card-panel-num {
        font-size: 24px;
        color: #3775d1;
        font-weight: 500;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>

