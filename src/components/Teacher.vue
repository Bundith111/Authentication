<template>
  <DashboardLayout>
    <div class="flex min-h-screen">
      <div class="flex-1 flex items-center justify-center bg-gray-100 p-6">
        <div class="w-full max-w-3xl space-y-10">
          <h1 class="text-3xl font-bold text-center">Teacher</h1>

          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-xl font-semibold mb-4">Student Performance Report</h2>
            <n-select
              v-model:value="selectedStudent"
              :options="students"
              placeholder="Select Student"
              class="mb-4 w-full"
            />
            <n-input v-model:value="term" placeholder="Term" class="mb-4 w-full" />
            <div class="border p-4 rounded mb-4">
              <n-input v-model:value="subjectName" placeholder="Subject Name" class="mb-2 w-full" />
              <n-input v-model:value="progress" placeholder="Progress" class="mb-2 w-full" />
              <n-button @click="addSubject" class="w-full">Create More Subject</n-button>
            </div>
            <n-input
              type="textarea"
              v-model:value="finalComment"
              placeholder="Final Comment"
              class="mb-4 w-full"
            />
            <n-button type="primary" @click="submitPerformanceReport">Submit</n-button>
          </div>

          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-xl font-semibold mb-4">Health Record</h2>
            <n-select
              v-model:value="healthStudent"
              :options="students"
              placeholder="Select Student"
              class="mb-4 w-full"
            />
            <n-input v-model:value="incidentType" placeholder="Incident Type" class="mb-4 w-full" />
            <n-input
              type="textarea"
              v-model:value="healthDetail"
              placeholder="Detail"
              class="mb-4 w-full"
            />
            <n-button type="primary" @click="submitHealthRecord">Submit</n-button>
          </div>

          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-xl font-semibold mb-4">Upload Schedule</h2>
            <n-upload :action="uploadUrl">
              <n-button>Upload Class Schedule</n-button>
            </n-upload>
          </div>

          <div class="bg-white p-6 rounded shadow">
            <h2 class="text-xl font-semibold mb-4">Upload Curriculum</h2>
            <n-upload :action="uploadUrl">
              <n-button>Upload Curriculum</n-button>
            </n-upload>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'
import DashboardLayout from './UI/DashboardLayout.vue'

const selectedStudent = ref(null)
const students = [
  { label: 'Existing Student', value: 'existing' },
  { label: 'New Student', value: 'new' },
]
const term = ref('')
const subjectName = ref('')
const progress = ref('')
const finalComment = ref('')

const healthStudent = ref(null)
const incidentType = ref('')
const healthDetail = ref('')

const uploadUrl = 'https://example.com/upload'

function addSubject() {
  console.log('Added:', subjectName.value, progress.value)
}

function submitPerformanceReport() {
  console.log('Submitted Performance Report')
}

function submitHealthRecord() {
  console.log('Submitted Health Record')
}
</script>
