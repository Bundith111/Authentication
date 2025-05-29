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
          <n-input v-model:value="dobstd" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/>
          <n-select v-model:value="selectedGuardianstd" :options="guardianstd" placeholder="Select Guardian" class="mb-4 w-full"/>
          <n-input v-model:value="admissiondatestd" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/>
          <n-input v-model:value="specialnotestd" placeholder="Special Note" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedClassstd" :options="classstd" placeholder="Select Class" class="mb-4 w-full"/>
          <n-select v-model:value="selectedPickupMethodstd" :options="pickupmethods" placeholder="Pickup Method" class="mb-4 w-full"/>
          <n-select v-model:value="selectedStatusstd" :options="statusstd" placeholder="Status" class="mb-4 w-full"/><br>
          <label for="profileStudent" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
          <input type="file" id="profileStudent" accept="image/*,.pdf,.doc,.docx" @change="handleStudentUpload"  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <img v-if="previewStudent" :src="previewStudent" alt="Student Preview" class="max-w-xs " />
          <n-button type="primary" @click="submitStudentRegistrationReport">Create</n-button>
          </div><br>
          <!-- issuing invoice -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Issuing Invoice</h2>
          <div class=" rounded shadow ">
          <n-select v-model:value="selectedinvoiceStudent" :options="invoicestudents" placeholder="Select Student" class="mb-4 w-full"/>
          <n-select v-model:value="selectedInvoiceType" :options="invoicetypes" placeholder="Invoice Type" class="mb-4 w-full"/>
          <n-input type="textarea" v-model:value="invoiceDescription" placeholder="Description" class="mb-4 w-full "/><br>
          <n-input v-model:value="invoiceamount" placeholder="Amount" class="mb-4 w-full text-xl" /><br>
          <n-input v-model:value="invoicedate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/><br>
          <n-select v-model:value="invoiceselectedStatus" :options="invoicestatus" placeholder="Status" class="mb-4 w-full"/>
          <n-button type="primary" @click="submitInvoiceReport">Create</n-button>
          </div><br>
          <!-- Verifying Receipt -->
          <h2 class=" font-bold mb-4  h-[30px] text-center"> Verifying Receipt</h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="receiptid" placeholder="Receipt ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="invoiceid" placeholder="Invoice ID" class="mb-4 w-full " /><br>
          <n-input v-model:value="studentname" placeholder="Student Name" class="mb-4 w-full " /><br>
          <n-input v-model:value="paymentdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/><br>
          <n-input v-model:value="amountpaid" placeholder="Amount Paid" class="mb-4 w-full text-xl" /><br>
          <n-select v-model:value="selectedPaymentMethodVerifying" :options="verifyingpaymentmethods" placeholder="Payment Method" class="mb-4 w-full"/>
          <n-input v-model:value="transactionid" placeholder="Transaction ID" class="mb-4 w-full " /><br>
          <!-- 2 this get data from issuing invoice -->
          <n-input v-model:value="paidbyguardian"  format="Existing Guardian" placeholder="Existing Guardian" class="mb-4 w-full text-xl"/><br>
          <n-input v-model:value="issuedbystaff"  format="Existing Staff" placeholder="Existing Staff" class="mb-4 w-full text-xl"/><br>
          <n-select v-model:value="selectedStatusVerifying" :options="verifyingstatus" placeholder="Status" class="mb-4 w-full"/><br>
          <n-button type="primary" @click="submitVerifyingReceiptReport">Verrify</n-button>
          </div><br>
           <!-- Register Authorised Person -->
          <h2 class=" font-bold mb-4  h-[30px] text-center">Register Authorised Person </h2>
          <div class=" rounded shadow ">
          <n-input v-model:value="nameregisterauthorisedperson" placeholder="Name" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="phonenumberregisterauthorisedperson" placeholder="Phone Number" class="mb-4 w-full  text-xl" /><br>
          <label for="profileAuthorised" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
          <input type="file" id="profileAuthorised" accept="image/*,.pdf,.doc,.docx" @change="handleAuthorisedUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <img v-if="previewAuthorised" :src="previewAuthorised" alt="Authorised Preview" class="max-w-xs " />
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
          <label for="qualificationsTeacher" class="block mb-2 text-sm font-medium text-black-700">Qualifications:</label>
          <input type="file" id="qualificationsTeacher" accept="image/*,.pdf,.doc,.docx" @change="handleTeacherUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <img v-if="previewTeacher" :src="previewTeacher" alt="Teacher Preview" class="max-w-xs " />
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
          <n-input v-model:value="staffhiredate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class="mb-4 w-full text-xl"/><br>
          <n-select v-model:value="selectedStaffPosition" :options="positions" placeholder="Position" class="mb-4 w-full"/>
          <n-input v-model:value="staffphonenumber" placeholder="Phone Number" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemail" placeholder="Email" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffaddress" placeholder="Address" class="mb-4 w-full  text-xl" /><br>
          <n-input v-model:value="staffemploymentstatus" placeholder="Employment Status" class="mb-4 w-full  text-xl" /><br>
          <n-select v-model:value="selectedStaffStatus" :options="status" placeholder="Status" class="mb-4 w-full"/>
          <label for="profilePictureStaff" class="block mb-2 text-sm font-medium text-black-700">Profile Picture:</label>
          <input type="file" id="profilePictureStaff" accept="image/*,.pdf,.doc,.docx" @change="handleProfilePictureStaffUpload" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
          <p class="text-sm font-medium text-black-700 mb-1">Image Preview:</p>
          <img v-if="previewStaff" :src="previewStaff" alt="Staff Preview" class="max-w-xs " />
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
import { NButton, NInput, NSelect } from 'naive-ui'
import Navbar from '../navbar.vue'
import { ref } from 'vue'


const selectedDivision = ref(null)
const selectedPosition = ref(null)
const selectedDriver = ref(null)
const selectedStudent = ref(null)
const selectedBus = ref(null)
const selectedGenderstd = ref(null)
const selectedGuardianstd = ref(null)
const selectedClassstd = ref(null)
const selectedStatusstd = ref(null)
const selectedUser = ref(null)
const selectedinvoiceStudent = ref(null)
const selectedInvoiceType = ref(null)
const invoiceselectedStatus = ref(null)
const selectedStatusVerifying = ref(null)
const selectedAuthorizedPerson = ref(null)
const selectedTeacherRegistrationStaffID = ref(null)
const selectedTeacherRegistrationClassassignment = ref(null)
const selectedStaffUserID = ref(null)
const selectedStaffPosition = ref(null)
const selectedPickupMethodstd = ref(null)
const selectedStaffGender = ref(null)
const eventdate = ref('')
const dobstd = ref(null)
const classname = ref('')
const eventname = ref('')
const typeofevent = ref('')
const descriptionevent = ref('')
const descriptiondivision = ref('')
const descriptionposition = ref('')
const descriptionpermission = ref('')
const selectedPaymentMethod = ref(null)
const namedivision = ref('')
const nameposition = ref('')
const namepermission = ref('')
const busname = ref('')
const licenseplate = ref('')
const route = ref('')
const agestd = ref(null)
const specialnotestd = ref('')
const namestd = ref('')
const admissiondatestd = ref('')
const invoiceDescription = ref('')
const invoiceamount = ref('')
const receiptid = ref('')
const invoiceid = ref('')
const studentname = ref('')
const paymentDate = ref('')
const amountpaid = ref('')
const transactionid = ref('')
const paidby = ref('')
const issuedby = ref('')
const paidbyguardian = ref('')
const issuedbystaff = ref('')
const invoicedate = ref('')
const relationshiptoStudent = ref('')
const nameregisterauthorisedperson = ref('')
const phonenumberregisterauthorisedperson = ref('')
const stafffristname = ref('')
const stafflastname = ref('')
const stafflage = ref('')
const staffhiredate = ref('')
const staffphonenumber = ref('')
const staffemail = ref('')
const staffaddress = ref('')
const staffemploymentstatus = ref('')
const staffid = ref('')
const staffstatus = ref('')
const role = ref('')
const nameRolecreating = ref('')
const guardnamerolecreating = ref('')
const tagrolecreating = ref('')
const selectedUserAssignmentToRole = ref(null)
const selectedRoleAssignmentToRole = ref(null)
const selectedPaymentMethodVerifying = ref(null)


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
const submitBusRegistrationReport = () => {
  console.log('Bus Registration Report Submitted:', busname.value, licenseplate.value, selectedDriver.value, route.value)
}
const submitStudentBusAssignmentReport = () => {
  console.log('Student Bus Assignment Report Submitted:', selectedStudent.value, selectedBus.value)
}
const submitStudentRegistrationReport = () => {
  console.log('Student Registration Report Submitted:', namestd.value, selectedGenderstd.value, agestd.value, dobstd.value, selectedGuardianstd.value, admissiondatestd.value, specialnotestd.value, selectedClassstd.value, selectedPickupMethodstd.value, selectedStatusstd.value)
}
const submitInvoiceReport = () => {
  console.log('Invoice Report Submitted:', selectedinvoiceStudent.value, selectedInvoiceType.value, invoiceDescription.value, invoiceamount.value, invoicedate.value, invoiceselectedStatus.value)
}
const submitVerifyingReceiptReport = () => {
  console.log('Verifying Receipt Report Submitted:', receiptid.value, invoiceid.value, studentname.value, paymentDate.value, amountpaid.value, selectedPaymentMethodVerifying.value, transactionid.value, paidbyguardian.value, issuedbystaff.value, selectedStatusVerifying.value)
}
const submitRegisterAuthorisedPersonReport = () => {
  console.log('Register Authorised Person Report Submitted:', nameregisterauthorisedperson.value, phonenumberregisterauthorisedperson.value)
}
const submitTeacherRegisterReport = () => {
  console.log('Teacher Registration Report Submitted:', selectedTeacherRegistrationStaffID.value, role.value, selectedTeacherRegistrationClassassignment.value)
}
const submitStaffRegisterReport = () => {
  console.log('Staff Registration Report Submitted:', selectedStaffUserID.value, stafffristname.value, stafflastname.value, stafflage.value, selectedStaffGender.value, staffhiredate.value, selectedStaffPosition.value, staffphonenumber.value, staffemail.value, staffaddress.value, staffemploymentstatus.value, selectedStaffStatus.value)
}
const submitRoleReport = () => {
  console.log('Role Created:', nameRolecreating.value, guardnamerolecreating.value, tagrolecreating.value)
}
const submitUserRoleAssignment = () => {
  console.log('User Assignment to Role Submitted:', selectedUserAssignmentToRole.value, selectedRoleAssignmentToRole.value)
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
const gender = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]
const verifyingstatus = [
  { label: 'Verified', value: 'verified' },
  { label: 'Unverified', value: 'unverified' },
]
const students = [
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
const verifyingpaymentmethods = [
  { label: 'Cash', value: 'cash' },
  { label: 'Credit Card', value: 'creditCard' },
  { label: 'Bank Transfer', value: 'bankTransfer' },
]
const userid = [
  { label: 'User A', value: 'userA' },
  { label: 'User B', value: 'userB' },
  { label: 'User C', value: 'userC' },
]
const selectedStaffStatus = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
]

//upload image
// Separate preview states
const previewStaff = ref(null)
const previewTeacher = ref(null)
const previewAuthorised = ref(null)
const previewStudent = ref(null)
// Preview helpers
function handleFilePreview(file, previewRef) {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      previewRef.value = reader.result
    }
    reader.readAsDataURL(file)
  } else {
    previewRef.value = null
  }
}
// Separate handlers
const handleProfilePictureStaffUpload = (e) => handleFilePreview(e.target.files[0], previewStaff)
const handleTeacherUpload = (e) => handleFilePreview(e.target.files[0], previewTeacher)
const handleAuthorisedUpload = (e) => handleFilePreview(e.target.files[0], previewAuthorised)
const handleStudentUpload = (e) => handleFilePreview(e.target.files[0], previewStudent)

</script>

