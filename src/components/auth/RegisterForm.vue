<!-- <template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-9xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Create Account </n-gradient-text>
    </h1>
    <n-form-item label="Email">
      <n-input v-model:value="email" placeholder="you@example.com" class="w-full" />
    </n-form-item>
    <n-form-item label="Password">
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="click"
        placeholder="Create a password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700 transition-all"
      @click="handleRegister"
    >
      Register
    </n-button>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goToLogin">Already have an account? Login</button>
    </div>
  </n-form>
</template> -->

<template>
  <div class="min-h-screen  flex items-center justify-center pt-96 "><br>
  <n-form
    class=" p-8 rounded-2xl w-[400px] h-[460px] max-w-md mx-auto space-y-2 shadow-[10px_10px_30px_rgba(0.2,0.2,0.2,0.2)] "
    label-placement="top" >
    <h1 class="text-9xl font-semibold text-center text-gray-800 "><br>
      <n-gradient-text size="32" type="success"> Create Account </n-gradient-text>
    </h1><br><br>
    <n-form-item label="Email">
      <n-input v-model:value="email" placeholder="you@example.com" class="w-full" />
    </n-form-item>
    <n-form-item label="Password">
      <n-input
        v-model:value="password"
        type="password"
        show-password-on="click"
        placeholder="Create a password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700 transition-all"
      @click="handleRegister"
    >
      Register
    </n-button><br>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goToLogin">Already have an account? Login</button>
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

const handleRegister = () => {
  if (!email.value || !password.value) {
    message.error('Please fill in all fields')
  } else {
    const newUser = { email: email.value, password: password.value }
    localStorage.setItem('user', JSON.stringify(newUser)) // Save the user to localStorage
    message.success('Registration successful')
    setTimeout(() => {
      router.push('/auth/login') // Redirect to login page after registration
    }, 1000)
  }
}

// Navigate to Login page
const goToLogin = () => {
  router.push('/auth/login')
}
</script>
