import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import OrderView from '@/views/OrderView.vue'
import LayoutView from '@/views/LayoutView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import DashboardOrder from '@/components/DashboardOrder.vue'
import DashboardProfile from '@/components/DashboardProfile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: 'menu',
          name: 'menu',
          component: MenuView,
        },
        {
          path: 'order',
          name: 'order',
          component: OrderView,
        },
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/profile',
      component: DashboardView,
      children: [
        {
          path: 'order',
          name: 'my-order',
          component: DashboardOrder,
        },
        {
          path: '',
          name: 'profile',
          component: DashboardProfile,
        },
      ],
    },
  ],
})

export default router
