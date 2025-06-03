<template>
  <div>
        <!-- Staff Registration-->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Staff Registration </h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStaffUserID" :options="userid" placeholder="UserID" class="mb-4 w-full"/>
          <n-input v-model:value="stafffristname" placeholder="First Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="stafflastname" placeholder="Last Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffage" placeholder="Age" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffGender" :options="gender" placeholder="Gender" class="mb-4 w-full"/>
          <n-input v-model:value="staffhiredate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/><br>
          <n-select v-model:value="selectedStaffPosition" :options="positions" placeholder="Position" class="mb-4 w-full"/>
          <n-input v-model:value="staffphonenumber" placeholder="Phone Number" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemail" placeholder="Email" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffaddress" placeholder="Address" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemploymentstatus" placeholder="Employment Status" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffStatus" :options="status" placeholder="Status" class="mb-4 w-full"/>
          <label for="profilePictureStaff" class="block mb-2 text-sm font-medium text-black-700">Profile Pictures:</label>
          <input type="file" id="profilePictureStaff" accept="image/*,.pdf,.doc,.docx" multiple @change="handleProfilePictureStaffUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
          <p class="text-sm font-medium text-black-700 mb-1">Image Previews:</p>
          <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewStaff" :key="idx" :src="src" alt="Staff Preview" class="max-w-xs" /></div>
          <n-button type="primary" @click="submitStaffRegisterReport">Create</n-button>
          </div><br>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedStaffUserID = ref(null)
const stafffristname = ref('')
const stafflastname = ref('')
const staffage = ref('')
const selectedStaffGender = ref(null)
const staffhiredate = ref('')
const selectedStaffPosition = ref(null)
const staffphonenumber = ref('')
const staffemail = ref('')
const staffaddress = ref('')
const staffemploymentstatus = ref('')
const selectedStaffStatus = ref(null)

const previewStaff = ref([])
function handleMultipleFilePreview(files, previewRef) {
  previewRef.value = []
  Array.from(files).forEach(file => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = () => {
        previewRef.value.push(reader.result)
      }
      reader.readAsDataURL(file)
    }
  })
}
const handleProfilePictureStaffUpload = (e) => handleMultipleFilePreview(e.target.files, previewStaff)
const positions = [
  { label: 'Manager', value: 'manager' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Administrator', value: 'administrator' }
]
const gender = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
]
const userid = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' }
]
const status = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' }
]
const submitStaffRegisterReport = () => {
  console.log('Staff Registration Report Submitted:', selectedStaffUserID.value, stafffristname.value, stafflastname.value, staffage.value, selectedStaffGender.value, staffhiredate.value, selectedStaffPosition.value, staffphonenumber.value, staffemail.value, staffaddress.value, staffemploymentstatus.value, selectedStaffStatus.value)
}

</script>
