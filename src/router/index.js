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
  }
]

export const asyncRoutes = [
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
      },
      {
        path: '/agentManagement/nationalPromotion',
        name: 'nationalPromotion',
        meta: { title: '全民推广' },
        component: () => import('@/views/agentManagement/NationalPromotion')
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
        path: '/financialManagement/auditCommissionWithdraw',
        name: 'auditCommissionWithdraw',
        meta: { title: '佣金提现审核' },
        component: () => import('@/views/financialManagement/AuditCommissionWithdraw')
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
        path: '/financialManagement/memberCommissionDetails',
        name: 'memberCommissionDetails',
        meta: { title: '会员佣金明细' },
        component: () => import('@/views/financialManagement/MemberCommissionDetails')
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
        name: 'members',
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
    redirect: '/videoManagement/videoList',
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
    redirect: '/contentManagement/advisoryClassify',
    component: Layout,
    meta: { title: '内容', icon: 'guanli-2' },
    children: [
      {
        path: '/contentManagement/advisoryClassify',
        name: 'advisoryClassify',
        meta: { title: '资讯分类' },
        component: () => import('@/views/contentManagement/AdvisoryClassify')
      },
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
  },
  // ------------------------------直播管理----------------------------------
  {
    path: '/liveManagement',
    name: 'liveManagement',
    redirect: '/liveManagement/officialLive',
    component: Layout,
    meta: { title: '直播管理', icon: 'zhibo' },
    children: [
      {
        path: '/liveManagement/officialLive',
        name: 'officialLive',
        meta: { title: '官方直播列表' },
        component: () => import('@/views/liveManagement/OfficialLive')
      },
      {
        path: '/liveManagement/thirdPartyLive',
        name: 'thirdPartyLive',
        meta: { title: '三方直播列表' },
        component: () => import('@/views/liveManagement/ThirdPartyLive')
      }
    ]
  },
  // ------------------------------投注管理----------------------------------
  {
    path: '/betManagement',
    name: 'betManagement',
    redirect: '/betManagement/betList',
    component: Layout,
    meta: { title: '投注管理', icon: 'zhubo' },
    children: [
      {
        path: '/betManagement/betList',
        name: 'betList',
        meta: { title: '投注列表' },
        component: () => import('@/views/betManagement/BetList')
      }
    ]
  },
  // ------------------------------主播管理----------------------------------
  {
    path: '/anchorManagement',
    name: 'anchorManagement',
    redirect: '/anchorManagement/anchorList',
    component: Layout,
    meta: { title: '主播管理', icon: 'zhubo' },
    children: [
      {
        path: '/anchorManagement/anchorList',
        name: 'anchorList',
        meta: { title: '主播列表' },
        component: () => import('@/views/anchorManagement/AnchorList')
      }
    ]
  },
  // ------------------------------专家方案----------------------------------
  {
    path: '/expertsPlan',
    name: 'expertsPlan',
    redirect: '/expertsPlan/expertsInfo',
    component: Layout,
    meta: { title: '专家方案', icon: 'zhuanjia' },
    children: [
      {
        path: '/expertsPlan/expertsInfo',
        name: 'expertsInfo',
        meta: { title: '专家信息' },
        component: () => import('@/views/expertsPlan/ExpertsInfo')
      },
      {
        path: '/expertsPlan/expertsList',
        name: 'expertsList',
        meta: { title: '专家列表' },
        component: () => import('@/views/expertsPlan/ExpertsList')
      },
      {
        path: '/expertsPlan/planList',
        name: 'planList',
        meta: { title: '方案列表' },
        component: () => import('@/views/expertsPlan/PlanList')
      }
    ]
  },
  // ------------------------------奖励金管理----------------------------------
  {
    path: '/bountyManagement',
    name: 'bountyManagement',
    redirect: '/bountyManagement/bountyList',
    component: Layout,
    meta: { title: '奖励金管理', icon: 'zhuanjia' },
    children: [
      {
        path: '/bountyManagement/bountyList',
        name: 'bountyList',
        meta: { title: '奖励金列表' },
        component: () => import('@/views/bountyManagement/BountyList')
      }
    ]
  },
  // ------------------------------代理查看权限管理-----------------------------
  {
    path: '/agentPermissionManagement',
    name: 'agentPermissionManagement',
    redirect: '/agentPermissionManagement/agentList',
    component: Layout,
    meta: { title: '代理查看权限管理', icon: 'zhuanjia' },
    children: [
      {
        path: '/agentPermissionManagement/agentList',
        name: 'agentList',
        meta: { title: '代理列表' },
        component: () => import('@/views/agentPermissionManagement/AgentList')
      }
    ]
  },
  // ------------------------------投注金额管理----------------------------------
  {
    path: '/betAmount',
    name: 'betAmount',
    redirect: '/betAmount/betList',
    component: Layout,
    meta: { title: '投注金额管理', icon: 'zhuanjia' },
    children: [
      {
        path: '/betAmount/betList',
        name: 'betList',
        meta: { title: '投注金额管理列表' },
        component: () => import('@/views/betAmountManagement/BetList')
      }
    ]
  },
  // ------------------------------排行榜管理----------------------------------
  {
    path: '/topManagement',
    name: 'topManagement',
    redirect: '/topManagement/rankingList',
    component: Layout,
    meta: { title: '排行榜管理', icon: 'zhuanjia' },
    children: [
      {
        path: '/topManagement/rankingList',
        name: 'rankingList',
        meta: { title: '排行榜列表' },
        component: () => import('@/views/topManagement/RankingList')
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
