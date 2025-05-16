<!-- <template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-9xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Login </n-gradient-text>
    </h1>
    <n-form-item label="Email">
      <n-input v-model:value="email" placeholder="you@example.com" class="w-full" />
    </n-form-item>
    <n-form-item label="Password">
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="click"
        placeholder="Your password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700 transition-all"
      @click="handleLogin"
    >
      Login
    </n-button>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goToRegister">Don't have an account? Register</button>
      <br />
      <button class="hover:underline" @click="goToForgotPassword">Forgot Password?</button>
    </div>
  </n-form>
</template> -->

<template>
  <div class="min-h-screen flex items-center justify-center pt-96">
    <n-form
      class="rounded-2xl w-[400px] h-[460px] max-w-md mx-auto space-y-6 p-6 shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)]"
      label-placement="top"
    >
      <h1 class="text-9xl font-semibold text-center text-gray-800">
        <br />
        <n-gradient-text size="32" type="success"> Login </n-gradient-text>
      </h1>
      <br />

      <n-form-item label="Email">
        <n-input
          v-model:value="email"
          placeholder="you@example.com"
          class="w-full"
          @keydown.enter="handleLogin"
        />
      </n-form-item>

      <n-form-item label="Password">
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="click"
          placeholder="Your password"
          class="w-full"
          @keydown.enter="handleLogin"
        />
      </n-form-item>

      <n-button
        type="primary"
        block
        size="large"
        class="!bg-green-600 hover:!bg-green-700 transition-all"
        @click="handleLogin"
      >
        Login
      </n-button>

      <br />
      <div class="text-center text-sm text-blue-600 mt-4">
        <button class="hover:underline" type="button" @click="goToRegister">
          Don't have an account? Register
        </button>
        <br />
        <button class="hover:underline" type="button" @click="goToForgotPassword">
          Forgot Password?
        </button>
      </div>
    </n-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const message = useMessage()
const router = useRouter()

const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
  const status =
    storedUser.email === email.value && storedUser.password === password.value
      ? 'Success'
      : 'Failed'

  // Save login attempt
  const history = JSON.parse(localStorage.getItem('loginHistory') || '[]')
  history.push({
    email: email.value,
    time: new Date().toLocaleString(),
    status,
  })
  localStorage.setItem('loginHistory', JSON.stringify(history))

  if (status === 'Failed') {
    message.error('Invalid credentials. Please check your email and password.')
    return
  }

  message.success('Login successful')
  setTimeout(() => {
    router.push('/dashboard')
  }, 1000)
}

const goToRegister = () => {
  router.push('/auth/register')
}

const goToForgotPassword = () => {
  router.push('/auth/forgot-password')
}
</script>
