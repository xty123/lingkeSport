<template>
  <div class="container">
    <div style="width:80%;margin: 0 auto">
      <p class="title">订单概况（含下级代理做单数据）</p>
      <div v-for="(order,key) in orderList" :key="key" style="margin-top: 40px">
        <div style="margin-bottom: 20px">
          <span class="line" :style="{background: order.color}" />
          <span style="vertical-align: middle;font-weight:500;">{{ order.type }}</span>
        </div>

        <el-card shadow="hover">
          <el-row :gutter="24">
            <el-col
              v-for="(item, index) in order.dataList"
              :key="index"
              :span="4"
              style="text-align:center"
            >
              <div class="sum-text" :style="{color: order.color}">{{ item.sum }}</div>
              <div class="name-text">{{ item.name }}</div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          type: '今日做单',
          color: '#E49148',
          dataList: [
            { name: '注册人数', sum: '100' },
            { name: '入金总额', sum: '10.2w' },
            { name: '出金总额', sum: '1.5w' },
            { name: '做单数', sum: '280' },
            { name: '做单总额', sum: '10.1w' },
            { name: '冻结资金', sum: '0.2w' }
          ]
        },
        {
          type: '本月做单',
          color: '#67C2D0',
          dataList: [
            { name: '注册人数', sum: '1500' },
            { name: '入金总额', sum: '22.5w' },
            { name: '出金总额', sum: '40.0w' },
            { name: '做单数', sum: '4300' },
            { name: '做单总额', sum: '30.3w' },
            { name: '冻结资金', sum: '10.0w' }
          ]
        },
        {
          type: '全部做单',
          color: '#3775D1',
          dataList: [
            { name: '注册人数', sum: '10.3w' },
            { name: '入金总额', sum: '200.3w' },
            { name: '出金总额', sum: '60.3w' },
            { name: '做单数', sum: '50.2w' },
            { name: '做单总额', sum: '50.5w' },
            { name: '冻结资金', sum: '30.5w' }
          ]
        }
      ]
    }
  },
  methods: {}
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
</style>

