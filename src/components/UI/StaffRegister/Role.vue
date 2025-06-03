 <template>
  <div >
    <!--Role creating -->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Role Creating</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="nameRolecreating" placeholder="Name" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="guardnamerolecreating" placeholder="Guard Name" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="tagrolecreating" placeholder=" Tag" class="mb-4 w-full text-xl" /><br>
          <n-button type="primary" @click="submitRoleReport" >Create</n-button>
          </div><br>
          <!-- User Assignment to Role-->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> User Assignment to Role</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedUserAssignmentToRole" :options="userassignmenttorole" placeholder="Existing User" class="mb-4 w-full"/>
          <n-select v-model:value="selectedRoleAssignmentToRole" :options="roleusers" placeholder="Existing Role" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitUserRoleAssignment">Submit</n-button>
          </div><br>

  </div>
</template>
<script setup>
import { ref } from 'vue'

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
