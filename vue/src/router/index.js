import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Lancamento     from '../views/Lancamento.vue'
import CategoriaList  from '../views/CategoriaList.vue'
import CategoriaForm  from '../views/CategoriaForm.vue'
import TodoList       from '../views/TodoList.vue'
import Formulario     from '../components/Formulario.vue'

const routes = [
  {
    path: '/', redirect:'/todolist'
  },
  {
    path: '/lancamento',
    name: 'lancamento',
    component: Lancamento,
    children: [
      {
          path: ':id/edit',
          name: 'lancamento.edit',
          component: Formulario
      },

      {
          path: 'create',
          name: 'lancamento.create',
          component: Formulario
      }
    ]
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaList,
  },
  {
    path: '/categoria/:id/edit',
    name: 'categoria.edit',
    component: CategoriaForm
  },
  {
    path: '/categoria/create',
    name: 'categoria.create',
    component: CategoriaForm
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoList
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
