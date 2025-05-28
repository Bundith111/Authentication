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
          <n-input v-model:value="classname" placeholder="Class Name" class="mb-4 w-full text-xl" /><br>
          <n-button type="primary" @click="submitClassroomReport" >Create</n-button>
          </div><br>
          <!-- creating event -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Event</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="eventname" placeholder="Event Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="date" placeholder="Date" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="typeofevent" placeholder="Type of Event" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="descriptionevent" placeholder="Description" class="mb-4 w-full "/><br>
          <n-select v-model:value="selectedUser" :options="eventsendtouser" placeholder="Sent To" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitEventReport">Create</n-button>
          </div><br>
          <!-- creating division -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Division</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namedivision" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitDivisionReport">Create</n-button>
          </div><br>
          <!-- creating position -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Position</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="nameposition" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input type="textarea" v-model:value="description" placeholder="Description" class="mb-4 w-full "/><br>
          <n-button type="primary" @click="submitPositionReport">Create</n-button>
          </div><br>
          <!-- creating permission -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Creating Permission</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namepermission" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
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
          <!-- student registration -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Student Registration</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="namestd" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedGenderstd" :options="genderstd" placeholder="Select Gender" class="mb-4 w-full"/>
          <n-input v-model:value="agestd" placeholder="Age" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="dobstd" placeholder="Date of Birth" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="selectedGuardianstd" :options="guardianstd" placeholder="Select Guardian" class="mb-4 w-full"/>
          <n-input v-model:value="admissiondatestd" placeholder="Admission Date" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="specialnotestd" placeholder="Special Note" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedClassstd" :options="classstd" placeholder="Select Class" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPickupMethodstd" :options="pickupmethods" placeholder="Pickup Method" class="mb-4 w-full"/>
          <n-select v-model:value="selectedStatusstd" :options="statusstd" placeholder="Status" class="mb-4 w-full"/><br>
          <label for="documentUpload" class="block mb-2 text-sm font-medium ">Profile Picture:</label>
          <input type="file" id="documentUpload" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" >
           <n-button type="primary" @click="submitStudentRegistrationReport">Create</n-button>
          </div><br>
          <!-- issuing invoice -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Issuing Invoice</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedinvoiceStudent" :options="invoicestudents" placeholder="Select Student" class="mb-4 w-full"/>
          <n-select v-model:value="selectedInvoiceType" :options="invoicetypes" placeholder="Invoice Type" class="mb-4 w-full"/>
          <n-input type="textarea" v-model:value="invoiceDescription" placeholder="Description" class="mb-4 w-full "/><br>
          <n-input v-model:value="invoiceamount" placeholder="Amount" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="invoicedueDate" placeholder="Due Date" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="invoiceselectedStatus" :options="invoicestatus" placeholder="Status" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitInvoiceReport">Create</n-button>
          </div><br>
          <!-- Verifying Receipt -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Verifying Receipt</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="receiptid" placeholder="Receipt ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="invoiceid" placeholder="Invoice ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="studentname" placeholder="Student Name" class="mb-4 w-full " /><br>
          <n-input v-model:value="paymentDate" placeholder="Payment Date" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="amountpaid" placeholder="Amount Paid" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="paymentmethod" placeholder="Payment Method" class="mb-4 w-full " /><br>
          <n-input v-model:value="transactionid" placeholder="Transaction ID" class="mb-4 w-full " /><br>
          <!-- 2 this get data from issuing invoice -->
          <!-- <n-input v-model:value="paidby" placeholder="Paid By" class="mb-4 w-full " /><br>
          <n-input v-model:value="issuedby" placeholder="Issued By" class="mb-4 w-full " /><br> -->
          <n-select v-model:value="selectedStatusVerifying" :options="verifyingstatus" placeholder="Status" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitVerifyingReceiptReport">Verrify</n-button>
          </div><br>
           <!-- Register Authorised Person -->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Register Authorised Person </h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="nameregisterauthorisedperson" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="phonenumberregisterauthorisedperson" placeholder="Phone Number" class="mb-4 w-full  text-xl" /><br>
          <label for="documentUpload" class="block mb-2 text-sm font-medium ">Profile Picture:</label>
          <input type="file" id="documentUpload" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" >
           <n-button type="primary" @click="submitRegisterAuthorisedPersonReport">Register</n-button>
          </div><br>
          <!-- Authorized Person Assignment to Student-->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Authorized Person Assignment to Student</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStudent" :options="students" placeholder="Select Students" class="mb-4 w-full"/>
          <n-select v-model:value="selectedAuthorizedPerson" :options="authorisedperson" placeholder="Select Authorised Person" class="mb-4 w-full"/>
          <n-input v-model:value="relationshiptoStudent" placeholder="Relationship to Student" class="mb-4 w-full  text-xl" /><br>
          <n-button type="primary" @click="submitStudentBusAssignmentReport">Submit</n-button>
          </div><br>
           <!-- Teacher Registration-->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Teacher Registration </h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedTeacherRegistrationStaffID" :options="staffidteacher" placeholder="Existing Staffs" class="mb-4 w-full"/>
          <n-input v-model:value="role" placeholder="Role in Class" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedTeacherRegistrationClassassignment" :options="classassignmentteacher" placeholder="Existing Classes" class="mb-4 w-full"/>
          <label for="Qualifications" class="block mb-2 text-sm font-medium ">Qualifications:</label>
          <input type="file" id="documentUpload" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" >
           <n-button type="primary" @click="submitTeacherRegisterReport">Register</n-button>
          </div><br>
            <!-- Staff Registration-->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Staff Registration </h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedStaffUserID" :options="userid" placeholder="UserID" class="mb-4 w-full"/>
          <n-input v-model:value="stafffristname" placeholder="First Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="stafflastname" placeholder="Last Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="stafflage" placeholder="Age" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffGender" :options="gender" placeholder="Gender" class="mb-4 w-full"/>
          <n-input v-model:value="staffhiredate" placeholder="Hire Date" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffPosition" :options="positions" placeholder="Position" class="mb-4 w-full"/>
          <n-input v-model:value="staffphonenumber" placeholder="Phone Number" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemail" placeholder="Email" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffaddress" placeholder="Address" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemploymentstatus" placeholder="Employment Status" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffStatus" :options="status" placeholder="Status" class="mb-4 w-full"/>
          <label for="Qualifications" class="block mb-2 text-sm font-medium ">Qualifications:</label>
          <input type="file" id="documentUpload" @change="handleFileUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" >
          <n-button type="primary" @click="submitStaffRegisterReport">Create</n-button>
          </div><br>
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
    </div>
  </div>
</div>
</template>
         
        

<script setup>
import { positionProp } from 'naive-ui/es/layout/src/interface';
import Navbar from '../navbar.vue'
import { ref } from 'vue'


const selectedUser = ref(null)
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
const drivers = [
  { label: 'Driver A', value: 'driverA' },
  { label: 'Driver B', value: 'driverB' },
  { label: 'Driver C', value: 'driverC' },
]
const studentstobus = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' },
]
const busnumber = [
  { label: 'Bus 1', value: 'bus1' },
  { label: 'Bus 2', value: 'bus2' },
  { label: 'Bus 3', value: 'bus3' },
]
const genderstd = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]
const guardianstd = [
  { label: 'Guardian A', value: 'guardianA' },
  { label: 'Guardian B', value: 'guardianB' },
  { label: 'Guardian C', value: 'guardianC' },
]
const classstd = [
  { label: 'Class 1', value: 'class1' },
  { label: 'Class 2', value: 'class2' },
  { label: 'Class 3', value: 'class3' },
]
const statusstd = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
]
const invoicestudents = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' },
]
const pickupmethods =[
  { label: 'Bus', value: 'bus' },
  { label: 'Walk', value: 'walk' },
  { label: 'Car', value: 'car' },
]
const invoicetypes= [
  { label: 'Tuition Fee', value: 'tuitionFee' },
  { label: 'Transport Fee', value: 'transportFee' },
  { label: 'Library Fee', value: 'libraryFee' },
]
const invoicestatus = [
  { label: 'Paid', value: 'paid' },
  { label: 'Unpaid', value: 'unpaid' },
  { label: 'Pending', value: 'pending' },
]
const paymentmethod=[
  { label: 'Cash', value: 'cash' },
  { label: 'Credit Card', value: 'creditCard' },
  { label: 'Bank Transfer', value: 'bankTransfer' },
]
const verifyingstatus = [
  { label: 'Verified', value: 'verified' },
  { label: 'Unverified', value: 'unverified' },
]
conststudents = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' },
]
const authorisedperson = [
  { label: 'Person A', value: 'personA' },
  { label: 'Person B', value: 'personB' },
  { label: 'Person C', value: 'personC' },
]
const staffidteacher = [
  { label: 'Staff A', value: 'staffA' },
  { label: 'Staff B', value: 'staffB' },
  { label: 'Staff C', value: 'staffC' },
]
const classassignmentteacher = [
  { label: 'Class A', value: 'classA' },
  { label: 'Class B', value: 'classB' },
  { label: 'Class C', value: 'classC' },
]
const userassignmenttorole = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' },
]
const roleusers = [
  { label: 'Role A', value: 'roleA' },
  { label: 'Role B', value: 'roleB' },
  { label: 'Role C', value: 'roleC' },
]


const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) {
    console.error('No file selected');
    return;
  }
  console.log(file);
};
</script>

