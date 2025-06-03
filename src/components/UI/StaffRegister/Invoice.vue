<template>
  <div>
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
  </div>
</template>
<script setup>
import { ref } from 'vue'

const selectedinvoiceStudent = ref(null)
const selectedInvoiceType = ref(null)
const invoiceDescription = ref('')
const invoiceamount = ref('')
const invoicedate = ref('')
const invoiceselectedStatus = ref(null)
const receiptid = ref('')
const invoiceid = ref('')
const studentname = ref('')
const paymentdate = ref('')
const amountpaid = ref('')
const selectedPaymentMethodVerifying = ref(null)
const transactionid = ref('')
const paidbyguardian = ref('')
const issuedbystaff = ref('')
const selectedStatusVerifying = ref(null)

const invoicestudents = [
  { label: 'Student A', value: 'studentA' },
  { label: 'Student B', value: 'studentB' },
  { label: 'Student C', value: 'studentC' }
]

const invoicetypes = [
  { label: 'Tuition Fee', value: 'tuition' },
  { label: 'Transport Fee', value: 'transport' },
  { label: 'Library Fee', value: 'library' }
]

const invoicestatus = [
  { label: 'Pending', value: 'pending' },
  { label: 'Paid', value: 'paid' },
  { label: 'Overdue', value: 'overdue' }
]

const verifyingpaymentmethods = [
  { label: 'Credit Card', value: 'credit_card' },
  { label: 'Bank Transfer', value: 'bank_transfer' },
  { label: 'Cash', value: 'cash' }
]

const verifyingstatus = [
  { label: 'Verified', value: 'verified' },
  { label: 'Unverified', value: 'unverified' }
]

const submitInvoiceReport = () => {
  console.log('Invoice Report Submitted:', selectedinvoiceStudent.value, selectedInvoiceType.value, invoiceDescription.value, invoiceamount.value, invoicedate.value, invoiceselectedStatus.value)
}

const submitVerifyingReceiptReport = () => {
  console.log('Verifying Receipt Report Submitted:', receiptid.value, invoiceid.value, studentname.value, paymentdate.value, amountpaid.value, selectedPaymentMethodVerifying.value, transactionid.value, paidbyguardian.value, issuedbystaff.value, selectedStatusVerifying.value)
}

</script>