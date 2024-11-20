<template>
  <footer class="bg-blue-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">FootballHub</h3>
          <p class="text-blue-200">Your source for the latest football news, scores, and commentary.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-blue-200 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/schedule" class="text-blue-200 hover:text-white">Schedule</NuxtLink></li>
            <li><NuxtLink to="/news" class="text-blue-200 hover:text-white">News</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-blue-200 hover:text-white">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-blue-200 hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-200 hover:text-white">Twitter</a>
            <a href="#" class="text-blue-200 hover:text-white">Facebook</a>
            <a href="#" class="text-blue-200 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
        <p>&copy; 2024 FootballHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>