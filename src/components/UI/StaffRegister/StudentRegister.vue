<template>
  <div>
     <!-- student registration -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Student Registration</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namestd" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedGenderstd" :options="genderstd" placeholder="Select Gender" class="mb-4 w-full"/>
          <n-input v-model:value="agestd" placeholder="Age" class="mb-4 w-full text-xl" /><br>       
          <n-input v-model:value="dobstd" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/>
          <n-select v-model:value="selectedGuardianstd" :options="guardianstd" placeholder="Select Guardian" class="mb-4 w-full"/>
          <n-input v-model:value="admissiondatestd" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/>
          <n-input v-model:value="specialnotestd" placeholder="Special Note" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedClassstd" :options="classstd" placeholder="Select Class" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPickupMethodstd" :options="pickupmethods" placeholder="Pickup Method" class="mb-4 w-full"/>
          <n-select v-model:value="selectedStatusstd" :options="statusstd" placeholder="Status" class="mb-4 w-full"/><br>
          <label for="profileStudent" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
          <input type="file" id="profileStudent" accept="image/*,.pdf,.doc,.docx"  multiple @change="handleStudentUpload"  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewStudent" :key="idx" :src="src" alt="Student Preview" class="max-w-xs" /></div>
          <n-button type="primary" @click="submitStudentRegistrationReport">Create</n-button>
          </div><br>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const namestd = ref('')
const selectedGenderstd = ref(null)
const agestd = ref('')
const dobstd = ref('')
const selectedGuardianstd = ref(null)
const admissiondatestd = ref('')
const specialnotestd = ref('')
const selectedClassstd = ref(null)
const selectedPickupMethodstd = ref(null)
const selectedStatusstd = ref(null)



const previewStudent = ref([])
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
const handleStudentUpload = (e) => handleMultipleFilePreview(e.target.files, previewStudent)

const userid = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' },
]
const genderstd = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
]
const guardianstd = [
  { label: 'Guardian A', value: 'guardianA' },
  { label: 'Guardian B', value: 'guardianB' },
  { label: 'Guardian C', value: 'guardianC' }
]
const classstd = [
  { label: 'Class 1', value: 'class1' },
  { label: 'Class 2', value: 'class2' },
  { label: 'Class 3', value: 'class3' }
]
const pickupmethods = [
  { label: 'Bus', value: 'bus' },
  { label: 'Car', value: 'car' },
  { label: 'Walk', value: 'walk' }
]
const statusstd = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' }
]

const submitStudentRegistrationReport = () => {
  console.log('Student Registration Report Submitted:', namestd.value, selectedGenderstd.value, agestd.value, dobstd.value, selectedGuardianstd.value, admissiondatestd.value, specialnotestd.value, selectedClassstd.value, selectedPickupMethodstd.value, selectedStatusstd.value)
}
</script>

<style scoped>
</style>