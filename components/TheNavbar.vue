<template>
  <header class="bg-blue-900 text-white">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="https://cric.sportsfever.ai/storage/logo.png" alt="FootballHub Logo" class="h-8 w-auto">
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="hover:text-blue-200">Home</NuxtLink>
          <NuxtLink to="/schedule" class="hover:text-blue-200">Schedule</NuxtLink>
          <NuxtLink to="/news" class="hover:text-blue-200">News</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-200">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-200">Contact</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-blue-800 focus:outline-none"
        >
          <svg 
            v-if="!isMenuOpen"
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg 
            v-else
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            v-for="(link, index) in links" 
            :key="index"
            :to="link.to"
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const links = [
  { to: '/', text: 'Home' },
  { to: '/schedule', text: 'Schedule' },
  { to: '/news', text: 'News' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' }
];
</script>