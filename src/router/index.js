import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Dashboard from '@/components/admin/dashboard/Dashboard.vue'
import Order from '@/components/admin/order/Order.vue'
import Employee from '@/components/admin/employee/Employee.vue'
import Menu from '@/components/admin/menu/Menu.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/admin/',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: '',
          name: 'dashbroad',
          component: Dashboard,
        },
        {
          path: 'order/',
          name: 'order',
          component: Order,
        },
        {
          path: 'employee/',
          name: 'employee',
          component: Employee,
        },
        {
          path: 'menu/',
          name: 'menu',
          component: Menu,
        },
      ],
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
  ],
})

export default router
