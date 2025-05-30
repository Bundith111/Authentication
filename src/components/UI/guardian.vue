<template>
  <div class="flex min-h-screen w-full">
    <Navbar class="w-90 shrink-0" />
    <div class="flex-1 flex items-center justify-center bg-gray-100 p-6">
      <div class="w-full max-w-3xl space-y-10">
        <p class="uppercase text-center text-green-600 text-4xl h-[80px]">👨‍👩‍👧 Guardian Information</p>

        <div class="w-full h-full p-6">
          <h2 class="font-bold mb-4 h-[30px] text-center">Creating</h2>
          <div class="rounded shadow grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="userID" class="block text-gray-700 text-sm font-bold mb-2">User ID</label>
              <n-input id="userID" v-model:value="userID" placeholder="UserID" class="w-full text-xl" />
            </div>
            <div>
              <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <n-input id="firstname" v-model:value="firstname" placeholder="FirstName" class="w-full text-xl" />
            </div>
            <div>
              <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <n-input id="lastname" v-model:value="lastname" placeholder="LastName" class="w-full text-xl" />
            </div>
            <div>
              <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Age</label>
              <n-select id="age" v-model:value="age" :options="ageOptions" placeholder="Age" class="w-full text-xl" />
            </div>
            <div>
              <label for="occupation" class="block text-gray-700 text-sm font-bold mb-2">Occupation</label>
              <n-input id="occupation" v-model:value="occupation" placeholder="Occupation" class="w-full text-xl" />
            </div>
            <div>
              <label for="relationship" class="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
              <n-input id="relationship" v-model:value="relationship" placeholder="Relationship With Student" class="w-full text-xl" />
            </div>
            <div>
              <label for="phoneNumber" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <n-input id="phoneNumber" v-model:value="phoneNumber" placeholder="Phone Number" class="w-full text-xl" />
            </div>
            <div>
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <n-input id="email" v-model:value="email" placeholder="Email" class="w-full text-xl" />
            </div>
            <div class="md:col-span-2">
              <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <n-input id="address" v-model:value="address" placeholder="Address" class="w-full text-xl" />
            </div>
            <div class="md:col-span-2">
              <label for="profile_picture" class="block text-gray-700 text-sm font-bold mb-2">Doucument Picture</label>
              <input type="file" id="profile_picture" name="profile_picture" class="hidden" @change="handleFileUpload">
              <div class="flex items-center space-x-4">
                <svg @click="triggerFileUpload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer">
                  <g fill="none">
                    <path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19H11v-4a3 3 0 0 1 3-3h7c.35 0 .687.06 1 .17V6.25A3.25 3.25 0 0 0 18.75 3H5.25zm1.03 3.22L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 1.06-1.06zM22 13.268A1.99 1.99 0 0 0 21 13h-7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-1-1.732z" fill="currentColor" />
                  </g>
                </svg>
                <div class="relative group">
                  <img v-if="imageUrl" :src="imageUrl" alt="Profile Preview" class="mt-5 w-30 h-30" />
                  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2">
              <n-button type="primary" @click="submitClassroomReport" class="w-full">Create</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../navbar.vue'
import { ref } from 'vue';
import { NSelect } from 'naive-ui';

const imageUrl = ref(null);
const userID = ref('');
const firstname = ref('');
const lastname = ref('');
const age = ref('');
const occupation = ref('');
const relationship = ref('');
const phoneNumber = ref('');
const email = ref('');
const address = ref('');

const ageOptions = ref(Array.from({ length: 100 }, (_, i) => ({
  label: (i + 1).toString(),
  value: (i + 1).toString(),
})));

const triggerFileUpload = () => {
  document.getElementById('profile_picture').click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  } else {
    imageUrl.value = null;
  }
};
</script>