<template>
    <div>
          <!-- creating classroom -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Classroom</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="classname" placeholder="Class Name" class="mb-4 w-full text-xl" /><br>
          <n-button type="primary" @click="submitClassroomReport" >Create</n-button>
          </div><br>
          <!-- creating event -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Event</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="eventname" placeholder="Event Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="eventdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/><br>
          <n-input v-model:value="typeofevent" placeholder="Type of Event" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="descriptionevent" placeholder="Description" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedUser" :options="eventsendtouser" placeholder="Sent To" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitEventReport">Create</n-button>
          </div><br>
          <!-- creating division -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Division</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namedivision" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="descriptiondivision" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitDivisionReport">Create</n-button>
          </div><br>
          <!-- creating position -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Position</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="nameposition" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="descriptionposition" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitPositionReport">Create</n-button>
          </div><br>
          <!-- creating permission -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Permission</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namepermission" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="descriptionpermission" placeholder="Description" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedDivision" :options="divisions" placeholder="Under Division" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPosition" :options="positions" placeholder="Under Position" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitPermissionReport">Create</n-button>
          </div><br>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const classname = ref('')
const eventname = ref('')
const eventdate = ref('')
const typeofevent = ref('')
const descriptionevent = ref('')
const selectedUser = ref(null)
const namedivision = ref('')
const descriptiondivision = ref('')
const nameposition = ref('')
const descriptionposition = ref('')
const namepermission = ref('')
const descriptionpermission = ref('')
const selectedDivision = ref(null)
const selectedPosition = ref(null)

const submitClassroomReport = () => {
console.log('Classroom Report Submitted:', classname.value)
}
const submitEventReport = () => {
  console.log('Event Report Submitted:', eventname.value, eventdate.value, typeofevent.value, descriptionevent.value, selectedUser.value)
}
const submitDivisionReport = () => {
  console.log('Division Report Submitted:', namedivision.value, descriptiondivision.value)
}
const submitPositionReport = () => {
  console.log('Position Report Submitted:', nameposition.value, descriptionposition.value)
}
const submitPermissionReport = () => {
  console.log('Permission Report Submitted:', namepermission.value, descriptionpermission.value, selectedDivision.value, selectedPosition.value)
}


const eventsendtouser = [
  { label: 'Student', value: 'student' },
  { label: 'Guardian', value: 'guardian' },
  { label: 'Parent', value: 'parent' },
  { label: 'Teacher', value: 'teacher' },
  { label: 'Staff', value: 'staff' },
]
const divisions = [
  { label: 'Division A', value: 'divisionA' },
  { label: 'Division B', value: 'divisionB' },
  { label: 'Division C', value: 'divisionC' },
]
const positions = [
  { label: 'Position A', value: 'positionA' },
  { label: 'Position B', value: 'positionB' },
  { label: 'Position C', value: 'positionC' },
]

</script>
<style lang="">
    
</style>