<template>
  <div class="flex flex-col md:flex-row min-h-screen w-full">
    <Navbar class="w-full md:w-90 shrink-0" />
    <div class="flex-1 flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-6">
      <div class="w-full max-w-4xl space-y-10">
        <p class="uppercase text-center text-green-600 text-2xl sm:text-3xl md:text-4xl h-[80px] bg-amber-50 flex items-center justify-center">
          👨‍👩‍👧 Guardian Information
        </p>

        <div class="w-full h-full">
          <h2 class="text-center font-mono text-lg md:text-xl">Creating</h2>
          <div class="rounded shadow grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-white">
            <div>
              <label for="userID" class="block text-gray-700 text-sm font-bold mb-2">User ID</label>
              <n-input id="userID" v-model:value="userID" placeholder="UserID" class="w-full text-base" />
            </div>
            <div>
              <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <n-input id="firstname" v-model:value="firstname" placeholder="FirstName" class="w-full text-base" />
            </div>
            <div>
              <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <n-input id="lastname" v-model:value="lastname" placeholder="LastName" class="w-full text-base" />
            </div>
            <div>
              <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Age</label>
              <n-select id="age" v-model:value="age" :options="ageOptions" placeholder="Age" class="w-full text-base" />
            </div>
            <div>
              <label for="occupation" class="block text-gray-700 text-sm font-bold mb-2">Occupation</label>
              <n-input id="occupation" v-model:value="occupation" placeholder="Occupation" class="w-full text-base" />
            </div>
            <div>
              <label for="relationship" class="block text-gray-700 text-sm font-bold mb-2">Relationship</label>
              <n-input id="relationship" v-model:value="relationship" placeholder="Relationship With Student" class="w-full text-base" />
            </div>
            <div>
              <label for="phoneNumber" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <n-input id="phoneNumber" v-model:value="phoneNumber" placeholder="Phone Number" class="w-full text-base" />
            </div>
            <div>
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <n-input id="email" v-model:value="email" placeholder="Email" class="w-full text-base" />
            </div>
            <div class="sm:col-span-2">
              <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <n-input id="address" v-model:value="address" placeholder="Address" class="w-full text-base" />
            </div>
            <div class="sm:col-span-2">
              <label for="profile_picture" class="block text-gray-700 text-sm font-bold mb-2">Document Picture</label>
              <input type="file" id="profile_picture" name="profile_picture" class="hidden" @change="handleFileUpload">
              <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <svg @click="triggerFileUpload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor" class="w-6 h-6 cursor-pointer text-blue-500">
                  <g fill="none">
                    <path d="..." fill="currentColor" />
                  </g>
                </svg>
                <div class="relative group">
                  <img v-if="imageUrl" :src="imageUrl" alt="Profile Preview" class="w-28 h-28 rounded object-cover border" />
                  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"></div>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <n-button type="primary" @click="submitClassroomReport" class="w-full">Create</n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
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