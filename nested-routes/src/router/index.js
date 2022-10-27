import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DressView from '../views/DressView.vue'
import DrinkView from '../views/DrinkView.vue'
import FoodView from '../views/FoodView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Product',
    name: 'Product',
    component: ProductView,
    children:[
      
        {
          path: '/Dress',
          name: 'Dress',
          component: DressView
        },
        {
          path: '/Drink',
          name: 'Drink',
          component: DrinkView
        },
        {
          path: '/Food',
          name: 'Food',
          component: FoodView
        },
    

    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
