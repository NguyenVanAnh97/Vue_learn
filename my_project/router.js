import { createWebHistory, createRouter } from 'vue-router'

import Transaction from './pages/Transaction.vue'
import Home_page from './pages/Home_page.vue'
import Transaction_detail from './pages/Transaction_detail.vue'
import notFound from './pages/404page.vue'

const routes = [
  { path: '/', component: Home_page },
  { path: '/transaction', component: Transaction },
  { path: '/transaction/:id', component: Transaction_detail },
  { path: '/ts', redirect: '/transaction' },
  { path: '/:pathMatch(.*)*', component: notFound }
]

const myRouter = createRouter({
  history: createWebHistory(),
  routes
})

export default myRouter
