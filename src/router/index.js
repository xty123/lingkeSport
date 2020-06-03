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
    meta: { title: '系统管理', icon: '' },
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
    meta: { title: '代理商管理', icon: '' },
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
      }
    ]
  },
  {
    path: '/financialManagement',
    name: 'financialManagement',
    redirect: '/financialManagement/membershipFlowing',
    component: Layout,
    meta: { title: '财务管理', icon: 'bxSetting' },
    children: [
      {
        path: '/financialManagement/membershipFlowing',
        name: 'membershipFlowing',
        meta: { title: '会员入金流水' },
        component: () => import('@/views/financialManagement/membershipFlowing/MembershipFlowing')
      },
      {
        path: '/financialManagement/guessFlowing',
        name: 'guessFlowing',
        meta: { title: '竞猜流水' },
        component: () => import('@/views/financialManagement/guessFlowing/GuessFlowing')
      },
      {
        path: '/financialManagement/beansFlowing',
        name: 'beansFlowing',
        meta: { title: '科豆流水' },
        component: () => import('@/views/financialManagement/beansFlowing/BeansFlowing')
      }
    ]
  },
  {
    path: '/memberManagement',
    name: 'memberManagement',
    redirect: '/memberManagement/memberList',
    component: Layout,
    meta: { title: '会员管理', icon: '' },
    children: [
      {
        path: '/memberManagement/memberList',
        name: 'memberList',
        meta: { title: '会员列表' },
        component: () => import('@/views/memberManagement/MemberList')
      },

    ]
  },
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
