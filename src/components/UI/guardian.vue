<template>
  <Navbar/>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-md sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold text-center">Guardian Information</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              <div class="relative">
                <label for="user_id" class="leading-7 text-sm text-gray-600">User ID</label>
                <input type="text" id="user_id" name="user_id" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="first_name" class="leading-7 text-sm text-gray-600">First Name</label>
                <input type="text" id="first_name" name="first_name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="last_name" class="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" id="last_name" name="last_name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="age" class="leading-7 text-sm text-gray-600">Age</label>
                <input type="number" id="age" name="age" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="occupation" class="leading-7 text-sm text-gray-600">Occupation</label>
                <input type="text" id="occupation" name="occupation" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="relationship" class="leading-7 text-sm text-gray-600">Relationship to Student</label>
                <input type="text" id="relationship" name="relationship" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="phone" class="leading-7 text-sm text-gray-600">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative">
                <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                <textarea id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
              </div>

              <div class="relative">
                <label for="profile_picture" class="leading-7 text-sm text-gray-600">Profile Picture</label>
                <input type="file" id="profile_picture" name="profile_picture" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>

              <div class="relative mt-6">
                <button class="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full">Create</button>
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
</script>