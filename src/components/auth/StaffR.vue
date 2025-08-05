<template>
<div class="flex w-full min-h-screen">
<Navbar class="w-90 shrink-0" />
  <div class="flex-1 flex flex-col items-center justify-center bg-gray-10 p-6"><br>
        <div class="mb-12">
          <p class="text-center text-5xl font-extrabold uppercase tracking-wide drop-shadow">
             STAFF 
          </p>
        </div><br>

      <div class=" w-[40%] p-6 rounded-xl shadow-lg space-y-8 ">
         <Creating/>
         <Bus/>
         <StudentRegister/>
         <Invoice/>
         <Authorized/>
         <TeacherRegister/>
         <StaffRegister/>
         <Role/>

    </div>
  </div>
</div>
</template>

<script setup>
import { NButton, NInput, NSelect } from 'naive-ui'
import Navbar from '../sidebar.vue'
import { ref,computed } from 'vue'
import Creating from '../UI/StaffRegister/Creating.vue'
import Bus from '../UI/StaffRegister/Bus.vue'
import StudentRegister from '../UI/StaffRegister/StudentRegister.vue'
import Invoice from '../UI/StaffRegister/Invoice.vue'
import Authorized from '../UI/StaffRegister/Authorized.vue'
import TeacherRegister from '../UI/StaffRegister/TeacherRegister.vue'
import StaffRegister from '../UI/StaffRegister/StaffRegister.vue'
import Role from '../UI/StaffRegister/Role.vue'

const themeOverrides = {
  Input: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
  },
  Select: {
    borderColor: '#000000',
    borderHover: '#000000',
    borderFocus: '#000000',
    boxShadowFocus: '0 0 0 1px black',
    boxShadowHover: '0 0 0 1px black',
    colorFocus: '#000000'
  }
}


</script>

<style scoped>
/* Deep styling for both input and select hover/focus borders */
:deep(.n-input:hover .n-input__state-border),
:deep(.n-input:focus-within .n-input__state-border),
:deep(.n-select:hover .n-base-selection .n-base-selection__border),
:deep(.n-select:focus-within .n-base-selection .n-base-selection__border) {
  border-color: black !important;
  box-shadow: 0 0 0 1px black !important;
  border-width: 1px;
  border-radius: 6px; /* Adjust to match your input's roundness */
}
</style>




