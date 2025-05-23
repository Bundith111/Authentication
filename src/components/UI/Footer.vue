<template>
  <footer class="bg-[#0b1622] text-white py-10 p-auto">
    <div class="max-w-7xl mx-auto px-6 ">
      <div class="flex flex-wrap justify-between gap-6">
        <div class="w-full  lg:w-1/4 ">
          <h5 class="footer-heading">Info</h5>
          <ul class="space-y-2">
            <li><a href="#" class="footer-link">Formats</a></li>
            <li><a href="#" class="footer-link">Compression</a></li>
            <li><a href="#" class="footer-link">Pricing</a></li>
            <li><a href="#" class="footer-link">FAQ</a></li>
            <li><a href="#" class="footer-link">Status</a></li>
            <li><a href="#" class="footer-link">Policy</a></li>
          </ul>
        </div>

        <div class="w-full  lg:w-1/5">
          <h5 class="footer-heading">Getting Started</h5>
          <ul class="space-y-2">
            <li><a href="#" class="footer-link">Introduction</a></li>
            <li><a href="#" class="footer-link">Themes</a></li>
            <li><a href="#" class="footer-link">Documentation</a></li>
            <li><a href="#" class="footer-link">Usages</a></li>
            <li><a href="#" class="footer-link">Elements</a></li>
            <li><a href="#" class="footer-link">Global</a></li>
          </ul>
        </div>

        <div class="w-full lg:w-1/5">
          <h5 class="footer-heading">Resources</h5>
          <ul class="space-y-2">
            <li><a href="#" class="footer-link">API</a></li>
            <li><a href="#" class="footer-link">Form Validation</a></li>
            <li><a href="#" class="footer-link">Accessibility</a></li>
            <li><a href="#" class="footer-link">Marketplace</a></li>
            <li><a href="#" class="footer-link">Visibility</a></li>
            <li><a href="#" class="footer-link">Community</a></li>
          </ul>
        </div>

        <div class="w-full  lg:w-1/4">
          <h5 class="footer-heading">Newsletter</h5>
          <p class="mb-2">Subscribe for weekly updates and offers.</p>
          <div class="flex mb-3 ">
            <input type="email" placeholder="Your email" class="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-black" />
            <button class="px-4 py-2 rounded-r-md font-bold bg-orange-400 hover:bg-orange-500 text-white">SUBSCRIBE</button>
          </div>
          <div class="flex space-x-4 mt-3 text-xl gap-5">
            <a href="#" class="footer-social-icon"><i class="fab fa-facebook"></i></a>
            <a href="#" class="footer-social-icon"><i class="fab fa-github"></i></a>
            <a href="#" class="footer-social-icon"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="footer-social-icon"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div><br>
      <div class="text-center mt-10 text-gray-400 text-sm">
        © 2025 My Vue App | All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-heading {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #f39c12;
  
}

.footer-link {
  color: #bbb;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #f39c12;
}

.footer-social-icon {
  color: #bbb;
  transition: color 0.3s ease;

}

.footer-social-icon:hover {
  color: #f39c12;
}
</style>
