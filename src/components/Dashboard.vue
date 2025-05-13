<template>
  <div class="dashboard-container">
    <Navbar />
    <div class="dashboard">
      <p class="dashboard-title">Welcome to your Dashboard!</p>
      <div class="login-history-container">
        <h1 class="login-history-title">Login History</h1>
        <table class="login-history-table">
          <thead>
            <tr class="bg-gray-100 text-left text-red-700">
              <th class="px-4 py-2">No</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Login Time</th>
              <th class="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(entry, index) in loginHistory"
              :key="index"
              class="border-t hover:bg-gray-50"
            >
              <td class="px-4 py-2">{{ entry.no }}</td>
              <td class="px-4 py-2">{{ entry.email }}</td>
              <td class="px-4 py-2">{{ entry.time }}</td>
              <td class="px-4 py-2">
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

<script>
import { defineComponent } from 'vue';
import Navbar from './navbar.vue';

export default defineComponent({
  name: 'Dashboard',
  components: {
    Navbar
  }
});
</script>

<script setup>
const loginHistory = [
  {
    no: "1",
    email: "user1@example.com",
    time: "2025-05-12 09:14:22",
    status: "Success",
  },
  {
    no: "2",
    email: "user2@example.com",
    time: "2025-05-12 09:20:15",
    status: "Failed",
  },
  {
    no: "3",
    email: "user1@example.com",
    time: "2025-05-12 09:14:22",
    status: "Success",
  },
  {
    no: "4",
    email: "user1@example.com",
    time: "2025-05-12 09:14:22",
    status: "Success",
  },
];
</script>

<style scoped>
.dashboard-container {
  display: flex;
}

.dashboard {
  padding-top: 70px;
  background-color: #f0f2f5; 
  width: 100%;
  min-height: 100vh; 
}

.dashboard-title {
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
}

.login-history-container {
  margin: 0 auto;
  max-width: 80%;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-history-title {
  color: #555;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-history-table {
  width: 100%;
  border-collapse: collapse;
}

.login-history-table th,
.login-history-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.login-history-table th {
  background-color: #f9f9f9;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.login-history-table tbody tr:hover {
  background-color: #f5f5f5;
  transition: background-color 0.2s ease-in-out;
}

.login-history-table td {
  font-size: 1rem;
}
</style>