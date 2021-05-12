import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lancamento from '../components/Lancamento.vue'
import Categoria from '../components/Categoria.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lancamento',
    name: 'Lancamento',
    component: Lancamento
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: Categoria
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
