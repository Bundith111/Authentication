<template>
  <nav class="Navbar bg-blue-500 p-4 text-white">
    <div class="container">
      <div class="flex">
        <img src="/img/meow.jpg" alt="Logo" class="logo" />
        <span>Meow Company</span>
      </div>
      <div>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-blue-300">Home</a></li>
          <li><a href="#" class="hover:text-blue-300">About</a></li>
          <li><a href="#" class="hover:text-blue-300">Services</a></li>
          <li><a href="#" class="hover:text-blue-300">Contact</a></li>
          <li><a href="#" class="hover:text-blue-300">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.Navbar {
  background-color: #1e3a8a;
  padding: 1rem;
  color: white;
}

.Navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Navbar .container .flex {
  display: flex;
  align-items: center;
}

.Navbar .container .flex .logo {
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
}

.Navbar .container .flex span {
  font-size: 1.25rem;
  font-weight: bold;
}
.Navbar .container ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.Navbar .container ul li {
  display: inline;
}
.Navbar .container ul li a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}
.Navbar .container ul li a:hover {
  color: #93c5fd;
}
.Navbar .container ul li a:active {
  color: #60a5fa;
}
.Navbar .container ul li a:focus {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
.Navbar .container ul li a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
.Navbar .container ul li a:focus-within {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
.Navbar .container ul li a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
.Navbar .container ul li a:focus-within {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
.Navbar .container ul li a:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #60a5fa;
}
</style>