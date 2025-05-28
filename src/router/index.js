import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import ForgotPassword from '../components/auth/ForgotPassword.vue'
import Dashboard from '../components/Dashboard.vue'
import EnrollPage from '../components/EnrollPage.vue'
import Staff from '@/components/Staff.vue'
import GRegisterForm from '@/components/auth/GRegisterForm.vue'
import StaffR from '@/components/auth/StaffR.vue'
import Teacher from '@/components/Teacher.vue'
import verify from '@/components/auth/verify.vue'
import guardian from '@/components/UI/guardian.vue'
const routes = [
  {
    path: '/auth/login/gregisterForm',
    name: 'gregisterForm',
    component: GRegisterForm,
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: EnrollPage,
  },
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/auth/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/staff',
    name: 'staff',
    component: Staff,
  },
    {
    path: '/auth/staffregister',
    name: 'StaffRegister',
    component: StaffR
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher,
  },
  {
    path: '/auth/verify',
    name: 'verify',
    component: verify,
  },
  {
    path: '/guardian',
    name: 'guardian',
    component: guardian,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
