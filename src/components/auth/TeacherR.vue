<template>
  <DashboardLayout>
    <div class="flex w-full min-h-screen">
      <div class="flex-1 flex flex-col items-center justify-center bg-gray-10 p-6"><br>
        <div class="mb-12">
          <p class="text-center text-5xl font-extrabold uppercase tracking-wide drop-shadow">
            TEACHER
          </p>
        </div><br>

        <div class="w-[40%] p-6 rounded-xl shadow-lg space-y-8">
          <n-config-provider :theme-overrides="themeOverrides">
            <div class="items-center justify-center">
              <!-- Student Performance -->
              <n-card title="Student Performance Report" class="shadow-md">
                <div class="space-y-4">
                  <n-select v-model:value="selectedStudent" :options="studentOptions" placeholder="Select Student" class="w-full" />
                  <n-input v-model:value="term" placeholder="Term" class="w-full text-xl" />
                  <!-- Subject block -->
                  <div class="w-full border p-4 rounded-md space-y-4">
                    <n-input v-model:value="subjectName" placeholder="Subject Name" class="w-full text-xl" />
                    <n-input v-model:value="progress" placeholder="Progress" class="w-full text-xl" />
                    <n-button size="small" ghost class="w-full" @click="createMoreSubject">Create More Subject</n-button>
                  </div>
                  <n-input v-model:value="finalComment" type="textarea" placeholder="Final Comment" class="w-full" />
                  <n-button size="small" ghost color="#AC1515" @click="submitStudentPerformance" class="w-full">Submit</n-button>
                </div>
              </n-card>

              <!-- Health Record -->
              <n-card title="Health Record" class="shadow-md">
                <div class="space-y-4">
                  <n-select v-model:value="healthStudent" :options="students" placeholder="Select Student" class="w-full" />
                  <n-input v-model:value="incidentType" placeholder="Incident Type" class="w-full text-xl" />
                  <n-input v-model:value="healthDetail" type="textarea" placeholder="Detail" class="w-full" />
                  <n-button size="small" ghost color="#AC1515" class="w-full" @click="submitHealthRecord">Submit</n-button>
                </div>
              </n-card>

              <!-- Upload Class Schedule -->
              <n-card title="Upload Class Schedule" class="shadow-md">
                <div class="space-y-4">
                  <input type="file" id="classScheduleUpload" accept="image/*,.pdf" multiple @change="handleClassScheduleUpload"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                  <p class="text-sm font-medium text-black-700">Image Preview:</p>
                  <div class="flex flex-wrap gap-2">
                    <img v-for="(src, idx) in previewSchedule" :key="idx" :src="src" alt="Schedule Preview" class="max-w-xs rounded border" />
                  </div><br>
                  <n-button size="small" ghost color="#AC1515" @click="submitScheduleUpload">Upload</n-button>
                </div>
              </n-card>

              <!-- Upload Curriculum -->
              <n-card title="Upload Curriculum" class="shadow-md">
                <div class="space-y-4">
                  <input type="file" id="curriculumUpload" accept="image/*,.pdf" multiple @change="handleCCurriculumUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
                  <p class="text-sm font-medium text-black-700">Image Preview:</p>
                  <div class="flex flex-wrap gap-2">
                    <img v-for="(src, idx) in previewCurriculum" :key="idx" :src="src" alt="Curriculum Preview" class="max-w-xs rounded border" />
                  </div><br>
                  <n-button size="small" ghost color="#AC1515" @click="submitCurriculumUpload">Upload</n-button>
                </div>
              </n-card>
            </div>
          </n-config-provider>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'
import { NCard, NInput, NButton, NSelect, NConfigProvider } from 'naive-ui'
import DashboardLayout from '../UI/DashboardLayout.vue'

const selectedStudent = ref(null)
const students = [
  { label: 'Existing Student', value: 'existing' },
  { label: 'New Student', value: 'new' }
]
const studentOptions = students

const term = ref('')
const subjectName = ref('')
const progress = ref('')
const finalComment = ref('')
const healthStudent = ref(null)
const incidentType = ref('')
const healthDetail = ref('')

function createMoreSubject() {
  console.log('More subject added:', subjectName.value, progress.value)
}
function submitStudentPerformance() {
  console.log('Performance submitted')
}
function submitHealthRecord() {
  console.log('Health record submitted')
}

// Preview for Upload Class Schedule
const previewSchedule = ref([])
function handleClassScheduleUpload(event) {
  previewSchedule.value = []
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewSchedule.value.push(e.target.result)
    }
    reader.readAsDataURL(files[i])
  }
}
function submitScheduleUpload() {
  console.log('Uploading schedule:', previewSchedule.value)
}

// Preview for Upload Curriculum
const previewCurriculum = ref([])
function handleCCurriculumUpload(event) {
  previewCurriculum.value = []
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewCurriculum.value.push(e.target.result)
    }
    reader.readAsDataURL(files[i])
  }
}
function submitCurriculumUpload() {
  console.log('Uploading curriculum:', previewCurriculum.value)
}

const themeOverrides = {
  Input: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black'
  },
  Select: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black'
  }
}
</script>

<style scoped>
:deep(.n-input:hover .n-input__state-border),
:deep(.n-input:focus-within .n-input__state-border),
:deep(.n-select:hover .n-base-selection .n-base-selection__border),
:deep(.n-select:focus-within .n-base-selection .n-base-selection__border) {
  border-color: black !important;
  box-shadow: 0 0 0 1px black !important;
  border-width: 1px;
  border-radius: 6px;
}
</style>
