 <template>
    <n-config-provider :theme-overrides="themeOverrides">
  <div class=" items-center justify-center ">
    <!--Role creating -->
      <n-card title="Role creating" class="shadow-md">
      <div class="space-y-4">
          <n-input v-model:value="nameRolecreating" placeholder="Name" class=" w-full text-xl" /><br>
          <n-input v-model:value="guardnamerolecreating" placeholder="Guard Name" class=" w-full text-xl" /><br>
          <n-input v-model:value="tagrolecreating" placeholder=" Tag" class=" w-full text-xl" /><br>
          <n-button size="small" ghost color="#AC1515" @click="submitRoleReport" >Create</n-button>
      </div>
      </n-card>
      <!-- User Assignment to Role-->
      <n-card title="User Assignment to Role" class="shadow-md">
      <div class="space-y-4">
           <n-select v-model:value="selectedUserAssignmentToRole" :options="userassignmenttorole" placeholder="Existing User" class=" w-full"/>
           <n-select v-model:value="selectedRoleAssignmentToRole" :options="roleusers" placeholder="Existing Role" class=" w-full"/>
           <n-button size="small" ghost color="#AC1515" @click="submitUserRoleAssignment">Submit</n-button>
      </div>
      </n-card>

  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui' 

const nameRolecreating = ref('')
const guardnamerolecreating = ref('')
const tagrolecreating = ref('')
const selectedUserAssignmentToRole = ref(null)
const selectedRoleAssignmentToRole = ref(null)

const userassignmenttorole = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' }
]
const roleusers = [
  { label: 'Role A', value: 'roleA' },
  { label: 'Role B', value: 'roleB' },
  { label: 'Role C', value: 'roleC' }
]

const submitRoleReport = () => {
  console.log('Role Created:', nameRolecreating.value, guardnamerolecreating.value, tagrolecreating.value)
}

const submitUserRoleAssignment = () => {
  console.log('User Assigned to Role:', selectedUserAssignmentToRole.value, selectedRoleAssignmentToRole.value)
}

</script>
