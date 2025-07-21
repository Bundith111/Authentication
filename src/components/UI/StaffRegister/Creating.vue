 <template>
  <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center ">
    <!-- creating classroom -->
    <n-card title="Creating Classroom" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="classname" placeholder="Class Name" class="w-full text-xl " :style="customInputStyle" />
        <n-button size="small" ghost color="#AC1515" @click="submitClassroomReport" class="w-full ">Create</n-button>
      </div>
    </n-card>

    <!-- creating event -->
    <n-card title="Creating Event" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="eventname" placeholder="Event Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input v-model:value="eventdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="w-full text-xl" :style="customInputStyle" />
        <n-input v-model:value="typeofevent" placeholder="Type of Event" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionevent" placeholder="Description" class="w-full" />
        <n-select v-model:value="selectedUser" :options="eventsendtouser" placeholder="Sent To" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitEventReport" class="w-full ">Create</n-button>
      </div>
    </n-card>

    <!-- creating division -->
    <n-card title="Creating Division" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="namedivision" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptiondivision" placeholder="Description" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitDivisionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>

    <!-- creating position -->
    <n-card title="Creating Position" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="nameposition" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionposition" placeholder="Description" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitPositionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>

    <!-- creating permission -->
    <n-card title="Creating Permission" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="namepermission" placeholder="Name" class="w-full text-xl" :style="customInputStyle" />
        <n-input type="textarea" v-model:value="descriptionpermission" placeholder="Description" class="w-full" />
        <n-select v-model:value="selectedDivision" :options="divisions" placeholder="Under Division" class="w-full" />
        <n-select v-model:value="selectedPosition" :options="positions" placeholder="Under Position" class="w-full" />
        <n-button size="small" ghost color="#AC1515" @click="submitPermissionReport" class="w-full ">Create</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

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

<style>

</style>