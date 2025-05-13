
<template>
  <div class="dashboard-container">
  <Navbar />
  <div class="dashboard">
    <p class="uppercase text-center text-green-600 m-8 text-4xl">Welcome to your Dashboard!</p>
    <div class="text-center justify-center"><br>
      <p class="text-center text-3xl bg-blue-300">Login History</p><hr>
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
    </div>
  </div>

  </div>
</template>

<script setup>
import Navbar from './navbar.vue'; 

import { useRouter } from 'vue-router'

const router = useRouter()

const loginHistory = [
  {
    email: "user1@example.com",
    time: "2025-05-12 09:14:22",
    status: "Success",
  },
  {
    email: "user2@example.com",
    time: "2025-05-12 10:20:15",
    status: "Failed",
  },
  {
    email: "user3@example.com",
    time: "2025-05-12 11:20:15",
    status: "Success",
  },
  {
    email: "user4@example.com",
    time: "2025-05-12 12:20:15",
    status: "Failed",
  },
];


</script>

<style scoped>
.dashboard-container{
  padding-bottom: 300px;
  margin-left: 200px;
}
</style>
