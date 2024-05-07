import { createWebHistory, createRouter } from 'vue-router'

import Transaction from './pages/Transaction_router.vue'
import Home_page from './pages/Home_page.vue'
import Transaction_detail from './pages/Transaction_detail.vue'
import notFound from './pages/404page.vue'

const routes = [
  { path: '/', name: 'overview-route', component: Home_page },
  { path: '/transaction', name: 'transaction-route', component: Transaction },
  { path: '/transaction/:id', name: 'transaction-detail-route', component: Transaction_detail },
  { path: '/ts', redirect: '/transaction' },
  { path: '/:pathMatch(.*)*', component: notFound }
]

const myRouter = createRouter({
  history: createWebHistory(),
  routes
})

export default myRouter
