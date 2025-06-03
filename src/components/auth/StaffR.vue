<template>
<div class="flex min-h-screen w-full">
<Navbar class="w-90 shrink-0" />
  <div class="flex-1 flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-3xl space-y-10"><br><br>
    <p class="uppercase text-center text-green-600 text-4xl h-[80px]">STAFF</p>

      <div class=" w-full h-full p-6 ">
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
</div>
</template>

<script setup>
import { NButton, NInput, NSelect } from 'naive-ui'
import Navbar from '../navbar.vue'
import { ref } from 'vue'
import Creating from '../UI/StaffRegister/Creating.vue'
import Bus from '../UI/StaffRegister/Bus.vue'
import StudentRegister from '../UI/StaffRegister/StudentRegister.vue'
import Invoice from '../UI/StaffRegister/Invoice.vue'
import Authorized from '../UI/StaffRegister/Authorized.vue'
import TeacherRegister from '../UI/StaffRegister/TeacherRegister.vue'
import StaffRegister from '../UI/StaffRegister/StaffRegister.vue'
import Role from '../UI/StaffRegister/Role.vue'
</script>

