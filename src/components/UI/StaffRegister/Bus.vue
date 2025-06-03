<template>
    <div>
        <!-- bus registration -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Bus Registration</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="busname" placeholder="Bus Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="licenseplate" placeholder="License Plate" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="selectedDriver" :options="drivers" placeholder="Select Driver" class="mb-4 w-full"/>
          <n-input type="textarea" v-model:value="route" placeholder="Route" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitBusRegistrationReport">Create</n-button>
          </div><br>
          <!-- student assignment to bus-->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Student Assignment to Bus</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStudent" :options="studentstobus" placeholder="Select Student" class="mb-4 w-full"/>
          <n-select v-model:value="selectedBus" :options="busnumber" placeholder="Select Bus" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitStudentBusAssignmentReport">Submit</n-button>
          </div><br>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const busname = ref('')
    const licenseplate = ref('')
    const selectedDriver = ref(null)
    const route = ref('')
    const selectedStudent = ref(null)
    const selectedBus = ref(null)

    const drivers = [
      { label: 'Driver 1', value: 'driver1' },
      { label: 'Driver 2', value: 'driver2' },
      { label: 'Driver 3', value: 'driver3' }
    ]

    const studentstobus = [
      { label: 'Student A', value: 'studentA' },
      { label: 'Student B', value: 'studentB' },
      { label: 'Student C', value: 'studentC' }
    ]

    const busnumber = [
      { label: 'Bus 101', value: 'bus101' },
      { label: 'Bus 102', value: 'bus102' },
      { label: 'Bus 103', value: 'bus103' }
    ]
    
    const submitBusRegistrationReport = () => {
      console.log('Bus Registration Report Submitted:', busname.value, licenseplate.value, selectedDriver.value, route.value)
    }
    const submitStudentBusAssignmentReport = () => {
      console.log('Student Bus Assignment Report Submitted:', selectedStudent.value, selectedBus.value)
    }

    // RETURN ALL VARIABLES AND FUNCTIONS USED IN THE TEMPLATE
    return {
      busname,
      licenseplate,
      selectedDriver,
      route,
      selectedStudent,
      selectedBus,
      drivers,
      studentstobus,
      busnumber,
      submitBusRegistrationReport,
      submitStudentBusAssignmentReport
    }
  }
}
</script>
<style>

</style>