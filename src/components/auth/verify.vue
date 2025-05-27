<template>
  <div class="flex flex-col items-center justify-center h-screen bg-blue-100">
    
    <div class="size-100  bg-white shadow-md rounded px-10 py-10 w-100 flex flex-col items-center">
      <div class="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" class="h-10 w-10 text-green-500">
          <g fill="none">
            <path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm3.854-11.854a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L9.5 9.793l3.646-3.647a.5.5 0 0 1 .708 0zM7.5 13h4.998a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1 0-1z" fill="currentColor"></path>
          </g>
        </svg>
      </div>
      <div class="text-green-500 text-center font-bold text-xl mb-4">
        Application Submitted Successfully!
      </div>
      <p class="text-gray-700 text-base text-center mb-4">
        Your application is being reviewed.
      </p>
      <p class="text-gray-700 text-base text-center">
        You will be notified via email or phone number.
      </p>
      <div>
        <n-button @click="handleClick">
    Click Me
  </n-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
};
</script>