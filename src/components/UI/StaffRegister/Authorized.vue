<template>
    <n-config-provider :theme-overrides="themeOverrides">
    <div class=" items-center justify-center">
      <!-- Register Authorised Person -->
        <n-card title="Register Authorised Person" class="shadow-md">
          <div class="space-y-4">
             <n-input v-model:value="nameregisterauthorisedperson" placeholder="Name" class=" w-full  text-xl" /><br>
             <n-input v-model:value="phonenumberregisterauthorisedperson" placeholder="Phone Number" class=" w-full  text-xl" /><br>
             <label for="profileAuthorised" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
             <input type="file" id="profileAuthorised" accept="image/*,.pdf,.doc,.docx" multiple @change="handleAuthorisedUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
             <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
             <div class="flex flex-wrap gap-2"><img v-for="(src, idx) in previewAuthorised" :key="idx" :src="src" alt="Authorised Preview" class="max-w-xs" /></div><br>
             <n-button size="small" ghost color="#AC1515" type="primary" @click="submitRegisterAuthorisedPersonReport">Register</n-button>
           </div>
       </n-card>
      <!-- Authorized Person Assignment to Student-->
       <n-card title="Authorized Person Assignment to Student" class="shadow-md">
          <div class="space-y-4">
             <n-select v-model:value="selectedStudent" :options="students" placeholder="Select Students" class=" w-full"/>
             <n-select v-model:value="selectedAuthorizedPerson" :options="authorisedperson" placeholder="Select Authorised Person" class=" w-full"/>
             <n-input v-model:value="relationshiptoStudent" placeholder="Relationship to Student" class=" w-full  text-xl" /><br>
             <n-button size="small" ghost color="#AC1515" type="primary" @click="submitStudentBusAssignmentReport">Submit</n-button>
           </div>
       </n-card>
    </div>
    </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'
const nameregisterauthorisedperson = ref('')
const phonenumberregisterauthorisedperson = ref('')
const selectedStudent = ref(null)
const selectedAuthorizedPerson = ref(null)
const relationshiptoStudent = ref('')
const previewAuthorised = ref([])

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
const handleAuthorisedUpload = (e) => handleMultipleFilePreview(e.target.files, previewAuthorised)

const students = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' }
]
const authorisedperson = [
  { label: 'Authorized Person A', value: 'authorizedA' },
  { label: 'Authorized Person B', value: 'authorizedB' },
  { label: 'Authorized Person C', value: 'authorizedC' }
]
const submitRegisterAuthorisedPersonReport = () => {
  console.log('Register Authorised Person Report Submitted:', nameregisterauthorisedperson.value, phonenumberregisterauthorisedperson.value)
}
const submitStudentBusAssignmentReport = () => {
  console.log('Student Authorized Person Assignment Report Submitted:', selectedStudent.value, selectedAuthorizedPerson.value, relationshiptoStudent.value)
}
</script>