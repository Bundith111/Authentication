<template>
  <div class="max-w-sm mx-auto mt-10 border-black rounded p-4 shadow text-sm">
    <h2 class="text-center text-base font-semibold mb-4">Creating Event</h2>
    <div class="space-y-3">
      <label class="block">Event Name<input v-model="event.name" type="text" class="w-full border border-black rounded px-2 py-1" /></label>
      <label class="block">Date<input v-model="event.date" type="date" class="w-full border border-black rounded px-2 py-1" /></label>
      <label class="block">Type of Event<input v-model="event.type" type="text" class="w-full border border-black rounded px-2 py-1" /></label>
      <label class="block">Description<textarea v-model="event.description" class="w-full border border-black rounded px-2 py-1 h-24"></textarea></label>
      <label class="block">Sent to<select v-model="event.sentTo" class="w-full border border-black rounded px-2 py-1">
          <option disabled selected>Existing User</option>
          <option>User A</option>
          <option>User B</option>
        </select> 
      </label>
      <button @click="createEvent" class="block mx-auto border border-black rounded px-4 py-1 hover:bg-black hover:text-white transition">Create</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const event = reactive({
  name: '',
  date: '',
  type: '',
  description: '',
  sentTo: ''
})

const createEvent = () => {
  console.log('Creating Event:', event)
}
</script>
