import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // ------------------------------今日概览----------------------------------
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '今日概览', icon: 'dashboard', affix: true }
      }
    ]
  },
  // ------------------------------系统管理----------------------------------
  {
    path: '/systemManagement',
    name: 'systemManagement',
    redirect: '/systemManagement/giftList',
    component: Layout,
    meta: { title: '系统管理', icon: 'guanli' },
    children: [
      {
        path: '/systemManagement/giftList',
        name: 'giftList',
        meta: { title: '礼品列表' },
        component: () => import('@/views/systemManagement/GiftList')
      },
      {
        path: '/systemManagement/marginCollectionInstrument',
        name: 'marginCollectionInstrument',
        meta: { title: '保证金收款工具' },
        component: () => import('@/views/systemManagement/MarginCollectionInstrument')
      },
      {
        path: '/systemManagement/simulationNumber',
        name: 'simulationNumber',
        meta: { title: '批量生产模拟号' },
        component: () => import('@/views/systemManagement/SimulationNumber')
      },
      {
        path: '/systemManagement/appManagement',
        name: 'appManagement',
        meta: { title: 'app版本管理' },
        component: () => import('@/views/systemManagement/AppManagement')
      }
    ]
  },
  // ------------------------------代理商管理----------------------------------
  {
    path: '/agentManagement',
    name: 'agentManagement',
    redirect: '/agentManagement/allAgent',
    component: Layout,
    meta: { title: '代理商管理', icon: 'dailishang' },
    children: [
      {
        path: '/agentManagement/allAgent',
        name: 'allAgent',
        meta: { title: '全部代理商' },
        component: () => import('@/views/agentManagement/AllAgent')
      }, {
        path: '/agentManagement/memberList',
        name: 'memberList',
        meta: { title: '会员列表' },
        component: () => import('@/views/agentManagement/MemberList')
      },
      {
        path: '/agentManagement/agencyStatistics',
        name: 'agencyStatistics',
        meta: { title: '代理统计（含下级数据）' },
        component: () => import('@/views/agentManagement/AgencyStatistics')
      },
      {
        path: '/agentManagement/marginFlow',
        name: 'marginFlow',
        meta: { title: '保证金流水' },
        component: () => import('@/views/agentManagement/MarginFlow')
      },
      {
        path: '/agentManagement/goldFlow',
        name: 'goldFlow',
        meta: { title: '出入金流水' },
        component: () => import('@/views/agentManagement/GoldFlow')
      },
      {
        path: '/agentManagement/membershipFlowing',
        name: 'membershipFlowing',
        meta: { title: '会员入金流水' },
        component: () => import('@/views/agentManagement/MembershipFlowing')
      },
      {
        path: '/agentManagement/guessFlowing',
        name: 'guessFlowing',
        meta: { title: '竞猜流水' },
        component: () => import('@/views/agentManagement/GuessFlowing')
      },
      {
        path: '/agentManagement/beansFlowing',
        name: 'beansFlowing',
        meta: { title: '科豆流水' },
        component: () => import('@/views/agentManagement/BeansFlowing')
      }
    ]
  },
  // ------------------------------财务管理----------------------------------
  {
    path: '/financialManagement',
    name: 'financialManagement',
    redirect: '/financialManagement/membershipFlowing',
    component: Layout,
    meta: { title: '财务管理', icon: 'caiwu' },
    children: [
      {
        path: '/financialManagement/membershipFlowing',
        name: 'membershipFlowing',
        meta: { title: '会员入金流水' },
        component: () => import('@/views/financialManagement/MemberShipFlowing')
      },
      {
        path: '/financialManagement/guessFlowing',
        name: 'guessFlowing',
        meta: { title: '竞猜流水' },
        component: () => import('@/views/financialManagement/GuessFlowing')
      },
      {
        path: '/financialManagement/beansFlowing',
        name: 'beansFlowing',
        meta: { title: '科豆流水' },
        component: () => import('@/views/financialManagement/BeansFlowing')
      },
      {
        path: '/financialManagement/goldRepurchaseOrder',
        name: 'goldRepurchaseOrder',
        meta: { title: '黄金回购订单' },
        component: () => import('@/views/financialManagement/GoldRepurchaseOrder')
      },
      {
        path: '/financialManagement/offlinePayment',
        name: 'offlinePayment',
        meta: { title: '线下充值' },
        component: () => import('@/views/financialManagement/OfflinePayment')
      },
      {
        path: '/financialManagement/manualDeduction',
        name: 'manualDeduction',
        meta: { title: '手动扣减' },
        component: () => import('@/views/financialManagement/ManualDeduction')
      },
      {
        path: '/financialManagement/agentRechargeRecord',
        name: 'agentRechargeRecord',
        meta: { title: '代理商充值记录' },
        component: () => import('@/views/financialManagement/AgentRechargeRecord')
      },
      {
        path: '/financialManagement/simulateAccountRecharge',
        name: 'simulateAccountRecharge',
        meta: { title: '模拟账号充值' },
        component: () => import('@/views/financialManagement/SimulateAccountRecharge')
      }
    ]
  },
  // ------------------------------会员管理----------------------------------
  {
    path: '/memberManagement',
    name: 'memberManagement',
    redirect: '/memberManagement/memberList',
    component: Layout,
    meta: { title: '会员管理', icon: 'huiyuan' },
    children: [
      {
        path: '/memberManagement/memberList',
        name: 'memberList',
        meta: { title: '会员列表' },
        component: () => import('@/views/memberManagement/MemberList')
      }
    ]
  },
  // ------------------------------积分商城管理----------------------------------
  {
    path: '/integralMALL',
    name: 'integralMALL',
    redirect: '/integralMALL/orderList',
    component: Layout,
    meta: { title: '积分商城管理', icon: 'shangcheng' },
    children: [
      {
        path: '/integralMALL/orderList',
        name: 'orderList',
        meta: { title: '订单列表' },
        component: () => import('@/views/integralMALL/OrderList')
      },
      {
        path: '/integralMALL/productList',
        name: 'productList',
        meta: { title: '商品列表' },
        component: () => import('@/views/integralMALL/ProductList')
      }
    ]
  },
  // ------------------------------banner管理----------------------------------
  {
    path: '/bannerManagement',
    name: 'bannerManagement',
    redirect: '/bannerManagement/bannerList',
    component: Layout,
    meta: { title: 'banner管理', icon: 'tupian' },
    children: [
      {
        path: '/bannerManagement/bannerList',
        name: 'bannerList',
        meta: { title: 'banner列表' },
        component: () => import('@/views/bannerManagement/BannerList')
      }
    ]
  },
  // ------------------------------视频管理----------------------------------
  {
    path: '/videoManagement',
    name: 'videoManagement',
    // redirect: '/videoManagement/videoList',
    component: Layout,
    meta: { title: '视频管理', icon: 'shipinbofangyingpian' },
    children: [
      {
        path: '/videoManagement/videoList',
        name: 'videoList',
        meta: { title: '视频列表' },
        component: () => import('@/views/videoManagement/VideoList')
      }
    ]
  },
  // ------------------------------内容管理----------------------------------
  {
    path: '/contentManagement',
    name: 'contentManagement',
    redirect: '/contentManagement/articleInformation',
    component: Layout,
    meta: { title: '内容', icon: 'guanli-2' },
    children: [
      {
        path: '/contentManagement/articleInformation',
        name: 'articleInformation',
        meta: { title: '文章资讯' },
        component: () => import('@/views/contentManagement/ArticleInformation')
      },
      {
        path: '/contentManagement/proclamationList',
        name: 'proclamationList',
        meta: { title: '帮助/公告列表' },
        component: () => import('@/views/contentManagement/ProclamationList')
      }, {
        path: '/contentManagement/videoInformation',
        name: 'videoInformation',
        meta: { title: '视频资讯' },
        component: () => import('@/views/contentManagement/VideoInformation')
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
