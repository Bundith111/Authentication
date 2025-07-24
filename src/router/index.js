import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import ForgotPassword from '../components/auth/ForgotPassword.vue'
import Dashboard from '../components/Dashboard.vue'
import Home from '../components/FrontPage/Home.vue'
import Staff from '@/components/Staff.vue'
import GRegisterForm from '@/components/auth/GRegisterForm.vue'
import StaffR from '@/components/auth/StaffR.vue'
import Teacher from '@/components/Teacher.vue'
import verify from '@/components/auth/verify.vue'
import guardian from '@/components/UI/guardian.vue'
import Creating from '@/components/UI/StaffRegister/Creating.vue'
import Bus from '@/components/UI/StaffRegister/Bus.vue'
import StudentRegister from '@/components/UI/StaffRegister/StudentRegister.vue'
import Invoice from '@/components/UI/StaffRegister/Invoice.vue'
import Authorized from '@/components/UI/StaffRegister/Authorized.vue'
import TeacherRegister from '@/components/UI/StaffRegister/TeacherRegister.vue'
import StaffRegister from '@/components/UI/StaffRegister/StaffRegister.vue'
import Role from '@/components/UI/StaffRegister/Role.vue'

import guardianlist from '@/components/UI/StaffRegister/guardianlist.vue'
import AboutUs from '@/components/FrontPage/AboutUs.vue'

const routes = [
  {
    path: '/guardianlist',
    name: 'GuardianList',
    component: guardianlist,
  },
  {
    path: '/auth/login/gregisterForm',
    name: 'gregisterForm',
    component: GRegisterForm,
  },
  {
    path: '/frontpage/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/frontpage/aboutus',
    name: 'aboutus',
    component: AboutUs,
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
    component: StaffR,
  },
  {
    path: '/auth/staffregister/creating',
    name: 'StaffRegisterCreating',
    component: Creating,
  },
  {
    path: '/auth/staffregister/bus',
    name: 'StaffRegisterBus',
    component: Bus,
  },
  {
    path: '/auth/staffregister/student',
    name: 'StaffRegisterStudent',
    component: StudentRegister,
  },
  {
    path: '/auth/staffregister/invoice',
    name: 'StaffRegisterInvoice',
    component: Invoice,
  },
  {
    path: '/auth/staffregister/authorized',
    name: 'StaffRegisterAuthorized',
    component: Authorized,
  },
  {
    path: '/auth/staffregister/teacher',
    name: 'StaffRegisterTeacher',
    component: TeacherRegister,
  },
  {
    path: '/auth/staffregister/staff',
    name: 'StaffRegisterStaff',
    component: StaffRegister,
  },
  {
    path: '/auth/staffregister/role',
    name: 'StaffRegisterRole',
    component: Role,
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
