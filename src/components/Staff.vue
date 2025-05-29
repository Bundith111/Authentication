<template>
  <Navbar />
  <div class="staff-container w-full">
    <br /><br />
    <div class="staff">
      <p class="uppercase text-center text-green-600 text-4xl mb-[30px] h-[80px]">
        Welcome to STAFF page!
      </p>
    </div>
    <div class="w-full text-center font-bold h-[40px]">
      <n-button @click="goToStaffR">Create</n-button>
    </div>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import Navbar from './navbar.vue'

const message = useMessage()
const router = useRouter()

function goToStaffR() {
  message.info('Go to Create Staff')
  router.push('/auth/staffregister')
}
</script>
