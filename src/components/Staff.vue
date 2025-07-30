z

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import DashboardLayout from './UI/DashboardLayout.vue'

const message = useMessage()
const router = useRouter()

function goToStaffR() {
  message.info('Redirecting to Create Staff')
  router.push('/auth/staffregister')
}

const staffList = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', position: 'Team Lead' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', position: 'Operations Manager' },
  { name: 'Mike Johnson', email: 'mike@example.com', role: 'Staff', position: 'Sales Associate' },
]

function editStaff(staff) {
  message.info(`Edit staff: ${staff.name}`)
}

function deleteStaff(staff) {
  message.warning(`Delete staff: ${staff.name}`)
}
</script>

<style>
.frist{
  margin-left: 200px;
}

.create {
  padding-right: 30px;
  border-radius: 5px;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
}

table, th, td {
  border: 1px solid rgb(59, 59, 59) !important;
  border-collapse: collapse !important;
}
 td {
  padding: 5px;
  text-align: center;
}
td:hover {
    background-color: #f1f1f1;
  }
</style>
