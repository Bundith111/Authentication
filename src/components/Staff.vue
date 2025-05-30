<template>
  <Navbar />
  <div class="staff-container ">
    <br /><br />
      <div class="staff">
       <p class="uppercase text-center text-green-600 text-4xl mb-[30px] h-[60px]">
        Welcome to STAFF page!
       </p>
       </div>
      <div class="create w-full text-right font-bold h-[50px] ">
      <n-button type="primary" @click="goToStaffR" class="uppercase text-center text-2xl">+ Create Staff</n-button>
      </div>
     <div class="text-center justify-center">
      <p class="uppercase text-center text-3xl bg-blue-300 mb-[20px]">Staff List</p>
      <hr />
         <table class="w-full shadow-md rounded-b overflow-hidden table-fixed mt-4 border border-collapse">
            <thead class="bg-gray-100 text-black font-bold">
              <tr>
                 <th class="w-1/4 px-4 py-2 text-center border">No</th>
                 <th class="w-1/4 px-4 py-2 text-center border">Name</th>
                 <th class="w-1/4 px-4 py-2 text-center border">Email</th>
                 <th class="w-1/4 px-4 py-2 text-center border">Role</th>
                 <th class="w-1/4 px-4 py-2 text-center border">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(staff, index) in staffList" :key="index">
                 <td class="w-1/4 px-4 py-2 text-center border">{{ index + 1 }}</td>
                 <td class="w-1/4 px-4 py-2 text-center border">{{ staff.name }}</td>
                 <td class="w-1/4 px-4 py-2 text-center border">{{ staff.email }}</td>
                 <td class="w-1/4 px-4 py-2 text-center border">{{ staff.role }}</td>
                 <td class="px-4 py-2 text-center border flex justify-center gap-1">
                 <n-button type="info" @click="editStaff(staff)">Edit</n-button>
                 <n-button type="error" @click="deleteStaff(staff)">Delete</n-button>
                 </td>
              </tr>
            </tbody>
          </table>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import Navbar from './navbar.vue'

const message = useMessage()
const router = useRouter()

function goToStaffR() {
  message.info('Redirecting to Create Staff')
  router.push('/auth/staffregister')
}

const staffList = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Staff' }
]

function editStaff(staff) {
  message.info(`Edit staff: ${staff.name}`)
}

function deleteStaff(staff) {
  message.warning(`Delete staff: ${staff.name}`)
}
</script>

<style>
.staff-container {
  margin-left: 200px;
}
.create {
  padding-right: 30px;
  border-radius: 5px;
  text-align: right;
  font-weight: bold;
  cursor: pointer;

}

</style>