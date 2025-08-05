<!-- <template>
  <div class="sidebar fixed top-0 left-0 h-screen w-64 bg-blue-800 text-white">
    <div class="p-4 flex flex-col items-center justify-center">
      <div
        class="w-16 h-16 bg-white text-blue-800 flex items-center justify-center rounded-full text-xl font-bold mb-2"
      >
        {{ userInitial }}
      </div>
      <div class="text-sm text-center truncate w-full">{{ userEmail }}</div>
    </div>

    <nav class="mt-4">
      <ul>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/dashboard" class="block">Dashboard</router-link>
        </li>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/staff" class="block">Staff</router-link>
        </li>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/teacher" class="block">Teacher</router-link>
        </li>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/guardianlist" class="block">Guardian</router-link>
        </li>
        <li class="p-4 hover:bg-gray-700">
          <router-link to="/auth/login" class="block">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userEmail = ref('')
const userInitial = ref('')

onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
  if (storedUser?.email) {
    userEmail.value = storedUser.email
    userInitial.value = storedUser.email.charAt(0).toUpperCase()
  }
})
</script>

<style scoped>
.sidebar {
  transition: width 0.3s ease-in-out;
  width: 100px;
  overflow-x: hidden;
  background-color: #333;
  color: white;
}

.sidebar:hover {
  width: 200px;
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
.sidebar li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.sidebar li.active {
  background-color: rgba(255, 255, 255, 0.2);
}
.sidebar li.active a {
  color: #000000;
}
.sidebar li.active:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style> -->
<template>
  <div class="fixed flex h-screen mb-10 flex-col sm:flex-row w-full sm:w-[16%] sticky-top px-4 sm:px-10 position-relative text-center justify-center bg-gray-900 text-white font-bold">
    <!-- Sidebar -->
    <div :class="['fixed top-0 left-0 h-full w-full text-white text-xl font-sans z-50 transition-transform duration-300',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full','w-64 sm:translate-x-0 sm:static sm:w-40']">
      <!-- User Info -->
      <div class="p-4 flex flex-col items-center text-4xl">
        <div class="w-12 h-12 bg-white  flex items-center justify-center rounded-full text-4xl font-bold mb-2" > {{ userInitial }} </div>
        <div class="text-xs text-center truncate w-full">{{ userEmail }}</div>
      </div><br>

      <!-- Menu -->
      <div class="menu px-3 w-full ">
        <ul class="space-y-2 ">
          <li>
            <router-link to="/dashboard" class="w-full flex items-center font-mono text-xl px-10 text-center justify-start py-10 border border-gray-700 text-white rounded hover:bg-gray-700 ">
              <i class="bi bi-house-door-fill  mr-10"></i> Dashboard
            </router-link>
          </li><br>
          <li>
            <router-link to="/staff" class="w-full flex items-center font-mono text-xl px-10 text-center justify-start py-10 border border-gray-700 text-white rounded hover:bg-gray-700">
              <i class="bi bi-people-fill  mr-10"></i> Staff
            </router-link>
          </li><br>
          <li>
            <router-link to="/teacher" class="w-full flex items-center font-mono text-xl px-10 text-center justify-start py-10 border border-gray-700 text-white rounded hover:bg-gray-700">
              <i class="bi bi-person-badge-fill  mr-10"></i> Teacher
            </router-link>
          </li><br>
          <li>
            <router-link to="/guardianlist" class="w-full flex items-center font-mono text-xl px-10 text-center justify-start py-10 border border-gray-700 text-white rounded hover:bg-gray-700">
              <i class="bi bi-person-hearts  mr-10"></i> Guardian
            </router-link>
          </li><br>
          <li>
            <router-link to="/auth/login" class="w-full flex items-center font-mono text-xl px-10 text-center justify-start py-10 border border-red-500 text-red-400 rounded hover:bg-red-600 hover:text-white">
              <i class="bi bi-box-arrow-left  mr-10"></i> Logout
            </router-link>
          </li><br>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navbar -->
      <header
        class="bg-gray-900 text-white flex items-center justify-between p-4 sm:hidden"
      >
        <button @click="toggleSidebar" class="focus:outline-none">
          <svg
            v-if="!sidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <span class="text-lg font-semibold">Menu</span>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-4 mt-0 sm:mt-0">
        <slot />
      </main>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userEmail = ref('')
const userInitial = ref('')
const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}')
  if (storedUser?.email) {
    userEmail.value = storedUser.email
    userInitial.value = storedUser.email.charAt(0).toUpperCase()
  }
})

</script>

<style scoped>

/* Hide scrollbar on mobile */
::-webkit-scrollbar {
  display: none;
}
.menu{
  padding-left: 10%;
}
.menu li i{
  padding-right: 7px;
}

</style>

<!-- Don't forget to include Bootstrap Icons for the <i class="bi ..."> to work -->


