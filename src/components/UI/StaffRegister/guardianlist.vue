<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'

const router = useRouter()
const message = useMessage()

const GuardianList = ref([
  { name: 'John Doe', email: 'john@example.com', role: 'Father' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Mother' },
])

function goToGuardian() {
  message.info('Redirecting to Create Guardian')
  router.push('guardian') // Make sure this route exists in your router config
}

function editGuardian(guardian) {
  message.info(`Edit guardian: ${guardian.name}`)
}

function deleteGuardian(guardian) {
  message.warning(`Delete guardian: ${guardian.name}`)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-10">
      <h1 class="text-5xl font-extrabold mb-10 text-green-700 text-center drop-shadow-lg">
        Guardian List
      </h1>

      <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <p class="uppercase text-3xl font-semibold text-blue-800 tracking-wide">
          Guardian List
        </p>
        <button
          @click="goToGuardian"
          class="uppercase bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-extrabold text-xl px-8 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
        >
          + Create Guardian
        </button>
      </div>

      <div class="overflow-x-auto rounded-lg shadow-md">
        <table class="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead class="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg font-semibold">
            <tr>
              <th class="px-6 py-4 text-center border-r border-blue-500">No</th>
              <th class="px-6 py-4 text-center border-r border-blue-500">Name</th>
              <th class="px-6 py-4 text-center border-r border-blue-500">Email</th>
              <th class="px-6 py-4 text-center border-r border-blue-500">Relationship</th>
              <th class="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(staff, index) in GuardianList"
              :key="index"
              class="hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <td class="px-6 py-5 text-center border-b border-gray-200 font-medium text-gray-700">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-5 text-center border-b border-gray-200 font-semibold text-gray-900">
                {{ staff.name }}
              </td>
              <td class="px-6 py-5 text-center border-b border-gray-200 text-gray-700">
                {{ staff.email }}
              </td>
              <td class="px-6 py-5 text-center border-b border-gray-200 text-gray-700">
                {{ staff.role }}
              </td>
              <td class="px-6 py-5 text-center border-b border-gray-200 space-x-4">
                <button
                  @click="editGuardian(staff)"
                  class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md transition"
                >
                  Edit
                </button>
                <button
                  @click="deleteGuardian(staff)"
                  class="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-md transition"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="GuardianList.length === 0">
              <td colspan="5" class="text-center py-12 text-gray-400 italic">
                No guardians found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<!-- <style>
.table-fixed {
  table-layout: fixed;
  width: 100%;
}
.guardian-list {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
.guardian-container {
  background-color: #f9fafb; /* Tailwind gray-100 */
  border-radius: 1rem; /* Tailwind rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tailwind shadow-md */
}

</style> -->