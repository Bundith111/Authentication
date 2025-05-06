<template>
  <n-form
    class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto space-y-6"
    label-placement="top"
  >
    <h1 class="text-9xl font-semibold text-center text-gray-800">
      <n-gradient-text size="32" type="success"> Login </n-gradient-text>
    </h1>
    <n-form-item label="New Password">
      <n-input
        v-model:value="newPassword"
        type="password"
        show-password-on="click"
        placeholder="Enter your new password"
        class="w-full"
      />
    </n-form-item>
    <n-button
      type="primary"
      block
      size="large"
      class="!bg-indigo-600 hover:!bg-indigo-700 transition-all"
      @click="saveNewPassword"
    >
      Save New Password
    </n-button>
  </n-form>
</template>

<script setup>
import { ref } from 'vue'

const newPassword = ref('')

const saveNewPassword = () => {
  localStorage.setItem('password', newPassword.value)
  alert('Password updated successfully!')
  $emit('switch', 'login')
}
</script>
