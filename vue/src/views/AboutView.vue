<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">
          About Our Application
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We're passionate about creating amazing web experiences with modern technologies.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-gray-600 mb-6">
            We believe in building web applications that are fast, accessible, and delightful to use. 
            Our team is dedicated to pushing the boundaries of what's possible with modern web technologies.
          </p>
          <p class="text-gray-600 mb-6">
            Using Vue.js, we can deliver reactive applications that provide excellent user experience 
            with component-based architecture and optimal performance.
          </p>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Reactive data binding</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Component-based architecture</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700">Type-safe development</span>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl mb-2">🚀</div>
              <div class="font-semibold text-gray-900">Vue.js</div>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl mb-2">🛠️</div>
              <div class="font-semibold text-gray-900">Vite</div>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl mb-2">🎨</div>
              <div class="font-semibold text-gray-900">Tailwind</div>
            </div>
            <div class="text-center p-4 bg-gray-50 rounded-lg">
              <div class="text-2xl mb-2">📘</div>
              <div class="font-semibold text-gray-900">TypeScript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About view logic here
</script>
