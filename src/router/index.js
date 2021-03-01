import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Public.vue'),
    children: [
      {name: 'home', path: '', component: () => import('@/views/Home.vue')},
      {name: 'days', path: 'days', component: () => import('@/views/Days.vue')},
      {name: 'months', path: 'months', component: () => import('@/views/Months.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
