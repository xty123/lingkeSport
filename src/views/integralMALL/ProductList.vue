<template>
  <div class="container">
    <div v-if="!isShowAdd">
      <el-row type="flex" justify="space-between">
        <el-col :span="20">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="商品分类">
              <el-select v-model="queryInfo.classify" placeholder="请选择">
                <el-option label="全部" :value="-1" />
                <el-option label="电器" :value="1" />
                <el-option label="服饰" :value="2" />
                <el-option label="时尚" :value="3" />
              </el-select>
            </el-form-item>
            <el-form-item label="商品名称">
              <el-input placeholder />
            </el-form-item>
            <el-form-item label="商品编号">
              <el-input placeholder />
            </el-form-item>
            <el-form-item>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="4" style="text-align:right">
          <el-button type="primary" icon="el-icon-plus" @click="addProduct">新增</el-button>
        </el-col>
      </el-row>
      <el-table v-loading="listLoading" :data="tableData" border style="width: 100%">
        <el-table-column align="center" type="index" width="50px" />
        <el-table-column prop="agent" label="商品编号" align="center" />
        <el-table-column prop="order" label="商品分类" align="center" />
        <el-table-column prop="product" label="商品名称" align="center" />
        <el-table-column prop="vip" label="市场价" align="center" />
        <el-table-column prop="phone" label="豆苗分" align="center" />
        <el-table-column prop="realName" label="销售数" align="center" />
        <el-table-column prop="agentTel" label="库存数" align="center" />
        <el-table-column prop="orderTime" label="是否推荐" align="center" />
        <el-table-column prop="status" label="状态" align="center" width="200px" />
        <el-table-column label="操作" align="center" width="160px">
          <template slot-scope="{row, $index}">
            <span class="pointer-span">
              <span class="blue-text" @click="modifyProduct(row, $index)">修改</span>
            </span>
            <span class="pointer-span" style="margin-left: 20px">
              <span class="blue-text">下架</span>
            </span>
            <span class="pointer-span" style="margin-left: 20px">
              <span class="blue-text">推荐</span>
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
    </div>

    <!-- 添加商品 -->
    <add-product v-if="isShowAdd" @returnList="returnList" />
  </div>
</template>

<script>
export default {
  components: {
    addProduct: () => import('@/views/integralMALL/components/AddProduct')
  },
  data() {
    return {
      isShowAdd: false,
      queryInfo: {},
      listLoading: false,
      tableData: [
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        },
        {
          order: '202005291911024944869',
          product: '小米旅行箱 20寸 灰',
          vip: '用户018205',
          phone: '19995919377',
          realName: '小凌',
          agent: '用户018580',
          agentTel: '19973854526',
          orderTime: '2020-05-29 19:11:02',
          recipients: '蒲先生 13647452447 上海市上海市浦东新区民生路',
          amount: '8',
          paymentBean: '271.69',
          status: '上架'
        }
      ]
    }
  },
  methods: {
    modifyProduct(row, index) {
      this.isShowAdd = true
    },
    returnList() {
      this.isShowAdd = false
    },
    addProduct() {
      this.isShowAdd = true
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

