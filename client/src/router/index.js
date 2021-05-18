import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '@/components/layout/HomeLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        component: HomeLayout,
        redirect: { name: 'Expense' }
      },
      {
        path: 'expense',
        name: 'Expense',
        component: () => import('@/views/expense/Index')
      }
    ]
  },
  {
    path: '/login',
    name: 'PageLogin',
    component: () => import('@/views/PageLogin')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
