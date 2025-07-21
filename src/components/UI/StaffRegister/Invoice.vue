<template>
    <n-config-provider :theme-overrides="themeOverrides">
  <div class="  items-center justify-center">
    <!-- issuing invoice -->
      <n-card title="Issuing Invoice" class="shadow-md">
      <div class="space-y-4">
        <n-select v-model:value="selectedinvoiceStudent" :options="invoicestudents" placeholder="Select Student" class=" w-full"/>
        <n-select v-model:value="selectedInvoiceType" :options="invoicetypes" placeholder="Invoice Type" class=" w-full"/>
        <n-input type="textarea" v-model:value="invoiceDescription" placeholder="Description" class=" w-full "/><br>
        <n-input v-model:value="invoiceamount" placeholder="Amount" class=" w-full text-xl" /><br>
        <n-input v-model:value="invoicedate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class=" w-full text-xl"/><br>
        <n-select v-model:value="invoiceselectedStatus" :options="invoicestatus" placeholder="Status" class=" w-full"/>
        <n-button size="small" ghost color="#AC1515" @click="submitInvoiceReport">Create</n-button>
      </div>
    </n-card>
    <!-- Verifying Receipt -->
      <n-card title="Verifying Receipt" class="shadow-md">
      <div class="space-y-4">
        <n-input v-model:value="receiptid" placeholder="Receipt ID" class=" w-full " /><br>
        <n-input v-model:value="invoiceid" placeholder="Invoice ID" class=" w-full " /><br>
        <n-input v-model:value="studentname" placeholder="Student Name" class=" w-full " /><br>
        <n-input v-model:value="paymentdate" type="date" format="MM/dd/yyyy" value-format="yyyy-MM-dd" placeholder="" class=" w-full text-xl"/><br>
        <n-input v-model:value="amountpaid" placeholder="Amount Paid" class=" w-full text-xl" /><br>
        <n-select v-model:value="selectedPaymentMethodVerifying" :options="verifyingpaymentmethods" placeholder="Payment Method" class=" w-full"/>
        <n-input v-model:value="transactionid" placeholder="Transaction ID" class=" w-full " /><br>
        <!-- 2 this get data from issuing invoice -->
        <n-input v-model:value="paidbyguardian"  format="Existing Guardian" placeholder="Existing Guardian" class=" w-full text-xl"/><br>
        <n-input v-model:value="issuedbystaff"  format="Existing Staff" placeholder="Existing Staff" class=" w-full text-xl"/><br>
        <n-select v-model:value="selectedStatusVerifying" :options="verifyingstatus" placeholder="Status" class=" w-full"/>
        <n-button size="small" ghost color="#AC1515" @click="submitVerifyingReceiptReport">Verrify</n-button>
      </div>
    </n-card>
  </div>
  </n-config-provider>
</template>
<script setup>
import { ref,computed } from 'vue'
import { NCard, NInput, NButton, NSelect } from 'naive-ui'

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