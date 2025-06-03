<template>
    <div>
   <!-- Teacher Registration-->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Teacher Registration </h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedTeacherRegistrationStaffID" :options="staffidteacher" placeholder="Existing Staffs" class="mb-4 w-full"/>
          <n-input v-model:value="role" placeholder="Role in Class" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedTeacherRegistrationClassassignment" :options="classassignmentteacher" placeholder="Existing Classes" class="mb-4 w-full"/>
          <label for="qualificationsTeacher" class="block mb-2 text-sm font-medium text-black-700">Qualifications:</label>
          <input type="file" id="qualificationsTeacher" accept="image/*,.pdf,.doc,.docx" multiple @change="handleTeacherUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewTeacher" :key="idx" :src="src" alt="Teacher Preview" class="max-w-xs" /></div>
          <n-button type="primary" @click="submitTeacherRegisterReport">Register</n-button>
          </div><br>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const selectedTeacherRegistrationStaffID = ref(null)
const role = ref('')
const selectedTeacherRegistrationClassassignment = ref(null)
const previewTeacher = ref([])

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
const handleTeacherUpload = (e) => handleMultipleFilePreview(e.target.files, previewTeacher)

const staffidteacher = [
  { label: 'Staff A', value: 'staffA' },
  { label: 'Staff B', value: 'staffB' },
  { label: 'Staff C', value: 'staffC' }
]
const classassignmentteacher = [
  { label: 'Class 1', value: 'class1' },
  { label: 'Class 2', value: 'class2' },
  { label: 'Class 3', value: 'class3' }
]

const submitTeacherRegisterReport = () => {
  console.log('Teacher Registration Report Submitted:', selectedTeacherRegistrationStaffID.value, role.value, selectedTeacherRegistrationClassassignment.value)
}
</script>