<template>
  <Navbar/>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-md sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl0 font-semibold text-center text-blue-800">👨‍👩‍👧  Guardian Information</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              <div class="relative">
                <label for="user_id" class="leading-7 text-sm text-green-600">User ID</label>
                <input type="text" id="user_id" name="user_id" placeholder="User ID" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="first_name" class="leading-7 text-sm text-green-600">First Name</label>
                <input type="text" id="first_name" name="first_name" placeholder="First Name" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="last_name" class="leading-7 text-sm text-green-600">Last Name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Last Name" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="age" class="leading-7 text-sm text-green-600">Age</label>
                <input type="number" id="age" name="age" placeholder="Age" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="occupation" class="leading-7 text-sm text-green-600">Occupation</label>
                <input type="text" id="occupation" name="occupation" placeholder="Occupation" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="relationship" class="leading-7 text-sm text-green-600">Relationship to Student</label>
                <input type="text" id="relationship" name="relationship" placeholder="Relationship" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="phone" class="leading-7 text-sm text-green-600">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Phone Number" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="email" class="leading-7 text-sm text-green-600">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="address" class="leading-7 text-sm text-green-600">Address</label>
                <textarea id="address" name="address" placeholder="Address" class="w-full bg-gray-50 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"></textarea>
              </div>

              <div class="relative">
                <label for="profile_picture" class="leading-7 text-sm text-green-600">Profile Picture</label>
                <input type="file" id="profile_picture" name="profile_picture" class="hidden" @change="handleFileUpload">
                <svg @click="triggerFileUpload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer">
                  <g fill="none">
                  <path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19H11v-4a3 3 0 0 1 3-3h7c.35 0 .687.06 1 .17V6.25A3.25 3.25 0 0 0 18.75 3H5.25zm1.03 3.22L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 1.06-1.06zM22 13.268A1.99 1.99 0 0 0 21 13h-7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-1-1.732z" fill="currentColor"/>
                  </g>
                  </svg>
                  <img v-if="imageUrl" :src="imageUrl" alt="Profile Preview" class="mt-2  w-50 h-50 object-cover">
              </div>

              <div class="relative mt-6">
                <button class="bg-blue-500 text-white rounded-md px-6 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full transition-colors duration-200 ease-in-out">Create</button>
              </div>
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

const imageUrl = ref(null);

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