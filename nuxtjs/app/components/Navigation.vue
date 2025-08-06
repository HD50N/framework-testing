<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Nuxt.js App
          </NuxtLink>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <NuxtLink
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/' }"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/about' }"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/contact' }"
          >
            Contact
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button class="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template> 