<template>
<div class="flex min-h-screen w-full">
<Navbar class="w-90 shrink-0" />
  <div class="flex-1 flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-3xl space-y-10"><br><br>
    <p class="uppercase text-center text-green-600 text-4xl h-[80px]">STAFF</p>

      <div class=" w-full h-full p-6 ">
         <!-- creating classroom -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Classroom</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="classname" placeholder="Class Name" class="mb-4 w-full text-xl" /><br><br>
          <n-button type="primary" @click="submitClassroomReport" >Create</n-button>
          </div><br>
          <!-- creating event -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Event</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="classname" placeholder="Event Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="classname" placeholder="Date" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="classname" placeholder="Type of Event" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedUser" :options="users" placeholder="Sent To" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitEventReport">Create</n-button>
          </div><br>
          <!-- creating division -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Division</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="name" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitDivisionReport">Create</n-button>
          </div><br>
          <!-- creating position -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Position</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="name" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitPositionReport">Create</n-button>
          </div><br>
          <!-- creating permission -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Permission</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="name" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedDivision" :options="divisions" placeholder="Under Division" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPosition" :options="positions" placeholder="Under Position" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitPermissionReport">Create</n-button>
          </div><br>
          <!-- bus registration -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Bus Registration</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="busname" placeholder="Bus Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="licenseplate" placeholder="License Plate" class="mb-4 w-full text-xl" /><br>
          <n-input type="textarea" v-model:value="route" placeholder="Route" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedDriver" :options="drivers" placeholder="Select Driver" class="mb-4 w-full"/><br>
          <n-button type="primary" @click="submitBusRegistrationReport">Create</n-button>
          </div><br>
          <!-- student assignment to bus-->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Student Assignment to Bus</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStudent" :options="students" placeholder="Select Student" class="mb-4 w-full"/>
          <n-select v-model:value="selectedBus" :options="buses" placeholder="Select Bus" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitStudentBusAssignmentReport">Submit</n-button>
          </div><br>
          <!-- student registration -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Student Registration</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="name" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="gender" placeholder="Gender" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="age" placeholder="Age" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="dob" placeholder="Date of Birth" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="selectedGuardian" :options="guardians" placeholder="Select Guardian" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPickupMethod" :options="pickupMethods" placeholder="Pickup Method" class="mb-4 w-full"/>
          <n-select v-model:value="selectedStatus" :options="status" placeholder="Status" class="mb-4 w-full"/>
          <label for="documentUpload" class="block mb-2 text-sm font-medium ">Profile Picture:</label>
          <input type="file" id="documentUpload" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" >
           <n-button type="primary" @click="submitStudentRegistrationReport">Create</n-button>
          </div><br>
          <!-- issuing invoice -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Issuing Invoice</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStudent" :options="students" placeholder="Select Student" class="mb-4 w-full"/>
          <n-select v-model:value="selectedInvoice" :options="invoices" placeholder="Invoice Type" class="mb-4 w-full"/>
          <n-input type="textarea" v-model:value="invoiceDescription" placeholder="Description" class="mb-4 w-full "/><br>
          <n-input v-model:value="amount" placeholder="Amount" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="dueDate" placeholder="Due Date" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="selectedStatus" :options="status" placeholder="Status" class="mb-4 w-full"/><br>
          <n-button type="primary" @click="submitInvoiceReport">Create</n-button>
          </div><br>
          <!-- Verifying Receipt -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Verifying Receipt</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="receiptid" placeholder="Receipt ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="invoiceid" placeholder="Invoice ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="studentname" placeholder="Student Name" class="mb-4 w-full " /><br>
          <n-input v-model:value="paymentDate" placeholder="Payment Date" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="amount" placeholder="Amount Paid" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="paymentmethod" placeholder="Payment Method" class="mb-4 w-full " /><br>
          <n-input v-model:value="transactionid" placeholder="Transaction ID" class="mb-4 w-full " /><br>
          <!-- 2 this get data from issuing invoice -->
          <!-- <n-input v-model:value="paidby" placeholder="Paid By" class="mb-4 w-full " /><br>
          <n-input v-model:value="issuedby" placeholder="Issued By" class="mb-4 w-full " /><br> -->
          <n-select v-model:value="selectedStatus" :options="status" placeholder="Status" class="mb-4 w-full"/><br>
          <n-button type="primary" @click="submitVerifyingReceiptReport">Verrify</n-button>
          </div><br>
      </div>
    </div>
  </div>
</div>
</template>
         
        

<script setup>
import { positionProp } from 'naive-ui/es/layout/src/interface';
import Navbar from '../navbar.vue'
import { ref } from 'vue'


const selectedUser = ref(null)
const users = [
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
const drivers = [
  { label: 'Driver A', value: 'driverA' },
  { label: 'Driver B', value: 'driverB' },
  { label: 'Driver C', value: 'driverC' },
]
const students = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' },
]
const buses = [
  { label: 'Bus A', value: 'busA' },
  { label: 'Bus B', value: 'busB' },
  { label: 'Bus C', value: 'busC' },
]
const className = ref('');
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) {
    console.error('No file selected');
    return;
  }
  console.log(file);
};
</script>

