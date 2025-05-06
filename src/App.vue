<template>
  <n-message-provider>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="w-1/2 mx-auto">
        <component :is="currentComponent" @switch="handleSwitch" />
      </div>
    </div>
  </n-message-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import LoginForm from './components/auth/LoginForm.vue'
import RegisterForm from './components/auth/RegisterForm.vue'
import ForgotPassword from './components/auth/ForgotPassword.vue'

const currentView = ref('login')

const componentsMap = {
  login: LoginForm,
  register: RegisterForm,
  forgot: ForgotPassword,
}

const currentComponent = computed(() => componentsMap[currentView.value])

const handleSwitch = (view) => {
  currentView.value = view
}
</script>
