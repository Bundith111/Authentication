<template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-4xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Reset Password </n-gradient-text>
    </h1>
    <br />
    <div class="flex items-center gap-2 w-full">
      <n-input v-model:value="email" placeholder="Enter your email" class="flex-1" />
      <n-button
        type="primary"
        size="medium"
        class="!bg-blue-600 hover:!bg-blue-700 transition-all whitespace-nowrap"
        :disabled="!email"
        @click="sendCode"
      >
        Send Code
      </n-button>
    </div>
    <br />
    <n-form-item label="Verification Code">
      <n-input
        v-model:value="codeInput"
        placeholder="6-digit code"
        maxlength="6"
        class="w-full text-center"
      />
    </n-form-item>
    <n-form-item label="New Password">
      <n-input
        v-model:value="newPassword"
        type="password"
        placeholder="New password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-green-600 hover:!bg-green-700"
      @click="resetPassword"
    >
      Reset Password
    </n-button>
    <div class="text-center text-sm text-blue-600 mt-4">
      <button class="hover:underline" @click="goBackToLogin">Back to Login</button>
    </div>
  </n-form>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const email = ref('')
const codeInput = ref('')
const newPassword = ref('')
const code = ref('')
const message = useMessage()
const router = useRouter()

const sendCode = () => {
  code.value = Math.floor(100000 + Math.random() * 900000).toString()
  message.info(`Code sent: ${code.value}`)
}

const resetPassword = () => {
  if (codeInput.value === code.value && newPassword.value) {
    message.success('Password reset successful')
    setTimeout(() => router.push('/auth/login'), 1000)
  } else {
    message.error('Invalid code or missing new password')
  }
}

const goBackToLogin = () => {
  router.push('/auth/login')
}
</script>
