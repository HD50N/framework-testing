<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Vue App
          </RouterLink>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="isActive('/') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="isActive('/about') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
          >
            About
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="isActive('/contact') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
          >
            Contact
          </RouterLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <RouterLink
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
            :class="isActive('/') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
            @click="closeMobileMenu"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
            :class="isActive('/about') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
            @click="closeMobileMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/contact"
            class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
            :class="isActive('/contact') 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'"
            @click="closeMobileMenu"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const isActive = (path: string) => {
  return route.path === path
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script> 