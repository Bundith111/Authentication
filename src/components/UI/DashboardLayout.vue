<template>
  <div class="flex">
    <Navbar />
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../sidebar.vue'
</script>
