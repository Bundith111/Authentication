<template>
  <div class="dashboard-container">
    <br /><br />
    <Navbar />
    <div class="dashboard">
      <p class="uppercase text-center text-green-600 text-4xl h-[80px]">
        Welcome to your Dashboard!
      </p>
      <div class="text-center justify-center">
        <br />
        <p class="text-center text-3xl bg-blue-300">Login History</p>
        <hr />
        <table class="w-full shadow-md rounded-b overflow-hidden table-fixed mt-4">
          <thead class="bg-gray-100 text-black font-bold">
            <tr>
              <th class="w-1/4 px-4 py-2 text-center">No</th>
              <th class="w-1/4 px-4 py-2 text-center">Email</th>
              <th class="w-1/4 px-4 py-2 text-center">Login Time</th>
              <th class="w-1/4 px-4 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(entry, index) in loginHistory"
              :key="index"
              class="bg-white hover:bg-gray-50 border-b"
            >
              <td class="px-4 py-2 text-center">{{ index + 1 }}</td>
              <td class="px-4 py-2 text-center">{{ entry.email }}</td>
              <td class="px-4 py-2 text-center">{{ entry.time }}</td>
              <td class="px-4 py-2 text-center">
                <span
                  :class="entry.status === 'Success' ? 'text-green-600' : 'text-red-600'"
                  class="font-semibold"
                >
                  {{ entry.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <button class="bg-red-500 text-white px-4 py-2 rounded mt-4" @click="clearHistory">
          Clear Login History
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './navbar.vue'

const loginHistory = ref([])

onMounted(() => {
  const storedHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]')
  loginHistory.value = storedHistory
})

const clearHistory = () => {
  localStorage.removeItem('loginHistory')
  loginHistory.value = []
}
</script>

<style scoped>
.dashboard-container {
  margin-left: 200px;
}
</style>
