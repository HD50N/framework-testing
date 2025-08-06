<script setup lang="ts">
import AppNavigation from './components/AppNavigation.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <AppNavigation />
    <RouterView />
  </div>
</template>

<style scoped>
/* App-level styles if needed */
</style>
