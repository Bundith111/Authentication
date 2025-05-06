<template>
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
        placeholder="Enter your password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-blue-600 hover:!bg-blue-700 transition-all"
      @click="handleLogin"
    >
      Login
    </n-button>
    <div class="flex justify-between text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="$emit('switch', 'forgot')">Forgot Password?</button>
      <button class="hover:underline" @click="$emit('switch', 'register')">Register</button>
    </div>
  </n-form>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
const email = ref('')
const password = ref('')
const message = useMessage()

const handleLogin = () => {
  const savedUser = JSON.parse(localStorage.getItem('user') || '{}')
  if (!email.value || !password.value) {
    message.error('Please fill in all fields')
  } else if (email.value === savedUser.email && password.value === savedUser.password) {
    message.success('Login Successful')
    $emit('switch', 'success')
  } else {
    message.error('Invalid credentials')
    $emit('switch', 'forgot')
  }
}
</script>
