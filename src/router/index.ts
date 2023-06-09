import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingListView from "@/views/ShoppingListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      layout: 'main'
    }
  },
  {
    path: '/shoppingList',
    name: 'shoppingList',
    component: ShoppingListView,
    meta:{
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
