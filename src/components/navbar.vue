<template>
  <div class="sidebar fixed top-0 left-0 h-screen w-64 bg-blue-800 text-black">
    <div class="p-4 flex items-center justify-center">
      <h1 class="text-2xl font-semibold">My App</h1>
    </div>
    <nav class="mt-4">
      <ul>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/dashboard" class="block">Dashboard</router-link>
        </li>
        <li class="p-4 hover:bg-blue-700">
          <router-link to="/users" class="block">Users</router-link>
        </li>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/settings" class="block">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  transition: width 0.3s ease-in-out;
  width: 64px;
  overflow-x: hidden;
}

.sidebar:hover {
  width: 256px;
}

.sidebar .p-4 {
  padding: 1rem;
}

.sidebar h1 {
  text-align: center; 
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li a {
  display: block;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

.sidebar li a:hover {
  background-color: rgba(255, 255, 255, 0.1); 
}
</style>