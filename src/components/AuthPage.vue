<template>
  <div class="auth-container">
    <router-view />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'AuthPage',
})
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
